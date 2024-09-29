import React, { useContext, useState} from "react";
import { Text } from "./Text";
import Prodoct from "./Prodoct";

const Prodocts = () => {
  const { prodoctsname } = useContext(Text);
  const [products, setProducts] = useState([...prodoctsname]);

  const handleSort = (e) => {
    const value = e.target.value;
    let sortedProducts = [...products];

    if (value === "0") {
      // مرتب‌سازی جدیدترین (فرض کنیم بر اساس شماره مرتب کنیم)
      sortedProducts.sort((a, b) => a.number - b.number);
    } else if (value === "1") {
      // مرتب‌سازی ارزان به گران
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (value === "2") {
      // مرتب‌سازی گران به ارزان
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };
  return (
    <div id="productscontainer">
      <select id="sorting" onChange={handleSort} onFocus={(e)=>{e.target.style.border="2px solid rgb(161, 155, 155)"}}>
        <option value="">مرتب سازی</option>
        <option value="0">جدید ترین</option>
        <option value="1">ارزان به گران</option>
        <option value="2">گران به ارزان</option>
      </select>
      <span style={{textAlign:"center",display:"block",fontSize:"40px" , fontWeight:"900",marginTop:"40px",}}>محصولات</span>
      <div id="products">
        {products.map((u, index) => (
          <Prodoct key={index} prodoctname1={u} />
        ))}
      </div>
    </div>
  );
};

export default Prodocts;
