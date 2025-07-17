import React from "react";
import './SignUp.css';
const SignUp = () => {

    return (
        <div className="signup-page-container">
            <div className="signup-form-card">
                <h1>Create an account</h1>
                <form>
                    <div className="form-group">
                        <label for="FullName">Name</label><br/>
                        <input type="text" id="fname" name="fname" value="" placeholder="Firstname Lastname"/><br/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label><br/>
                        <input type="email" id="email" name="lname" value="" placeholder="Example@gmail.com"/><br/>
                    </div>
                    <div className="password-fields-row">
                        <div className="form-group password-group">
                            <label for="password">password</label><br/>
                            <input type="password" id="password" name="password" value="" placeholder="Mypass1234"/><br/>
                        </div>
                        <div className="form-group password-group">
                            <label for="confirmPassword">Confirm password</label><br/>
                            <input type="password" id="confirmPassword" name="confirmPassword" value="" placeholder="Mypass1234"/><br/><br/>
                        </div>  
                    </div>
                    
                    <button type="submit" className="signup-button">Sign Up</button>
                    
                    
                </form> 
                <p className="login-prompt">Already have an account? <a href="#" className="login-link">Login</a></p>
            </div>
        </div>
    );
}

export default SignUp;