import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setCurrentPage, setIsLoading, setListPostRaw, setPage, setPageNbMax } from './listpost.actions';
import { handleFetchPost } from './listpost.helpers';
import listpostTypes from './listpost.types';

export function* fetchPosts({ payload }) {

    try{

        yield put(
            //on dispatch les products avec notre action : setProducts afin que la liste des produit soit stockée dans le store 
            setIsLoading(true)
           
        )
        //on va chercher la liste des produits de notre boutique avec notre function helper 
        const postsData = yield handleFetchPost({...payload});

        // on mets la liste de produits dans la store afin qu'elle soit affichée par les pages: admin 
        yield put(
            //on dispatch les products avec notre action : setProducts afin que la liste des produit soit stockée dans le store 
            setListPostRaw(postsData.list_post)
           
        )

        yield put(
            //on dispatch les products avec notre action : setProducts afin que la liste des produit soit stockée dans le store 
            setPageNbMax(postsData.page.page_nb_max)
           
        )

        yield put(
            //on dispatch les products avec notre action : setProducts afin que la liste des produit soit stockée dans le store 
            setIsLoading(false)
           
        )


       

    } catch(err) {
        //console.log(err);
    }
}

export function* onFetchPostsStart(){
    yield takeLatest(listpostTypes.FETCH_POSTS_START, fetchPosts)
}

export default function* postsSagas() {
    yield all([
        call(onFetchPostsStart)
    ])
}