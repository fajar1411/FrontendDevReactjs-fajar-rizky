
import axios from "axios";
import { useState,createContext,useEffect } from "react";



const Context = createContext(null)


const ItemProvider = ({children}) => {

    const [data,SetData] = useState()
    const [Pictur,SetPicture] = useState()
    const GetItem = async() => {

       axios.request({
            method: "GET",
            url: "https://restaurant-api.dicoding.dev/list"
          }).then(response => {
            SetData(response.data.restaurants)
            // console.log("ini respon data",response.data.restaurants);
          }); 
            
      }
    

      useEffect(() => {
        GetItem();
      }, []);
    return(
        <Context.Provider value ={{data}}>
             {children} 
        </Context.Provider>
    )
       
    
}
export{Context,ItemProvider}

  // const GetGambar = async() => {

      //   axios.request({
      //        method: "GET",
      //        url: `https://restaurant-api.dicoding.dev/images/small/${data.pictureId}`

      //      }).then(response => {
      //        SetData(response.data.data)
      //        console.log("ini respon gambar",response.data);
      //      }); 
             
      //  }