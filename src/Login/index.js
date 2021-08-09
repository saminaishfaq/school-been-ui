import React from 'react';
import style from './index.module.css';


const index = () => {
    return (
        <div className={style['container']}>
            <form action="" className="form">
                <h1 className={style['h1']}>WELLCOME </h1>
                <h2 className={style['h2']}>Login to get in the moment updates on the things that intrest you</h2>
                
                <div className={style['box']}>
                    
                <img className={style["Icon.img"]} src="Icon awesome-user-alt.png" alt="" width="13%"/>
                {/*<input type="text" name="username" className="box" placeholder="UserName"/>*/}
                </div>
                <br></br>
                <div className={style["box2"]}>

                 <img className={style["Icon1.img"]} src="Icon awesome-lock.png" alt="" width="13%"/>   
               { /*<input type="password" name="password" className="box" placeholder="Password"/>*/}
                </div>
                <br></br>
                <div>
                <input type="checkbox" value="lsRememberMe" id="rememberMe"/> 
                <label for="rememberMe">Remember me</label>
                
                <label for="Forgot Password">Forgot Password</label></div><br></br>
                <div className={style["box3"]}> 
                <h2 className={style["sign1"]}>SIGN IN</h2>
                {/*<input type="Sign In"  name="sign in" className="box" placeholder="SIGN IN"/> */}
                </div>

            </form>
            <div className= {style["side"]}>
                <img src="Mask Group 1.png" alt="" />

            </div>
            
        </div>
    )
}

export default index
