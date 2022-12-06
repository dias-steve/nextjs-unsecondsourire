import Link from 'next/link';
import React from 'react';
import styles from './ContactList.module.scss';



export const ContactItem = ({title, description, link}) => {


        return (
            <div className={styles.global_contact_item}>
                <h2 className={styles.title_item} dangerouslySetInnerHTML={{__html: title}}/>
                {link ? 
                    <Link href={link}>
                        <a>
                            <p className={ styles.description_item} dangerouslySetInnerHTML={{__html: description }}/>
                        </a>
                    </Link> : 
                    <p className={ styles.description_item} dangerouslySetInnerHTML={{__html: description }}/>
                }
            </div>
        )


}
export default function ContactList({content}) {

    const {address, phone_number, email} = content;
  return (
    <div className={styles.global_container}>

        <ContactItem title={'Téléphone'} description={phone_number} link={'tel:'+phone_number}/>
        <ContactItem title={'Email'} description={email} link={'mailto:'+email}/>
        <ContactItem title={'Adresse postal'} description={address}/>
    </div>
  )
}
