import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faPhone, faEnvelope, faMobile, faLocation, faHome } from '@fortawesome/free-solid-svg-icons';

const Aboutme = () => {
  return (
  <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    
        <div className="about-me">
        <h1>بازرگانی برنج پنج ستاره شمال</h1>
        <p><strong>تاریخ تاسیس:</strong> 1385</p>
        <p><strong>مدیر:</strong> آقای فرجی</p>

        <h2>درباره ما:</h2>
        <p>
            بازرگانی برنج پنج ستاره شمال با بیش از 18 سال تجربه در زمینه تامین و فروش برنج‌های اصیل ایرانی، یکی از معتبرترین مراکز در استان مازندران است. ما با تامین مستقیم از بهترین مزارع شمال کشور، انواع برنج‌های مرغوب از جمله هاشمی، طارم و دمسیاه را به مشتریان عزیز در سراسر ایران عرضه می‌کنیم. بازرگانی ما با تأکید بر کیفیت بالا و رضایت مشتری، امکان خرید حضوری و آنلاین را برای شما فراهم کرده است.
        </p>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}}>
                    <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column" ,padding:"20px"}}>
                        <img src="/image/karkhone.jpg" className="kesht11"/>
                        <span>کارخانه سورتینگ برنج</span>
                    </div>
                </div>
        <h2>تخصص‌ها:</h2>
        <ul style={{marginRight:"0px",padding:"20px"}}>
            <li>فروش عمده و خرده: برنج‌های مرغوب ایرانی به مشتریان خانگی و تجاری.</li>
            <li>ارسال به تمامی نقاط کشور: با نیسان و کامیون.</li>
            <li>بسته‌بندی بهداشتی و استاندارد: برای تمامی سفارشات.</li>
            <li>مشاوره تخصصی: در انتخاب برنج مناسب برای مصرف روزانه و مراسمات.</li>
        </ul>

        <h2>خدمات ما:</h2>
        <ol style={{marginRight:"0px",padding:"20px"}}>
            <li>خرید حضوری و آنلاین: خرید آسان برنج از فروشگاه ما در مازندران، جویبار، روستای پهناب یا از طریق پیج اینستاگرام.</li>
            <li>فروش عمده و خرده: تامین محصولات برای رستوران‌ها و فروشگاه‌ها.</li>
            <li>ارسال سریع و مطمئن: ارسال برنج‌های عمده به تمامی نقاط کشور با نیسان و کامیون.</li>
            <li>تضمین کیفیت: تمامی محصولات با ضمانت کیفیت و اصالت عرضه می‌شوند.</li>
        </ol>
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"20px"}}>
                                <img src="/image/neysan.jpg" className="kesht11" />
                                <span>بارگیری و ارسال با نیسان</span>
                        </div>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"20px"}}>
                                <img src="/image/kamion.jpg" className="kesht11"/>
                                <span>باریری وارسال با کامیون</span>
                        </div>
                    </div>
                </div>
        <h2>دستاوردهــا:</h2>
        <ul style={{marginRight:"0px",padding:"20px"}}>
            <li>تامین برنج برای بیش از [تعداد] رستوران و فروشگاه معتبر.</li>
            <li>جلب رضایت بیش از [تعداد] مشتری فعال در سراسر کشور.</li>
            <li>بیش از [تعداد] دنبال‌کننده فعال در پیج اینستاگرام و فروش مداوم از طریق آن.</li>
            <li>همکاری گسترده با کامیون‌داران و رانندگان نیسان برای ارسال سریع و مطمئن.</li>
        </ul>

        <h2>اطلاعات تماس:</h2>
        <p>
            
            <strong> اینستاگرام:</strong> <a href="https://www.instagram.com/panjesetareh" target="_blank" rel="noopener noreferrer">@panjesetareh</a>
        </p>
        <p>
        <FontAwesomeIcon icon={faMobile} size="1x" style={{margin:"0px",color:"black",marginLeft:"4px"}}/> 
            <strong>  تماس تلفنی:</strong> 09333587705
        </p>
        <p>
        <FontAwesomeIcon icon={faEnvelope} size="1x" style={{margin:"0px",color:"black", marginLeft:"4px"}}/> 

            <strong> ایمیل:</strong> ehsanf76f@gmail.com
        </p>
        <p>
        <FontAwesomeIcon icon={faHome} size="1x" style={{margin:"0px",color:"black", marginLeft:"4px",transform:"translatey(-5px)"}}/> 

            <strong>آدرس فروشگاه:</strong> مازندران، شهر جویبار، روستای پهناب</p>
        <h2>نقشه ما:</h2>
        <div id="map">
            <iframe
            src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d1237.662717763379!2d52.96319536105123!3d36.66282981754148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d36.662695027690596!2d52.96464749647063!5e0!3m2!1sen!2s!4v1726176622774!5m2!1sen!2s"
            width="300"
            height="180"
            style={{
                border: "2px solid rgb(128, 129, 126)",
                borderRadius: "20px",
                allowFullScreen: "",
                loading: "lazy",
                referrerPolicy: "no-referrer-when-downgrade"
            }}
            title="نقشه بازرگانی برنج پنج ستاره شمال"
            ></iframe>
        </div>
        </div>
  </div>
  );
}

export default Aboutme;
