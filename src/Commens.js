import React, { useEffect, useState } from 'react';
import CommentForm from './CommentForm';
import { FaStar } from 'react-icons/fa';


const Comments = () => {
  const [comments, setComments] = useState([]); // ذخیره نظرات
  const [name ,setName]=useState();


  const addComment = (newComment) => {
    setComments([...comments, newComment]); // اضافه کردن نظر جدید
  };


  useEffect(()=>{

    const userDataString = localStorage.getItem("Userdatas");
    const userData1 = JSON.parse(userDataString);
    if(userData1){
        setName(userData1.name)

    }  }

,[])

  return (
    <div style={{direction:"rtl", display:"flex",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:"90%",marginTop:"40px",marginBottom:"40px"}}>
            <div style={{marginTop:"40px",marginBottom:"40px",borderRadius:"30px",backgroundColor:"white",padding:"20px"}}>
                <h1 style={{textAlign:"center"}}>ارسال نظرات و پیشنهادات</h1>
                <CommentForm onSubmit={addComment} width="100%" />
            </div>
            
            <div style={{marginTop:"40px",marginBottom:"40px",borderRadius:"30px",backgroundColor:"white",padding:"20px"}}>
                <h1 style={{textAlign:"center"}}>نظرات کاربران</h1>
                {comments.length > 0 ? (
                    <ul style={{listStyle:"none",margin:"0",padding:"0"}}>
                    {comments.map((comment, index) => (
                        <li key={index} className='comments'>
                         <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
                            <span><span className='commenttitle'>نام:</span>{name}</span>
                            <span style={{display:"flex",alignItems:"center"}}><span className='commenttitle'>امتیاز:</span> 
                                <FaStar size={25} color={comment.rating >= 1 ? "#ffc107" : "#e4e5e9"}  />
                                <FaStar size={25} color={comment.rating >= 2 ? "#ffc107" : "#e4e5e9"}  />
                                <FaStar size={25} color={comment.rating >= 3 ? "#ffc107" : "#e4e5e9"}  />
                                <FaStar size={25} color={comment.rating >= 4 ? "#ffc107" : "#e4e5e9"}  />
                                <FaStar size={25} color={comment.rating >= 5 ? "#ffc107" : "#e4e5e9"}  />
                            </span>
                            <span><span className='commenttitle'>تاریخ:</span> {comment.dateTime}</span>
                         </div>
                         <p><span className='commenttitle'>نظر کاربر:</span>{comment.comment}</p>
                        
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p style={{textAlign:"center"}}>هنوز نظری ارسال نشده است.</p>
                )}
            </div>
        </div>
    </div>
  );
};

export default Comments;
