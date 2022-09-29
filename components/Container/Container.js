import React from "react";
import EnMaintenancePage from "../EnMaintenance/EnMaintenancePage";

export default function Container(props) {
  const generalSettings= props.children.props.generalSettings;
  const maintenanceMode = generalSettings ? generalSettings.maintenance_mode : false;
  console.log(maintenanceMode);

  const isAccessAllowed = () => {
    if (maintenanceMode?.is_activated){
      return false;
    }else{
      return true;
    }
  }


  return (
   <>
    { !isAccessAllowed() ?  
    
    <EnMaintenancePage />:     
    
    <>
      <p>Header</p>
   
      {props.children}
      <p>footer</p>
    </> }

    </>
  );
}
