import React from 'react'
import styles from './FilterListPost.module.scss'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from "react-redux";


const mapState = (state) => ({
    filter: state.postlist.filter
  })

export const Checkbox = ({label, isChecked, value, checkHandler}) => {
    
    return <div className={styles.global_container}>
          <input

        type="checkbox"

        id="checkbox"

        checked={isChecked}

        onChange={checkHandler}

      />

      <label htmlFor="checkbox">{label} - id {value.term_id}</label>

      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
}








export default function FilterListPost({categoriesList}) {
    
    const dispatch = useDispatch();
    const {filter} = useSelector(mapState);
    

    const isChecked = (value) => {
        if(filter.categories){
            for(let i=0; i < filter.categories.length; i++){
                if (value.term_id === filter.categories[i].term_id ){
                    return true;
                }
            }
        }else{
            return false
        }
   
    }

    const getIndexCategory = (value) => {
        if(filter.categories){
            for(let i=0; i < filter.categories.length; i++){
                if (value.term_id === filter.categories[i].term_id ){
                    return i;
                }
            }
        }else{
            return false
        }
    }

    const removeCategoryElement = (value) => {
        const index = getIndexCategory(value);
        let newFilterCategory = null;
        if(index){
            newFilterCategory = filter.categories.splice(index,index)
        }

        return newFilterCategory;
    }

    const addCategory = ( category ) => {
        //TODO: ADD category on category check
        let filtersCategories = filter.categories.payload
        let newFilterCategories = filter.categories.payload
        if(filter.categories){
            newFilterCategories = filtersCategories.push(category);
        }else{
            
        }
    }

    const handleCheck = (category) => {
        //TODO: adding category

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
                                value = {category}
                                checkHandler = {() => {}}
                                isChecked={true}
                             />
                            ))
                    }
                </div>

            }

        </div>
    )
}
