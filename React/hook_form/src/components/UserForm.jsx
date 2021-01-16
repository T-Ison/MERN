import React, { useState } from  'react';
    
    
const UserForm = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
// Validations
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");  
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const firstNameValid = e => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First name is required!");
        } 
        else if(e.target.value.length < 2) {
            setFirstNameError("Must be 2 characters or longer!");
        }
        else{
            setFirstNameError("")
        }
    }
    const lastNameValid = e => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last name is required!");
        } 
        else if(e.target.value.length < 2) {
            setLastNameError("Must be 2 characters or longer!");
        }
        else{
            setLastNameError("")
        }
    }
    const emailValid = e => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } 
        else if(e.target.value.length < 5) {
            setEmailError("Must be 5 characters or longer!");
        }
        else{
            setEmailError("")
        }
    }
    // ----------------- e is the event input made by the user
    const passwordValid = e => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } 
        else if(e.target.value.length < 8) {
            setPasswordError("Must be 8 characters or longer!");
        }
        else{
            setPasswordError("")
        }

    }
    const confirmPasswordValid = e => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length < 1) {
            setConfirmPasswordError("Password confirmation is required!");
        } 
        else if(e.target.value != password) {
            setConfirmPasswordError("Passwords need to match!");
        }
        else{
            setConfirmPasswordError("")
        }
    }
    
    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ? 
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3> 
                }

                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={firstNameValid} />
                    { firstNameError ? <p style={{color:'red'}}>{ firstNameError }</p> :'' }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={lastNameValid} />
                    { lastNameError ? <p style={{color:'red'}}>{ lastNameError }</p> :'' }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={emailValid} />
                    { emailError ? <p style={{color:'red'}}>{ emailError }</p> :'' }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={passwordValid} />
                        {/* type = "password" */}
                    { passwordError ? <p style={{color:'red'}}>{ passwordError }</p> :'' }
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="text" onChange={confirmPasswordValid} />
                        {/* type = "password" */}
                    { confirmPasswordError ? <p style={{color:'red'}}>{ confirmPasswordError }</p> :'' }
                </div>
                <input type="submit" value="Create User" />
            </form>
            <div>
                <h2>Your Form Data</h2>
                {firstName ? <p>First Name: {firstName}</p> :''}
                {lastName ? <p>Last Name: {lastName}</p> :''}
                {email ? <p>Email: {email}</p> :''}
                {password ? <p>Password: {password}</p> :''}
                {confirmPassword ? <p>Confirm Password: {confirmPassword}</p> :''}
            </div>
        </div>

    );
};
    
export default UserForm;