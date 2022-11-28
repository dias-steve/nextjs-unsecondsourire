export const handleFetchPost = async (payload) => {
    
    const bodyToSend= {
        page: payload.current_page ? payload.current_page : 1,  
        categoriesfilter:payload?.filter?.cat ? payload.filter.cat : []
    }

    console.log("payload");
    console.log(bodyToSend);

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