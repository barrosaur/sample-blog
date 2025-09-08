'use client';
import React, { useState } from "react";
import '@/styles/Forms.css'

interface LoginProps {
  onSwitchComp: () => void;
}

const Login = ({ onSwitchComp } : LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="form-wrapper">
      <form action="">
        <h1>Login</h1>

        <div className="wrapper">
          <label htmlFor="">Email</label>
          <input 
            type="email"
            placeholder="Ex. johndoe@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>

        <div className="wrapper">
          <label htmlFor="">Password</label>
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)} 
          />
        </div>

        <div className="btn-container">
          <button type="submit">Login</button>
        </div>
      </form>

      <p>Don't have an account? <span onClick={onSwitchComp}>Sign up here</span></p>
    </div>
  );
}

export default Login;