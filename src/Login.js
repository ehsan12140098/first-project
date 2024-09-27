import { Formik, Form, FastField, ErrorMessage } from "formik";
import React, { useContext, useEffect, useRef, useState } from "react";
import { json, Link, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { Text } from "./Text";
import swal from "sweetalert";

const initialValues = {
    name: "",
    password: ""
};

// قوانین اعتبارسنجی با استفاده از Yup
const validationSchema = Yup.object({
    name: Yup.string()
        .required('نام الزامی است'),
        password: Yup.string()
        .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
        .matches(/[^a-zA-Z0-9]{2,}/, 'رمز عبور باید حداقل ۲ کاراکتر خاص داشته باشد')
        .required('رمز عبور الزامی است'),
});



const Login = () => {
    const [userData,setUserData]=useState({});
    const myref=useRef();
    const navigate=useNavigate();
    const {userdatas,setUserdatas}=useContext(Text)
    const [initialValues, setInitialValues] = useState({
        name: "",
        password: ""
    });

    
    useEffect(() => {
        const userDataString = localStorage.getItem("users");
        const userData1 = JSON.parse(userDataString);
        
        setUserData({...userData1})
        
        const savedUser = JSON.parse(localStorage.getItem("Login"));
        if (savedUser) {
            setInitialValues({
                name: savedUser.name,
                password: savedUser.password
            });
        }
        
    }, []);

    const onSubmit = (values) => {
        if(values.name===userData.name&&values.password==userData.password){
            myref.current.style.display="none";
            localStorage.setItem("Userdatas",JSON.stringify(userData));

            localStorage.setItem("Login",JSON.stringify(values));
            swal(` کاربر گرامی ${values.name}`, "ورود شما با موفقیت انجام شد", "success")
            .then(() => {
                setUserdatas(userData);
                navigate("/Product")

            });
        // اینجا می‌توانید عملیات ورود را انجام دهید
        }
        else{
            
            myref.current.style.display="block";
        }
    };
    return (
        <div id="login">
            <div>
            
            <div id="logincontainer">
            <h1 id="logintitle">ورود</h1>
                <span ref={myref} style={{color:"red",fontSize:"14px",display:"none"}}>نام یا رمز عبور اشتباه می باشد.</span>
                <Formik enableReinitialize={true}  initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div>
                            <label className="loginlabel" htmlFor="name">نام:</label>
                            <FastField className="logininput" type="text" name="name" placeholder="نام" />
                            <ErrorMessage name="name" component="div" className="error" />
                        </div>
                        <div>
                            <label className="loginlabel" htmlFor="password">رمز عبور:</label>
                            <FastField className="logininput" type="password" name="password" placeholder="رمز عبور" />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <button id="loginbutton" type="submit">ورود</button>
                    </Form>
                </Formik>
                
            </div>
            <span style={{fontSize:"20px",float:"right"}}>  ورود به فرم <Link to="/Signup" style={{textDecoration:"none"}}>ثبت نام</Link> </span>
            </div>
        </div>
    );
}

export default Login;
