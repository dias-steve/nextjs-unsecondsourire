import React, {useState, useEffect} from 'react'
import styles from './Header.module.scss'
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image';
import logo from '../../public/logo.png'
import Link from 'next/link';
import { setIsShowMenu, setIsShowSearch } from '../../redux/header/header.actions';
import SubMenu from './SubMenu/SubMenu';


const mapState = (state) => ({
    auth: state.auth.auth,
    header: state.header
  });
export default function Header() {

    const { auth, header } = useSelector(mapState)
    const [isShow, setIsShow] = useState(true); 
    const {is_show_menu, is_show_search} = header;
    const [y, setY] = useState(0);
    const dispatch = useDispatch();

    //annimate show menu
    const [moveUpMenu, setMoveUpMenu] = useState(false);



    /**
     *  Scroll Listener
    */
     const handleNavigation = (e) => {
        const window = e.currentTarget;
        if (y-300 > window.scrollY || y <=0) {
      
            setIsShow(true);
            setY(window.scrollY);
        } else if (y+100 < window.scrollY) {
            if(!is_show_menu && !is_show_search){
                setIsShow(false);
            }
            setY(window.scrollY);
        }
        
        
      };
    
      useEffect(() => {
        setY(window.scrollY);
       
        window.addEventListener("scroll", (e) => handleNavigation(e));
        return window.removeEventListener("scroll",  (e) => handleNavigation(e))
      }, [y]);



    /**
     * Handle clicks icon
     */

    const handleClickMenu = (e) => {
        e.preventDefault();
        if(is_show_menu){
            closeMenu();
        }else{
            openMenu();
        }
        
    }

    

    /**
     * Annimate menu show 
     */
    const closeMenu = () => {
        setMoveUpMenu(true)
        setTimeout(() => {dispatch(setIsShowMenu(false))}, 600)
    }
    const openMenu = () => {
    setMoveUpMenu(true);
      dispatch(setIsShowMenu(true))
      setTimeout(() => { setMoveUpMenu(false)}, 100);

    }

    return (
        <div className={[styles.global_container, isShow? styles.isShow: " "].join(" ")}>
                    {is_show_menu && 
                        <div className={[styles.subMenu_wrapper, moveUpMenu ? styles.up : styles.down ].join(" ")}>
                            <SubMenu />
                        </div>
        }
        <div className={styles.global_content_wrapper}>
            <div className={styles.logo_container}>
            <Link href={'/'}>
                <a>
            <div className={[styles.logo_wrapper, styles.image_wrapper].join(" ")}>
            <Image
                    src={logo}
                    alt={'logo'}
                    layout="fill"
                    className={styles.image}
                    objectFit={'contain'}
                  />
            </div>
            </a>
            </Link>
            </div>
            <div className={styles.btn_container}>             
                <div className={[styles.wrapper_icon,styles.wrapper_heart_icon].join(" ")}>
                    <div className={styles.span_wrapper}><p>Faire un don</p></div>
                    <img src='/heart-black.svg'  />
                </div>
                <div className={[styles.wrapper_icon].join(" ")}>
                    <img src='/search.svg'  />
                </div>
                <div className={[styles.wrapper_icon, is_show_menu ? styles.menu_cross_wrapper : styles.menu_burger_wrapper].join(" ")}
                    onClick = {(e) => {handleClickMenu(e)} }
                >
                    {is_show_menu ?
                 
                      <img src='/cross.svg'  />:
                      <img src='/menu-burger.svg'  />
                    
                }
               
                </div>
          </div>
        </div>

        </div>
    )
}
