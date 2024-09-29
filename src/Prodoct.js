import React, { useContext, useEffect, useState } from "react";
import { Text } from "./Text"; 

const Prodoct = ({ prodoctname1 }) => {
  const [newprodoctname, setNewprodoctname] = useState(prodoctname1);
  const { prodoctsname, setProdoctsname, basketelem, setBasketelem } = useContext(Text);

  const handleBasket = () => {
    const productInBasket = basketelem.find(
      (item) => item.name === newprodoctname.name
    );

    let updatedBasket;

    if (productInBasket) {
      updatedBasket = basketelem.map((item) =>
        item.name === newprodoctname.name
          ? { ...item, qty: item.qty + newprodoctname.qty }
          : item
      );
    } else {
      updatedBasket = [...basketelem, newprodoctname];
    }

    setBasketelem(updatedBasket);
  };

  
  useEffect(() => {
    setNewprodoctname({ ...prodoctname1 });
  }, [prodoctname1]);

  const handleSetQty = (newQty) => {
    const updatedQty = Math.max(1, newQty);
    const updatedProdoct = { ...newprodoctname, qty: updatedQty };

    setNewprodoctname(updatedProdoct);

    const updatedProdocts = prodoctsname.map((product) =>
      product.number === newprodoctname.number ? updatedProdoct : product
    );

    setProdoctsname(updatedProdocts);
  };

  return (
    <div>
      <div id="productcontainer">
        <img id="productimg" src={newprodoctname.ax} width="200px" height="200px" alt="Product Image"/>
        <h1 id="productname" style={{margin: "15px"}}>{newprodoctname.name}</h1>
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

        <h5 style={{ marginBottom: "10px", marginTop: "2px" }}>وزن: {newprodoctname.net} کیلو</h5>
        <div id="productbuyitem">
          <button id="productbuybutton" onClick={handleBasket} disabled={!newprodoctname.mojody}>
            خرید
          </button>

          <div id="productbuynum">
            <button className="productbuym" onClick={() => handleSetQty(newprodoctname.qty + 1)}>+</button>
            <input
              id="productbuynumber"
              type="text"
              value={newprodoctname.qty}
              onChange={(e) => handleSetQty(Number(e.target.value))}
            />
            <button className="productbuym" onClick={() => handleSetQty(newprodoctname.qty - 1)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodoct;
