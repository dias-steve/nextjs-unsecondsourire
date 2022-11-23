export const handleFetchPost = async (payload) => {



    return new Promise((resolve, reject) =>{

        fetch(process.env.NEXT_PUBLIC_REACT_APP_API_REST_DATA + "/posts", {
            // Adding method type
            method: "GET",
        
            // Adding headers to the request
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(err => reject(err))
        }
    )
}