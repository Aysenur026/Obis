import React from 'react';
import { Link } from 'react-router-dom';


class Footer extends React.Component{
 
    render(){
     
          return(
              <footer>

               <div className="text-center p-3 ">

                <Link to="/"style={{color:"#126a79"}}> Kobis.com</Link>
                <div className="pull-center col-lg-4 col-xs-12 text-white">
                <p style={{color:"#126a79"}}>Copyright &copy;2022 by Me</p>
                </div>
              </div>
              </footer>


          );
    }
}
export default Footer;