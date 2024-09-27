import React, { useContext, useState } from "react";
import { Text } from "./Text"; // فرض می‌کنیم که Text همان Context شماست

const Prodoct = ({ prodoctname1 }) => {
  const [newprodoctname, setNewprodoctname] = useState(prodoctname1);
  const { prodoctsname, setProdoctsname ,basketelem ,setBasketelem } = useContext(Text);

  const handelbasket = () => {
    // بررسی اینکه آیا محصول از قبل در سبد خرید وجود دارد یا خیر
    const productInBasket = basketelem.find(
      (item) => item.name === newprodoctname.name
    );
  
    let updatedBasket;
  
    if (productInBasket) {
      // اگر محصول از قبل وجود داشته باشد، مقدار آن را افزایش می‌دهیم
      updatedBasket = basketelem.map((item) =>
        item.name === newprodoctname.name
          ? { ...item, qty: item.qty + newprodoctname.qty }
          : item
      );
    } else {
      // اگر محصول وجود نداشته باشد، آن را به سبد خرید اضافه می‌کنیم
      updatedBasket = [...basketelem, newprodoctname];
    }
  
    setBasketelem(updatedBasket); // سبد خرید را آپدیت کنید

    // به جای log کردن basket، updatedBasket که مقدار جدید است را log کنید
  };
  








  const handelsetqty = (newQty) => {
    const updatedQty = Math.max(1, newQty); // مقدار جدید نباید کمتر از 1 باشد
    const updatedProdoct = { ...newprodoctname, qty: updatedQty };

    // آپدیت newprodoctname
    setNewprodoctname(updatedProdoct);

    // ایجاد کپی از prodoctsname و جایگزینی محصول در موقعیت مورد نظر
    const jj = [...prodoctsname];
    jj.splice(newprodoctname.number, 1, updatedProdoct);

    // به‌روزرسانی state مربوط به محصولات
    setProdoctsname(jj);
    
  };

  return (
    <div>
      <div id="productcontainer">
        <img id="productimg" src={newprodoctname.ax} width="250px" height="200px" alt="Product Image"/>
        <h1 id="productname" style={{margin:"15px"}}> {newprodoctname.name}</h1>
        {newprodoctname.mojody ? (
          newprodoctname.newprice ? (
            <div>
              <h3 id="productprice" style={{ margin: "15px" }}>
                قیمت: 
                <del style={{ marginLeft: "5px" }}>{newprodoctname.price}</del>
                <div style={{ display: "inline-block", margin: "0px", color: "red" }}>
                  {newprodoctname.newprice}
                </div> 
                تومان
              </h3>
            </div>
          ) : (
            <h3 id="productprice" style={{ margin: "15px" }}>
              قیمت: {newprodoctname.price} تومان
            </h3>
          )
 
        ) : <h2>عدم موجودی</h2> }

        
        
        <h5 style={{marginBottom:"10px",marginTop:"2px"}}>وزن: {newprodoctname.net} کیلو</h5>
        <div id="productbuyitem">
            <button id="productbuybutton" onClick={handelbasket} disabled={!newprodoctname.mojody}>خرید</button>

            <div id="productbuynum" >
                <button className="productbuym"  onClick={() => handelsetqty(newprodoctname.qty + 1)}>+</button>
                <input id="productbuynumber" type="text" value={newprodoctname.qty}  onChange={(e) => handelsetqty(Number(e.target.value))} />
                <button className="productbuym" onClick={() => handelsetqty(newprodoctname.qty - 1)}>-</button>
             </div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Prodoct;
