// src/Login.js
import { useState } from "react";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";



import React from 'react'

function Login() {
  return (
    <div className="container">
        <div className="left">
          <span>LPMS</span>
        </div>
        <div className="right">
           <div className="login-container">  
            <h1>Login</h1>
                <div className="">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Password id="password" />
                    </div>
                    <Button label="Login" />
                </div>
            </div>  
        </div>
        
    </div>
  )
}

export default Login ;  

