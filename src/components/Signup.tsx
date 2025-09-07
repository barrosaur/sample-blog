'use client';
import React, { useState } from "react";
import '@/styles/Forms.css'
import Image from "next/image";

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  
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
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <div className="wrapper">
          <label htmlFor="">Confirm password</label>
          <input 
            type="password"
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