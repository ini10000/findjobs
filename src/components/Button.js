import React from "react";

export default function CustomButton({
  title,
  containerStyle,
  textStyle,
  click,
}) {
  return (
    <button className={`login_button ${containerStyle}`} onClick={click}>
      <p className={`button_text ${textStyle}`}>{title}</p>
    </button>
  );
}
