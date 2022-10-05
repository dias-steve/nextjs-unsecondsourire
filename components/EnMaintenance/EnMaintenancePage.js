import React from 'react'
import styles from './EnMaintenancePage.module.scss'
import Head from 'next/head'
export default function EnMaintenancePage({maintenanceData, generalSettings}) {

  return (
    <>
      <Head>
      <title>{generalSettings.title_website} - {maintenanceData.maintenance_message ? maintenanceData.maintenance_message : 'En maintenance' } </title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {maintenanceData.seo?.meta_description &&
        <meta name="description" content={maintenanceData.seo?.meta_description}  />
      }
      </Head>
    <div>
      <p> {maintenanceData.maintenance_message ? maintenanceData.maintenance_message : 'En maintenance' }</p>
    </div>
    </>
  )
}
