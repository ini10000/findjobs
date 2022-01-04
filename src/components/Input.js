import React from "react";
import "../assets/css/login.css";

export default function Input({ label, type, name, options, onChange }) {
  return (
    <div className="input_con">
      <label className="login_label app_label">{label}</label>
      {type === "select" ? (
        <select className="input" name={name}>
          {options.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>
      ) : (
        <input onChange={onChange} name={name} className="input" type={type} />
      )}
    </div>
  );
}
