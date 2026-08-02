// ============ MOBILE NAV ============
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============ ACTIVE SECTION HIGHLIGHT ============
const sections = document.querySelectorAll('main section[id]');
const navItems = document.querySelectorAll('.nav-links a[data-nav]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navItems.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px', threshold: 0 });

sections.forEach(s => sectionObserver.observe(s));

// ============ DIVIDER TRACES (signature element) ============
// Each divider draws a waveform: "calm" = smooth sine, "sharp" = EKG-style pulse.
function buildTracePath(type) {
  const w = 1200, h = 46, mid = h / 2;
  let d = `M0,${mid} `;
  if (type === 'sharp') {
    // EKG-like pulse repeated across width
    const segment = 120;
    let x = 0;
    while (x < w) {
      d += `L${x + 20},${mid} L${x + 28},${mid - 6} L${x + 34},${mid + 16} L${x + 40},${mid - 22} L${x + 46},${mid} L${x + segment},${mid} `;
      x += segment;
    }
  } else {
    // gentle sine wave
    const step = 40, amp = 8;
    for (let x = 0; x <= w; x += step) {
      const y = mid + Math.sin(x / 60) * amp;
      d += `L${x},${y} `;
    }
  }
  return { d, w, h };
}

document.querySelectorAll('.divider').forEach(div => {
  const type = div.getAttribute('data-trace') || 'calm';
  const { d, w, h } = buildTracePath(type);
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('viewBox', `0 0 ${w} ${h}`);
  svg.setAttribute('preserveAspectRatio', 'none');
  const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  if (type === 'sharp') path.style.stroke = 'var(--accent-amber)';
  svg.appendChild(path);
  div.appendChild(svg);
});

const dividerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.divider').forEach(d => dividerObserver.observe(d));

// ============ HERO EKG MONITOR ============
const ekgLine = document.getElementById('ekgLine');

function buildEkgPoints() {
  const w = 400, h = 160, mid = h / 2;
  let pts = [];
  let x = 0;
  const beat = () => {
    pts.push([x, mid]); x += 18;
    pts.push([x, mid]); x += 6;
    pts.push([x, mid - 10]); x += 6;
    pts.push([x, mid + 30]); x += 8;
    pts.push([x, mid - 55]); x += 8;
    pts.push([x, mid + 18]); x += 6;
    pts.push([x, mid]); x += 10;
    pts.push([x, mid - 6]); x += 10;
    pts.push([x, mid]); x += 18;
  };
  while (x < w) beat();
  return pts.map(p => p.join(',')).join(' ');
}

if (ekgLine) {
  const pointsStr = buildEkgPoints();
  ekgLine.setAttribute('points', pointsStr);

  // animate a left-to-right sweep using stroke-dasharray/offset
  const length = ekgLine.getTotalLength ? ekgLine.getTotalLength() : 1200;
  ekgLine.style.strokeDasharray = `${length}`;
  ekgLine.style.strokeDashoffset = `${length}`;

  let start = null;
  const duration = 2600;
  function animateEkg(ts) {
    if (!start) start = ts;
    const elapsed = (ts - start) % duration;
    const progress = elapsed / duration;
    ekgLine.style.strokeDashoffset = `${length * (1 - progress)}`;
    requestAnimationFrame(animateEkg);
  }
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    requestAnimationFrame(animateEkg);
  } else {
    ekgLine.style.strokeDashoffset = '0';
  }
}

// ============ READOUT TEXT CYCLE ============
const readoutText = document.getElementById('readoutText');
const readoutMessages = ['STATUS · ONLINE', 'FOCUS · CS × BIOENG', 'MODE · LEARNING'];
let readoutIndex = 0;
if (readoutText) {
  setInterval(() => {
    readoutIndex = (readoutIndex + 1) % readoutMessages.length;
    readoutText.textContent = readoutMessages[readoutIndex];
  }, 3200);
}

