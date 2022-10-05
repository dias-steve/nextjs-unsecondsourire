import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './FrontAccessTicketPage.module.scss'
export default function FrontAccessTicketPage() {
  return (
    <div className={styles.global_container}>
      <h1 className={styles.title}> Front Acces Ticket </h1>
      <LoginForm />

    </div>
  )
}
