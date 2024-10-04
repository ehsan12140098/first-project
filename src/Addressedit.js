import React, { useEffect, useState } from "react";
import { FastField, Form, Formik, ErrorMessage } from "formik";
import * as Yup from 'yup';
import swal from "sweetalert";
import { useNavigate ,useParams } from "react-router-dom";  // ایمپورت useNavigate




// تعریف قوانین اعتبارسنجی با استفاده از Yup
const validationSchema = Yup.object({
    name: Yup.string().required("نام الزامی است"),
    family: Yup.string().required("نام خانوادگی الزامی است"),
    phone: Yup.string()
        
        .required("شماره همراه الزامی است"),
    Address: Yup.string().required("آدرس الزامی است"),
    Post: Yup.string()
        .matches(/^[0-9]{10}$/, "کد پستی باید 10 رقم باشد")
        .required("کد پستی الزامی است")
});


const Addressedit=()=>{
const navigate = useNavigate();  // استفاده از useNavigate
const [initialValues, setInitialValues] = useState({
    name: "",       
    family: "",     
    phone: "",     
    Address: "",    
    Post:""
});

const {index}=useParams();


const onSubmit = (values) => {
    let ll = JSON.parse(localStorage.getItem("SendingAddresses"));
    ll[index] = { ...values };  // اصلاح مستقیم آرایه اصلی
    localStorage.setItem("SendingAddresses", JSON.stringify(ll));
    
    // نمایش پیام موفقیت
    swal({
        title: "ویرایش آدرس",
        text: "آدرس با موفقیت ویرایش شد.",
        icon: "success",
        button: "باشه"
    }).then(() => {
        // هدایت به صفحه "send" پس از تایید پیام
        navigate("/send"); 
    });
};

    useEffect(() => {
        let lll = JSON.parse(localStorage.getItem("SendingAddresses"));
        let IIII=lll[index];
        console.log(IIII)

        if (IIII) {
            setInitialValues({
                name: IIII.name,       
                family: IIII.family,     
                phone: IIII.phone,     
                Address:IIII.Address,    
                Post:IIII.Post
            });
        }
        }, []); // هر دو مقدار را در useEffect وابسته قرار می‌دهیم


    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
             <div id="SendingAddresses">
                <h2 style={{textAlign:"center"}}>ویرایش نشانی </h2>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    enableReinitialize={true}
                >
                    <Form style={{width:"100%"}}>
                        <div style={{display:"flex",width:"100%",marginBottom:"20px",alignItems:"center"}}>
                            <label className="Addresslabel" htmlFor="name">نام</label>
                            <FastField className="Addressinput" type="text" name="name" placeholder="نام" />
                            <ErrorMessage style={{marginRight:"7px"}} name="name" component="div" className="error" />
                        </div>
                        <div style={{display:"flex",width:"100%",marginBottom:"20px",alignItems:"center"}}>
                            <label className="Addresslabel" htmlFor="family">نام خانوادگی</label>
                            <FastField className="Addressinput" type="text" name="family" placeholder="نام خانوادگی" />
                            <ErrorMessage style={{marginRight:"7px"}} name="family" component="div" className="error" />
                        </div>
                        <div style={{display:"flex",width:"100%",marginBottom:"20px",alignItems:"center"}}>
                            <label className="Addresslabel" htmlFor="phone">همراه</label>
                            <FastField className="Addressinput" type="text" name="phone" placeholder="همراه" />
                            <ErrorMessage style={{marginRight:"7px"}} name="phone" component="div" className="error" />
                        </div>
                        <div style={{display:"flex",width:"100%",marginBottom:"20px",alignItems:"center"}}>
                            <label className="Addresslabel" htmlFor="Address">آدرس</label>
                            <FastField className="Addressinput" type="text" name="Address" placeholder="آدرس" />
                            <ErrorMessage style={{marginRight:"7px"}} name="Address" component="div" className="error" />
                        </div>
                        <div style={{display:"flex",width:"100%",marginBottom:"20px",alignItems:"center"}}>
                            <label className="Addresslabel" htmlFor="Post">کدپستی</label>
                            <FastField className="Addressinput" type="text" name="Post" placeholder="کدپستی" />
                            <ErrorMessage style={{marginRight:"7px"}} name="Post" component="div" className="error" />
                        </div>
                        <button id="sabtneshani" type="submit">ثبت ویرایش</button>
                    </Form>
                </Formik>
            </div>
        </div>
           
        );
}

export default Addressedit;