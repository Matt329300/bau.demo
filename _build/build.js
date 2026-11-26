// Generator statycznych podstron BAUTIS
// Użycie:  node _build/build.js   (z katalogu projektu)
// Wspólny nagłówek/stopka są tutaj — zmiana w jednym miejscu aktualizuje wszystkie strony.

const fs = require('fs');
const path = require('path');
const OUT = path.join(__dirname, '..');

/* ------------------------------------------------------------------ */
/* Dane firmy                                                          */
/* ------------------------------------------------------------------ */
const C = {
  name: 'BAUTIS',
  owner: 'Bartosz Krygier',
  phone: '+48 793 611 050',
  phoneHref: 'tel:+48793611050',
  email: 'biuro@bautis.pl',
  street: 'ul. Gen. Tadeusza Pełczyńskiego 14/132',
  city: '01-471 Warszawa',
  nip: '879-262-81-31',
  fb: 'https://www.facebook.com/BAUTIS.Budownictwo',
  maps: 'https://www.google.com/maps/place/Bautis+Bartosz+Krygier/@52.2424706,20.9087483,17z/data=!4m6!3m5!1s0x471ecb4dfaeca03b:0x73bf1cdc335eae63!8m2!3d52.2424706!4d20.9087483!16s%2Fg%2F11h_k3vt44',
  mapsEmbed: 'https://maps.google.com/maps?q=52.2424706,20.9087483&z=16&hl=pl&output=embed',
  rating: '4.9',
  reviews: 38,
  hours: 'Pn–Pt 8:00–16:00',
  site: 'https://bautis.pl'
};

const IMG = {
  plans: 'https://bautis.pl/wp-content/uploads/2024/03/building-plans-in-hand-2048x1365.jpg',
  plansM: 'https://bautis.pl/wp-content/uploads/2024/03/building-plans-in-hand-1536x1024.jpg',
  details: 'https://bautis.pl/wp-content/uploads/2024/03/pointing-out-the-details-2048x1365.jpg',
  detailsM: 'https://bautis.pl/wp-content/uploads/2024/03/pointing-out-the-details-1536x1024.jpg',
  // Neutralne zdjęcia przedmiotów z Unsplash (licencja Unsplash, darmowe) — źródła w README
  flat: 'assets/img/rulers.jpg',
  room: 'assets/img/keys.jpg',
  emptyRoom: 'assets/img/checklist.jpg',
  tape: 'assets/img/tape-measure.jpg',
  clipboard: 'assets/img/clipboard.jpg',
  build: 'assets/img/ruler-blueprint.jpg',
  house: 'assets/img/house-keys.jpg',
  site: 'assets/img/drafting-tools.jpg',
  drawing: 'assets/img/plans-drawing.jpg',
  laser: 'assets/img/laser-line.jpg',
  helmet: 'assets/img/red-helmet.jpg'
};

/* ------------------------------------------------------------------ */
/* Ikony (linie 1.5px)                                                 */
/* ------------------------------------------------------------------ */
const s = (d, vb = '0 0 24 24') => `<svg viewBox="${vb}" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}</svg>`;
const I = {
  arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
  chevron: s('<path d="M6 9l6 6 6-6"/>'),
  phone: s('<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>'),
  mail: s('<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>'),
  pin: s('<path d="M12 22s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>'),
  clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
  doc: s('<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M8 13h8M8 17h5"/>'),
  fb: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.5V4.4c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8v2.4H8v3h2.6V21z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6L2.5 9.4l6.6-.8z"/></svg>',
  quote: '<svg viewBox="0 0 40 40" fill="currentColor" aria-hidden="true"><path d="M4 30V20C4 12 8 7 16 6v5c-4 1-6 4-6 8h6v11zm20 0V20c0-8 4-13 12-14v5c-4 1-6 4-6 8h6v11z"/></svg>',
  check: s('<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.7 2.7L16 10"/>'),
  // tematyczne
  badge: s('<circle cx="12" cy="9" r="6"/><path d="M9 14.2L7.5 22 12 19.5 16.5 22 15 14.2"/><path d="M9.5 9l1.8 1.8L14.8 7.5"/>'),
  laser: s('<path d="M12 2v20M2 12h20"/><circle cx="12" cy="12" r="3"/><path d="M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" opacity=".5"/>'),
  watch: s('<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5M9 2h6M12 2v3"/>'),
  talk: s('<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/><path d="M8.5 12h.01M12 12h.01M15.5 12h.01"/>'),
  thermo: s('<path d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z"/><path d="M12 9v8"/>'),
  wind: s('<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7"/>'),
  drop: s('<path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z"/><path d="M9 14a3 3 0 0 0 3 3"/>'),
  level: s('<rect x="2" y="9" width="20" height="6" rx="1"/><rect x="10" y="10.5" width="4" height="3" rx="1.5"/><path d="M6 9v2M18 9v2"/>'),
  wall: s('<rect x="3" y="4" width="18" height="16"/><path d="M3 9h18M3 14.5h18M9 4v5M15 9v5.5M9 14.5V20"/>'),
  ceiling: s('<path d="M3 5h18M6 5v3M18 5v3M3 8h18"/><path d="M12 8v5M9.5 16a2.5 2.5 0 0 0 5 0z"/>'),
  floor: s('<path d="M3 15l9-5 9 5-9 5z"/><path d="M7.5 12.5l9 5M16.5 12.5l-9 5"/>'),
  window: s('<rect x="4" y="3" width="16" height="18"/><path d="M12 3v18M4 12h16"/><path d="M2 21h20"/>'),
  door: s('<path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18"/><circle cx="15" cy="12" r=".8" fill="currentColor"/>'),
  bolt: s('<path d="M13 2L4 14h7l-1 8 9-12h-7z"/>'),
  pipe: s('<path d="M4 6h6v6h10M4 6V3M4 6v3M20 12v-3M20 12v3"/><path d="M14 18a2 2 0 0 0 4 0c0-1.3-2-3.5-2-3.5s-2 2.2-2 3.5z"/>'),
  radiator: s('<rect x="3" y="6" width="18" height="12" rx="1"/><path d="M7 6v12M11 6v12M15 6v12M19 6v12M5 18v2M19 18v2"/>'),
  balcony: s('<path d="M3 11h18M4 11v9M20 11v9M8 11v9M12 11v9M16 11v9M3 20h18"/><path d="M6 11V4h12v7"/>'),
  garage: s('<path d="M3 21V9l9-5 9 5v12"/><path d="M7 21v-8h10v8M7 16h10"/>'),
  roof: s('<path d="M2 12L12 4l10 8"/><path d="M5 10v10h14V10"/><path d="M15 6.5V4h3v5"/>'),
  tree: s('<path d="M12 22v-6"/><path d="M12 3l6 8h-3l4 5H5l4-5H6z"/>'),
  house: s('<path d="M3 11l9-7 9 7"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>'),
  flat: s('<rect x="5" y="2" width="14" height="20"/><path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/>'),
  helmet: s('<path d="M3 17h18M4 17a8 8 0 0 1 16 0"/><path d="M10 9V6h4v3"/><path d="M2 17v2h20v-2"/>'),
  crane: s('<path d="M6 22V3M3 22h7M6 3l15 3M6 6h15M18 6v5"/><rect x="16.5" y="11" width="3" height="3"/><path d="M6 8l4-5"/>'),
  calendar: s('<rect x="3" y="5" width="18" height="16" rx="1"/><path d="M3 10h18M8 3v4M16 3v4M8 14h3"/>'),
  list: s('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>'),
  search: s('<circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/>'),
  shield: s('<path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>'),
  ruler: s('<path d="M3 17L17 3l4 4L7 21z"/><path d="M7 13l2 2M10 10l2 2M13 7l2 2"/>'),
  plan: s('<rect x="3" y="3" width="18" height="18"/><path d="M3 10h7v11M10 14h11M15 3v7h6"/>'),
  coins: s('<ellipse cx="9" cy="7" rx="6" ry="3"/><path d="M3 7v5c0 1.7 2.7 3 6 3s6-1.3 6-3V7"/><path d="M9 15v2c0 1.7 2.7 3 6 3s6-1.3 6-3v-5c0-1.7-2.7-3-6-3"/>'),
  key: s('<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/>')
};

/* Logo BAUTIS — kask (czerwony) + dom (kolor tekstu), odwzorowane z assets/img/logo-bautis.png.
   Czarne elementy używają currentColor, więc na ciemnym tle są białe. */
const logoMark = `<svg class="logo__svg" viewBox="120 225 780 305" aria-hidden="true">
  <g fill="#e30613">
    <path d="M128 510 L292 482 C318 425 348 382 383 345 L393 302 C440 262 498 236 558 230 L558 292 C448 300 352 385 340 505 L558 505 L558 525 L165 525 Z"/>
    <path d="M366 497 C382 398 462 322 558 313 L558 497 Z"/>
  </g>
  <g fill="currentColor">
    <path d="M580 232 L893 355 L893 373 L580 297 Z"/>
    <path fill-rule="evenodd" d="M580 313 L843 380 L843 497 L668 497 L668 392 L612 392 L612 497 L580 497 Z M705 392 L765 392 L765 437 L705 437 Z"/>
    <rect x="580" y="507" width="313" height="18"/>
  </g>
</svg>`;
const logo = (extra = '') => `<a href="index.html" class="logo ${extra}" aria-label="BAUTIS — strona główna">
  <span class="logo__mark">${logoMark}</span>
  <span class="logo__text"><span class="logo__name">BAUTIS</span><span class="logo__sub">Odbiory · Nadzór · Budowa</span></span>
</a>`;

/* ------------------------------------------------------------------ */
/* Nawigacja                                                           */
/* ------------------------------------------------------------------ */
const SERVICES = [
  { href: 'odbior-mieszkania.html', title: 'Odbiór mieszkania', sub: 'Stan deweloperski, lokale usługowe', icon: 'flat' },
  { href: 'odbior-domu.html', title: 'Odbiór domu i segmentu', sub: 'Domy i segmenty', icon: 'house' },
  { href: 'inspektor-nadzoru.html', title: 'Inspektor nadzoru', sub: 'Nadzór inwestorski na budowie', icon: 'helmet' },
  { href: 'budowa-domow.html', title: 'Budowa domów', sub: 'Generalny wykonawca', icon: 'crane' }
];

const header = (active) => {
  const a = (k) => (k === active ? ' is-active' : '');
  return `
<header class="header">
  <div class="container header__inner">
    ${logo()}
    <nav class="nav" aria-label="Główna nawigacja">
      <ul class="nav__list">
        <li class="nav__item">
          <a href="uslugi.html" class="nav__link${a('uslugi')}">Usługi ${I.chevron}</a>
          <div class="dropdown">
            ${SERVICES.map(x => `<a href="${x.href}">${x.title}<small>${x.sub}</small></a>`).join('')}
          </div>
        </li>
        <li><a href="o-nas.html" class="nav__link${a('o-nas')}">O nas</a></li>
        <li><a href="opinie.html" class="nav__link${a('opinie')}">Opinie</a></li>
        <li><a href="faq.html" class="nav__link${a('faq')}">FAQ</a></li>
        <li><a href="kontakt.html" class="nav__link${a('kontakt')}">Kontakt</a></li>
      </ul>
    </nav>
    <a href="${C.phoneHref}" class="header__phone">${I.phone}${C.phone.replace('+48 ', '')}</a>
    <a href="kontakt.html" class="btn btn--accent">Umów odbiór</a>
    <button class="burger" aria-label="Otwórz menu" aria-expanded="false"><span></span><span></span><span></span></button>
  </div>
</header>
<nav class="mobile-nav" aria-label="Menu mobilne">
  <a href="index.html">Strona główna</a>
  <a href="uslugi.html">Usługi</a>
  <div class="sub">${SERVICES.map(x => `<a href="${x.href}">${x.title}</a>`).join('')}</div>
  <a href="o-nas.html">O nas</a>
  <a href="opinie.html">Opinie</a>
  <a href="faq.html">FAQ</a>
  <a href="kontakt.html">Kontakt</a>
  <a href="${C.phoneHref}" class="btn btn--accent">${I.phone} Zadzwoń: ${C.phone}</a>
</nav>`;
};

const footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div>
        ${logo()}
        <p>Odbiory techniczne mieszkań i domów, nadzór inwestorski oraz kompleksowa budowa domów. Pełne uprawnienia budowlane bez ograniczeń.</p>
        <div class="footer__social">
          <a href="${C.fb}" target="_blank" rel="noopener" aria-label="Facebook">${I.fb}</a>
          <a href="${C.maps}" target="_blank" rel="noopener" aria-label="Wizytówka Google">${I.pin}</a>
        </div>
      </div>
      <div>
        <h4>Usługi</h4>
        <ul>${SERVICES.map(x => `<li><a href="${x.href}">${x.title}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Firma</h4>
        <ul>
          <li><a href="o-nas.html">O nas</a></li>
          <li><a href="opinie.html">Opinie klientów</a></li>
          <li><a href="faq.html">Pytania i odpowiedzi</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </div>
      <div>
        <h4>Kontakt</h4>
        <ul>
          <li><a href="${C.phoneHref}">${C.phone}</a></li>
          <li><a href="mailto:${C.email}">${C.email}</a></li>
          <li>${C.street}<br>${C.city}</li>
        </ul>
        <div class="footer__hours">
          <div><span>Poniedziałek – Piątek</span><span>8:00 – 16:00</span></div>
          <div><span>Sobota – Niedziela</span><span>Zamknięte</span></div>
        </div>
      </div>
    </div>
  </div>
  <div class="container footer__bottom">
    <span>© <span data-year>2026</span> BAUTIS ${C.owner} · NIP ${C.nip}</span>
    <span>Odbiory mieszkań i domów · Inspektor nadzoru · Warszawa</span>
  </div>
</footer>
<a href="${C.phoneHref}" class="fab" aria-label="Zadzwoń">${I.phone}</a>`;

const layout = ({ title, desc, active, body, file }) => `<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${C.site}/${file === 'index.html' ? '' : file}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="${IMG.plansM}">
<meta name="theme-color" content="#000000">
<link rel="icon" type="image/png" href="assets/img/logo-bautis.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@200;300;400;500;600;700&family=Saira+Stencil+One&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: 'BAUTIS Bartosz Krygier',
  description: 'Odbiory mieszkań i domów, inspektor nadzoru inwestorskiego, generalny wykonawca domów.',
  telephone: C.phone,
  email: C.email,
  url: C.site,
  image: IMG.plansM,
  address: { '@type': 'PostalAddress', streetAddress: 'Gen. Tadeusza Pełczyńskiego 14/132', postalCode: '01-471', addressLocality: 'Warszawa', addressCountry: 'PL' },
  geo: { '@type': 'GeoCoordinates', latitude: 52.2424706, longitude: 20.9087483 },
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '16:00' }],
  aggregateRating: { '@type': 'AggregateRating', ratingValue: C.rating, reviewCount: C.reviews },
  sameAs: [C.fb]
})}</script>
</head>
<body>
${header(active)}
<main>
${body}
</main>
${footer()}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;

/* ------------------------------------------------------------------ */
/* Komponenty sekcji                                                   */
/* ------------------------------------------------------------------ */
const stars = (n = 5) => `<span class="stars" aria-label="${n} na 5">${I.star.repeat(n)}</span>`;
const arrowLink = (href, text, cls = '') => `<a href="${href}" class="link-arrow ${cls}">${text} ${I.arrow}</a>`;

const pageHero = ({ crumbs, eyebrow, title, text, img, ctas = true }) => `
<section class="page-hero ${img ? '' : 'page-hero--pattern'}">
  <div class="page-hero__media">${img ? `<img src="${img}" alt="" loading="eager">` : ''}</div>
  <div class="container">
    <div class="page-hero__inner">
      <div class="breadcrumbs"><a href="index.html">Start</a>${crumbs.map(c => `<span>/</span>${c}`).join('')}</div>
      <span class="eyebrow">${eyebrow}</span>
      <h1 class="h-xl">${title}</h1>
      ${text ? `<p>${text}</p>` : ''}
      ${ctas ? `<div class="hero__ctas">
        <a href="kontakt.html" class="btn btn--light">Umów termin ${I.arrow}</a>
        <a href="${C.phoneHref}" class="btn btn--ghost-light">${I.phone} ${C.phone}</a>
      </div>` : ''}
    </div>
  </div>
</section>`;

// Wszystkie treści poniżej pochodzą wyłącznie z bautis.pl oraz wizytówki Google (Bautis Bartosz Krygier).
// Nie dopisywać informacji, których firma nie podała.

const featuresBlock = (dark = false) => `
<section class="section ${dark ? 'section--dark' : ''}">
  <div class="container">
    <div class="section-head section-head--center reveal">
      <span class="eyebrow">Dlaczego BAUTIS</span>
      <h2 class="h-lg">Co nas wyróżnia?</h2>
    </div>
    <div class="features">
      <div class="feature reveal"><div class="feature__icon">${I.badge}</div><h3>Pełne uprawnienia</h3><p>Pełne uprawnienia budowlane bez ograniczeń.</p></div>
      <div class="feature reveal reveal-d1"><div class="feature__icon">${I.laser}</div><h3>Profesjonalny sprzęt</h3><p>Laser krzyżowy, pirometr, aerometr i miernik wilgotności.</p></div>
      <div class="feature reveal reveal-d2"><div class="feature__icon">${I.watch}</div><h3>Punktualność</h3><p>Gwarantujemy punktualność i pełen profesjonalizm.</p></div>
      <div class="feature reveal reveal-d3"><div class="feature__icon">${I.talk}</div><h3>Doradztwo po odbiorze</h3><p>Porady dotyczące usterek i wskazówki, jak samodzielnie sprawdzić ich usunięcie.</p></div>
    </div>
  </div>
</section>`;

const tilesBlock = () => `
<section class="section section--tight" style="padding-bottom:0">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Usługi</span>
      <h2 class="h-lg">Zakres usług</h2>
    </div>
  </div>
</section>
<div class="tiles">
  <a href="odbior-mieszkania.html" class="tile tile--1 reveal">
    <span class="tile__vlabel">Usługa</span><span class="tile__num">01</span>
    <h3>Odbiór mieszkania</h3>
    <p>Odbiór techniczny mieszkania w stanie deweloperskim oraz lokali usługowych.</p>
    <div class="tile__foot"><span class="link-arrow">Szczegóły usługi ${I.arrow}</span></div>
    <span class="tile__icon">${I.flat}</span>
  </a>
  <a href="odbior-domu.html" class="tile tile--2 reveal reveal-d1">
    <span class="tile__vlabel">Usługa</span><span class="tile__num">02</span>
    <h3>Odbiór domu</h3>
    <p>Odbiór domu lub segmentu — rozszerzony zakres: poddasze, dach, kominy, elewacja i zagospodarowanie terenu.</p>
    <div class="tile__foot"><span class="link-arrow">Szczegóły usługi ${I.arrow}</span></div>
    <span class="tile__icon">${I.house}</span>
  </a>
  <a href="inspektor-nadzoru.html" class="tile tile--3 reveal">
    <span class="tile__vlabel">Usługa</span><span class="tile__num">03</span>
    <h3>Inspektor nadzoru</h3>
    <p>Inspektor nadzoru inwestorskiego — nadzór nad budową z ramienia inwestora.</p>
    <div class="tile__foot"><span class="link-arrow">Szczegóły usługi ${I.arrow}</span></div>
    <span class="tile__icon">${I.helmet}</span>
  </a>
  <a href="budowa-domow.html" class="tile tile--4 reveal reveal-d1">
    <span class="tile__vlabel">Usługa</span><span class="tile__num">04</span>
    <h3>Budowa domów</h3>
    <p>Kompleksowa budowa domów — generalny wykonawca, prowadzenie budowy od podstaw.</p>
    <div class="tile__foot"><span class="link-arrow">Szczegóły usługi ${I.arrow}</span></div>
    <span class="tile__icon">${I.crane}</span>
  </a>
</div>`;

const gearBlock = () => `
<section class="section section--dark section--photo">
  <img class="section__bg" src="${IMG.laser}" alt="" loading="lazy">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Sprzęt pomiarowy</span>
      <h2 class="h-lg">Profesjonalny sprzęt</h2>
    </div>
    <div class="gear">
      <div class="gear__item reveal">${I.laser}<h3>Laser krzyżowy</h3><p>Piony, poziomy, wysokości, zabudowy oraz lokalizacje urządzeń i osprzętu elektrycznego.</p></div>
      <div class="gear__item reveal reveal-d1">${I.thermo}<h3>Pirometr</h3><p>Kontrola montażu okien w okresie niskich temperatur.</p></div>
      <div class="gear__item reveal reveal-d2">${I.wind}<h3>Aerometr</h3><p>Sprawdzenie wentylacji — nawiewniki i punkty odbiorcze.</p></div>
      <div class="gear__item reveal reveal-d3">${I.drop}<h3>Miernik wilgotności</h3><p>Pomiar wilgotności ścian i posadzek.</p></div>
    </div>
  </div>
</section>`;

// Fragmenty opinii z wizytówki Google (tak jak wyświetla je Google, skrócone „…”)
const REVIEWS = [
  { i: 'N', who: 'Natalie', t: 'Skorzystaliśmy z usług specjalisty przy odbiorze technicznym mieszkania i jesteśmy maksymalnie zadowoleni. Odbierający przyjechał z profesjonalnym sprzętem, skrupulatnie sprawdził każdy kąt i znalazł ukryte wady okien oraz ścian…' },
  { i: 'T', who: 'Tomasz P.', t: 'Z usług Pana Bartosza korzystałem już kilkukrotnie. Za każdym razem mogłem liczyć na pełen profesjonalizm, rzetelność i ogromną wiedzę techniczną…' },
  { i: 'I', who: 'Ilona T.', t: 'Mieliśmy przyjemność korzystać z usług Pana Bartosza przy odbiorze domu i muszę przyznać, że byliśmy wręcz zaskoczeni jakością usługi…' }
];

const reviewsBlock = (withHead = true) => `
<section class="section section--soft">
  <div class="container">
    ${withHead ? `<div class="reviews-top reveal">
      <div>
        <span class="eyebrow">Opinie klientów</span>
        <h2 class="h-lg">Opinie w Google</h2>
      </div>
      <div class="rating-box">
        <div class="rating-box__score">4,9</div>
        <div class="rating-box__meta">${stars()}<div>${C.reviews} opinii w Google</div></div>
      </div>
    </div>` : ''}
    <div class="reviews">
      ${REVIEWS.map((r, k) => `<article class="review reveal ${k ? 'reveal-d' + k : ''}">
        <span class="review__quote">${I.quote}</span>
        ${stars()}
        <p>„${r.t}”</p>
        <div class="review__author"><span class="review__avatar">${r.i}</span><div><strong>${r.who}</strong><small>Opinia z Google</small></div></div>
      </article>`).join('')}
    </div>
    <div style="margin-top:48px;display:flex;gap:28px;flex-wrap:wrap" class="reveal">
      ${withHead ? arrowLink('opinie.html', 'Opinie') : ''}
      <a href="${C.maps}" target="_blank" rel="noopener" class="link-arrow">Przeczytaj wszystkie w Google ${I.arrow}</a>
    </div>
  </div>
</section>`;

const faqItem = (q, a) => `<div class="faq__item">
  <button class="faq__q" aria-expanded="false">${q}<span class="faq__icon"></span></button>
  <div class="faq__a"><div><p>${a}</p></div></div>
</div>`;

// Odpowiedzi wyłącznie na podstawie treści z bautis.pl
const FAQ_GENERAL = [
  ['Co sprawdzacie podczas odbioru mieszkania?', 'Ściany, sufity, posadzki, okna, wentylację, drzwi wejściowe i otwory na drzwi wewnętrzne, instalację elektryczną i domofon, instalacje wod-kan i CO, grzejniki (w sezonie grzewczym), balkon, garaż i komórkę lokatorską. Na końcu mierzymy wilgotność ścian i posadzek.'],
  ['Czym różni się odbiór domu od odbioru mieszkania?', 'Przy domu lub segmencie zakres jest szerszy: dodatkowo poddasze (zabudowy, ocieplenie, okna dachowe), dach, obróbki, kominy, wentylacja grawitacyjna, zagospodarowanie terenu i elewacja.'],
  ['Czy odbieracie lokale usługowe?', 'Tak — wykonujemy odbiory techniczne mieszkań, segmentów, domów i lokali usługowych.'],
  ['Czy pomagacie po odbiorze?', 'Tak. Po odbiorze służymy doradztwem technicznym, udzielamy porad dotyczących usterek i podpowiadamy, jak samodzielnie sprawdzić ich usunięcie.'],
  ['Jakie uprawnienia posiadacie?', 'Pełne uprawnienia budowlane bez ograniczeń.']
];

const faqBlock = (items, title = 'Najczęstsze pytania', soft = false) => `
<section class="section ${soft ? 'section--soft' : ''}">
  <div class="container">
    <div class="section-head section-head--center reveal">
      <span class="eyebrow">FAQ</span>
      <h2 class="h-lg">${title}</h2>
    </div>
    <div class="faq reveal">${items.map(([q, a]) => faqItem(q, a)).join('')}</div>
  </div>
</section>`;

const ctaBand = () => `
<section class="cta-band">
  <div class="container cta-band__inner">
    <div class="reveal">
      <h2 class="h-lg">Skontaktuj się z nami</h2>
      <p>${C.hours} · ${C.phone} · ${C.email}</p>
    </div>
    <div class="cta-band__actions reveal reveal-d1">
      <a href="${C.phoneHref}" class="btn btn--light">${I.phone} ${C.phone}</a>
      <a href="mailto:${C.email}" class="btn btn--ghost-light">${I.mail} Napisz do nas</a>
    </div>
  </div>
</section>`;

const contactList = () => `
<ul class="contact-list">
  <li>${I.phone}<div><small>Telefon</small><a href="${C.phoneHref}">${C.phone}</a></div></li>
  <li>${I.mail}<div><small>E-mail</small><a href="mailto:${C.email}">${C.email}</a></div></li>
  <li>${I.pin}<div><small>Adres korespondencyjny</small><strong>${C.street}, ${C.city}</strong></div></li>
  <li>${I.clock}<div><small>Godziny pracy</small><strong>${C.hours}</strong></div></li>
</ul>`;

const contactBlock = (preset = '', soft = false) => `
<section class="section ${soft ? 'section--soft' : ''}" id="kontakt">
  <div class="container contact">
    <div class="contact__info reveal">
      <span class="eyebrow">Kontakt</span>
      <h2 class="h-lg">Kontakt</h2>
      <p>${C.hours}</p>
      <div class="hero__ctas" style="margin-top:32px">
        <a href="${C.phoneHref}" class="btn">${I.phone} Zadzwoń</a>
        <a href="mailto:${C.email}" class="btn btn--ghost">${I.mail} Napisz e-mail</a>
      </div>
    </div>
    <div class="reveal reveal-d1">${contactList()}</div>
  </div>
</section>`;

const scopeGrid = (items) => `<div class="scope">${items.map(([icon, title, list], k) => `
  <div class="scope__item reveal ${k % 3 ? 'reveal-d' + (k % 3) : ''}">
    <div class="scope__head">${I[icon]}<h3>${title}</h3></div>
    <ul>${list.map(li => `<li>${li}</li>`).join('')}</ul>
  </div>`).join('')}</div>`;

/* ------------------------------------------------------------------ */
/* Zakresy odbioru — 1:1 z bautis.pl                                   */
/* ------------------------------------------------------------------ */
const SCOPE_FLAT = [
  ['wall', 'Ściany', ['Kąty i płaszczyzny', 'Odchyłki od pionu', 'Tynk i odparzenia', 'Jakość farby']],
  ['ceiling', 'Sufity', ['Poziomy', 'Ugięcie', 'Wysokości']],
  ['floor', 'Posadzki', ['Jakość i płaszczyzna', 'Poziomy', 'Dylatacje', 'Pęknięcia']],
  ['window', 'Okna', ['Ramy, skrzydła, szyby, uszczelki', 'Mechanizmy i regulacja', 'Parapety i nawietrzaki', 'Montaż — pirometr w okresie niskich temperatur']],
  ['wind', 'Wentylacja', ['Pomiar aerometrem', 'Nawiewniki', 'Punkty odbiorcze']],
  ['door', 'Drzwi', ['Drzwi wejściowe', 'Przygotowanie otworów na drzwi wewnętrzne']],
  ['bolt', 'Elektryka i domofon', ['Instalacja elektryczna', 'Domofon']],
  ['pipe', 'Wod-kan, CO, grzejniki', ['Instalacje wod-kan i CO zgodnie z projektem', 'Grzejniki w sezonie grzewczym']],
  ['balcony', 'Balkon i elewacja', ['Płytki i glazura', 'Obróbki blacharskie, attyki', 'Uszczelnienia', 'Glify zewnętrzne, elewacja']],
  ['garage', 'Garaż i komórka', ['Wymiary', 'Wysokości']],
  ['laser', 'Pomiary laserem krzyżowym', ['Piony i poziomy', 'Wysokości i zabudowy', 'Lokalizacje urządzeń i osprzętu elektrycznego']],
  ['drop', 'Wilgotność', ['Wilgotność ścian', 'Wilgotność posadzek']]
];

const SCOPE_HOUSE_EXTRA = [
  ['roof', 'Poddasze', ['Zabudowy', 'Ocieplenie', 'Okna dachowe']],
  ['house', 'Dach', ['Dach', 'Obróbki']],
  ['wind', 'Kominy i wentylacja', ['Kominy', 'Wentylacja grawitacyjna']],
  ['wall', 'Elewacja', ['Elewacja']],
  ['tree', 'Teren', ['Zagospodarowanie terenu']]
];

/* ------------------------------------------------------------------ */
/* STRONY                                                              */
/* ------------------------------------------------------------------ */
const pages = {};

/* ---------- STRONA GŁÓWNA ---------- */
pages['index.html'] = {
  title: 'BAUTIS — Odbiory mieszkań i domów, inspektor nadzoru | Warszawa',
  desc: 'Odbiory techniczne mieszkań i domów, inspektor nadzoru inwestorskiego i kompleksowa budowa domów. Pełne uprawnienia budowlane bez ograniczeń. Warszawa.',
  active: 'home',
  body: `
<section class="hero">
  <div class="hero__media"><img src="${IMG.plans}" alt="Projekt budowlany w dłoniach" fetchpriority="high"></div>
  <div class="container hero__inner">
    <div>
      <span class="eyebrow">BAUTIS · Warszawa</span>
      <h1 class="h-xl">Odbiory mieszkań i domów. Inspektor nadzoru.</h1>
      <div class="hero__tagline">Odbiór<span>|</span>Nadzór<span>|</span>Budowa</div>
      <div class="hero__ctas">
        <a href="kontakt.html" class="btn btn--light">Umów odbiór ${I.arrow}</a>
        <a href="uslugi.html" class="btn btn--ghost-light">Zobacz usługi</a>
      </div>
    </div>
    <aside class="hero-card">
      <span class="eyebrow">Opinie w Google</span>
      <div class="hero-card__rating"><span class="hero-card__score">4,9</span>${stars()}</div>
      <p>${C.reviews} opinii w Google.</p>
      <a href="${C.phoneHref}" class="btn">${I.phone} ${C.phone}</a>
    </aside>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="duo">
      <a href="odbior-mieszkania.html" class="photo-card reveal">
        <div class="photo-card__img"><img src="${IMG.detailsM}" alt="Wskazywanie szczegółów podczas odbioru" loading="lazy"></div>
        <div class="photo-card__body">
          <span class="photo-card__label">Inspektor nadzoru inwestorskiego</span>
          <h3>Odbiór domów i mieszkań</h3>
          <p>Odbiory techniczne mieszkań, segmentów, domów i lokali usługowych.</p>
          <span class="link-arrow">Dowiedz się więcej ${I.arrow}</span>
        </div>
      </a>
      <a href="budowa-domow.html" class="photo-card reveal reveal-d1">
        <div class="photo-card__img"><img src="${IMG.build}" alt="Linijka na projekcie budowlanym" loading="lazy"></div>
        <div class="photo-card__body">
          <span class="photo-card__label">Generalny wykonawca</span>
          <h3>Kompleksowa budowa domów</h3>
          <p>Prowadzenie budowy od podstaw.</p>
          <span class="link-arrow">Dowiedz się więcej ${I.arrow}</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="about">
      <div class="about__img reveal">
        <img src="${IMG.helmet}" alt="Czerwony kask budowlany" loading="lazy">
        <div class="about__badge"><strong>${C.owner}</strong><span>BAUTIS</span></div>
      </div>
      <div class="reveal reveal-d1">
        <span class="eyebrow">O nas</span>
        <h2 class="h-lg">O nas</h2>
        <p class="lead">Świadczymy usługi inżynieryjne w zakresie budownictwa, w szczególności pełnimy funkcję Inspektora Nadzoru Inwestorskiego.</p>
        <p>Posiadamy pełne uprawnienia budowlane bez ograniczeń. Zajmujemy się nadzorem nad budową z ramienia inwestora, prowadzeniem budowy od podstaw oraz odbiorami technicznymi mieszkań, segmentów, domów i lokali usługowych.</p>
        ${arrowLink('o-nas.html', 'Więcej o nas')}
      </div>
    </div>
    <div class="stats" style="grid-template-columns:repeat(3,1fr)">
      <div class="stat reveal"><div class="stat__num"><span data-count="4.9">4,9</span><small>/5</small></div><div class="stat__label">ocena w Google</div></div>
      <div class="stat reveal reveal-d1"><div class="stat__num"><span data-count="38">38</span></div><div class="stat__label">opinii w Google</div></div>
      <div class="stat reveal reveal-d2"><div class="stat__num">8–16</div><div class="stat__label">godziny pracy, poniedziałek – piątek</div></div>
    </div>
  </div>
</section>

${featuresBlock()}
${tilesBlock()}
${gearBlock()}
${reviewsBlock()}
${faqBlock(FAQ_GENERAL.slice(0, 4))}
${ctaBand()}
${contactBlock('', true)}
`
};

/* ---------- USŁUGI ---------- */
pages['uslugi.html'] = {
  title: 'Usługi — odbiory, inspektor nadzoru, budowa domów | BAUTIS',
  desc: 'Odbiory techniczne mieszkań, segmentów, domów i lokali usługowych, inspektor nadzoru inwestorskiego oraz kompleksowa budowa domów.',
  active: 'uslugi',
  body: `
${pageHero({ crumbs: ['Usługi'], eyebrow: 'Usługi', title: 'Usługi inżynieryjne w budownictwie', text: 'Odbiory techniczne, nadzór inwestorski i kompleksowa budowa domów.', img: IMG.details })}

<section class="section">
  <div class="container">
    <div class="service-rows">
      ${[
        ['Odbiór mieszkania', 'Odbiór techniczny mieszkania w stanie deweloperskim oraz lokali usługowych.'],
        ['Odbiór domu i segmentu', 'Rozszerzony zakres: poddasze, dach, obróbki, kominy, wentylacja grawitacyjna, zagospodarowanie terenu i elewacja.'],
        ['Inspektor nadzoru', 'Inspektor nadzoru inwestorskiego — nadzór nad budową z ramienia inwestora.'],
        ['Budowa domów', 'Kompleksowa budowa domów jako generalny wykonawca — prowadzenie budowy od podstaw.']
      ].map(([t, d], k) => `<a href="${SERVICES[k].href}" class="service-row reveal">
        <span class="service-row__num">0${k + 1}</span>
        <h3>${t}</h3>
        <p>${d}</p>
        <span class="service-row__arrow">${I.arrow}</span>
      </a>`).join('')}
    </div>
  </div>
</section>

${tilesBlock()}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__media reveal"><img src="${IMG.tape}" alt="Miarka zwijana" loading="lazy"></div>
      <div class="reveal reveal-d1">
        <span class="eyebrow">Doradztwo techniczne</span>
        <h2 class="h-lg">Doradztwo po odbiorze</h2>
        <p>Po odbiorze służymy doradztwem technicznym.</p>
        <ul class="checks">
          <li>${I.check}Porady dotyczące usterek</li>
          <li>${I.check}Wskazówki, jak samodzielnie sprawdzić usunięcie usterek</li>
        </ul>
        <a href="kontakt.html" class="btn">Kontakt ${I.arrow}</a>
      </div>
    </div>
  </div>
</section>

${ctaBand()}
`
};

/* ---------- ODBIÓR MIESZKANIA ---------- */
pages['odbior-mieszkania.html'] = {
  title: 'Odbiór mieszkania — Warszawa | BAUTIS',
  desc: 'Odbiór techniczny mieszkania w stanie deweloperskim: ściany, sufity, posadzki, okna, wentylacja, instalacje, balkon, garaż. Pomiary laserem krzyżowym, pirometrem i aerometrem.',
  active: 'uslugi',
  body: `
${pageHero({ crumbs: ['<a href="uslugi.html">Usługi</a>', 'Odbiór mieszkania'], eyebrow: 'Usługa 01 · Odbiory techniczne', title: 'Odbiór mieszkania', text: 'Odbiory techniczne mieszkań w stanie deweloperskim, segmentów i lokali usługowych.', img: IMG.flat })}

<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Odbiór techniczny</span>
      <h2 class="h-lg">Odbiór mieszkania w stanie deweloperskim</h2>
      <img src="${IMG.emptyRoom}" alt="Lista kontrolna" loading="lazy" style="margin-top:36px;width:100%;aspect-ratio:16/10;object-fit:cover">
    </div>
    <div class="reveal reveal-d1">
      <ul class="checks">
        <li>${I.check}Kontrola według listy kontrolnej</li>
        <li>${I.check}Pomiary laserem krzyżowym, pirometrem, aerometrem i miernikiem wilgotności</li>
        <li>${I.check}Doradztwo techniczne po odbiorze</li>
        <li>${I.check}Pełne uprawnienia budowlane bez ograniczeń</li>
      </ul>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Zakres kontroli</span>
      <h2 class="h-lg">Co sprawdzamy w mieszkaniu?</h2>
      <p>Na końcu odbioru — pomiar wilgotności ścian i posadzek.</p>
    </div>
    ${scopeGrid(SCOPE_FLAT)}
  </div>
</section>

${gearBlock()}
${reviewsBlock()}
${faqBlock(FAQ_GENERAL)}
${contactBlock('Odbiór mieszkania')}
`
};

/* ---------- ODBIÓR DOMU ---------- */
pages['odbior-domu.html'] = {
  title: 'Odbiór domu i segmentu | BAUTIS',
  desc: 'Odbiór techniczny domu i segmentu: poddasze, okna dachowe, dach, obróbki, kominy, wentylacja grawitacyjna, elewacja i zagospodarowanie terenu.',
  active: 'uslugi',
  body: `
${pageHero({ crumbs: ['<a href="uslugi.html">Usługi</a>', 'Odbiór domu'], eyebrow: 'Usługa 02 · Odbiory techniczne', title: 'Odbiór domu i segmentu', text: 'W przypadku domu lub segmentu zakres odbioru jest szerszy niż przy mieszkaniu.', img: IMG.house })}

<section class="section">
  <div class="container split split--rev">
    <div class="split__media reveal"><img src="${IMG.house}" alt="Model domu z kluczami" loading="lazy"></div>
    <div class="reveal reveal-d1">
      <span class="eyebrow">Szerszy zakres</span>
      <h2 class="h-lg">Odbiór domu lub segmentu</h2>
      <p>Zakres obejmuje elementy sprawdzane w mieszkaniu oraz dodatkowo: poddasze (zabudowy, ocieplenie, okna dachowe), dach, obróbki, kominy, wentylację grawitacyjną, zagospodarowanie terenu i elewację.</p>
      <a href="kontakt.html" class="btn">Umów odbiór domu ${I.arrow}</a>
    </div>
  </div>
</section>

<section class="section section--soft">
  <div class="container">
    <div class="section-head reveal">
      <span class="eyebrow">Zakres kontroli</span>
      <h2 class="h-lg">Co dodatkowo sprawdzamy w domu?</h2>
    </div>
    ${scopeGrid(SCOPE_HOUSE_EXTRA)}
    <div style="margin-top:40px" class="reveal">${arrowLink('odbior-mieszkania.html', 'Zakres odbioru mieszkania')}</div>
  </div>
</section>

${gearBlock()}
${faqBlock(FAQ_GENERAL.slice(1))}
${contactBlock('Odbiór domu / segmentu', true)}
`
};

/* ---------- INSPEKTOR NADZORU ---------- */
pages['inspektor-nadzoru.html'] = {
  title: 'Inspektor nadzoru inwestorskiego — Warszawa | BAUTIS',
  desc: 'Inspektor nadzoru inwestorskiego z pełnymi uprawnieniami budowlanymi bez ograniczeń. Nadzór nad budową z ramienia inwestora.',
  active: 'uslugi',
  body: `
${pageHero({ crumbs: ['<a href="uslugi.html">Usługi</a>', 'Inspektor nadzoru'], eyebrow: 'Usługa 03 · Nadzór inwestorski', title: 'Inspektor nadzoru inwestorskiego', text: 'Nadzór nad budową z ramienia inwestora. Pełne uprawnienia budowlane bez ograniczeń.', img: IMG.site })}

<section class="section">
  <div class="container split">
    <div class="reveal">
      <span class="eyebrow">Nadzór inwestorski</span>
      <h2 class="h-lg">Inspektor Nadzoru Inwestorskiego</h2>
      <img src="${IMG.drawing}" alt="Praca nad projektem budowlanym" loading="lazy" style="margin-top:36px;width:100%;aspect-ratio:16/10;object-fit:cover">
    </div>
    <div class="reveal reveal-d1">
      <p class="lead">Świadczymy usługi inżynieryjne w zakresie budownictwa, w szczególności pełnimy funkcję Inspektora Nadzoru Inwestorskiego.</p>
      <ul class="checks">
        <li>${I.check}Nadzór nad budową z ramienia inwestora</li>
        <li>${I.check}Pełne uprawnienia budowlane bez ograniczeń</li>
        <li>${I.check}Profesjonalny sprzęt pomiarowy</li>
      </ul>
      <a href="kontakt.html" class="btn">Zapytaj o nadzór ${I.arrow}</a>
    </div>
  </div>
</section>

${featuresBlock(true)}
${ctaBand()}
${contactBlock('Inspektor nadzoru')}
`
};

/* ---------- BUDOWA DOMÓW ---------- */
pages['budowa-domow.html'] = {
  title: 'Budowa domów — generalny wykonawca | BAUTIS',
  desc: 'Kompleksowa budowa domów — generalny wykonawca. Prowadzenie budowy od podstaw. Pełne uprawnienia budowlane bez ograniczeń.',
  active: 'uslugi',
  body: `
${pageHero({ crumbs: ['<a href="uslugi.html">Usługi</a>', 'Budowa domów'], eyebrow: 'Usługa 04 · Generalny wykonawca', title: 'Kompleksowa budowa domów', text: 'Generalny wykonawca — prowadzenie budowy od podstaw.', img: IMG.build })}

<section class="section">
  <div class="container split">
    <div class="split__media reveal"><img src="${IMG.build}" alt="Linijka na projekcie budowlanym" loading="lazy"></div>
    <div class="reveal reveal-d1">
      <span class="eyebrow">Generalny wykonawca</span>
      <h2 class="h-lg">Budowa domu od podstaw</h2>
      <ul class="checks">
        <li>${I.check}Kompleksowa budowa domów</li>
        <li>${I.check}Prowadzenie budowy od podstaw</li>
        <li>${I.check}Pełne uprawnienia budowlane bez ograniczeń</li>
      </ul>
      <a href="kontakt.html" class="btn">Zapytaj o budowę ${I.arrow}</a>
    </div>
  </div>
</section>

${featuresBlock(true)}
${ctaBand()}
${contactBlock('Budowa domu')}
`
};

/* ---------- O NAS ---------- */
pages['o-nas.html'] = {
  title: 'O nas — BAUTIS Bartosz Krygier',
  desc: 'BAUTIS Bartosz Krygier — odbiory mieszkań i domów, inspektor nadzoru inwestorskiego, budowa domów. Pełne uprawnienia budowlane bez ograniczeń.',
  active: 'o-nas',
  body: `
${pageHero({ crumbs: ['O nas'], eyebrow: 'O nas', title: 'BAUTIS Bartosz Krygier', text: 'Odbiory mieszkań i domów, inspektor nadzoru, budowa domów.', img: IMG.helmet, ctas: false })}

<section class="section">
  <div class="container person">
    <div class="person__card reveal">
      <div class="blueprint">${houseDrawing()}</div>
      <span class="eyebrow">BAUTIS</span>
      <h3>${C.owner}</h3>
    </div>
    <div class="reveal reveal-d1">
      <span class="eyebrow">O nas</span>
      <h2 class="h-lg">Usługi inżynieryjne w budownictwie</h2>
      <p class="lead">Świadczymy usługi inżynieryjne w zakresie budownictwa, w szczególności pełnimy funkcję Inspektora Nadzoru Inwestorskiego.</p>
      <p>Posiadamy pełne uprawnienia budowlane bez ograniczeń. Zajmujemy się nadzorem nad budową z ramienia inwestora, prowadzeniem budowy od podstaw oraz odbiorami technicznymi mieszkań, segmentów, domów i lokali usługowych.</p>
      <p>Pracujemy na profesjonalnym sprzęcie. Po odbiorze służymy doradztwem technicznym. Gwarantujemy punktualność i pełen profesjonalizm.</p>
      <div class="stats" style="grid-template-columns:repeat(2,1fr)">
        <div class="stat"><div class="stat__num">4,9<small>/5</small></div><div class="stat__label">ocena w Google</div></div>
        <div class="stat"><div class="stat__num">${C.reviews}</div><div class="stat__label">opinii w Google</div></div>
      </div>
    </div>
  </div>
</section>

${gearBlock()}
${reviewsBlock()}
${ctaBand()}
`
};

/* ---------- OPINIE ---------- */
pages['opinie.html'] = {
  title: 'Opinie — 4,9 w Google | BAUTIS',
  desc: 'Opinie o BAUTIS Bartosz Krygier w Google: średnia ocena 4,9/5 na podstawie 38 opinii.',
  active: 'opinie',
  body: `
${pageHero({ crumbs: ['Opinie'], eyebrow: 'Opinie', title: 'Opinie w Google', text: `Średnia ocena 4,9 na 5 na podstawie ${C.reviews} opinii w Google.`, ctas: false, img: IMG.room })}

<section class="section">
  <div class="container">
    <div class="reviews-top reveal">
      <div class="rating-box">
        <div class="rating-box__score">4,9</div>
        <div class="rating-box__meta">${stars()}<div>na podstawie ${C.reviews} opinii w Google</div></div>
      </div>
      <div class="bars" aria-label="Rozkład ocen">
        ${[[5, 37], [4, 0], [3, 0], [2, 0], [1, 1]].map(([n, c]) => `<div><span>${n}</span><i><b style="width:${(c / C.reviews * 100).toFixed(1)}%"></b></i><span>${c}</span></div>`).join('')}
      </div>
      <a href="${C.maps}" target="_blank" rel="noopener" class="btn">Zobacz w Google ${I.arrow}</a>
    </div>
  </div>
</section>
${reviewsBlock(false)}
${ctaBand()}
`
};

/* ---------- FAQ ---------- */
pages['faq.html'] = {
  title: 'FAQ — odbiory i inspektor nadzoru | BAUTIS',
  desc: 'Pytania i odpowiedzi: zakres odbioru mieszkania i domu, lokale usługowe, doradztwo po odbiorze, uprawnienia.',
  active: 'faq',
  body: `
${pageHero({ crumbs: ['FAQ'], eyebrow: 'Pytania i odpowiedzi', title: 'Pytania i odpowiedzi', ctas: false, img: IMG.drawing })}
<section class="section">
  <div class="container">
    <div class="faq-group reveal">
      <div class="faq">${FAQ_GENERAL.map(([q, a]) => faqItem(q, a)).join('')}
        ${faqItem('Jaki sprzęt wykorzystujecie?', 'Laser krzyżowy (piony, poziomy, wysokości, zabudowy, lokalizacje urządzeń i osprzętu elektrycznego), pirometr (montaż okien w okresie niskich temperatur), aerometr (wentylacja) oraz miernik wilgotności ścian i posadzek.')}
        ${faqItem('Czy zajmujecie się nadzorem i budową?', 'Tak — pełnimy funkcję Inspektora Nadzoru Inwestorskiego (nadzór nad budową z ramienia inwestora) oraz prowadzimy budowę domów od podstaw jako generalny wykonawca.')}
      </div>
    </div>
  </div>
</section>
${ctaBand()}
`
};

/* ---------- KONTAKT ---------- */
pages['kontakt.html'] = {
  title: 'Kontakt | BAUTIS',
  desc: `Kontakt z BAUTIS: tel. ${C.phone}, ${C.email}. ${C.street}, ${C.city}. Godziny pracy: ${C.hours}.`,
  active: 'kontakt',
  body: `
${pageHero({ crumbs: ['Kontakt'], eyebrow: 'Kontakt', title: 'Kontakt', text: `${C.hours} · ${C.phone} · ${C.email}`, ctas: false, img: IMG.clipboard })}
${contactBlock()}
<section>
  <iframe class="map" src="${C.mapsEmbed}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Mapa — BAUTIS, Pełczyńskiego 14, Warszawa"></iframe>
</section>
<section class="section section--soft section--tight">
  <div class="container">
    <div class="gear gear--light">
      <div class="gear__item">${I.doc}<h3>Dane do faktury</h3><p>BAUTIS ${C.owner}<br>${C.street}<br>${C.city}<br>NIP ${C.nip}</p></div>
      <div class="gear__item">${I.clock}<h3>Godziny pracy</h3><p>Poniedziałek – Piątek: 8:00 – 16:00<br>Sobota – Niedziela: zamknięte</p></div>
      <div class="gear__item">${I.fb}<h3>Facebook</h3><p><a href="${C.fb}" target="_blank" rel="noopener">Bautis Budownictwo</a></p></div>
      <div class="gear__item">${I.star}<h3>Google</h3><p><a href="${C.maps}" target="_blank" rel="noopener">4,9 ★ · ${C.reviews} opinii — zobacz wizytówkę</a></p></div>
    </div>
  </div>
</section>
`
};


/* Rysunek techniczny domu (SVG) — używany zamiast zdjęć */
function houseDrawing() {
  return `<svg viewBox="0 0 320 240" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
    <path d="M40 200h240"/>
    <path d="M70 200V110l90-60 90 60v90"/>
    <path d="M55 120l105-72 105 72" stroke-width="1.6"/>
    <path d="M200 76V44h22v47"/>
    <rect x="95" y="130" width="40" height="34"/><path d="M115 130v34M95 147h40"/>
    <rect x="185" y="130" width="40" height="34"/><path d="M205 130v34M185 147h40"/>
    <path d="M145 200v-46h30v46"/>
    <circle cx="150" cy="96" r="12"/><path d="M150 84v24M138 96h24"/>
    <g stroke-dasharray="3 4" opacity=".55"><path d="M70 220h180M70 214v12M250 214v12"/><path d="M28 200V50M22 200h12M22 50h12"/></g>
  </svg>`;
}

/* ------------------------------------------------------------------ */
for (const [file, p] of Object.entries(pages)) {
  fs.writeFileSync(path.join(OUT, file), layout({ ...p, file }), 'utf8');
  console.log('✓', file);
}
