import ReactDOM from 'react-dom';
import React, { useEffect, useState, useRef } from "react"; 
import { Text } from "./Text";
import Topmenu from './top-menu';
import Footer from './footer';
import { mahsolat } from './mahsolat';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './sidebar';
import Prodocts from './Prodocts';
import Basketitems from './Basketitems';
import Prodoctserched from './Prodoctitem';
import Signup from './signup';
import Login from './Login';
import Send from './Send';
import Insatagramlink from './insatagramlink';
import SendingAddresses from './SendingAddresses';
import Addressedit from './Addressedit';
import Sendingway from './Sendingway';
import { Sendingwayss } from './Sendingways';
import Dargah from './Dargah';
import Customersatisfaction1 from './Customersatisfaction';
import Kesht1 from './kesht1';

const Ap = () => {
  const [prodoctsname, setProdoctsname] = useState(mahsolat);
  const [openclosesidebar, setOpenclosesidebar] = useState(true);
  const [basketelem, setBasketelem] = useState([]);
  const [userdatas, setUserdatas] = useState(false);
  const [totalprice, setTotalprice] = useState(false);
  const [totalnewprice, setTotalnewprice] = useState(false);
  const [total, setTotal] = useState(false);
  const [Sendingways, setSendingways] = useState(Sendingwayss);

  const sidebarRef = useRef(null);
  const topmenuRef = useRef(null);

  const handlesidebarOut = (event) => {
  
    if (
      sidebarRef.current && 
      !sidebarRef.current.contains(event.target) &&
      topmenuRef.current && 
      !topmenuRef.current.contains(event.target)
    ) {
      setOpenclosesidebar(true);  // بستن سایدبار
    }
  };

  useEffect(() => {
    document.addEventListener("click", handlesidebarOut);
    return () => {
      document.removeEventListener("click", handlesidebarOut);
    };
  }, []);

  return (
    <Text.Provider value={{ prodoctsname, setProdoctsname, basketelem, setBasketelem, userdatas, setUserdatas,
      totalprice, setTotalprice, totalnewprice, setTotalnewprice, total, setTotal, Sendingways
    }}>
      <div>
        <Router>
          <Topmenu openclosesidebar={openclosesidebar} setOpenclosesidebar={setOpenclosesidebar} ref={topmenuRef} />
          <Sidebar openclosesidebar={openclosesidebar} setOpenclosesidebar={setOpenclosesidebar} ref={sidebarRef} />
          <Insatagramlink />
          <Routes>
            <Route path='Product' element={<Prodocts />} />
            <Route path='Basket' element={<Basketitems />} />
            <Route path='Productserched/:num' element={<Prodoctserched />} />
            <Route path='Signup' element={<Signup />} />
            <Route path='Login' element={<Login />} />
            <Route path='Send' element={<Send />} />
            <Route path='SendingAddresses' element={<SendingAddresses />} />
            <Route path="Addressedit/:index" element={<Addressedit />} />
            <Route path="Sendingway" element={<Sendingway />} />
            <Route path="Dargah" element={<Dargah />} />
            <Route path="Customersatisfaction1/:p" element={<Customersatisfaction1 />} />
            <Route path="Kesht1" element={<Kesht1 />} />

            <Route path="*" element={<Navigate to="/Product" />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Text.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Ap />);
