import React from "react";

const CustomLoader: React.FC = () => {
  return (
    <div className="lds-ellipsis flex items-center">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default CustomLoader;
