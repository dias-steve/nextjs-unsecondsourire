import React, {useState} from 'react';
import styles from './InputText.module.scss';

export default function InputText( {onChange, value, name, textarea, blackStyle,whiteStyle, error , ...otherProps}) {

const [onFocus, setOnFocus] = useState(false);
const upName = onFocus || value != "" ? true : false;

  return (

    <div className={styles.globalContainer}>
    <div className={[styles.inputGroup, textarea ? styles.textarea: styles.notTextarea, blackStyle ? styles.blackStyle : styles.notBlackStyle, whiteStyle ? styles.whiteStyle : " ", error?.isError ? styles.errorStyle : " "].join(" ")}>
        <label className={[styles.label, upName ? styles.upLabel : styles.notUpLabel, onFocus ? styles.onFocus : styles.NotFocus].join(" ")}>{name}</label>
          
          {textarea ?
            <textarea className={[styles.input].join(" ")} rows={textarea.rows} cols={textarea.cols}

            placeholder=""
            name="message"
           
            onFocus={() => {setOnFocus(true);}} 
            onBlur={() => {setOnFocus(false);}}
            value={value}
            onChange={(event) =>  onChange(event.target.value)}
            /> :
          <input
            { ...otherProps}
       
            placeholder=""
            name="name"
            className={styles.input}
            onFocus={() => {setOnFocus(true);}} 
            onBlur={() => {setOnFocus(false);}}
            value={value}
            onChange={(event) => onChange(event.target.value)}
          />

      
        }
 
    </div>
    { error?.isError &&error?.message !== " "&& error?.message !== null &&
      <div className={styles.messageErrorWrapper}><img className={styles.icon} src='/error-red-icon.svg'/> <span className={styles.messageError} dangerouslySetInnerHTML={{__html: error.message}}/></div>
    }

    </div>

  )
}
