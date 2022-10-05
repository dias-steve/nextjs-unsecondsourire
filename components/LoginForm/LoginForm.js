import React, { useState, useEffect } from "react";
import InputText from "../FormCompoments/InputText/InputText";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from "./LoginForm.module.scss";
import { setAuth } from "../../redux/AuthMaintenance/authMaintenance.actions";
import { useDispatch, useSelector } from "react-redux";

const mapState = (state) => ({
  auth: state.auth.auth,
 
});
export default function LoginForm() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({text: "Entrez votre Id et mdp", is_error: false});
  const [btnActived, setBtnActived] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {auth} = useSelector(mapState);

  const dispatch = useDispatch();
  const handleDisconnect = () => {
    dispatch(
      setAuth({
        is_auth: false,
        token: null
    })
    )
  }

  const isValid = () => {
    if(id!=='' && password !==''){
      return true;
    }else{
      return false;
    }
  }
  useEffect(() => {
    if(isValid()){
      setBtnActived(true);
    }else{
      setBtnActived(false);
    }
  },[id, password]);

  const handleClick = () => {
    if(isValid()){
      sendID(id, password);
    }
  }

 const sendID  = async ( id , mdp) => {

    const bodyToSend= {
        user: id,
        mdp: mdp
    }

    const results = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/frontaccessauth", {
        // Adding method type
        method: "POST",
        // Adding headers to the request
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(bodyToSend)
      })
      .then((response) => response.json())
      .then((response) => 
      {
        if(response.is_auth){
          setIsLoading(false);
  
          dispatch(
            setAuth(response)
          )
          setMessage({
            is_error: false, text: ""
          })
         
        }else{
          setIsLoading(false);
          setMessage({
            is_error: true, text: "Aucun ticket de cet id et mdp"
          })
        }
  
      })
  
     .catch((err)=> {
          return {error: true, message: err.message}
        
        });
}



  return (
    <div className={styles.global_container}>
      <p className={[styles.message, message. is_error ? styles.error:" "].join(" ")}>{message.text} {auth.is_auth ? 'Vous êtes connecté': ''}</p>

      { isLoading ? 'Chagement...':
      
      !auth.is_auth ?
      <>
      <div className={styles.form_wrapper}>
        <div
          className={[styles.input_wrapper, styles.input_id_wrapper].join(" ")}
        >
  
          <InputText
            name={"Identifiant"}
            onChange={(e) => {
              setId(e);
            }}
            value={id}
          />
        </div>

        <div
          className={[styles.input_wrapper, styles.input_id_wrapper].join(" ")}
        >
          <InputText
            name={"Mot de passe"}
            onChange={(e) => {
              setPassword(e);
            }}
            value={password}
            type="password"
          />
        </div>

      </div>

      <PrimaryBtn 
          label={'Se connecter'}
          onClick={(e) => {
            e.preventDefault();
            handleClick();
          }}
          notActived={!btnActived}
       
        />
        
        </>: 
       
        <PrimaryBtn 
          label={'Se Déconnecter'}
          onClick={(e) => {
            e.preventDefault();
            handleDisconnect();
          }}
          notActived={!btnActived}
          color={'blue'}
          noHeart={true}
       
        />
}
    </div>
  );
}
