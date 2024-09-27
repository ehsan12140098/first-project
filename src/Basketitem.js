import React, { useState, useContext } from "react";
import { Text } from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Basketitem = ({ item, index }) => {
    // newitem را بر اساس پراپرتی item مقداردهی اولیه می‌کنیم
    const [newitem, setNewitem] = useState(item);
    const { basketelem, setBasketelem } = useContext(Text);

    // تابع برای تنظیم مقدار جدید
    const handelsetqty = (newQty) => {
        const updatedQty = Math.max(1, newQty); // جلوگیری از کاهش مقدار به کمتر از 1
        const updateditem = { ...newitem, qty: updatedQty }; // ایجاد کپی جدید با مقدار جدید

        setNewitem(updateditem); // به‌روزرسانی state مربوط به محصول

        // ایجاد کپی از basketelem و به‌روزرسانی آیتم
        const updatedBasket = [...basketelem];
        updatedBasket.splice(index, 1, updateditem); // به‌روزرسانی آیتم خاص در basketelem

        // به‌روزرسانی state مربوط به محصولات
        setBasketelem(updatedBasket);
    };

    // تابع برای حذف آیتم
    const handeldilit = (index) => {
      const yyy = [...basketelem];

      // حذف آیتم در اندکس مورد نظر
      yyy.splice(index, 1);
      // به‌روزرسانی basketelem با آرایه جدید
      setBasketelem(yyy);


    };
    
    return (
        <div>
            <div id="listkharid">
                {/* تصویر محصول */}
                <img
                    className="basketbakhsh"
                    id="listkharidimg"
                    src={item.ax}
                    style={{ borderRadius: "50%" }}
                    width="150px"
                    height="100px"
                    alt="Product Image"
                />

                {/* نمایش نام محصول */}
                <h3 className="basketbakhsh">نام محصول: {item.name} </h3>

                {/* نمایش قیمت محصول، در صورت وجود قیمت جدید */}
                <h3 className="basketbakhsh" style={{margin:"15px"}}>
                    قیمت: 
                    {item.newprice ? (
                        <>
                            <span style={{color: "red", margin: "0 0px"}}>{item.newprice}</span>
                            
                            <del style={{marginLeft:"5px"}}>{item.price}</del>تومان
                        </>
                    ) : (
                        <>{item.price} تومان</>
                    )}
                </h3>

                {/* نمایش وزن محصول */}
                <h5 className="basketbakhsh">وزن: {item.net} کیلو</h5>

                {/* بخش افزایش و کاهش مقدار */}
                <div className="basketbakhsh" style={{ transform: item.newprice ? "translate(0px)" : "translate(25px)" }}>

                    <div>
                        <button className="productbuym" onClick={() => handelsetqty(item.qty + 1)}>+</button>
                        <input
                            id="productbuynumber"
                            type="text"
                            value={item.qty}
                            onChange={(e) => handelsetqty(Number(e.target.value))}
                        />
                        <button className="productbuym" onClick={() => handelsetqty(item.qty - 1)}>-</button>
                        <FontAwesomeIcon
                    icon={faTrash}
                    style={{
                        cursor: "pointer",
                        paddingLeft:"40px"
                    }}
                    onClick={() => handeldilit(index)} // استفاده از id محصول به جای index
                />
                    </div>
                </div>

                {/* آیکون حذف محصول */}
                
            </div>
        </div>
    );
};

export default Basketitem;
