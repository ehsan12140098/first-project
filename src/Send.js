import { useContext,useEffect,useState } from "react";
import React  from "react";
import { Text } from "./Text";
import {  Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarker, faMobile, faPhone, faSignsPost, faTruck } from "@fortawesome/free-solid-svg-icons";

const Send=()=>{
    const [adress, setAdress] = useState([]);
    const { totalprice,totalnewprice,total} = useContext(Text);
    const navigate=useNavigate();
    const navigates=useNavigate();
    console.log(totalprice);
    console.log(total);
    console.log(totalnewprice)
    const [selectedAddress, setSelectedAddress] = useState("");

    // تابع برای دریافت آدرس انتخاب شده
    const handleAddressChange = (event) => {
      setSelectedAddress(JSON.parse(event.target.value));

    };
    console.log(selectedAddress)

    useEffect(() => {
        const savedAddresses = JSON.parse(localStorage.getItem("SendingAddresses")) || [];
       setAdress(savedAddresses);
       document.getElementById("processbar1").style.borderBottom="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar11").style.border="3px solid rgb(23, 209, 69)";
       document.getElementById("processbar2").style.borderBottom="3px solid red";
       document.getElementById("processbar22").style.border="3px solid red";




      }, []);
      const handeldilitaddress = (index) => {
        // ابتدا یک کپی از آرایه قبلی بگیرید
        const updatedAddresses = [...adress]; // کپی از آرایه
        updatedAddresses.splice(index, 1); // حذف آدرس مورد نظر
    
        // بروزرسانی localStorage
        localStorage.setItem("SendingAddresses", JSON.stringify(updatedAddresses));
        
        // بروزرسانی وضعیت با آرایه جدید
        setAdress(updatedAddresses);
    };
    
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
                    <span style={{display:"block",textAlign:"center",fontSize:"20px",fontWeight:"900",margin:"10px"}}>نشانی ارسال</span>
                    <div>
                        <div id="addrescontaniers">
                                {adress.map((u, index) => (
                                    <div id="addrescontanier" key={index} >
                                        <input type="radio" className="sendingaddress" name="sendingaddress" value={JSON.stringify(u)}    onChange={handleAddressChange}></input>
                                        <div id="addres">
                                            <div id="addres1">
                                                <span id="addres1span1">نشانی من</span>
                                                <span>{u.name} {u.family}</span>
                                                <div>
                                                    <Link className="viraeshdilit" id="viraeh" to="#"> ویرایش </Link>
                                                    <span style={{cursor:"pointer"}} onClick={()=>{handeldilitaddress(index)}} className="viraeshdilit"  to="#"> حذف </span>
                                                </div>
                                            </div>
                                            
                                            <p id="addres2">
                                                <FontAwesomeIcon style={{padding:"0px 10px 0px 10px"}} icon={faMapMarker}/>
                                                <span>{u.Address}</span>
                                                
                                            </p>
                                            <div id="addres3">
                                                <p id="addres3phone"><FontAwesomeIcon icon={faMobile}/> {u.phone}</p>
                                                <p id="addres3post"><FontAwesomeIcon icon={faEnvelope}/> {u.Post}</p>
                                            </div>
                                        
                                        </div>
                                    </div>
                                ))}
                        </div>
                        <div id="Addressbottom">
                        <button onClick={()=>{navigates("/SendingAddresses")}} id="Addressbottom1" >افزودن نشانی جدید</button>

                        <button  id="Addressbottom2" >ادامه</button>

                        </div>

                    </div>
                </div>
            
                

            </div>
        </div>
       
    </div>)
}
export default Send;