import React, { useState } from 'react';
import StarRating from './StarRating';
import { useNavigate } from 'react-router-dom';

const CommentForm = ({ onSubmit }) => {
  const [comment, setComment] = useState(''); // برای نگه داشتن متن نظر
  const [rating, setRating] = useState(null); // برای نگه داشتن امتیاز
const navigate=useNavigate();


const getCurrentDateTime = () => {
  const current = new Date();
  return `${current.toLocaleDateString()} `;
};

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = localStorage.getItem("Userdatas");
    if (!userData) {
        navigate("/login", { state: { from: "/Comments" } });
    } 
    
   else{
    if (comment && rating) {
      const dateTime = getCurrentDateTime();
        onSubmit({ comment, rating, dateTime  });
        setComment(''); // پاک کردن فیلد نظر پس از ارسال
        setRating(null); // پاک کردن امتیاز پس از ارسال
      } else {
        alert("لطفاً نظر و امتیاز را وارد کنید.");
      }
   }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label style={{display:"block",fontSize:"20px"}}>نظر شما:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          id='textarea'
          placeholder="نظر خود را بنویسید..."
        />
      </div>
      <div style={{display:"flex",width:"100%",alignItems:"center",justifyContent:"space-between",marginTop:"20px"}}>
            <div style={{display:"flex",alignItems:"center"}}>
                <label style={{fontSize:"20px"}}>امتیاز شما:</label>
                <StarRating onRatingSelect={setRating} /> {/* انتقال امتیاز به فرم */}
            </div>
            <button type="submit" id="Addressbottom2">ارسال نظر</button>
      </div>
      
    </form>
  );
};

export default CommentForm;
