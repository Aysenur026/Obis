import React,{ useState } from "react";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from '../firebase';
import{useNavigate} from "react-router-dom";
import './stylelogin.css'


  function OgrenciGiris() {

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
    
  let navigate=useNavigate();

  const ogrenciRegister = async(event) =>{
    event.preventDefault();
       try{
   const user =await createUserWithEmailAndPassword(
        auth,
        email,
        password
        
        );
        console.log(user)
       } catch(error){
         console.log(error.message);
       }
       navigate("/ogrenciislem");

  };

  return(
    <div className="bg-light">
    <div className="container p-5 ">
      
    <section>
    <div class="box ">
        <div class="form">
          <h2>Öğrenci Girişi</h2>
          <form action="index.html">
            <div class="inputBx">
              <input type="email" placeholder=" Öğrenci Email" id="email" required value={email} onChange={(e)=>setEmail(e.target.value)} />
              <i class="fa fa-user"></i>
              <img src="" alt="" class="fa fa-user" /> 
            </div>
            <div class="inputBx">
              <input type="password" placeholder="Şifreniz" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
              <i class="fa fa-lock"></i>
               <img src="" alt="" class="fa fa-lock" />
            </div>
            <label class="remember">
              <input type="checkbox" required /> Beni Hatırla
            </label>
            <div class="inputBx">
            <button type="submit" className="btn btn-light btn-center"onClick={ogrenciRegister}>Giriş Yap</button>
            </div>
          </form>
          
        </div>
      </div>

        </section></div></div>


  
  )
  }
  export default OgrenciGiris;