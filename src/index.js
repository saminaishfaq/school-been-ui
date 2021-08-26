import React from "react";
import style from "./index.module.css";
import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [userName,setUserName]=useState("");
  const [password,setPassword]=useState("");
     
    const Handlersubmit =() => {
      alert("login successfuly");
      console.log(userName);
      console.log(password);


      axios.post('http://localhost:3001/api/user/Login', {
       
        
        userName:userName,
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
        <h1 className={style["h1"]}>WELLCOME </h1>
        <div>
          <img className={style["img sch"]} src="s1.png" alt="" />
        </div>
        <h2 className={style["h2"]}>
          Login to get in the moment updates on the things that intrest you
        </h2>

        <div>
          <input
            className={style["inputs"]}
            type="text"
            name="username"
            value={userName} onChange={(e)=>setUserName(e.target.value)}
            placeholder="UserName"
          />
          <img
            className={style["icons"]}
            src="Icon awesome-user-alt.png"
            alt=""
            width="13%"
          />
        </div>
        {/*<div className={style["box2"]}>
          <img
            className={style["Icon1.img"]}
            src="Icon awesome-lock.png"
            alt=""
            width="13%"
          />
          {/*<input type="password" name="password" className="box" placeholder="Password"/>
        </div>
        <div>
          <img className={style["icons"]} src="Icon awesome-lock.png" alt=""/>
          <input  class="input-field" type="password" name="password" placeholder="Password"/>

  </div>*/}
        <div>
          <input
            className={style["inputs"]}
            type="text"
            name="password"
            value={password} onChange={(e)=>setPassword(e.target.value)}
            placeholder="password"
          />
          <img
            className={style["icons"]}
            src="Icon awesome-lock.png"
            alt=""
            width="13%"
          />
        </div>
        <div>
          <input type="checkbox" value="lsRememberMe" id="rememberMe" />
          <label for="rememberMe">Remember me</label>

          <label for="Forgot Password">Forgot Password</label>
        </div>
        <br></br>
         {/*<div className={style["box3"]}>
          <h2 className={style["sign1"]}>SIGN IN</h2>
          <input type="Sign In"  name="sign in" className="box" placeholder="SIGN IN"/>
        </div>*/}
        <div className="container">
          <button onClick= {Handlersubmit} className={style['button']}>SIGN UP</button>
        </div>
      </form>
      <div className={style["side"]}>
        <img src="Mask Group 1.png" alt="" />
      </div>
    </div>
  );
};

export default Login;
