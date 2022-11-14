import listpostTypes from "./ListPost.types";

export const INITIAL_STATE = {
    filter : null,
    list_posts_raw: [],
    list_posts_result:[]

}

const listpostReducer = (state=INITIAL_STATE, action) => {

    switch(action.type){
        case listpostTypes.SET_FILTER:
            return{
                ...state,
                filter: action.payload
            }
        
        case listpostTypes.SET_LIST_POSTS_RAW:
            return{
                ...state,
                list_posts_raw: action.payload

            }
        
        case listpostTypes.SET_LIST_POSTS_RESULT:
            return {
                ...state,
                list_posts_result: action.payload
            }
        
        default:
            return state;
    }
}

export default listpostReducer;