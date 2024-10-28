import EmployeeListItem from "../EmployeeListItem/EmployeeListItem";
import employeeList from "/Users/anton/Desktop/RTT-43/320H.1/alab320/utility/data.mjs";

function EmployeeList() {
  const list = employeeList.map((emp, index) => (
    <EmployeeListItem key={index} employee={emp} />
  ));

  return (
    <ul
      style={{
        border: "1px solid #ddd", 
        padding: "10px", 
        margin: "10px 0", 
       
      }}
    >
      {list}
    </ul>
  );
}

export default EmployeeList;