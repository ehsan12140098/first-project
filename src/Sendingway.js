import { useContext,useEffect,useState } from "react";
import React  from "react";
import { Text } from "./Text";
import {  Link, useNavigate } from "react-router-dom";

const Sendingway=()=>{
    const navigate=useNavigate();
    const {Sendingways}=useContext(Text);
    const { totalprice,totalnewprice,total} = useContext(Text);
    const [way,setWay]=useState("")

    const handleSendingways = (event) => {
        setWay(event.target.value)
      };

    useEffect(() => {

       document.getElementById("processbar1").style.borderBottom="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar11").style.border="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar2").style.borderBottom="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar22").style.border="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar3").style.borderBottom="3px solid red";
       document.getElementById("processbar33").style.border="3px solid red";




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
                        <span style={{display:"block",textAlign:"center",fontSize:"20px",fontWeight:"900",margin:"10px"}}>روش ارسال</span>
                        <div>
                            <div id="addrescontaniers">
                                {Sendingways.map((u, index) => (
                                        <div id="addrescontanier" key={index} >
                                            <input type="radio" className="sendingaddress" name="sendingaddress" value={u.name}    onChange={handleSendingways}></input>
                                            <div id="Sendingways">
                                                <div id="Sendingway1">
                                                    <img src={u.image} id="Sendingwayimge"  ></img>
                                                </div>
                                                <div id="Sendingway11">
                                                    <div id="Sendingway2" >
                                                    <span>{u.name}</span>  
                                                    </div>
                                                    
                                                    <div id="Sendingway3">
                                                    <span>{u.discribtion}</span>
                                                        
                                                    </div>
                                                    <div id="Sendingway4">
                                                        <span>{u.much}</span>
                                                    </div>
                                                </div>
                                            
                                            </div>
                                        </div>
                                ))}
                            </div>
                            <div id="Addressbottom">
                             <button onClick={()=>{navigate("/Send")}} id="Addressbottom1" >تغییر نشانی</button>
    
                             <button  disabled={!way} onClick={()=>{navigate("/Dargah")}} id="Addressbottom2" >ادامه</button>
    
                            </div>
    
                        </div>
                    </div>
                
                    
    
                </div>
            </div>
           
        </div>)
}
export default Sendingway;