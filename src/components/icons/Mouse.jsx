import React from "react";

const Mouse = ({ isHovered }) => {
  return (
    <div>
      {isHovered ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="0.75" y="0.75" width="20.5" height="32.5" rx="10.25" fill="white" stroke="white" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="2" fill="#DA3947"/>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="34" viewBox="0 0 22 34" fill="none">
          <rect x="0.75" y="0.75" width="20.5" height="32.5" rx="10.25" fill="#30241E" fillOpacity="0.3" stroke="white" strokeWidth="1.5"/>
          <circle cx="11" cy="11" r="2" fill="white"/>
        </svg>
      )}
    </div>
  );
};

export default Mouse;
