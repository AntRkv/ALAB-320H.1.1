import React from "react";

function EmployeeListItem(props) {
  const itemStyle = {
    border: "1px solid #ddd", 
    padding: "10px", 
    marginBottom: "10px", 
  };

  return (
    <div style={itemStyle}>
      <h3>{props.employee.firstName + " " + props.employee.lastName}</h3>
      <p>{props.employee.jobTitle}</p>
    </div>
  );
}

export default EmployeeListItem;
