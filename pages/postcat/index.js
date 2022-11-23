import React, { useEffect } from 'react'
import FilterListPost from '../../components/FilterListPost/FilterListPost';
import BlocPostList from '../../components/HomePageComponents/BlocPostList/BlocPostList';
import styles from './ProductCat.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { initializePage } from '../../utils/global.utils';
import { fetchPostStart, setCurrentPage, setFilter, setListPostRaw, setListPostResult } from '../../redux/ListPost/listpost.actions';
import { filterPostList } from '../../utils/postCat.utils';
import { useRouter } from 'next/router';
import Pagination from '../../components/Pagination/Pagination';


const mapState = (state) => ({
  postListReducer: state.postlist,
  
})
export default function PostCat(props) {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const {postListReducer} = useSelector(mapState);
  const { list_posts_result, filter, list_posts_raw, current_page} = postListReducer;
  const {catid} = query;

  


  /** Initialization of data */

  useEffect(() => {
    initializePage(dispatch);
  },[])



  useEffect(() => {
    dispatch(
      setFilter({cat:[catid]})
    )
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
    <div className={styles.global_container}>
      
      <h1>{query.catname}- {query.catid}</h1>
      <FilterListPost  categoriesList={props.postsCatData}/>
      <BlocPostList  data = {{list_articles:list_posts_raw }}/>
      <Pagination />
    </div>
  )
}


  export async function getStaticProps() {
    const data = await fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts", {
      // Adding method type
      method: "GET",
  
      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  
  
  
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
    const postsData = await data.json();
    const postsCatData = await postsCat.json();
  
    return {
      props: {
        postsData,
        generalSettings,
        postsCatData
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }