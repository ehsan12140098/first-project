
import ReactDOM from 'react-dom';

import React, {  useState } from "react"; 
import { Text } from "./Text";
import Topmenu from './top-menu';
import Footer from './footer';
import { mahsolat } from './mahsolat';
import { BrowserRouter as Router, Route, Routes , link , Navigate} from 'react-router-dom';
import Sidebar from './sidebar';
import Prodocts from './Prodocts';
import Basketitems from './Basketitems';
import Prodoctserched from './Prodoctitem';
import Signup from './signup';
import Login from './Login';
import Insatagramlink from './insatagramlink';
const Ap=()=>{
    const [prodoctsname,setProdoctsname]=useState(mahsolat);
    const [openclosesidebar,setOpenclosesidebar]=useState(true);
    const [basketelem,setBasketelem]=useState([]);
    const [userdatas,setUserdatas]=useState(false);
    
    return(<Text.Provider value={{prodoctsname,setProdoctsname,basketelem,setBasketelem,userdatas,setUserdatas}}>
      <div >
 
      <Router>
        <Topmenu openclosesidebar={openclosesidebar}  setOpenclosesidebar={setOpenclosesidebar}/>
        <Sidebar openclosesidebar={openclosesidebar}  setOpenclosesidebar={setOpenclosesidebar}/>
        <Insatagramlink/>
        <Routes>
      
          <Route path='Product' element={<Prodocts />} />
          <Route path='Basket' element={<Basketitems />}/>
          <Route path='Productserched/:num' element={<Prodoctserched />}/>
          <Route path='Signup' element={<Signup/>} />
          <Route path='Login' element={ <Login/>} />
          {/* روت پیش‌فرض (زمانی که هیچ روتی وارد نشد یا اشتباه بود) */}
          <Route path="*" element={<Navigate to="/Product" />} />
          
        </Routes>

      </Router>
      
      <Footer />
      </div>

    </Text.Provider>
      
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <Ap/>
 
);

