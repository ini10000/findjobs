import React, { useState } from "react";
import Close from "../assets/images/Close.png";
import Upload from "../assets/images/uploadIcon.png";
import Button from "./Button";
import Input from "./Input";
import { FileUploader } from "react-drag-drop-files";

import "../assets/css/modal.css";

export default function Modal({ item, setShow, show, location }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [file, setFile] = useState(null);
  const handleChange = (fileName) => {
    setFile(fileName);
    console.log(file);
  };

  return (
    <div className={showHideClassName}>
      <div className=" modal-main">
        <form className="modal_body">
          <div onClick={() => setShow(false)} className="close_div">
            <img src={Close} alt="close" />
          </div>
          <div className="guest_job_header">
            <p className="guest_job_header_text app_header">{item.title}</p>
            <div className="guest_job_location test">
              <img height={19} src={location} alt="location" />
              <p className="guest_job_location_text">{item.location}</p>
            </div>
          </div>
          <Input label="First Name" name="firstname" type="text" />
          <Input label="Last Name" name="lastname" type="text" />
          <Input label="E-mail Address" name="email" type="email" />
          <Input label="Location" name="location" type="text" />
          <Input label="Phone Number" name="phone" type="number" />
          <Input
            name="cv"
            type="hidden"
            onChange={(e) => (e.target.value = file)}
          />
          <FileUploader handleChange={handleChange} name="CV">
            <div className="upload_container">
              <img height={40} src={Upload} alt="upload" />
              <p className="login_label">Drag and drop your CV here</p>
              <p className="login_label">or</p>
              <Button containerStyle={"browse"} title="Browse files" />
            </div>
          </FileUploader>
          <Button containerStyle="submit_button" title={"Submit Application"} />
        </form>
      </div>
    </div>
  );
}
