import React from "react";

export default function Button({ title, containerStyle, textStyle, onClick }) {
  return (
    <button
      className={`login_button ${containerStyle}`}
      // eslint-disable-next-line no-script-url
      onClick={onClick}
    >
      <p className={`button_text ${textStyle}`}>{title}</p>
    </button>
  );
}
