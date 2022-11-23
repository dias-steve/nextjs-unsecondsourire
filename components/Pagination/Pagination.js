import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Pagination.module.scss';
import { fetchPostStart, setCurrentPage, setPage } from '../../redux/ListPost/listpost.actions';


const mapState = (state) => ({
    page_nb_max: state.postlist.page_nb_max,
    filter: state.postlist.filter,
    current_page: state.postlist.current_page
  })

export const BtnPagination = ({value, label}) => {
    const dispatch = useDispatch();
    const {current_page, page_nb_max, filter} = useSelector(mapState);
    const isCurrent = value === current_page ? true : false;
    const handleClick = () => {
        dispatch(
            setCurrentPage(value)
        )


    }
    return (
        <span
            onClick = {handleClick}
            className= {[styles.btn_pagination_label, isCurrent ? styles.current_btn: ""].join(" ")}
        >{label}</span>
    )
}
export default function Pagination() {
    const {current_page, page_nb_max, filter} = useSelector(mapState);
    
 

    const createListPagination = () => {
        const paginationTab = [];
        for (let i = 0; i < page_nb_max; i++) {
            paginationTab.push({pagenb : i+1, iscurrentpage: i+1 === current_page ? true : false});
        }
        return paginationTab;
    }
    const pagination =  createListPagination();

    return (
        <div className={styles.global_container}>
            {
                pagination.map((page)=> (
                    <BtnPagination value={page.pagenb} label= {page.pagenb}/>
                ))
            }
        </div>
    )
}
