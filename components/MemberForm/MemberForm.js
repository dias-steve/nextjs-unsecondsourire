import React, { useState, useEffect } from "react";
import InputText from "../FormCompoments/InputText/InputText";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from './MemberForm.module.scss'

export default function MemberForm() {

    const [firstName, setFirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [messageError, setMessageError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

   

    const  handleClick = () => {
        console.log("send");
    }

    const desc = "Rejoinez nous pour défendre le droit de manifester"

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
