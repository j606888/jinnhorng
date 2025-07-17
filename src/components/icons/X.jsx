const X = ({ onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      onClick={onClick}
    >
      <g clipPath="url(#clip0_2712_1103)">
        <path
          d="M17.4142 15.9706L25.1924 23.7487L23.7782 25.163L16 17.3848L8.22183 25.163L6.80761 23.7487L14.5858 15.9706L6.80761 8.19239L8.22183 6.77817L16 14.5563L23.7782 6.77817L25.1924 8.19239L17.4142 15.9706Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_2712_1103">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default X;
