import { faChevronDown, faTimes } from "@fortawesome/free-solid-svg-icons";
import React, { forwardRef, useEffect, useState } from "react"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter, Link } from "react-router-dom";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import Kesht1 from "./kesht1";

const Sidebar=forwardRef(({ openclosesidebar, setOpenclosesidebar },ref)=>{
    const[isOpen,setIsOpen]=useState(true);
    const handelhaver = () =>{
       const kesht= document.getElementById("keshtlist");
       if(kesht.style.display=="none"){
        kesht.style.display="block";
        setIsOpen(false);
       }
       else{
        kesht.style.display="none";
        setIsOpen(true);
       }
    }
    const handelclose = () =>{
        setOpenclosesidebar(true);
    }



 
    
    return(
    <div style={{display:openclosesidebar ? "none" : "block"}}id="sidebar" ref={ref}>
                <FontAwesomeIcon  icon={faTimes} onClick={handelclose} style={{cursor:"pointer"}} size="2x"/>
                <ul id="sidebarlist">
                        <li className="sidebarlists"><Link to="/Product" style={{color:"black"}}>محصولات</Link></li>
                        <li className="sidebarlists" id="kesht" onClick={handelhaver} ><Link to="#"  style={{color:"black"}}>درمزارع<FontAwesomeIcon  icon={isOpen ? faChevronDown : faChevronUp} style={{float:"left"}} size="1x"/></Link>
                            <div id="keshtlist" >
                                <ul style={{listStyle:"none",margin:"0px" ,padding:"0px"}}>
                                <li className="keshtlists"><Link to="/Kesht1" style={{color:"black"}}>کشت اول</Link></li>
                                <li className="keshtlists"><Link to="/Kesht2" style={{color:"black"}}>کشت دوم</Link></li>
                                </ul>
                            
                            </div>
                        </li>
                        
                        <li className="sidebarlists"><Link to="/Comments" style={{color:"black"}}>رضایت مشتری</Link></li>
                        <li className="sidebarlists"><Link to="/Customersatisfaction1/1" style={{color:"black"}}>بارنامه ارسالی</Link></li>
                        <li className="sidebarlists"><Link to="/Aboutme" style={{color:"black"}}>در باره ما</Link></li>
            
                </ul>
      

       
    </div>

    )
});
export default Sidebar;
