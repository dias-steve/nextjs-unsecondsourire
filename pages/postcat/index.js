import React, { useEffect } from 'react';
import Head from 'next/head';

import FilterListPost from '../../components/FilterListPost/FilterListPost';
import BlocPostList from '../../components/HomePageComponents/BlocPostList/BlocPostList';
import styles from './ProductCat.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { initializePage } from '../../utils/global.utils';
import { fetchPostStart, setCurrentPage, setFilter, setListPostRaw, setListPostResult } from '../../redux/ListPost/listpost.actions';
import { filterPostList } from '../../utils/postCat.utils';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination/Pagination';
import Spinner from '../../components/Spin/Spinner';
import Seo from '../../components/Seo/Seo';


const mapState = (state) => ({
  postListReducer: state.postlist,
  
})
export default function PostCat(props) {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const {postListReducer} = useSelector(mapState);
  const { list_posts_result, filter, list_posts_raw, current_page, is_loading, nb_posts_found} = postListReducer;
  const {catid} = query;
  const {seo, title} = props;
  


  /** Initialization of data */

  useEffect(() => {
    initializePage(dispatch, props.generalSettings);
  },[])

  useEffect(() => {


      if(!catid){
       dispatch(
         setFilter({cat:[]})
       )
      }else{
       dispatch(
         setFilter({cat:[catid]})
       )
      }
    
  },[catid])

  useEffect(() => {
    dispatch(
      fetchPostStart({filter,current_page})
    )
  },[current_page])

  useEffect(() => {
    dispatch(
      fetchPostStart({filter,current_page: 1})
    )
  },[filter])

  useEffect(() => {
    dispatch(
      setCurrentPage(1)
    )
  },[filter])

/** Filter checking */

//TODO: Create dynamic checkbox list



  return (
    <>
    <Seo seoData={seo} />
    <div className={[styles.global_container].join(" ")}>
      
      <div className={[styles.global_content].join(" ")}>

    
      <h1 className={styles.title}  dangerouslySetInnerHTML={{__html: title}}/>
 

      <div className={[styles.content_wrapper].join(" ")}>
        <div className={styles.filter_container}>
        <div className={styles.filter_wrapper}>
          <span className={styles.title_filter}> Filtre </span>
          <FilterListPost  categoriesList={props.postsCatData}/>
          </div>
        </div>
        <div className={styles.list_result}>
          {is_loading ?<div className={styles.spinner_wrapper}> <Spinner />  </div>: 
          <>
            <span className={styles.result_nb}>{nb_posts_found} article{nb_posts_found>1 && 's'} trouvé{nb_posts_found>1 && 's'}</span>
            <BlocPostList  
              data = {{list_articles:list_posts_raw }}
              cardColor={'light-blue'}
              />
            <div className={styles.pagination_container}>
              <Pagination />
            </div>
          </>
          }
        </div>
      </div>
      </div>

    </div>
    </>
  )
}


  export async function getStaticProps() {
    const bodyToSend= {
      page:  1,  
      categoriesfilter: []
    }
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts", {
      // Adding method type
      method: "POST",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },

      body: JSON.stringify(bodyToSend)
      //TODO ADD Body
    })
  
  
  
    const generalSettingsRaw = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/settings", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const postsCat = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/postcat", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  

    const generalSettings = await generalSettingsRaw.json();
    const seo = await data.json();
    const postsCatData = await postsCat.json();
  
    return {
      props: {
      
        generalSettings,
        postsCatData,
        seo: seo.seo,
        title: seo.title
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }