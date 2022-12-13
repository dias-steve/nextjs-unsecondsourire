import listpostTypes from "./listpost.types";

export const INITIAL_STATE = {
    filter : {
        cat: [],
        coming_actions: true,
    },
    list_posts_raw: [],
    list_posts_result:[],
    is_loading: false,

    current_page: 1,
    page_nb_max: 1,
    nb_posts_found:1


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
        
        case listpostTypes.SET_IS_LOADING:
            return {
                ...state,
                is_loading: action.payload
            }
        case listpostTypes.SET_PAGE_NB_MAX:
            return{
                ...state,
                page_nb_max: action.payload

            }
        case listpostTypes.SET_CURRENT_PAGE:
            return{
                ...state,
                current_page: action.payload

            }
        case listpostTypes.SET_NB_POSTS_FOUND:
            return {
                ...state,
                nb_posts_found: action.payload

            }
        default:
            return state;
    }
}

export default listpostReducer;