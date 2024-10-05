import React, { useEffect, useState } from 'react';
import Customersatisfactionitem from './Customersatisfactionitem';
import { Customersatisfaction } from './Customersatisfactions';
import { useNavigate, useParams } from 'react-router-dom';
const Customersatisfaction1 = () => {
  const params=useParams();
  const navigate=useNavigate();

  const initialPage = parseInt(params.pageNumber, 10) || 1;

  const [currentPage, setCurrentPage] = useState(initialPage);
  const CustomersatisfactionPerPage = 6;
  const indexOfLastCustomersatisfaction = currentPage * CustomersatisfactionPerPage;
  const indexOfFirstCustomersatisfaction = indexOfLastCustomersatisfaction - CustomersatisfactionPerPage;

  const currentCustomersatisfaction= Customersatisfaction.slice(indexOfFirstCustomersatisfaction, indexOfLastCustomersatisfaction);

  const totalPages = Math.ceil(Customersatisfaction.length / CustomersatisfactionPerPage);

  useEffect(() => {
    navigate(`/Customersatisfaction1/${currentPage}`);
  }, [currentPage, navigate]);

  return (
  <div>
    
    <div id='Customersatisfactionitems'>
      <h1 style={{textAlign:"center"}}>بارنامه ها</h1>
      
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {currentCustomersatisfaction.map((item,index) => (
            <Customersatisfactionitem item={item} key={index} />
          ))}
      </div>
      

      {/* کنترل های پیمایش صفحات */}
      <div style={{display:"flex", justifyContent:"center"}}>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className='Customersatisfactionbutton'
        >
          صفحه قبلی
        </button>

        <span> صفحه {currentPage} از {totalPages} </span>

        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className='Customersatisfactionbutton'
        >
          صفحه بعدی
        </button>
      </div>
    </div>
  
  </div>);
};



export default Customersatisfaction1;