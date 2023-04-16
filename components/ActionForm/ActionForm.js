import React, { useState } from "react";
import MemberForm from "../MemberForm/MemberForm";
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
import styles from "./ActionForm.module.scss";
import { useSwipeable } from "react-swipeable";

export default function ActionForm({ action }) {
  const [windowIsopen, setWindowIsOpen] = useState(false);

  // Swipeable
  const handlers = useSwipeable({
    onSwipedDown: () =>setWindowIsOpen(false),
    onSwipedUp: () =>setWindowIsOpen(true),
    swipeDuration: 500,
    preventScrollOnSwipe: true,
    trackMouse: true
  });

  const handleClick = () => {
    setWindowIsOpen(!windowIsopen);
  };

  const desc = "Tu veux participer à cette action? Envoie nous tes coordonnées! ";


  const MobileDock = ({}) => {
    return (
      <div
        className={[
          styles.dock_global_container,
          windowIsopen ? styles.isDown : styles.isUp,
        ].join(" ")}
      >
        <div className={[styles.btn_wrapper].join(" ")}>
          <PrimaryBtn
            label={"Passer à l&apos;action"}
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            notActived={false}
          />
        </div>
      </div>
    );
  };


  return (
    <>
      <div>
        <MobileDock />
        <div 
          className={[
            styles.global_container,
            windowIsopen ? styles.isUp : styles.isDown,
          ].join(" ")}

          {... handlers}
        >
          <div className={styles.wrapper_content}>
            <img
              className={[styles.icon].join(" ")}
              src={"/chevron-down.svg"}
              onClick={(e) => {
                e.preventDefault();
                handleClick();
              }}
            />
            <h2 className={styles.title}>Passez à l&apos;action</h2>
            <div className={styles.description_wrapper}>
              <p
                className={styles.description}
                dangerouslySetInnerHTML={{ __html: desc }}
              />
            </div>
            <div className={styles.form_wrapper}>
              <MemberForm action={action} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
