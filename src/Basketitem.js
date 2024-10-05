import React, { useState, useContext } from "react";
import { Text } from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Basketitem = ({ item }) => {
  const { basketelem, setBasketelem } = useContext(Text);

  // به‌روزرسانی تعداد آیتم‌ها در سبد
  const handelsetqty = (newQty) => {
    const updatedQty = Math.max(1, newQty); // جلوگیری از کاهش به کمتر از 1
    const updatedItem = { ...item, qty: updatedQty };

    const updatedBasket = basketelem.map((basketItem) => 
      basketItem.number === item.number ? updatedItem : basketItem
    ); // به‌روزرسانی آیتم درست
    setBasketelem(updatedBasket);
  };

  // تابع برای حذف آیتم
  const handeldilit = () => {
    const updatedBasket = basketelem.filter((basketItem) => basketItem.number !== item.number); // حذف آیتم بر اساس number
    setBasketelem(updatedBasket);
  };

  return (
    <div>
      <div id="listkharid">
        <img className="basketbakhsh" id="listkharidimg" src={item.ax} style={{ borderRadius: "50%" }} width="150px" height="100px" alt="Product Image" />
        <h3 className="basketbakhsh">نام محصول: {item.name}</h3>
        <h3 className="basketbakhsh" style={{ margin: "15px" }}>
          قیمت:
          {item.newprice ? (
            <>
              <span style={{ color: "red", margin: "0 0px" }}>{item.newprice}</span>
              <del style={{ marginLeft: "5px" }}>{item.price}</del> تومان
            </>
          ) : (
            <>{item.price} تومان</>
          )}
        </h3>
        <h5 className="basketbakhsh">وزن: {item.net} کیلو</h5>

        {/* بخش افزایش و کاهش مقدار */}
        <div className="basketbakhsh">
          <div>
            <button className="productbuym" onClick={() => handelsetqty(item.qty + 1)}>+</button>
            <input id="productbuynumber" type="text" value={item.qty} onChange={(e) => handelsetqty(Number(e.target.value))} />
            <button className="productbuym" onClick={() => handelsetqty(item.qty - 1)}>-</button>
            <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer", paddingLeft: "40px" }} onClick={handeldilit} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basketitem;
