import React, { useState, useEffect } from "react";
import { formatContactMessage } from "../../utils/contactMessage.utils";
import InputText from "../FormCompoments/InputText/InputText";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import Spinner from "../Spin/Spinner";
import validator from "validator";
import styles from './MemberForm.module.scss'

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";


export default function MemberForm({action}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [messageSending, setMessageSending] = useState(/*{isSuccess: true, message: "Veuillez reéssayer"}*/ null);
    const [isLoading, setIsLoading] = useState(false);

    const [errorMessageInput, setErrorMessageInput] = useState({
      firstName:  null,
      lastName: null,
      email: null,
    })

    const publiKey = process.env.NEXT_PUBLIC_KEY_CONTACT_MESSAGE;


const { executeRecaptcha } = useGoogleReCaptcha();

    const  handleClick = () => {
      setIsLoading(true)
      if(inputsAreValid()){
        executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
          console.log(gReCaptchaToken, "response Google reCaptcha server");
          submitEnquiryForm(gReCaptchaToken);
        });
       
      }else{
        setIsLoading(false)
      }
     
     
    }


    const submitEnquiryForm = (gReCaptchaToken) => {
      fetch("/api/enquiry", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email: email,
          gRecaptchaToken: gReCaptchaToken,
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res, "response from backend");
          if (res?.status === "success") {
            console.log("Captchga good");
            sendMessage();
            console.log("send");
      
          } else {
           
            showMessageSending("false", "oops vous semblez être un robot, veuillez réessayer") 
            setIsLoading(false)
           
          }
        });
    
    };
    const resetAllFields = () => {
      setEmail("");
      setlastName("");
      setFirstName("");
    }

    const showMessageSending = (isSuccess, message) => {
      setMessageSending({isSuccess, message})
      setTimeout(function(){
        setMessageSending(null)
      }, 3000);

    }

    const btnActived = () => {
      if(
        validator.isEmpty(lastName, {
          ignore_whitespace: true,
        }) ||
        validator.isEmpty(firstName, {
          ignore_whitespace: true,
        }) ||
        validator.isEmpty(email, {
          ignore_whitespace: true,
        })
      ){
        return false;
      }
      if (errorMessageInput.firstName === null &&
          errorMessageInput.lastName === null &&
          errorMessageInput.email === null
        ){
          return true;
        }else{
          return false;
        }
    }

    const inputsAreValid = () => {

      let success = true;
      //Fist Name
      if(
        validator.isEmpty(firstName, {
          ignore_whitespace: true,
        })){
          setErrorMessageInput({...errorMessageInput, firstName: {isError: true, message: "Veuillez entrer un prénom valide"}});
          success =  false;
        }
      
      //LastNameCheck
        if(
          validator.isEmpty(lastName, {
            ignore_whitespace: true,
          })){
            setErrorMessageInput({...errorMessageInput, lastName: {isError: true, message: "Veuillez entrer un nom valide"}});
            success =  false;
          }

      // Email checking
        if(!validator.isEmail(email)){
            setErrorMessageInput({...errorMessageInput, email: {isError: true, message: "Veuillez entrer un email valide"}});
            success =  false;
          }
        return success;
    }

    const sendMessage = () => {
      const messageFormatted =  formatContactMessage('[Demande Inscription Action: '+action+']', email, firstName,  lastName)
      fetch("/api/contactmessage", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          publickey: publiKey,
          message: messageFormatted ,
        })
      })
        .then(() =>{ 
          setIsLoading(false);
          resetAllFields();
          showMessageSending(true, null);
          })
        .catch((err)=> {console.log(err);
          showMessageSending("false", "oops une erreur, veuillez réessayer") 
        })
    }
  return (
    <div className={styles.global_container} >
    

      <form>
      <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Prénom"}
            onChange={(e) => {
              setErrorMessageInput({...errorMessageInput, firstName: null});
              setFirstName(e);
           
            }}
            value={firstName}
            whiteStyle= {true}
            error= {errorMessageInput.firstName}
          />
        </div>

        <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Nom"}
            onChange={(e) => {
              setErrorMessageInput({...errorMessageInput, lastName: null});
              setlastName(e);
            }}
            value={lastName}
            whiteStyle= {true}
            error= {errorMessageInput.lastName}
          />
        </div>

        <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Email"}
            onChange={(e) => {
              setErrorMessageInput({...errorMessageInput, email: null});
              setEmail(e);
            }}
            value={email}
            whiteStyle= {true}
            error= {errorMessageInput.email}
          />
        </div>

        <div className={[styles.submit_btn_wrapper, styles.input_wrapper].join(" ")}>

          { 
            !messageSending ?
              !isLoading ?
              <PrimaryBtn
              label={'Envoyer'}
              onClick={(e) => {
                  e.preventDefault();
                  handleClick();
              }}
              notActived={!btnActived()}
              type="submit"
          
              /> : <Spinner/> 
              
              :
                messageSending?.isSuccess ? 
                 <img className={styles.icon} src='/sucess-icon-green.svg'/>
              : <span className={styles.errorSendingMessage} dangerouslySetInnerHTML={{ __html:messageSending.message }} />

             


          }

        </div>
  
      </form>
    </div>
  )
}
