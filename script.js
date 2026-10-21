/* RYDH — DARK MODERN */

:root {
--bg: #070b14;
--card: #101827;
--blue: #38bdf8;
--text: #f1f5f9;
--muted: #94a3b8;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {
font-family: Arial, sans-serif;
background: var(--bg);
color: var(--text);
line-height: 1.7;
}

a {
color: inherit;
text-decoration: none;
}

.container {
width: 90%;
max-width: 1100px;
margin: auto;
}

/* NAVBAR */

nav, .navbar {
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
gap: 18px;
padding: 20px 5%;
background: #0a101c;
border-bottom: 1px solid #1e344a;
}

.logo {
color: var(--blue);
font-size: 1.7rem;
font-weight: bold;
}

nav ul, .nav-links {
display: flex;
flex-wrap: wrap;
gap: 20px;
list-style: none;
}

nav a, .nav-links a {
color: var(--muted);
transition: .25s;
}

nav a:hover, .nav-links a:hover {
color: var(--blue);
}

/* HERO */

.hero {
min-height: 82vh;
padding: 75px 5%;
display: flex;
justify-content: space-between;
align-items: center;
gap: 40px;
background: radial-gradient(
circle at 80% 35%,
#14274a 0,
#070b14 48%
);
}

.hero-content {
max-width: 650px;
}

.hero h1 {
font-size: clamp(2.5rem, 7vw, 4.5rem);
line-height: 1.15;
margin: 15px 0;
}

.hero h1 span, .highlight {
color: var(--blue);
text-shadow: 0 0 20px #38bdf844;
}

.hero p, .section-description {
color: var(--muted);
}

.hero-buttons {
display: flex;
flex-wrap: wrap;
gap: 12px;
margin-top: 25px;
}

.btn {
display: inline-block;
padding: 11px 22px;
border: 1px solid var(--blue);
border-radius: 9px;
background: var(--blue);
color: #07111d;
font-weight: bold;
transition: .25s;
}

.btn:hover {
transform: translateY(-3px);
box-shadow: 0 0 22px #38bdf855;
}

.btn-outline {
background: transparent;
color: var(--blue);
}

/* PROFILE CARD */

.profile-card, .hero-card {
min-width: 220px;
padding: 30px;
text-align: center;
border: 1px solid #38bdf844;
border-radius: 22px;
background: linear-gradient(145deg, #132137, #0c1220);
box-shadow: 0 0 35px #38bdf411;
}

.profile-card h2, .hero-card h2 {
color: var(--blue);
}

.profile-icon {
width: 90px;
height: 90px;
display: grid;
place-items: center;
margin: 0 auto 18px;
border: 2px solid var(--blue);
border-radius: 50%;
color: var(--blue);
font-size: 2.3rem;
box-shadow: 0 0 25px #38bdf833;
}

/* SECTIONS */

section:not(.hero) {
padding: 75px 5%;
}

.section-title {
font-size: clamp(2rem, 5vw, 3rem);
margin-bottom: 12px;
}

.section-title span {
color: var(--blue);
}

.section-subtitle {
color: var(--muted);
margin-bottom: 28px;
}

/* CARDS */

.about-grid, .skills-grid, .projects-grid,
.cards, .skill-list {
display: grid;
grid-template-columns: repeat(
auto-fit, minmax(min(100%, 220px), 1fr)
);
gap: 20px;
margin-top: 25px;
}

.card, .skill-card, .project-card {
padding: 24px;
background: var(--card);
border: 1px solid #38bdf822;
border-radius: 15px;
transition: .25s;
}

.card:hover, .skill-card:hover, .project-card:hover {
transform: translateY(-5px);
border-color: var(--blue);
box-shadow: 0 10px 30px #38bdf811;
}

.card h3, .skill-card h3, .project-card h3 {
color: var(--blue);
margin-bottom: 8px;
}

.card p, .skill-card p, .project-card p {
color: var(--muted);
}

.skill-tag {
display: inline-block;
margin: 5px;
padding: 5px 12px;
border: 1px solid #38bdf844;
border-radius: 20px;
color: var(--blue);
}

/* CONTACT */

.contact {
text-align: center;
}

.contact p {
color: var(--muted);
margin: 15px auto 25px;
}

/* FOOTER */

footer {
padding: 24px 5%;
text-align: center;
color: var(--muted);
border-top: 1px solid #1e344a;
}

footer span {
color: var(--blue);
}

/* SCROLL ANIMATION */

.reveal {
opacity: 0;
transform: translateY(18px);
transition: .6s;
}

.reveal.show {
opacity: 1;
transform: translateY(0);
}

/* BACK TO TOP */

#backToTop {
position: fixed;
right: 18px;
bottom: 18px;
z-index: 20;
width: 44px;
height: 44px;
border: 1px solid var(--blue);
border-radius: 50%;
background: var(--card);
color: var(--blue);
cursor: pointer;
}

/* MOBILE */

@media (max-width: 700px) {
.hero {
min-height: auto;
flex-direction: column;
align-items: flex-start;
padding-top: 60px;
padding-bottom: 60px;
}

.profile-card, .hero-card {
width: 100%;
}

nav, .navbar {
padding: 17px 5%;
}

nav ul, .nav-links {
gap: 12px;
}

section:not(.hero) {
padding-top: 55px;
padding-bottom: 55px;
}
}

@media (prefers-reduced-motion: reduce) {
*, *::before, *::after {
scroll-behavior: auto !important;
animation: none !important;
transition: none !important;
}
}