import React from "react";

import Footer from "./Footer";

function LoginFirst() {
    return (
  <><header className="LoginFirst-header">

      <nav class=" my-nav navbar navbar-light navbar-expand-lg ">
        <div class="container">


          <a class="navbar-brand" href="*">KOBİS BİLGİ SİSTEMİ</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <a class="nav-link" href="/"> </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="!#">Üniversitemiz</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/ogrenci">Öğrenci Girişi</a>
              </li>
              <li class="nav-item">
                <a class="nav-link " href="ogretmen">Öğretmen Girişi</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div id="carouselExampleIndicators" class="carousel slide my-carousel my-carousel" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class=""></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active" >
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
" alt=""></img>
            </div>
            <div class="carousel-item ">
            <img src="https://images.unsplash.com/photo-1530575287496-25827978a30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
" alt=""></img>
            </div>
            <div class="carousel-item ">
            <img src="https://images.unsplash.com/photo-1530575287496-25827978a30b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80
" alt=""></img>
            </div>
          </div>
        
        </div>
        <Footer></Footer>
</header>
      </>
     
    );
    
  }
  
  export default LoginFirst;
  