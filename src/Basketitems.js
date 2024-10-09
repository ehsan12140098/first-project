import React, { useContext, useMemo, useEffect, useState } from "react";
import Basketitem from "./Basketitem";
import { Text } from "./Text";
import { Link, useNavigate } from "react-router-dom";

const Basketitems = () => {
  const { basketelem, setBasketelem, totalprice, setTotalprice, totalnewprice, setTotalnewprice, total, setTotal } = useContext(Text);
  const navigate = useNavigate();

  // محاسبه قیمت کل و سود کل از خرید
  const totalprice1 = useMemo(() => {
    let tp1 = basketelem.reduce((acc, item) => {
      return acc + (item.qty * item.price);
    }, 0);
    setTotalprice(tp1);
    return tp1;
  }, [basketelem]);

  const totalnewprice1 = useMemo(() => {
    let tnp1 = basketelem.reduce((acc, item) => {
      if (item.newprice) {
        return acc + (item.qty * (item.price - item.newprice));
      } else {
        return acc;
      }
    }, 0);
    setTotalnewprice(tnp1);
    return tnp1;
  }, [basketelem]);

  // محاسبه مبلغ کل قابل پرداخت و سود
  useEffect(() => {
    setTotal(totalprice1 - totalnewprice1);
  }, [totalprice1, totalnewprice1]);

  const handleContinue = () => {
    const userData = localStorage.getItem("Userdatas");
    if (userData) {
      navigate("/send");
    } else {
      navigate("/login", { state: { from: "/Send" } });
    }
  };

  return (
    <div style={{display:"flex",justifyContent:"center"}}>
      {basketelem.length ? (
        <div >
          <div style={{ textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "20px" }}>{basketelem.length}</span>
            <h2 style={{ display: "inline-block" }}>:تعداد محصول در سبد</h2>
          </div>

          <div className="buys">
            {basketelem.map((u) => (
              <Basketitem key={u.number} item={u}  />
            ))}
          </div>

          <div className="buys">
            <div id="pricecontaners">
              <h1 style={{ marginBottom: "40px" }}>صورت حساب شما</h1>
              <div style={{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center"}}>
                <span onClick={handleContinue} id="buybottom" style={{ textDecoration: "none", fontSize: "20px", color: "black", display: "inline-block" ,marginLeft:"15px", }}>ادامه</span>

                <div id="pricecontaner">
                  <h3 className="pricecontaner">مبلغ قابل پرداخت{total} تومان</h3>
                  <h3 className="pricecontaner"> سود شما{totalnewprice1} تومان</h3>
                  <h3 className="pricecontaner">کل مبلغ خریدشما{totalprice1} تومان</h3>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", height: "387px" }}>سبد شما خالی است</h2>
      )}
    </div>
  );
};

export default Basketitems;
