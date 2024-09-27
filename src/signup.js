import { FastField, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup';
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const initialValues = {
    name: "",       // مقدار اولیه فیلد نام
    family: "",     // مقدار اولیه فیلد نام خانوادگی
    gender: "",     // مقدار اولیه جنسیت
    email: "",      // مقدار اولیه ایمیل
    need: 100,      // مقدار اولیه مصرف
    phone: "",      // مقدار اولیه شماره همراه
    password: '',   // مقدار اولیه رمز عبور
    confirmPassword: '', // مقدار اولیه تایید رمز عبور
};

// قوانین اعتبارسنجی با استفاده از Yup
const validationSchema = Yup.object({
    name: Yup.string().required('نام الزامی است'),
    family: Yup.string().required('نام خانوادگی الزامی است'),
    phone: Yup.string().matches(/^09\d{9}$/, 'شماره همراه معتبر نیست').required('شماره همراه الزامی است'),
    email: Yup.string().email('ایمیل معتبر نیست').required('ایمیل الزامی است'),
    gender: Yup.string().required('انتخاب جنسیت الزامی است'),
    need: Yup.number().min(50, 'مقدار باید بیشتر از 50 باشد').max(1000, 'مقدار باید کمتر از 1000 باشد').required('میزان مصرف الزامی است'),
    password: Yup.string()
    .min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد')
    .matches(/[^a-zA-Z0-9]{2,}/, 'رمز عبور باید حداقل ۲ کاراکتر خاص داشته باشد')
    .required('رمز عبور الزامی است'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'رمز عبور مطابقت ندارد')
    .required('تأیید رمز عبور الزامی است')
});




const Signup = () => {
    const navigate=useNavigate();

    const onSubmit = (values) => {
        console.log('Submitting form', values); // بررسی اینکه تابع فراخوانی می‌شود
        localStorage.setItem("users", JSON.stringify(values));
        swal("تبریک", "ثبت‌ نام با موفقیت انجام شد", "success")
            .then(() => {
                navigate("/Product");
            });
    };

    return (
        <div id="signup" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div id="signupcontainer">
                <h1 id="signuptittel">ثبت نام </h1>
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    <Form>
                        <div className="contains">
                            <div>
                                <label className="signuplabel" htmlFor="name">نام :</label>
                                <FastField className="signupinput" type="text" name="name" placeholder="نام" />
                                <ErrorMessage name="name" component="div" className="error" />
                            </div>
                            <div>
                                <label className="signuplabel" htmlFor="family">نام خانوادگی :</label>
                                <FastField className="signupinput" type="text" name="family" placeholder="نام خانوادگی" />
                                <ErrorMessage name="family" component="div" className="error" />
                            </div>
                        </div>

                        <div className="contains">
                            <div>
                                <label className="signuplabel" htmlFor="phone">همراه:</label>
                                <FastField className="signupinput" type="text" name="phone" placeholder="همراه" />
                                <ErrorMessage name="phone" component="div" className="error" />
                            </div>
                            <div>
                                <label className="signuplabel" htmlFor="email">ایمیل:</label>
                                <FastField className="signupinput" type="email" name="email" placeholder="ایمیل" />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                        </div>

                        <div className="contains">
                            <div>
                                <label style={{ display: "block" }}> جنسیت:</label>
                                <div className="gender">
                                    <label>مرد</label>
                                    <FastField type="radio" name="gender" value="مرد" />
                                    <label>زن</label>
                                    <FastField type="radio" name="gender" value="زن" />
                                </div>
                                <ErrorMessage name="gender" component="div" className="error" />
                            </div>

                            <div>
                                <label className="signuplabel" htmlFor="need">میزان مصرف سالیانه برنج (کیلو):</label>
                                <FastField className="signupinput" type="number" name="need" min="50" max="1000" />
                                <ErrorMessage name="need" component="div" className="error" />
                            </div>
                        </div>

                        <div className="contains">
                            <div>
                                <label className="signuplabel" htmlFor="password">رمز عبور:</label>
                                <FastField className="signupinput" type="password" placeholder="رمز عبور" id="password" name="password" />
                                <ErrorMessage name="password" component="div" className="error" />
                            </div>

                            <div>
                                <label className="signuplabel" htmlFor="confirmPassword">تأیید رمز عبور:</label>
                                <FastField className="signupinput" type="password" id="confirmPassword" placeholder="رمز عبور" name="confirmPassword" />
                                <ErrorMessage name="confirmPassword" component="div" className="error" />
                            </div>
                        </div>

                        <button id="signupbutton" type="submit">ثبت نام</button>
                    </Form>
                </Formik>
            </div>
            
        </div>
    );
};

export default Signup;
