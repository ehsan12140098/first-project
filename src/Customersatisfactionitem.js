import React from "react";



const Customersatisfactionitem=({item})=>{





    return(
        <div id="Customeritem">
            <div style={{width:"100%"}}>
                <img id="Customeritemimge" src={item.imge} alt="barnameh"/>
            </div>
            <div style={{display:"flex" , justifyContent:"space-between"}}>
                <span className="Customeritemtext">شهرگیرنده :  {item.city}</span>
                <span className="Customeritemtext" style={{marginRight:"10px"}}>مقدارارسالی :  {item.mount} کیلو</span>
            </div>
            
        </div>
    )
}

export default Customersatisfactionitem;