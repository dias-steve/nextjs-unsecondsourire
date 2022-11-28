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
    const dispatch = useDispatch();
    const handleNext = () => {
        const nextPageValue = current_page + 1 > page_nb_max ? page_nb_max : current_page + 1;
        dispatch(
            setCurrentPage(nextPageValue)
        )
    }

    const handlePrevious = () => {
        const previousPageValue = current_page - 1 < 1?  1 : current_page - 1;
        dispatch(
            setCurrentPage(previousPageValue)
        )
    }
 

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
            { current_page != 1 &&
                <div className={[styles.btn_pagination_label, styles.btn_next].join(" ")} onClick={() => handlePrevious()}><img className={[styles.icon, styles.previous].join(" ")} src={'/chevron-down.svg'}/><span>Précédent</span></div>
            }
            { page_nb_max > 1 &&
                pagination.map((page)=> (
                    <BtnPagination key= {uuidv4()}value={page.pagenb} label= {page.pagenb}/>
                ))
            }
            { current_page != page_nb_max &&
                <div className={[styles.btn_pagination_label, styles.btn_next].join(" ")} onClick={() => handleNext()}><span>Suivant</span><img className={[styles.icon, styles.next].join(" ")} src={'/chevron-down.svg'}/></div>
            }
        </div>
    )
}
