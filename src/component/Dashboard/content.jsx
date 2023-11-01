import  { React,useState,useContext,useEffect } from 'react';
import axios from "axios";
import Rating from '@mui/material/Rating';
import { Context } from '../context/Contextprovid';
function DashboardContent() {
  const [Picture,SetPicture] = useState()
  const{data} = useContext(Context)
 


      const GetItem = async(gambarid) => {
        // console.log("id gambar",gambarid) 
        
        axios.request({
             method: "GET",
             url: `https://restaurant-api.dicoding.dev/images/small/${gambarid}`
           }).then(response => {
             console.log("gambar",response.data) 
            SetPicture(response.data)
           
           }); 
             
       }
      //  console.log("ini state gambar",Picture)
      //  useEffect(() => {
      //   GetItem();
      // }, []);
      return (
        <>
  <div id='container-dashboard'>
  <div id="content-dashboard">
    <div className="container-item">
    <div className="container-barang">
       {data?.map((item) => (
      <div className="content-barang">
        <div className="content">
        <img  key={item.id} value={GetItem(item.pictureId)} className='img-brng' src={Picture} alt="gambar" />
        <div className="container-field">
        <h3>{item.name}</h3>
          <Rating name="rating" value={item.rating} readOnly />
          <h3>{item.city}</h3>
     
          <button  className= 'detail'type='submit'>Learn More </button>
        </div>
        </div>
      </div>
         ))} 
    </div>
  </div>
  </div>
  </div>
        </>
        
      )
    
    }
    
  export default DashboardContent