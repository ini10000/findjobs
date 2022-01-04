import React from "react";
import Close from "../assets/images/Close.png";
import Button from "./Button";
import Input from "./Input";

import "../assets/css/modal.css";

export default function CreateModal({ setShow, show }) {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <div className=" modal-main">
        <div className="modal_body">
          <div onClick={() => setShow(false)} className="close_div">
            <img src={Close} alt="close" />
          </div>
          <div className="guest_job_header create_header">
            <p className="guest_job_header_text app_header">New Job</p>
            <p className="guest_job_description">
              Kindly provide the required information to get matched with
              suitable candidates
            </p>
          </div>
          <Input label="Job Title" name="title" type="text" />
          <Input label="Company Name" name="company" type="text" />
          <Input label="Location" name="location" type="text" />
          <Input
            label="What type of employment is it"
            name="type"
            type="select"
            options={[
              "Full-time",
              "Temporary",
              "Contract",
              "Permanent",
              "Internship",
              "Volunteer",
            ]}
          />
          <Input label="Salary Range" name="salary" type="number" />
          <Input
            label="What are the work conditions"
            name="type"
            type="select"
            options={["Remote", "Part Remote", " On-Premise"]}
          />
          <Input label="Submission deadline" name="deadline" type="date" />
          <Input
            label="What sector is this job categorized under?"
            name="category"
            type="select"
            options={[
              "Tech",
              "Health care",
              "Hospitality",
              "Customer Service",
              "Marketing",
            ]}
          />
          <Button containerStyle="submit_button" title={"Submit Application"} />
        </div>
      </div>
    </div>
  );
}
