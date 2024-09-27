import React, { useContext, useEffect, useMemo, useState } from "react";
import Basketitem from "./Basketitem";
import { Text } from "./Text";
import { Link } from "react-router-dom";

const Basketitems = () => {
  const { basketelem } = useContext(Text);

  // تعریف state برای total
  const [total, setTotal] = useState(0);

  const totalprice = useMemo(() => {
    return basketelem.reduce((acc, item) => {
      return acc + (item.qty * item.price);
    }, 0);
  }, [basketelem]);

  const totalnewprice = useMemo(() => {
    return basketelem.reduce((acc, item) => {
      // اگر newprice وجود داشته باشد، از قیمت جدید محاسبه می‌شود
      if (item.newprice) {
        return acc + (item.qty * (item.price - item.newprice));
      } else {
        return acc;
      }
    }, 0);
  }, [basketelem]);

  useEffect(() => {
    setTotal(totalprice - totalnewprice); // استفاده از setTotal برای به‌روزرسانی
  }, [totalprice, totalnewprice]); // هر دو مقدار را در useEffect وابسته قرار می‌دهیم

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
                
                 <Link to="#" id="buybottom" style={{textDecoration:"none",fontSize:"30px",color:"black",display:"inline-block"}}>ادامه</Link>
                
                <h2 className="pricecontaner">{total} مبلغ قابل پرداخت</h2>
                <h2 className="pricecontaner">{totalnewprice} سود شما از خرید</h2>
                <h2 className="pricecontaner">{totalprice} کل مبلغ خرید شما</h2>
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
