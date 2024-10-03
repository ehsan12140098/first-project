import React, { useContext, useEffect, useMemo, useState } from "react";
import Basketitem from "./Basketitem";
import { Text } from "./Text";
import { Link ,useNavigate} from "react-router-dom";

const Basketitems = () => {
  const { basketelem ,totalprice,setTotalprice,totalnewprice,setTotalnewprice,total,setTotal} = useContext(Text);
  const navigate = useNavigate();
  // تعریف state برای total
  const [total1, setTotal1] = useState(0);

  const totalprice1 = useMemo(() => {
    let tp1=basketelem.reduce((acc, item) => {
      return acc + (item.qty * item.price);
    }, 0);
    setTotalprice(tp1);
    return tp1
  }, [basketelem]);



 const handleContinue = () => {
  const userData = localStorage.getItem("Userdatas");

  if (userData) {
    // If user is logged in, redirect to the "ارسال" page
    navigate("/send");
  } else {
    // If user is not logged in, redirect to the "Login" page
    
    navigate("/login", { state: { from: "/Send" } }); // مسیر قبلی را با state ارسال کنید
  }
};





  const totalnewprice1 = useMemo(() => {
    let tnp1=basketelem.reduce((acc, item) => {
      // اگر newprice وجود داشته باشد، از قیمت جدید محاسبه می‌شود
      if (item.newprice) {
        return acc + (item.qty * (item.price - item.newprice));
      } else {
        return acc;
      }
    }, 0);
    setTotalnewprice(tnp1);
    return tnp1
  }, [basketelem]);

  useEffect(() => {
    setTotal1(totalprice1 - totalnewprice1); // استفاده از setTotal برای به‌روزرسانی
    setTotal(totalprice1 - totalnewprice1);
  }, [totalprice1, totalnewprice1]); // هر دو مقدار را در useEffect وابسته قرار می‌دهیم
  return (
    <div>
      {basketelem.length ? (
        <div>
          <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "20px" }}>{basketelem.length}</span>
            <h2 style={{ display: "inline-block" }}>:تعداد محصول در سبد</h2>
          </div>

          <div className="buys">
            {basketelem.map((u, index) => (
              <Basketitem key={index} item={u} index={index} className="buy" />
            ))}
          </div>

          <div className="buys">
            <div id="pricecontaners">
              <h1 style={{ marginBottom: "40px" }}>صورت حساب شما</h1>
              <div id="pricecontaner">
                
                 <span onClick={handleContinue} id="buybottom" style={{textDecoration:"none",fontSize:"20px",color:"black",display:"inline-block"}}>ادامه</span>
                
                <h2 className="pricecontaner">{total1} مبلغ قابل پرداخت</h2>
                <h2 className="pricecontaner">{totalnewprice1} سود شما از خرید</h2>
                <h2 className="pricecontaner">{totalprice1} کل مبلغ خرید شما</h2>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 style={{textAlign:"center",height:"387px"}}>سبد شما خالی است</h2>
      )}
    </div>
  );
};

export default Basketitems;
