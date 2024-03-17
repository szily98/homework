import React from "react";
import ListItem from "./EmployeeListitem";

const EmployeeList = () => {
  return <div className="EmployeeList">
    <>
      <ListItem name='Abhinav' location='Bangalore' salary='12345'></ListItem>
      <ListItem name='Abhishek' locatio='Chennai' salary='23456'></ListItem>
      <ListItem name='Ajay' location='Bangalore' salary='34567'></ListItem>
    </>
  </div>
}

export default EmployeeList;