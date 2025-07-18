const Menu = ({ size = 32, className = "", onClick = () => {} }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      onClick={onClick}
    >
      <path
        d="M19 24H6V22H19V24ZM26 17H6V15H26V17ZM26 10H6V8H26V10Z"
        fill="#30241E"
      />
    </svg>
  );
};

export default Menu;
