export const handleFetchPost = async (payload) => {
    
    let bodyToSend= {
        page: payload.current_page ? payload.current_page : 1,  
        categoriesfilter:payload?.filter?.cat ? payload.filter.cat : []
    }
    if(
      payload === null ||
      payload === undefined ||
      payload.filter === undefined ||
      payload.filter === null ||
      payload.filter.cat === undefined ||
      payload.filter.cat === null ||
      payload.filter.cat.length === undefined ||
      payload.filter.cat.length === undefined <= 0
      
    ){
      bodyToSend = {
        page: payload.current_page ? payload.current_page : 1 
      
      }
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