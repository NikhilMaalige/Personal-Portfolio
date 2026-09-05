/* ==================================================================
   ui.jsx — icons, small primitives, and reusable cards.
   ================================================================== */
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

/* ---------------- icons ---------------- */

const Ico = ({ d, size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {d}
  </svg>
);

export const GitHubIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 20c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19 5.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.8 0C5.8 1.9 4.7 2.2 4.7 2.2A4.9 4.9 0 0 0 4.6 5.8 5.2 5.2 0 0 0 3.2 9.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V23" />
  </svg>
);

export const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05A4.2 4.2 0 0 1 16.6 8.7c4 0 4.7 2.5 4.7 5.8V21h-4v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9Z" />
  </svg>
);

export const Chevron = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: 6, opacity: 0.7 }}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const Arrow = ({ size = 15 }) => (
  <Ico
    size={size}
    d={
      <>
        <path d="M5 12h14M13 6l6 6-6 6" />
      </>
    }
  />
);

export const BackArrow = ({ size = 14 }) => (
  <Ico
    size={size}
    d={
      <>
        <path d="M19 12H5M11 18l-6-6 6-6" />
      </>
    }
  />
);

export const DownloadIcon = ({ size = 15 }) => (
  <Ico
    size={size}
    d={
      <>
        <path d="M12 3v12M7 11l5 5 5-5M4 21h16" />
      </>
    }
  />
);

export const ExternalIcon = ({ size = 13 }) => (
  <Ico
    size={size}
    d={
      <>
        <path d="M14 4h6v6" />
        <path d="M20 4 11 13" />
        <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
      </>
    }
  />
);

export const MailIcon = ({ size = 18 }) => (
  <Ico
    size={size}
    d={
      <>
        <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
        <path d="m3 6.5 9 6.5 9-6.5" />
      </>
    }
  />
);

/* ---------------- primitives ---------------- */

export function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShown(true),
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`reveal${shown ? " in" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* Sets <title> and the meta description for each route. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", "description");
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", description);
    }
  }, [title, description]);
}

/* Serif title on the left, optional mono eyebrow on the right, hairline below. */
export const SectionHead = ({ title, eyebrow }) => (
  <>
    <div className="sec-head">
      <h2>{title}</h2>
      {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
    </div>
    <hr className="sec-rule" />
  </>
);

export const PageHead = ({ title, eyebrow, lead }) => (
  <>
    <header className="page-head">
      <div className="sec-head">
        <h1>{title}</h1>
        {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
      </div>
      {lead && <p>{lead}</p>}
    </header>
    <hr className="sec-rule" />
  </>
);

/* Smaller heading used further down a page. */
export const SubHead = ({ title, eyebrow }) => (
  <>
    <div className="sub-head">
      <h2>{title}</h2>
      {eyebrow && <span className="sec-eyebrow">{eyebrow}</span>}
    </div>
    <hr className="sub-rule" />
  </>
);

/* "Every award →" style link that sits below a section. */
export const MoreLink = ({ to, children }) => (
  <Link className="more-link" to={to}>
    {children} <Arrow />
  </Link>
);

export const Tag = ({ children }) => <span className="tag">{children}</span>;

export const TagList = ({ items, max = 5, flush = false }) => {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? items : items.slice(0, max);
  const hidden = items.length - max;
  return (
    <div className={`tags${flush ? " flush" : ""}`}>
      {shown.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
      {hidden > 0 && (
        <button
          type="button"
          className="tag tag-more"
          onClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          {expanded ? "− less" : `+${hidden} more`}
        </button>
      )}
    </div>
  );
};

/* ---------------- cards ---------------- */

export const ExperienceCard = ({ e, showBullets = false }) => (
  <Link className="card card-link" to={`/work/${e.slug}`}>
    <h3>{e.role}</h3>
    <p className="card-org">{e.org}</p>
    <span className="chip">{e.badge}</span>
    <p className="meta-line">
      {e.dates} · {e.location}
    </p>
    <p className="card-desc">{e.desc}</p>
    {showBullets && e.bullets && (
      <ul className="bullets small">
        {e.bullets.map((b) => (
          <li key={b}>
            <span className="bullet-arrow">→</span>
            {b}
          </li>
        ))}
      </ul>
    )}
    <TagList items={e.tags} max={4} />
  </Link>
);

export const ProjectCard = ({ p }) => (
  <article className="card">
    <h3>{p.name}</h3>
    <p className="card-org">{p.org}</p>
    <span className="chip">{p.meta}</span>
    <p className="card-desc">{p.desc}</p>
    {p.bullets && (
      <ul className="bullets small">
        {p.bullets.map((b) => (
          <li key={b}>
            <span className="bullet-arrow">→</span>
            {b}
          </li>
        ))}
      </ul>
    )}
    {(p.code || p.live) && (
      <div className="card-links">
        {p.code && (
          <a href={p.code} target="_blank" rel="noopener noreferrer">
            Source <ExternalIcon />
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer">
            Live <ExternalIcon />
          </a>
        )}
      </div>
    )}
    <TagList items={p.tags} max={4} />
  </article>
);

/* Awards render as hairline-separated rows, not cards. */
export const AwardRow = ({ a }) => {
  const inner = (
    <>
      <span className="award-ico">{a.icon}</span>
      <div>
        <h3 className="award-title">
          {a.title}
          {a.meta && <span className="award-meta">{a.meta}</span>}
          {a.link && (
            <span className="ext-mark">
              <ExternalIcon />
            </span>
          )}
        </h3>
        {a.detail && <p className="award-desc">{a.detail}</p>}
      </div>
    </>
  );
  return a.link ? (
    <a
      className="award-row"
      href={a.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
    </a>
  ) : (
    <article className="award-row">{inner}</article>
  );
};

export const ArticleRow = ({ a }) => {
  const inner = (
    <div>
      <h3>{a.title}</h3>
      <span className="article-outlet">{a.outlet}</span>
      {a.date && <span className="article-date">{a.date}</span>}
    </div>
  );
  return a.link ? (
    <a
      className="article-row"
      href={a.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {inner}
      <span className="ext-mark">
        <ExternalIcon size={15} />
      </span>
    </a>
  ) : (
    <article className="article-row">{inner}</article>
  );
};

/* Single bordered panel, one column per skill group. */
export const SkillsPanel = ({ groups }) => (
  <div className="skills-panel">
    {groups.map((g) => (
      <div className="skill-col" key={g.group}>
        <p className="skill-label">{g.group}</p>
        <ul className="skill-items">
          {g.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const EducationCard = ({ e }) => (
  <article className="edu-card">
    <div className="edu-top">
      <h3>{e.school}</h3>
      <span className="edu-dates">{e.dates}</span>
    </div>
    <p className="edu-loc">{e.location}</p>
    <p className="edu-level">
      {e.level} · GPA {e.gpa}
    </p>
    {e.coursework?.length > 0 && (
      <>
        <p className="edu-label">Relevant coursework</p>
        <TagList items={e.coursework} max={12} flush />
      </>
    )}
  </article>
);

export const ScoreCard = ({ s }) => (
  <article className="score-card">
    <div className="score-head">
      <h3>{s.exam}</h3>
      <span className="edu-dates">{s.date}</span>
    </div>
    <div className="score-grid">
      {s.breakdown.map((b) => (
        <div key={b.label}>
          <span>{b.label}</span>
          <strong>{b.value}</strong>
        </div>
      ))}
    </div>
  </article>
);
