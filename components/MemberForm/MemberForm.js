import React, { useState, useEffect } from "react";
import { formatContactMessage } from "../../utils/contactMessage.utils";
import InputText from "../FormCompoments/InputText/InputText";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from './MemberForm.module.scss'

export default function MemberForm({action}) {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const publiKey = process.env.NEXT_PUBLIC_KEY_CONTACT_MESSAGE;

    const  handleClick = () => {
        sendMessage();
        console.log("send");
    }

    const desc = "Rejoinez nous pour défendre le droit de manifester"

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
        .then(() => console.log('envoyé'))
        .catch((err)=> console.log(err))
    }
  return (
    <div className={styles.global_container} >
    
        <div className={styles.description_wrapper}>
            <p className={styles.description} dangerouslySetInnerHTML={{__html: desc}}/>
        </div>
      <form>
      <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Prénom"}
            onChange={(e) => {
              setFirstName(e);
            }}
            value={firstName}
            whiteStyle= {true}
          />
        </div>

        <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Nom"}
            onChange={(e) => {
              setlastName(e);
            }}
            value={lastName}
            whiteStyle= {true}
          />
        </div>

        <div
          className={[styles.input_wrapper, styles.input_firstname_wrapper].join(" ")}
        >
  
          <InputText
            name={"Email"}
            onChange={(e) => {
              setEmail(e);
            }}
            value={email}
            whiteStyle= {true}
          />
        </div>

        <div className={[styles.submit_btn_wrapper, styles.input_wrapper].join(" ")}>
            <PrimaryBtn
            label={'Envoyer'}
            onClick={(e) => {
                e.preventDefault();
                handleClick();
            }}
            notActived={false}
            type="submit"
        
            />
        </div>
      </form>
    </div>
  )
}
