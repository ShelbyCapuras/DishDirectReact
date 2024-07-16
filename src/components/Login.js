import React from 'react'
import './Login.css'


const Login = () => 
    
        <div class="container">
        <h1>Login Page</h1>
        <div class="card">

        <div class="userContainer">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>
        </div>
        
        <div class="passContainer">
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <div class="submitContainer">
        <button type="submit">Login</button>
        </div>
        </div>
        </div>
        </div>

export default Login