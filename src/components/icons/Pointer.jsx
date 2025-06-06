import React from 'react';

const Pointer = ({ size = 30, className = '' }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 30 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path 
        d="M12.7412 0.349629C13.078 -0.0433325 13.6532 -0.111131 14.0693 0.177754L14.1504 0.241231L19.7031 5.00002H1C0.447715 5.00002 0 4.5523 0 4.00002C0 3.44774 0.447715 3.00002 1 3.00002H14.2979L12.8496 1.75881L12.7754 1.6885C12.4258 1.32145 12.4042 0.742768 12.7412 0.349629Z" 
        fill="currentColor"
      />
    </svg>
  );
};

export default Pointer; 