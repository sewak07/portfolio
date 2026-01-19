export default function ContactListComponent({ icon, title, value }) {
  return (
    <div className="contact-item">
      <div className="contact-icon-box">{icon}</div>

      <div>
        <p className="contact-title">{title}</p>
        <p className="contact-value">{value}</p>
      </div>
    </div>
  );
}
