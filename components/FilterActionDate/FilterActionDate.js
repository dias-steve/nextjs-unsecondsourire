import React from 'react'
import styles from './FilterActionDate.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from '../../redux/ListPost/listpost.actions';
import { useEffect, useState } from 'react';


const mapState = (state) => ({
    filter: state.postlist.filter
  })

export const Radio = ({label, isChecked, value, checkHandler, name}) => {
    const {filter} = useSelector(mapState);


    const isCheckedCat = (value) => {

        return filter.coming_actions === value;
        

    }
    const check = isCheckedCat(value)
    return <div className={styles.checkbox_global_container}>

      <label 
        className={[ styles.checkbox_label, check ? styles.is_checked : styles.is_not_checked].join(" ")}
        onClick = {(e) => {e.preventDefault(); checkHandler(value)}}
        >

{label}</label>
     

    </div>
}








export default function FilterActionDate() {
    
    const dispatch = useDispatch();
    const {filter} = useSelector(mapState);
    const [isOpen, setIsOpen] = useState(false);
    const dateselected = filter?.coming_actions ? '(Actions à venir)' :'(Actions passées)'
 


    const setCommingAction = (isComingAction) => {
        dispatch( 
            setFilter({...filter,  coming_actions: isComingAction })
        )
    }
    const handleCheck = (value) => {
       
     

        setCommingAction(value)
    

    }

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.global_container}>
            <div className={styles.btn_section_filter} onClick= {() => handleClickOpen()}>
                <h2 className={styles.title}>Date  <span className={styles.info_selected}>{dateselected}</span></h2>
                <img className={[styles.icon, isOpen? styles.down : styles.up].join(" ")} src={'/chevron-down.svg'}/>
            </div>
            { 
                <div className={[styles.list_container, isOpen? styles.open_window : styles.closed_window].join(" ")}>
          
                       
                            <Radio
                                key={uuidv4()}
                                label = {'Actions à venir'}
                                value = {true}
                                name= {'action'}
                                checkHandler = {(value) => { handleCheck(value)}}
                             />
                             <Radio
                             key={uuidv4()}
                             label = {'Actions passée'}
                             value = {false}
                             name= {'action'}
                             checkHandler = {(value) => { handleCheck(value)}}
                            />
            
                    
                </div>

            }

        </div>
    )
}
