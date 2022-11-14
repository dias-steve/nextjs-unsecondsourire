import React from 'react'
import styles from './FilterListPost.module.scss'

export const Checkbox = ({label, isChecked, checkHandler}) => {
    
    return <div className={styles.global_container}>
          <input

        type="checkbox"

        id="checkbox"

        checked={isChecked}

        onChange={checkHandler}

      />

      <label htmlFor="checkbox">I agree to Terms of Service </label>

      <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
    </div>
}

const isChecked = (value, CategoriesIDCheckedList) => {

    return true;
}
export default function FilterListPost() {
    
    return (
        <div className={styles.global_container}>
            <Checkbox 
                label={'Famille'}
                isChecked={true}
                checkHandler={() => {console.log('okk')}}
             />
        </div>
    )
}
