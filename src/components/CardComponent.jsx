import { FiGithub } from "react-icons/fi";


export default function CardComponent({ img, logo, name, title, description, tech, code, demo }) {
  return (
    <div className="card-container">

      {img && (
        <div className="card-image">
          <img src={img} alt={name} />
        </div>
      )}

      <div className="card-header">

        {logo && (
          <div className="card-logo">
            {logo}
          </div>
        )}


        <div className="card-title-desc">
          {title && <h2>{title}</h2>}
          {description && <p>{description}</p>}
        </div>
      </div>

      {tech && (
        <div className="tech-used">
          {Array.isArray(tech)
            ? tech.map((t, idx) => <span key={idx}>{t}</span>)
            : <span>{tech}</span>}
        </div>
      )}

      {(code || demo) && (
        <div className="links">
          {code && <a href={code} target="_blank" rel="noopener noreferrer" className="github"><FiGithub />{" "}{" "}View Code</a>}
          {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>}
        </div>
      )}

    </div>
  )
}
