export const filterPostList = (filterlist, rawPostList) => {

    let result = rawPostList;
    if(Array.isArray(filterlist) && filterlist.length > 0){
        filterlist.forEach(filter => {
            result =  result.filter((value) => filterManager(value, filter))
        });
    }

    return result;

}

export const filterManager = (value, filter) => {
   
    switch (filter.type){
        case 'categories':
            return categoryFilter(value, filter.payload);
        default:
            return false;
    }
}

export const categoryFilter = (value, listCategoriesChecked) =>{
    const taxinomiesList = value.taxinomie;
    if (Array.isArray(taxinomiesList)){
        for(let i = 0; i < taxinomiesList.length; i++){
            for(let j = 0; j <listCategoriesChecked.length; j++){
                if(taxinomiesList[i].term_id == listCategoriesChecked[j].term_id){
                    return true
                }
            }
        }
    }

    return false;
}
/*
filter: [
    {
        type: 'categories',
        payload: [3, 2]
    },
    {
        type: '',
        payload: ['']
    }
]

*/

