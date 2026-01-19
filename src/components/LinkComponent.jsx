import "./LinkComponent.css";

export default function LinkComponent({ link, name, className, onClick, target, rel }) {
  return (
    <div className={`link-component ${className || ""}`}>
      <a href={link} target={target} rel={rel} onClick={onClick} style={{ display: "inline-block" }}>
        {name}
      </a>
    </div>
  );
}
