import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConPassword] = useState("");
    const [FNameError, setFNameError] = useState("");
    const [LNameError, setLNameError] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [PasswordError, setPasswordError] = useState("");
    const [ConPasswordError , setConPasswordError] = useState("");
    
//===check names length
    const handleFName = (e) => {
        setFirstName(e.target.value);//SET
        if(e.target.value.length < 1) {
            setFNameError("")
        } else if(e.target.value.length < 2) {
            setFNameError("First Name must be at least 2 characters!")
        } else if(e.target.value.length >= 2) {
            setFNameError("")
        }
    }

    const handleLName = (e) => {
        setLastName(e.target.value);//SET
        if(e.target.value.length < 1) {
            setLNameError("")
        } else if(e.target.value.length < 2) {
            setLNameError("Last Name must be at least 2 characters!")
        } else if(e.target.value.length >= 2) {
            setLNameError("")
        }
    }
//===check email length
    const handleEmail = (e) => {
        setEmail(e.target.value);//SET
        if(e.target.value.length < 1) {
            setEmailError("")
        } else if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!")
        } else if(e.target.value.length >= 5) {
            setEmailError("")
        }
    }
//===check password length
    const handlePassword = (e) => {
        setPassword(e.target.value);//SET
        if(e.target.value.length < 1) {
            setPasswordError("")
        } else if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters!")
        } else if(e.target.value.length >= 8) {
            setPasswordError("")
        }
    }
//===check password match
    const handleConPassword = (e) => {
        setConPassword(e.target.value);//SET
        if(e.target.value !== password) {//Check values against each other (Use e.target.value or check will run asynchronous)
            console.log(password, confirmPassword)
            setConPasswordError("Passwords do not match!")
        } else {
            setConPasswordError("")
        }
    }
    
    return(
        <div>
            <form onSubmit={ (e) => e.preventDefault() }>
                <div>
                    <label>First Name: </label> 
                    <input type="text" onChange={ handleFName } />
                    {FNameError ?
                    <p>{FNameError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Last Name: </label> 
                    <input type="text" onChange={ handleLName } />
                    {LNameError ?
                    <p>{LNameError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Email Address: </label> 
                    <input type="text" onChange={ handleEmail } />
                    {EmailError ?
                    <p>{EmailError}</p> :
                    ''
                    }
                </div>
                <div>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                    {PasswordError ?
                    <p>{PasswordError}</p>:
                    ''
                    }
                </div>
                <div>
                    <label> Confirm Password: </label>
                    <input type="text" onChange={ handleConPassword } />
                    {ConPasswordError ?
                    <p>{ConPasswordError}</p>:
                    ''
                    }
                </div>
                <input type="submit" value="Create User" />
            </form>
        </div>
    );
};

export default UserForm;