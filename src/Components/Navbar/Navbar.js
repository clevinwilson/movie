import React from 'react';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Card} from 'react-bootstrap';
function Navbar() {
    const [hamburger,setHamburger]=useState(false);
    const [navbar,setNavbar]=useState(false);
  

    return (
      <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Movie Detail</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div style={{justifyContent:"center"}} className="collapse navbar-collapse mt-4" id="navbarSupportedContent">
                    
                    <form style={{ justifyContent: "center" }} className="form-inline my-2 my-lg-0">
                        <input style={{borderRadius:"20px"}} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <div className="autocom-box"></div>
                        <button style={{ borderRadius: "20px" }} className="mt-3 btn btn-primary my-2 my-sm-0" type="submit">Search</button>
                        
                    </form>
                </div>
            </nav>
            <div>
                <Card/>
            </div>
      </div>
    )
}

export default Navbar