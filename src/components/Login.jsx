import React, { useState } from "react";
import "./styles.css";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setMessage("Please fill all fields");
      return;
    }

    setMessage("Login Successful ✔");
  };

  return (
    <div className="page-box">
      <div className="card">
        <h2 className="title">Login</h2>

        <form onSubmit={handleLogin} className="form">
          <input
            type="text"
            placeholder="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input"
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="input"
          />

          <button className="btn">Login</button>
        </form>

        {message && <p className="msg">{message}</p>}
      </div>
    </div>
  );
};

export default Login;
