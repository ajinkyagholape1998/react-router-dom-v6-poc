import React from 'react'

function Puppeteer() {

    const handleLoginClick = () => {
        console.log("handleLoginClick")
    }

    return (
        <div>
            <p>Puppeteer</p>
            <span>Example</span>
            <div className='login-form-container'>
                <span>Login Form</span>
                <input type={"email"} placeholder="email" />
                <input type={"password"} placeholder="password" />
                <button onClick={handleLoginClick}>Login</button>
            </div>
        </div>
    )
}

export default Puppeteer