import { formatDate } from "../../utils/datetranslater.utils"

export const orderbydata = {
  coming_actions: {meta_key: "_event_date", order:"ASC"},
  past_actions:{meta_key: "_event_date", order:"DESC"}
}

export const otherfilterdata = {
  coming_actions:[{
    key: "_event_date",
    value: formatDate(new Date()),
    compare:">="
  }],

  past_actions:[{
    key: "_event_date",
    value: formatDate(new Date()),
    compare:"<"
  }]
}

export const handleFetchPost = async (payload) => {
    
    
    let bodyToSend= {
        page: payload.current_page ? payload.current_page : 1,  
        categoriesfilter:payload?.filter?.cat ? payload.filter.cat : [],
        otherfilter: payload?.filter?.coming_actions ? otherfilterdata.coming_actions : otherfilterdata.past_actions  ,
        orderby: payload?.filter?.coming_actions ?  orderbydata.coming_actions :  orderbydata.past_actions  ,
    }
  

    if (payload.type && payload.type === 'action'){
      return new Promise((resolve, reject) =>{

        fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/actions", {
            // Adding method type
            method: "POST",
        
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },

            body: JSON.stringify(bodyToSend)
            //TODO ADD Body
          })
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(err => reject(err))
        }
    )
    }else{
      return new Promise((resolve, reject) =>{

        fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts", {
            // Adding method type
            method: "POST",
        
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },

            body: JSON.stringify(bodyToSend)
            //TODO ADD Body
          })
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(err => reject(err))
        }
    )
    }



}