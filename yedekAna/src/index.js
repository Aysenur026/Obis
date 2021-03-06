import React from 'react';
import ReactDOM from 'react-dom';
import{BrowserRouter, Routes,Route} from "react-router-dom";

import LoginFirst from './components/LoginFirst';
import OgrenciGiris from './components/OgrenciGiris';
import Ogrenciİslem from './OgrenciPage/Ogrenciİslem';
import DersEkle from './OgretmenPage/DersEkle';
import SınavEkle from './OgretmenPage/SınavEkle';
import OgretmenGiris from './components/OgretmenGiris';
import Ogretmenislem from './OgretmenPage/Ogretmenİslem';
import DersKayıt from './OgrenciPage/DersKayıt ';
import ModalSınav from './components/ModalSınav';
import SınavSonuc from "./OgrenciPage/SınavSonuc";
import SınavPage1 from "./OgrenciPage/SınavPage1";
import SınavPage2 from "./OgrenciPage/SınavPage2";
import SınavOl from './OgrenciPage/SınavOl';

ReactDOM.render(

    <BrowserRouter>
     
     <Routes>
     
      <Route path="/" element={<LoginFirst/>}/>
     
      <Route path="/ogrenci" element={<OgrenciGiris/>}/>
      <Route path="/ogrenciislem" element={<Ogrenciİslem/>}/>
      <Route path="/derskayit" element={<DersKayıt/>}/>
      <Route path="/modalsinav" element={<ModalSınav/>}/>
      <Route path="/sinavsonuc" element={<SınavSonuc/>}/>

      <Route path="/ogretmen" element={<OgretmenGiris/>}/>
      <Route path="/ogretmenislem" element={<Ogretmenislem/>}/>
      <Route path="/dersekle" element={<DersEkle/>}/>
      <Route path="/sinavekle" element={<SınavEkle/>}/>
      <Route path={"/sinavol"} element={<SınavOl/>}/>
       <Route path={"/sinavpage/:id"} element={<SınavOl/>}/>
       <Route path={"/sinavpage1/:id/"}element={<SınavPage1/>}/>
       <Route path={"/sinavpage2/:id/"}element={<SınavPage2/>}/>
     
       
     </Routes>
    
     </BrowserRouter>,
 document.getElementById('root')

  );