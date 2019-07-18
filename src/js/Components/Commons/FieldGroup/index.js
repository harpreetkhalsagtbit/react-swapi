import React from "react";

const FieldGroup = ({index, label, className, ...props}) => {
  return (
    <div key={index} className={className}>
      <label>{label}</label>
      {props.children}
    </div>
  );
};
export default FieldGroup;
