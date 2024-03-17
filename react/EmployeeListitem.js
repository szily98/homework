import React from "react";

const ListItem = ({ name, jobTitle,}) => {
  return (<div className="ListItem">
    <div className="divText"><p className="name">{name}</p>
    <p className="jobTitle">{jobTitle}</p></div>
  </div>
  );
}

export default ListItem;