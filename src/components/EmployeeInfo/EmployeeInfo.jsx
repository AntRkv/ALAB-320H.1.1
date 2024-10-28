import React from "react";
import "./EmployeeInfo.css";

function EmployeeInfo({
  firstName,
  lastName,
  jobTitle,
  officeNum,
  mobileNum,
  SMS,
  email,
}) {
  return (
    <div className="employee-info">
      <img
        src="placeholder.jpg"
        alt={`${firstName} ${lastName}`}
        className="employee-photo"
      />
      <h3 className="employee-name">
        {firstName} {lastName}
      </h3>
      <p className="employee-job">{jobTitle}</p>
      <div className="employee-contact">
        <p>
          <strong>Call Office:</strong> {officeNum}
        </p>
        <p>
          <strong>Call Mobile:</strong> {mobileNum}
        </p>
        <p>
          <strong>SMS:</strong> {SMS}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
      </div>
    </div>
  );
}

export default EmployeeInfo;
