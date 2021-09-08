import React from 'react';
import style from "./index.module.css";
import { useState } from "react";
import axios from 'axios';

const SignUp = () => {

  const [firstName,setFirstName] = useState('');
  const [lastName,setLastName] = useState('');
  const [userName,setUserName] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
    
    const Handlersubmit = () => {

        alert("record sucessfull submit");
      console.log(firstName);
      console.log(lastName);
      console.log(userName);
      console.log(email);
      console.log(password);
    


      axios.post('http://localhost:3002/api/user/signup', {
       
        firstName: firstName,
        lastName: lastName,
        userName:userName,
        email: email,
        password:password,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    return (
        <div className={style["container"]}>
            <form action="" className="form">
            <div>
            <img className={style["img sch"]} src="s1.png" alt="" />

            <h1 className={style['h1']}>SIGN UP</h1>
             </div>
             <div>
            
              <input className={style["inputs"]} type="text" name="FirstName" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="First Name" />
              <img className={style["icons"]} src="Icon awesome-user-alt.png" alt="" width="13%" />
              </div><div>
              
              <input className={style["inputs"]} type="text" name="LastName" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="Last Name" />
              <img className={style["icons"]} src="Icon awesome-user-alt.png" alt="" width="13%" />
              
          <input
            className={style["inputs"]}
            type="text"
            name="userName"
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            placeholder="UserName"
          />
          <img
            className={style["icons"]}
            src="Icon awesome-user-alt.png"
            alt=""
            width="13%"
          />
              <input
            className={style["inputs"]}
            type="text"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email"
          />
          <img
            className={style["icons"]}
            src="Icon material-email.png"
            alt=""
            width="40px"
          />
          <input className={style["inputs"]} type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
              <img className={style["icons"]} src="Icon awesome-lock.png" alt="" width="13%" />
        </div>
           {/*<div className={style['box3']}>
        <button className={style['sign1']}>SIGN UP</button>
    </div>*/}
        <div className="container">
          <button onClick= {Handlersubmit} className={style['button']}>SIGN UP</button>
        </div>
        </form>
        <div className={style["side"]}>
        <img src="Mask Group 1.png" alt="" width="600px" />
      </div>

        </div>    
    )
}


export default SignUp
