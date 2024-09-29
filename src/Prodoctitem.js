import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prodoct from "./Prodoct";
import { Text } from "./Text";

const Prodoctserched = () => {
    const { num } = useParams(); // دریافت پارامتر از URL
    const [u, setU] = useState(null); // استفاده از state برای ذخیره محصول فیلتر شده
    const { prodoctsname } = useContext(Text); // دسترسی به لیست محصولات از کانتکست

    useEffect(() => {
        // فیلتر کردن محصولات براساس عدد پارامتر URL
        const filteredProducts = prodoctsname.filter(product => product.number == num);
       
        if (filteredProducts.length > 0) {
            setU(filteredProducts[0]); // مستقیماً اولین محصول را در state ذخیره کن
        }
    }, [num, prodoctsname]); // این useEffect هر بار که num یا لیست محصولات تغییر کند، اجرا می‌شود
    
    return (
        <div>
            {/* فقط در صورتی که محصولی پیدا شده باشد، کامپوننت Prodoct را نمایش بده */}
            {u ? <Prodoct key={u.number} prodoctname1={u} /> : <p>محصولی یافت نشد</p>}
        </div>
    );
};

export default Prodoctserched;
