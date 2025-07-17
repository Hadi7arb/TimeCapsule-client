import React from "react";
import './SignIn.css';
const SignIn = () => {

    return (
        <div className="signin-page-container">
            <div className="signin-form-card">
                <h1>Sign in to your account</h1>
                <form> 
                    <div className="form-group">
                        <label for="email">Email</label><br/>
                        <input type="email" id="email" name="lname" value="" placeholder="Example@gmail.com"/><br/>
                    </div>
                    <div className="form-group password-group">
                        <label for="password">password</label><br/>
                        <input type="password" id="password" name="password" value="" placeholder="Mypass1234"/><br/>
                    </div>
                    <button type="submit" className="signin-button">Sign In</button>
                    
                    
                </form> 
                <p className="Signup-prompt">Don't have an account? click <span><a href="#" className="signup-link">here</a></span></p>
            </div>
        </div>
    );
}

export default SignIn;