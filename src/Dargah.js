import { useContext,useEffect,useState } from "react";
import React  from "react";
import { Text } from "./Text";
import {  Link, useNavigate } from "react-router-dom";

const Dargah=()=>{
    const navigate=useNavigate();
    const { totalprice,totalnewprice,total} = useContext(Text);
    const [bank, setBank]=useState("");
    const [ru,setRu]=useState(false)




    const handlerule=()=>{
        setRu(true);
    }
    const handlebankname = (event) => {
        setBank(event.target.value);
  
      };
    

    useEffect(() => {

       document.getElementById("processbar1").style.borderBottom="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar11").style.border="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar2").style.borderBottom="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar22").style.border="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar3").style.borderBottom="3px solid rgb(23, 209, 69";
       document.getElementById("processbar33").style.border="3px solid rgb(23, 209, 69";
       document.getElementById("processbar4").style.borderBottom="3px solid red";
       document.getElementById("processbar44").style.border="3px solid red";




      }, []);

    return(<div style={{display:"flex",justifyContent:"center"}}>
    
        <div id="sending">
                <div id="boxprice">
                    <h4 onClick={()=>{navigate("/Basket")}} style={{color:"white",textAlign:"center",cursor:"pointer",backgroundColor:" red",margin:"0px",borderTopLeftRadius:"20px",borderTopRightRadius:"20px"}}>بازگشت به سبد خرید</h4>
                    <h3 className="pricecontaner">کل مبلغ خرید شما {totalprice} تومان</h3>
                    <h3 className="pricecontaner">سود شما از خرید {totalnewprice} تومان</h3>
                    <h3 className="pricecontaner">مبلغ قابل پرداخت {total} تومان</h3>
                </div>
                <div id="boxaddress">
                    <div id="processsending">
                        <div className="processitem">
                            <div id="processbar1" className="processbars"><span id="processbar11">1</span></div>
                            <span className="processitemname">اطلاعات شخصی</span>
                        </div>
                        <div className="processitem">
                        <div id="processbar2" className="processbars"><span id="processbar22">2</span></div>
                            <span className="processitemname">ادرس</span>
                        </div >
                        <div className="processitem">
                        <div id="processbar3" className="processbars"><span id="processbar33">3</span></div>
                            <span className="processitemname">روش ارسال</span>
                        </div>
                        <div className="processitem">
                        <div id="processbar4" className="processbars"><span id="processbar44">4</span></div>
                            <span className="processitemname">پرداخت</span>
                        </div>
                    </div>
                    
                    <div id="sendingcontainer">
                        <span style={{display:"block",textAlign:"center",fontSize:"28px",fontWeight:"900",margin:"10px"}}>روش پرداخت</span>
                        <div>
                            <div id="addrescontaniers" style={{marginBottom:"10px"}}>
                                <div className="bankname">
                                    <input type="radio" className="sendingaddress" name="sendingaddress" value="ملت" onChange={handlebankname}   ></input>
                                    <span >درگاه بانک ملت</span>
                                </div>
                                <div className="bankname">
                                    <input type="radio" className="sendingaddress" name="sendingaddress" value="ملی"  onChange={handlebankname} ></input>
                                    <span>درگاه بانک ملی</span>
                                </div> 
                                <div className="bankname">
                                    <input type="radio" className="sendingaddress" name="sendingaddress" value="پارسیان"  onChange={handlebankname}  ></input>
                                    <span>درگاه بانک پارسیان</span>
                                </div>
                            </div>
                            <div id="Addressbottom">
                                <div className="bankname">
                                    <input type="radio" className="rulename" name="rule" value="true" onChange={handlerule}   ></input>
                                    <span style={{color:"red"}}>تمامی قوانین را بطور کامل قبول دارم.</span>
                                </div>
    
                                <button disabled={!(ru && bank)} onClick={()=>{navigate("#")}} id="Addressbottom2" >پرداخت</button>
    
                            </div>
    
                        </div>
                    </div>
                
                    
    
                </div>
            </div>
           
        </div>)
}
export default Dargah;