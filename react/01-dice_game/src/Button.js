// children은 react에 내장된 속성이다.
function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
