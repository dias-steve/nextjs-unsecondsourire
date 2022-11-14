import React, { useEffect } from 'react'
import FilterListPost from '../../components/FilterListPost/FilterListPost';
import BlocPostList from '../../components/HomePageComponents/BlocPostList/BlocPostList';
import styles from './ProductCat.module.scss'
import { useDispatch, useSelector } from "react-redux";
import { initializePage } from '../../utils/global.utils';
import { setListPostRaw, setListPostResult } from '../../redux/ListPost/listpost.actions';
import { filterPostList } from '../../utils/postCat.utils';

const mapState = (state) => ({
  postListReducer: state.postlist
})
export default function PostCat(props) {

  const dispatch = useDispatch();
  const {postListReducer} = useSelector(mapState);
  const { list_posts_result, filter, list_posts_raw} = postListReducer;


  /** Initialization of data */
  useEffect(() => {
    initializePage(dispatch);
    if (filter){

    }else{
      dispatch(
        setListPostResult(props.postsData)
      )
    }

    dispatch(
      setListPostRaw(props.postsData)
    )

  
  },[])

/** Filter checking */

const filters = [{
  type: 'categories',
  payload: [{term_id: 1 }]
}]
const filtredPostlist =  filterPostList( filters, list_posts_raw );
console.log(filtredPostlist);
//TODO: Create dynamic checkbox list
//TODO: connect filters to checkbox 
// TODO: connect result filters to reducers


  
  return (
    <div className={styles.global_container}>
      <FilterListPost />
      <BlocPostList  data = {{list_articles:filtredPostlist }}/>
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
  
    const generalSettings = await generalSettingsRaw.json();
    const postsData = await data.json();
  
  
    return {
      props: {
        postsData,
        generalSettings,
      },
      revalidate: 60, // rechargement toutes les 10s
    };
  }