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
        console.log('value'+value);
      console.log(filter.cat.includes("2"));
        return filter.cat.includes(""+value);

    }
    useEffect( () => {
       setIsCheckedValue( )
    }, [filter])

    return <div className={styles.global_container}>
          <input

        type="checkbox"

        id="checkbox"

        checked={isCheckedCat(value)}

        onChange={checkHandler}

        value = {value}

      />

      <label htmlFor="checkbox">{label} - id {value}</label>

      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
}








export default function FilterListPost({categoriesList}) {
    
    const dispatch = useDispatch();
    const {filter} = useSelector(mapState);
    const {cat} = filter;
    
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
        let newCat = cat;
        newCat = cat.filter( function (item) {return item !== id});
        dispatch( 
            setFilter({...filter, cat: newCat})
        )
    }

    
    
    



 

    const handleCheck = (value) => {
       
     
        if(cat.includes(value)){
            console.log('remove:'+ value)
            removeCategoryOnFilter(value)
       }else{
            console.log('add'+value)
            addCategoryOnFilter(value)
        }

    }
    console.log(filter)
    return (
        <div className={styles.global_container}>
            <h2 className={styles.title}>Catégorie</h2>
            { categoriesList && Array.isArray(categoriesList) &&
                <div className={styles.list_container}>
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
