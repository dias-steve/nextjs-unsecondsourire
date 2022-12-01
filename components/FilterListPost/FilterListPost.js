import React from 'react'
import styles from './FilterListPost.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from '../../redux/ListPost/listpost.actions';
import { useEffect, useState } from 'react';


const mapState = (state) => ({
    filter: state.postlist.filter
  })

export const Checkbox = ({label, isChecked, value, checkHandler}) => {
    const {filter} = useSelector(mapState);
    const [isCheckedValue, setIsCheckedValue] = useState(false)

    const isCheckedCat = (value) => {

        return filter.cat.includes(""+value);

    }
    const check = isCheckedCat(value)
    return <div className={styles.checkbox_global_container}>
        <input

        type="checkbox"

        id={"checkbox"+value}

        checked={check}

        onChange={checkHandler}

        value = {value}

      />

      <label htmlFor={"checkbox"+value} className={[ styles.checkbox_label, check ? styles.is_checked : styles.is_not_checked].join(" ")}>{label}</label>
     

    </div>
}








export default function FilterListPost({categoriesList}) {
    
    const dispatch = useDispatch();
    const {filter} = useSelector(mapState);
    const {cat} = filter;
    const [isOpen, setIsOpen] = useState(false);
    const addCategoryOnFilter = (id) => {
        let newCat
        if(!cat.includes(id)){
            newCat = [...cat, id];
            dispatch( 
                setFilter({...filter, cat: newCat})
            )
        }
    }

    const removeCategoryOnFilter = (id) => {
        let newCat = [...cat];
        newCat = cat.filter( function (item) {return item !== id});
        dispatch( 
            setFilter({...filter, cat: newCat})
        )
    }
    const handleCheck = (value) => {
       
     
    if(cat.includes(value)){
        removeCategoryOnFilter(value)
    }else{
        addCategoryOnFilter(value)
    }

    }

    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.global_container}>
            <div className={styles.btn_section_filter} onClick= {() => handleClickOpen()}>
                <h2 className={styles.title}>Catégorie</h2>
                <img className={[styles.icon, isOpen? styles.down : styles.up].join(" ")} src={'/chevron-down.svg'}/>
            </div>
            { categoriesList && Array.isArray(categoriesList) &&
                <div className={[styles.list_container, isOpen? styles.open_window : styles.closed_window].join(" ")}>
                    {
                        categoriesList.map(category => (
                            <Checkbox
                                key={uuidv4()}
                                label = {category.name}
                                value = {category.term_id}
                                checkHandler = {(e) => { handleCheck(e.target.value)}}
                             />
                            ))
                    }
                </div>

            }

        </div>
    )
}
