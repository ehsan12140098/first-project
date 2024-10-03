import React, { useContext, useState ,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { Link, useLoaderData } from "react-router-dom";
import { Text } from "./Text";
import { click } from "@testing-library/user-event/dist/click";

const Topmenu = ({ setOpenclosesidebar }) => {
    const [searchProduct, setSearchProduct] = useState([]);
    const { basketelem, prodoctsname ,userdatas,setUserdatas} = useContext(Text);
    const handleSearch = (value) => {
        const filteredProducts = prodoctsname.filter(product => product.name.includes(value));
        setSearchProduct(filteredProducts);
    };

    const handleFocus = (e) => {
        e.target.style.outline = "none";
        handleSearch(e.target.value);
        document.getElementById("serchprodoc").style.display = "block"; // نمایش لیست جستجو
    };

    const handleClickOutside = (event) => {
        const searchBox = document.getElementById("serchprodoc");
        const searchInput = document.getElementById("serchtext");

        // اگر کلیک خارج از ناحیه جستجو باشد، لیست مخفی شود
        if (  !searchInput.contains(event.target)) {
            searchBox.style.display = "none";
        }
    };

    // استفاده از useEffect برای افزودن و حذف کردن event listener
    useEffect(() => {
        // افزودن event listener
        document.addEventListener("click", handleClickOutside);

        // بارگذاری داده‌ها از localStorage
        const userDataString = localStorage.getItem("Userdatas");
        if (userDataString) {
            const userData2 = JSON.parse(userDataString);
            setUserdatas(userData2);  // اینجا داده‌های ذخیره‌شده را در استیت ذخیره می‌کنید
        }

        // حذف event listener هنگام خروج از کامپوننت
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);  // اجرا فقط یک بار هنگام mount شدن کامپوننت
    
    return (
        <div id="top-menu">
            <div id="basketicon-reg">
                <div id="basketicon">
                    <span>{basketelem.length}</span>
                    <Link to="/Basket">
                        <FontAwesomeIcon className="icon" icon={faShoppingBasket} size="2x" />
                    </Link>
                </div>
                
                <div id="reg">
                    
                    {userdatas?
                    <>
                    <Link to="#" style={{  fontSize: "20px" }}>کاربر گرامی {userdatas.name}</Link>
                    <span id="leftlogin" style={{  fontSize: "20px" ,cursor:"pointer",marginRight:"7px"}} onClick={()=>{localStorage.removeItem("Userdatas"); setUserdatas(null);}} > خروج </span>
                    
                    </>
                   

                    :
                    
                    <Link to="/Login" style={{  fontSize: "20px" }}>  ورود/عضویت  </Link>
                         
                    
                   
                    }
                    
                </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <h2 style={{ marginTop: "1px", marginBottom: "1px" }}>برنج پنج ستاره شمال</h2>
                <img src="/image/logo.jpg" width="60" height="60" style={{ borderRadius: "50%" }} alt="Logo" />
            </div>
            <div id="srech-sidebaricon">
                <div id="serch">
                    <div id="serchprodoct">
                        <input
                            id="serchtext"
                            type="text"
                            placeholder="جستجو"
                            onFocus={handleFocus}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <Link to="#">
                            <FontAwesomeIcon className="icon" icon={faSearch} />
                        </Link>
                        <div id="serchprodoc" style={{ display: "none" }}> {/* مخفی کردن پیش‌فرض */}
                            <ul>
                                {searchProduct.map((product , index) => (
                                    <li key={index}> 
                                        <Link to={`/Productserched/${product.number}`}  style={{
                                            color:"black",
                                            textDecoration:"none",
                                            fontSize:"16px"
                                        }}>
                                            {product.name}
                                            <h4 style={{margin:"0px"}}>
                                                قیمت:
                                                {product.newprice ? (
                                                    <>
                                                        <span style={{ color: "red", margin: "0 0px" }}>{product.newprice}</span>
                                                        <del>{product.price}</del> تومان
                                                    </>
                                                ) : (
                                                    <>{product.price} تومان</>
                                                )}
                                            </h4>
                                        </Link>
                                        
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div id="sidebaricon" style={{ marginTop: "5px" }}>
                    
                        <FontAwesomeIcon className="sidebaricon" style={{cursor:"pointer"}} onClick={() => setOpenclosesidebar(false)} icon={faBars} size="2x" />
                    
                </div>
            </div>
        </div>
    );
};

export default Topmenu;
