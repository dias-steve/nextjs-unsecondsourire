import { takeLatest, put, all, call } from 'redux-saga/effects';
import { setListPostRaw } from './listpost.actions';
import { handleFetchPost } from './listpost.helpers';
import listpostTypes from './ListPost.types';

export function* fetchPosts({ payload }) {

    try{
        //on va chercher la liste des produits de notre boutique avec notre function helper 
        const posts = yield handleFetchPost({...payload});

        // on mets la liste de produits dans la store afin qu'elle soit affichée par les pages: admin 
        yield put(
            //on dispatch les products avec notre action : setProducts afin que la liste des produit soit stockée dans le store 
            setListPostRaw(posts)
        );

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