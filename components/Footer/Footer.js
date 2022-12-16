import React from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";

const FooterItem = ({ data }) => {
  const { link, name } = data;
  return (
    <Link href={link} >
      <a className={styles.item_btn_global_container}>
      <span
        dangerouslySetInnerHTML={{ __html: name }}
        className={styles.name}
      />
      </a>
    </Link>
  );
};

const SectionLink = ({ data }) => {
  const { name, childrens } = data;

  return (
    <div className={styles.section_global_container}>
      <h2
        className={styles.section_title}
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <ul className={styles.section_list_container}>
        {childrens &&
          Array.isArray(childrens) &&
          childrens.length > 0 &&
          childrens.map((item) => (
            <li key={uuidv4()}>
              {" "}
              <FooterItem data={item} />{" "}
            </li>
          ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  footerData: state.footer,
});

export default function Footer() {
  const { footerData } = useSelector(mapState);
  const { footer_menu_list, copyright } = footerData;
  console.log(footer_menu_list);
  return (
    <div className={styles.global_container}>
      <div className={styles.global_content}>
        <div className={[styles.section_wrapper].join(" ")}>
          <img
            src={"/sigle-s2.svg"}
            alt={"logo"}
            className={styles.image}
            key={uuidv4()}
          />
        </div>
        <div className={[styles.section_wrapper].join(" ")}>
          {footer_menu_list && footer_menu_list.footer_social_sec && (
            <SectionLink data={footer_menu_list.footer_social_sec} />
          )}
        </div>

        <div className={[styles.section_wrapper].join(" ")}>
          {footer_menu_list && footer_menu_list.footer_legal_sec && (
            <SectionLink data={footer_menu_list.footer_legal_sec} />
          )}
        </div>

        <div className={[styles.section_wrapper].join(" ")}>
          {footer_menu_list && footer_menu_list.footer_aide_sec && (
            <SectionLink data={footer_menu_list.footer_aide_sec} />
          )}
        </div>
      </div>

      <div><span className={styles.copyright} dangerouslySetInnerHTML={{__html:copyright}}/></div>
    </div>
  );
}
