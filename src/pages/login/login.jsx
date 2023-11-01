import React, { useState,useEffect } from 'react';
import ContentLogin from '../../component/Login/content/Content'
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import Cookies from "js-cookie";
import moment from 'moment-timezone';
import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();
function Login() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const handleInputChange = (event) => {
    event.preventDefault();
    var {name,value} = event.target;
    setFormValues({
    ...formValues,
    [name]: value,
  });
};

const handleSubmit = async (e)  => {
      e.preventDefault();
      
      var { email, password } = document.forms[0];
      const datapost= {
      email: email.value,
      password:password.value,
     
    };
   
    // const apiUrl = process.env.REACT_LOGIN_API_BASE_URL;

   

    
//      await axios.post("http://localhost:8080/login", datapost).then((response) => {
//       console.log("ini respon",response.data.data)
//     if(response.data.status ==="OK"){
//       toast.success('Login Success', {
//         position: "top-right",
//         autoClose: 2000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         className : 'toas-success',
//         theme: "green",
        
//         })
      
     
  
     
//        const now = moment().tz('Asia/Jakarta');
      
//        const expirationTime = now.add(1+7, 'hours').toDate().toUTCString();
       
//       Cookies.set("token",response.data.data.token,{
//       expires :new Date(expirationTime),
      
//       });
      
//       // navigate("/dashboard");
    
//     } 
    
//     }).catch(error=>{
//       console.log("ini error",error.response.data.data)
//       if(datapost.email === ""||datapost.password ==="")
//       {
 
//       toast.error('Login Fail, Harap Isi Kolom Yang Kosong', {
//           position: "top-right",
//           autoClose:1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           })
       
//       }else if (Object.keys(datapost.password).length<5||Object.keys(datapost.email).length<5){

//         toast.warning('Login, Harap input minimal 5 karakter', {
//           position: "top-right",
//           autoClose: 1000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           })
//       }else if(Object.keys(datapost.password).length>15||Object.keys(datapost.email).length>15){

//         toast.warning('Login fail, Harap input maksimal 15 karakter', {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           })
//       }
//       else if ((error.response.data.data = "password anda salah!!!")){
//         toast.warning('Login Fail, Password anda salah', {
//           position: "top-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           })
//         }else{
//           toast.error('Register fail,email Belum Terdaftar', {
//             position: "top-right",
//             autoClose:3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//             })
//         }
      
//   }
// );
       
      
  

};
    return (
      <div >
         <ContentLogin handleSubmit={handleSubmit}   handleInputChange={handleInputChange} ToastContainer={ToastContainer}/>
      </div>
      
    )
  }

  
export default Login