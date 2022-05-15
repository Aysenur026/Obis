import React,{useState} from "react";
import{addDoc, collection} from "firebase/firestore";
import {auth, db} from "../firebase";
import{useNavigate} from "react-router-dom";

function SınavEkle() {
    const [soruID,setSoruID]=useState("")
    const [soru,setSoru]=useState("")
    const [a,setA]=useState("")
    const [b,setB]=useState("")
    const [c,setC]=useState("")
    const [d,setD]=useState("")

    const postCollection = collection(db,"soruPost")
     let navigate=useNavigate();
     const soruPost = async(event)=>{
      event.preventDefault();
       await addDoc(postCollection,{
        soruID,soru,a,b,c,d,
        author :{name:auth.currentUser.displayName, id:auth.currentUser.uid},
      });
       navigate("/sinavekle");
    };
  
      
    return(
      <div className="d-flex" id="wrapper">
      <div className="border-end bg-white" id="sidebar-wrapper">
      <img src="https://st2.depositphotos.com/3867453/6842/v/600/depositphotos_68427499-stock-illustration-letter-k-logo-icon-design.jpg" alt="" width="50" height="50" className="rounded-circle me-2" ></img>
          <div className="list-group list-group-flush">
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Genel İşlemler</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Ders ve Dönem İşlemleri</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">YÖKSiS</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Formlar</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Kullanıcı İşlemleri</a>
              <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Başvurularım</a>
          </div>
      </div>
     
      <div id="page-content-wrapper " style={{ minHeight: '100vh' }}>
         
      <nav className="navbar navbar-expand-sm navbar-light bg-light fixed-top ">
                    <div className="collapse navbar-collapse justify-content-end">
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                          <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                          <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                          <li className="nav-item dropdown">
                          <a href="!#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
        <strong _msthash="496067" _msttexthash="33306">Akademisyen Doç.Dr.Mr.Smith</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow " aria-labelledby="dropdownUser1" _mstvisible="0">

        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115556" _msttexthash="94510" _mstvisible="2">Ayarlar</a></li>
        <li _mstvisible="1"><a className="dropdown-item" href="!#" _msthash="1115738" _msttexthash="77246" _mstvisible="2">Profil</a></li>
        <li _mstvisible="1"><hr className="dropdown-divider" _mstvisible="2"></hr></li>
        <li _mstvisible="1"><a className="dropdown-item" href="/" _msthash="1116102" _msttexthash="163969" _mstvisible="2">Oturumu Kapat</a></li>
      </ul>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
         

        <div className="container d-flex align-item-center justify-content-center w-100 p-5 h-100">
      
        <div className="card" style={{ minWidth: '400px' }}>
                <div className="card-header">
                  Sınav Ekleme
                </div>
                <div className="card-body">

                  <div className="form-group">
                    <label>Soru ID</label>
                    <input className="form-control" placeholder="Soru id giriniz" onChange={(event)=>{setSoruID(event.target.value);}}/>
                  </div>

                  <div className="form-group">
                    <label>Soru</label>
                    <input className="form-control" placeholder="Soruyu yazınız" onChange={(event)=>{setSoru(event.target.value);}} />
                  </div>

                  <div className="form-group">
                    <label>A</label>
                    <input className="form-control" placeholder="Şıkkı yazınız" onChange={(event)=>{setA(event.target.value);}}/>
                  </div>

                  <div className="form-group">
                    <label>B</label>
                    <input className="form-control" placeholder="Şıkkı yazınız" onChange={(event)=>{setB(event.target.value);}}/>
                  </div>
                  <div className="form-group">
                    <label>C</label>
                    <input className="form-control" placeholder="Şıkkı yazınız" onChange={(event)=>{setC(event.target.value);}}/>
                  </div>
                  <div className="form-group">
                    <label>D</label>
                    <input className="form-control" placeholder="Şıkkı yazınız" onChange={(event)=>{setD(event.target.value);}}/>
                  </div>
                  <button className="btn btn-primary btn-block form-group-center col-md-10 m-5" onClick={soruPost}>Gönder</button>
                </div>
                </div>
              </div>
</div>              

</div>
             
);
}
export default SınavEkle;