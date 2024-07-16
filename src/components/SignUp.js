import React from 'react'
import './SignUp.css'



const SignUp = () => 
    
        <div class="container">
        <h1>SignUp Page</h1>
        <div class="card">

        <div class="userContainer">
        <label for="uname"><b>Username: </b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>
        </div>
        
        <div class="passContainer">
        <label for="psw"><b>Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <div class="confirmPassContainer">
        <label for="psw"><b>Confirm Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>

        <div class="emailContainer">
        <label for="psw"><b>Email: </b></label>
        <input type="email" placeholder="Enter Password" name="psw" required/>

        <div class="phoneNoContainer">
        <label for="psw"><b>Contact: </b></label>
        <input type="number" placeholder="Enter Password" name="psw" required/>

        <div class="submitContainer">
        <button type="submit">Register</button>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        

export default SignUp