import React from "react";
import "../assets/css/login.css";

export default function Input({ label, type, name, value }) {
  return (
    <div className="input_con">
      <label className="login_label app_label">{label}</label>
      <input value={value} name={name} className="input " type={type} />
    </div>
  );
}
