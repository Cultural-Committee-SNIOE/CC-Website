import React, { useEffect, useState } from 'react';
import clubDetails from '../public/json/clubDetails.json';
import { login } from '@/operations/auth.fetch';
function Login() {
  const [clubEmail, setClubEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleEmailChange = (event) => {
    setClubEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({
      "email": clubEmail,
      "password": password,
    }).then((res) => {
      if (res.status === 200) {
        alert('Logged In Successfully');
        window.location.reload();
      } else if (res.status === 401) {
        alert('Does not exist');
      } else {
        alert('error from our side');
      }
    })
  };

  return (
    <div style={{ paddingTop: '5rem' }}>
      <input
        type="text"
        placeholder="Email"
        value={clubEmail}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
