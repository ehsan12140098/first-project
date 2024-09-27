import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faMobile } from "@fortawesome/free-solid-svg-icons/faMobile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer=()=>{


    return(

        <div id="footer">
        <div id="acess">
                <dl style={{marginTop:"0px"}}>
                    <dt><FontAwesomeIcon icon={faHome} size="1x"/> آدرس:</dt>
                    <dd >مازندران - شهر جویبار- روستای پهناب</dd>
                    <dt style={{borderTop:"1px solid  #fefcfc"}}><FontAwesomeIcon icon={faPhone} size="1x"/> شماره ثابت:</dt>
                    <dd >01142557705</dd>
                    <dt style={{borderTop:"1px solid  #fefcfc"}}><FontAwesomeIcon icon={faMobile} size="1x"/> همراه:</dt>
                    <dd>09333587705</dd>
                </dl>
        </div>
        <div  >
          <h4 style={{width:"200px", textJustify:"inter-word",marginTop:"0px"}}>کلیه حقوق این سایت متعلق به بازرگانی -----  می باشد.</h4>

        </div>
            <div id="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1237.662717763379!2d52.96319536105123!3d36.66282981754148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d36.662695027690596!2d52.96464749647063!5e0!3m2!1sen!2s!4v1726176622774!5m2!1sen!2s" width="300" height="180" style={{border:"2px solid rgb(128, 129, 126)" ,allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade",borderRadius:"20px"}}></iframe>
            </div>
            
            
        </div>
    
    


    )
}
export default Footer;