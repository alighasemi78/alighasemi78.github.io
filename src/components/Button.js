import "../styles/Button.css";

const Button = (props) => {
  return props.href ? (
    <a
      className={`button${props.className ? ` ${props.className}` : ""}`}
      href={props.href}
      target="_blank"
    >
      {props.children}
    </a>
  ) : (
    <button className={`button${props.className ? ` ${props.className}` : ""}`}>
      {props.children}
    </button>
  );
};

export default Button;
