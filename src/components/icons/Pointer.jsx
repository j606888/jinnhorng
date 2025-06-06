import React from "react";

const Pointer = ({ color = "white" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="5"
      viewBox="0 0 20 5"
      fill="none"
    >
      <path
        d="M12.7412 0.349415C13.078 -0.0435461 13.6532 -0.111345 14.0693 0.17754L14.1504 0.241017L19.7031 4.99981H1C0.447715 4.99981 0 4.55209 0 3.99981C0 3.44752 0.447715 2.99981 1 2.99981H14.2979L12.8496 1.7586L12.7754 1.68828C12.4258 1.32124 12.4042 0.742554 12.7412 0.349415Z"
        fill={color}
      />
    </svg>
  );
};

export default Pointer;
