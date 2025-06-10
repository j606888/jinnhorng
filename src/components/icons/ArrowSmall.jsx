const ArrowSmall = ({ size = 20, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size / 5}
      viewBox="0 0 20 5"
      fill="none"
      className={className}
    >
      <path
        d="M12.7412 0.349385C13.078 -0.0435767 13.6532 -0.111375 14.0693 0.17751L14.1504 0.240987L19.7031 4.99978H1C0.447715 4.99978 0 4.55206 0 3.99978C0 3.44749 0.447715 2.99978 1 2.99978H14.2979L12.8496 1.75856L12.7754 1.68825C12.4258 1.32121 12.4042 0.742523 12.7412 0.349385Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowSmall;
