import React, { useEffect, useState } from "react";
import {getDocs,collection} from "firebase/firestore";
import {db} from '../firebase';
import { Link } from "react-router-dom";
import "./SınavBtn.css";
   

function SınavOl() {

  const [postLists,setPostList] = useState([]);

    const postCollection =collection(db,"soruPost");
     useEffect(() => {
        const getPosts = async() =>{
          
          const data =await getDocs(postCollection);
          setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id }) ))
        };
        getPosts();
    });
     

      
    return(
        <div className="pages">
           <div className="soruGet p-5">
    
        {postLists.map((post)=> {
        return <><div><button className="sinavBtn"><Link to={"/sinavpage1/" + post.id} style={{ color: "#113" }}>Sınav</Link></button></div></>
        
    })}
    </div></div>
);
    
}
  export default SınavOl;
 