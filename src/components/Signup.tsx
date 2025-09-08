'use client';
import React, { useState } from "react";
import '@/styles/Forms.css'
import Image from "next/image";

const Signup = () => {
  const imgSize = 30;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [seePass, setSeePass] = useState(false);

  const showPassword = (e) => {
    e.preventDefault();

    setSeePass((prev) => !prev);
  }
  
  return (
    <div className="form-wrapper">
      <form action="">
        <h1>Signup</h1>

        <div className="wrapper">
          <label htmlFor="">Enter Name</label>
          <input 
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={e => setName(e.target.value)}
            required 
          />
        </div>

        <div className="wrapper">
          <label htmlFor="">Enter email</label>
          <input 
            type="email"
            placeholder="johndoe@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
          />
        </div>

        <div className="wrapper">
          <label htmlFor="">Enter password</label>
          <div className="pw-see">
            <input 
              type={seePass ? "text" : "password"}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button type="button" className="show-pass-btn" onClick={showPassword}>
              <Image
                src={seePass ? "/eye-open.svg": "/eye-closed.svg"}
                height={imgSize}
                width={imgSize}
                alt={seePass ? "Show Password" : "Hide Password"}
              />
            </button>
          </div>
        </div>

        <div className="wrapper">
          <label htmlFor="">Confirm password</label>
          <input 
            type={seePass ? "text" : "password"}
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
            required 
          />
        </div>

        <div className="btn-container">
          <button type="submit">Submit</button>
        </div>
      </form>

      <p>Already have an account? <span>Login here</span></p>
    </div>
  );
}

export default Signup;