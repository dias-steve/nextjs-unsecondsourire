import Head from 'next/head'
import Image from 'next/image'
import FrontAccessLoginForm from '../components/FontAccessLoginForm/FrontAccessLoginForm'
import styles from '../styles/Home.module.scss'

export default function Home(props) {
  console.log(props.generalSettings)

  return (
    <div className={styles.container}>
      <FrontAccessLoginForm />
      <p> Site en maintenance {props.generalSettings.maintenance_mode.is_activated ? 'oui': 'non'} </p>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/homedata", {
    // Adding method type
    method: "GET",

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });



  const generalSettingsRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings", {
    // Adding method type
    method: "GET",

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  const generalSettings = await generalSettingsRaw.json();
  const homeData = await data.json();


  return {
    props: {
      homeData,
      generalSettings,
    },
    revalidate: 60, // rechargement toutes les 10s
  };
}