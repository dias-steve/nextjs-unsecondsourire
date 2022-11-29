import React, {useState} from 'react';
import MemberForm from '../MemberForm/MemberForm';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';
import styles from './ActionForm.module.scss';

export default function ActionForm() {
    const [windowIsopen, setWindowIsOpen] = useState(false);

    const MobileDock = ({}) => {
        const handleClick = () => {
            setWindowIsOpen(true);
        }
        return (
            <div className={styles.dock_global_container}>
                <div className={[styles.btn_wrapper].join(" ")}>
                    <PrimaryBtn
                    label={'Passer à laction'}
                    onClick={(e) => {
                        e.preventDefault();
                        handleClick();
                    }}
                    notActived={false}
                    />
                </div>
            </div>
        )
    }
    return (
        <>
         <MobileDock/>
        <div className={[styles.global_container, windowIsopen ? styles.isUp : styles.isDown ].join(" ")}>
            <h2 className={styles.title}>Passez à l'action</h2>
            <div className={styles.form_wrapper}>
          
                <MemberForm />
            
               
               
            </div>
        </div>
        </>
    );
}
