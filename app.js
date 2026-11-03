/* PRIME – application de démonstration (HTML/CSS/JS, sans serveur). */
(function () {
  'use strict';

  /* ---------------- Icônes ---------------- */
  const P = {
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    calendar: '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    bag: '<path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8V6a3 3 0 016 0v2"/>',
    pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0114 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6"/>',
    drop: '<path d="M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z"/>',
    wrench: '<path d="M14.5 6.5a4 4 0 00-5.3 5.3L4 17l3 3 5.2-5.2a4 4 0 005.3-5.3l-2.5 2.5-2.5-.5-.5-2.5 2.5-2.5z"/>',
    tire: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><path d="M12 3v5M12 16v5M3 12h5M16 12h5"/>',
    star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9L12 3z"/>',
    check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    truck: '<path d="M2 7h11v9H2zM13 10h4l3 3v3h-7z"/><circle cx="6" cy="18" r="2"/><circle cx="17" cy="18" r="2"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6l8-3z"/><path d="M8.5 12l2.5 2.5 4.5-4.5"/>',
    leaf: '<path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14z"/><path d="M5 19l7-7"/>',
    phone: '<rect x="7" y="2" width="10" height="20" rx="3"/><path d="M11 18h2"/>',
    card: '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M7 15h4"/>',
    cash: '<rect x="3" y="7" width="18" height="11" rx="2"/><circle cx="12" cy="12.5" r="2.5"/>',
    gift: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M12 9s-4 0-4-3 4-1 4 3zM12 9s4 0 4-3-4-1-4 3z"/>',
    trash: '<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/>',
    building: '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/>',
    zap: '<path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z"/>'
  };
  const icon = (n) => `<svg class="ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n] || ''}</svg>`;

  const VAN = `<svg class="van" viewBox="0 0 800 420" aria-hidden="true"><defs><linearGradient id="vg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#A8EBB5"/><stop offset=".35" stop-color="#22D66B"/><stop offset=".65" stop-color="#19D3C5"/><stop offset="1" stop-color="#1D7FD6"/></linearGradient></defs><ellipse cx="420" cy="386" rx="360" ry="18" fill="#07201A" opacity=".35"/><rect x="130" y="50" width="400" height="10" rx="3" fill="#0B1210"/><rect x="150" y="50" width="10" height="24" fill="#0B1210"/><rect x="500" y="50" width="10" height="24" fill="#0B1210"/><rect x="520" y="36" width="110" height="20" rx="5" fill="#0B1210"/><rect x="530" y="41" width="20" height="10" rx="2" fill="#F5E27A"/><rect x="556" y="41" width="20" height="10" rx="2" fill="#F5E27A"/><rect x="582" y="41" width="20" height="10" rx="2" fill="#F5E27A"/><rect x="608" y="41" width="16" height="10" rx="2" fill="#F5E27A"/><rect x="62" y="110" width="20" height="160" rx="4" fill="#0B1210"/><path d="M80 98Q80 70 108 70H588Q612 70 624 90L690 188H748Q774 188 778 214L782 300Q782 322 760 322H80Z" fill="#1E2925" stroke="#0B1210" stroke-width="3"/><path d="M108 72H588Q610 72 621 90L627 99H82V98Q82 72 108 72Z" fill="#2C3A35"/><path d="M560 96H608Q616 96 622 104L670 182H560Z" fill="#070D0B"/><path d="M360 70H420L330 322H270Z" fill="url(#vg)"/><path d="M440 70H462L372 322H350Z" fill="url(#vg)" opacity=".7"/><rect x="80" y="276" width="700" height="10" fill="url(#vg)"/><path d="M552 96V316M250 84V316" stroke="#131B18" stroke-width="4"/><rect x="566" y="206" width="30" height="8" rx="4" fill="#0B1210"/><path d="M744 198H774Q778 198 778 206V214H738Z" fill="#E9F7FF"/><rect x="752" y="222" width="28" height="44" rx="4" fill="#0B1210"/><rect x="700" y="298" width="92" height="26" rx="8" fill="#0B1210"/><path d="M140 322A70 70 0 0 1 280 322ZM590 322A70 70 0 0 1 730 322Z" fill="#0B1210"/><g><circle cx="210" cy="324" r="58" fill="#070B0A"/><circle cx="210" cy="324" r="32" fill="#1E2925"/><circle cx="210" cy="324" r="26" fill="none" stroke="#22D66B" stroke-width="4"/><circle cx="210" cy="324" r="9" fill="#0B1210"/></g><g><circle cx="660" cy="324" r="58" fill="#070B0A"/><circle cx="660" cy="324" r="32" fill="#1E2925"/><circle cx="660" cy="324" r="26" fill="none" stroke="#22D66B" stroke-width="4"/><circle cx="660" cy="324" r="9" fill="#0B1210"/></g></svg>`;

  const bottle = (c1, c2) => `<svg viewBox="0 0 100 140" aria-hidden="true"><rect x="38" y="8" width="24" height="14" rx="3" fill="#2C3A35"/><rect x="34" y="20" width="32" height="12" rx="3" fill="#1E2925"/><rect x="22" y="30" width="56" height="104" rx="16" fill="#FFFFFF" stroke="#D5E1DB" stroke-width="2"/><rect x="22" y="62" width="56" height="40" fill="${c1}"/><rect x="22" y="96" width="56" height="6" fill="${c2}"/><path d="M50 70c0 0-8 9-8 14a8 8 0 0016 0c0-5-8-14-8-14z" fill="#FFFFFF"/></svg>`;
  const cloth = `<svg viewBox="0 0 100 100" aria-hidden="true"><rect x="14" y="30" width="72" height="20" rx="6" fill="#19D3C5"/><rect x="14" y="48" width="72" height="20" rx="6" fill="#22D66B"/><rect x="14" y="66" width="72" height="20" rx="6" fill="#1D7FD6"/></svg>`;
  const kit = `<svg viewBox="0 0 120 100" aria-hidden="true"><rect x="8" y="40" width="104" height="54" rx="10" fill="#1E2925"/><rect x="8" y="58" width="104" height="8" fill="#22D66B"/><rect x="24" y="10" width="20" height="36" rx="6" fill="#FFFFFF" stroke="#D5E1DB"/><rect x="50" y="4" width="20" height="42" rx="6" fill="#FFFFFF" stroke="#D5E1DB"/><rect x="76" y="14" width="20" height="32" rx="6" fill="#FFFFFF" stroke="#D5E1DB"/><rect x="24" y="22" width="20" height="10" fill="#19D3C5"/><rect x="50" y="18" width="20" height="10" fill="#22D66B"/><rect x="76" y="24" width="20" height="10" fill="#1D7FD6"/></svg>`;

  /* ---------------- Données ---------------- */
  const SERVICES = [
    { cat: 'lavage', label: 'Lavage', color: 'c-mint', icon: 'drop', items: [
      { id: 'basic', name: 'Basic', desc: 'Extérieur · 30 min', price: 25 },
      { id: 'premium', name: 'Premium', desc: 'Extérieur + intérieur · 1 h', price: 50 },
      { id: 'deluxe', name: 'Deluxe', desc: 'Complet + cire de protection · 2 h', price: 90 }
    ] },
    { cat: 'reparations', label: 'Petites réparations', color: 'c-green', icon: 'wrench', items: [
      { id: 'batterie', name: 'Batterie', desc: 'Contrôle et recharge', price: 20 },
      { id: 'ampoules', name: 'Ampoules', desc: 'Changement (pièce en plus)', price: 10 },
      { id: 'essuie', name: 'Essuie-glaces', desc: 'Changement (pièce en plus)', price: 15 },
      { id: 'niveaux', name: 'Niveaux', desc: 'Huile, eau, lave-glace', price: 10 }
    ] },
    { cat: 'pneus', label: 'Pneus', color: 'c-teal', icon: 'tire', items: [
      { id: 'crevaison', name: 'Crevaison', desc: 'Réparation sur place', price: 20 },
      { id: 'pression', name: 'Pression', desc: 'Contrôle des 4 pneus', price: 5 },
      { id: 'changement', name: 'Changement de pneu', desc: 'Montage (pneu en plus)', price: 15 },
      { id: 'secours', name: 'Roue de secours', desc: 'Pose de la roue', price: 10 }
    ] }
  ];
  const ALL = SERVICES.flatMap((g) => g.items.map((i) => Object.assign({ cat: g.cat, color: g.color, icon: g.icon }, i)));
  const svc = (id) => ALL.find((s) => s.id === id);

  const PRODUCTS = [
    { id: 'wheelking', name: 'WheelKing 500 ml', desc: 'Nettoyant jantes sans acide · The Finisher', price: 45, img: 'assets/wheelking.jpg' },
    { id: 'shampoo', name: 'Shampoing pro 1 L', desc: 'Lavage doux, beaucoup de mousse', price: 38, art: bottle('#22D66B', '#19D3C5') },
    { id: 'interieur', name: 'Nettoyant intérieur 500 ml', desc: 'Sièges, plastiques et tableau de bord', price: 32, art: bottle('#19D3C5', '#1D7FD6') },
    { id: 'cire', name: 'Cire de finition 500 ml', desc: 'Brillance et protection', price: 55, art: bottle('#1D7FD6', '#2547B8') },
    { id: 'micro', name: 'Microfibres x3', desc: 'Sans rayures, lavables', price: 25, art: cloth },
    { id: 'kit', name: 'Kit PRIME complet', desc: '4 produits + 3 microfibres', price: 165, art: kit }
  ];
  const prod = (id) => PRODUCTS.find((p) => p.id === id);

  const PLANS = [
    { id: 'essentiel', name: 'Essentiel', price: 45, unit: '/ mois', perks: ['2 lavages Basic par mois', 'Contrôle de pression offert', 'Points fidélité x2'] },
    { id: 'confort', name: 'Confort', price: 90, unit: '/ mois', best: true, perks: ['2 lavages Premium par mois', 'Contrôle batterie et niveaux offert', '-10 % à la boutique', 'Points fidélité x2'] },
    { id: 'pro', name: 'Entreprise', price: null, unit: 'flottes', perks: ['Lavage de toute votre flotte', 'Un jour fixe chaque semaine', 'Une facture par mois'] }
  ];

  /* ---------------- État (localStorage) ---------------- */
  const KEY = 'prime-demo-v1';
  const fresh = () => ({ cart: {}, bookings: [], orders: [], points: 120, plan: null, usedPromo: false });
  let S;
  try { S = Object.assign(fresh(), JSON.parse(localStorage.getItem(KEY) || '{}')); } catch (e) { S = fresh(); }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* stockage indisponible */ } };

  let draft = null; // réservation en cours
  const newDraft = (cat) => ({ step: 1, services: [], cat: cat || 'lavage', day: null, time: null, place: 'Domicile', address: '', car: '', phone: '', pay: 'card', promo: '', promoOk: false });

  /* ---------------- Outils ---------------- */
  const $ = (s, r) => (r || document).querySelector(s);
  const app = $('#app');
  const dt = (n) => `${Number(n).toLocaleString('fr-FR')} DT`;
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const days = () => {
    const out = []; const base = new Date();
    for (let i = 0; i < 7; i++) {
      const d = new Date(base); d.setDate(base.getDate() + i);
      out.push({ key: d.toISOString().slice(0, 10), label: i === 0 ? "Aujourd'hui" : i === 1 ? 'Demain' : d.toLocaleDateString('fr-FR', { weekday: 'short', day: 'numeric' }) });
    }
    return out;
  };
  const SLOTS = ['08:00', '09:30', '11:00', '12:30', '14:00', '15:30', '17:00', '18:30'];
  const taken = (day, slot) => { let h = 0; for (const c of day + slot) h = (h * 31 + c.charCodeAt(0)) % 997; return h % 4 === 0; };
  const dayLabel = (key) => (days().find((d) => d.key === key) || { label: key }).label;
  const code = () => 'PR-' + Math.random().toString(36).slice(2, 6).toUpperCase();
  const cartCount = () => Object.values(S.cart).reduce((a, b) => a + b, 0);
  const cartTotal = () => Object.entries(S.cart).reduce((a, [id, q]) => a + prod(id).price * q, 0);
  const shopDiscount = () => (S.plan === 'confort' ? 0.1 : 0);

  let toastTimer;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('show');
    clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }
  function updateBadge() {
    const b = $('#cart-badge'); const n = cartCount();
    b.hidden = n === 0; b.textContent = n;
  }
  function active() { return S.bookings.find((b) => b.state < 4); }

  /* ---------------- Vues ---------------- */
  function header(eyebrow, title, lead) {
    return `<div class="top"><span class="logo">PRIME</span><a href="#/compte" class="avatar" aria-label="Mon compte">${icon('user')}</a></div>
      <p class="eyebrow">${eyebrow}</p><h1 class="page-title">${title}</h1>${lead ? `<p class="lead">${lead}</p>` : ''}`;
  }

  function productCard(p) {
    return `<article class="card product">
      <div class="pic">${p.img ? `<img src="${p.img}" alt="${esc(p.name)}" loading="lazy">` : p.art}</div>
      <h3>${esc(p.name)}</h3><small>${esc(p.desc)}</small>
      <div class="foot"><span class="price">${dt(p.price)}</span>
        <button class="add" data-action="add" data-id="${p.id}" aria-label="Ajouter ${esc(p.name)} au panier">${icon('plus')}</button></div>
    </article>`;
  }

  function liveCard(b) {
    const pct = [10, 35, 70, 100][b.state] || 10;
    const txt = ['Réservation confirmée', "L'équipe est en route", "L'équipe est sur place", 'Terminé'][b.state];
    return `<a href="#/suivi" class="card live">
      <div class="live-row"><span class="dot"></span><strong style="flex:1">${txt}</strong><span class="link">Suivre ${icon('arrow')}</span></div>
      <div class="bar"><i style="width:${pct}%"></i></div>
      <small class="lead">${esc(b.services.map((id) => svc(id).name).join(' · '))} · ${dayLabel(b.day)} à ${b.time}</small>
    </a>`;
  }

  function viewHome() {
    const a = active();
    return `<div class="view">
      ${header('Bienvenue', 'Votre voiture, entretenue là où vous êtes.')}
      <section class="section hero">
        <p class="eyebrow">Offre de lancement</p>
        <h1>-10 % sur votre 1re réservation</h1>
        <p>Avec le code <b>PRIME10</b>. Lavage, réparations et pneus en une seule visite.</p>
        <a href="#/reserver" class="btn btn-dark">${icon('calendar')} Réserver maintenant</a>
        ${VAN}
      </section>
      ${a ? `<section class="section">${liveCard(a)}</section>` : ''}
      <section class="section">
        <div class="section-head"><h2>Nos services</h2><a href="#/reserver" class="link">Tout voir</a></div>
        <div class="grid grid-4 stagger">
          ${SERVICES.map((g) => `<button class="card tile" data-action="book" data-cat="${g.cat}"><span class="chip ${g.color}">${icon(g.icon)}</span><strong>${g.label}</strong><small>Dès ${dt(Math.min(...g.items.map((i) => i.price)))}</small></button>`).join('')}
          <a href="#/boutique" class="card tile"><span class="chip c-blue">${icon('bag')}</span><strong>Boutique</strong><small>Produits Koch-Chemie</small></a>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Pourquoi PRIME ?</h2></div>
        <div class="grid grid-3 stagger">
          <div class="card tile"><span class="chip c-mint">${icon('home')}</span><strong>On vient à vous</strong><small>À la maison ou au travail. Pas de trajet, pas d'attente.</small></div>
          <div class="card tile"><span class="chip c-green">${icon('zap')}</span><strong>Tout en une visite</strong><small>Lavage, petites réparations et pneus ensemble.</small></div>
          <div class="card tile"><span class="chip c-teal">${icon('leaf')}</span><strong>Peu d'eau</strong><small>Un lavage qui économise l'eau, avec des produits pro.</small></div>
        </div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Boutique</h2><a href="#/boutique" class="link">Voir tout</a></div>
        <div class="grid grid-2 grid-3 stagger">${PRODUCTS.slice(0, 3).map(productCard).join('')}</div>
      </section>
    </div>`;
  }

  /* ----- Réservation ----- */
  function bookTotal(d) {
    const sub = d.services.reduce((a, id) => a + svc(id).price, 0);
    const disc = d.promoOk ? Math.round(sub * 0.1) : 0;
    return { sub, disc, total: sub - disc };
  }

  function summaryCard(d) {
    const t = bookTotal(d);
    return `<div class="card summary">
      <strong>Votre visite</strong>
      ${d.services.length ? d.services.map((id) => `<div class="row"><span>${svc(id).name}</span><span>${dt(svc(id).price)}</span></div>`).join('') : '<p class="empty">Choisissez au moins un service.</p>'}
      ${d.day ? `<div class="row"><span>Quand</span><span>${dayLabel(d.day)}${d.time ? ' · ' + d.time : ''}</span></div>` : ''}
      ${d.address ? `<div class="row"><span>Où</span><span>${esc(d.place)}</span></div>` : ''}
      ${t.disc ? `<div class="row"><span>Code PRIME10</span><span>-${dt(t.disc)}</span></div>` : ''}
      <div class="row total"><span>Total</span><span>${dt(t.total)}</span></div>
    </div>`;
  }

  function stepServices(d) {
    return `<h2>1. Choisissez vos services</h2><p class="lead">Vous pouvez en prendre plusieurs : on fait tout en une visite.</p>
      <div class="pills" style="margin-top:14px">${SERVICES.map((g) => `<button class="pill ${d.cat === g.cat ? 'selected' : ''}" data-action="cat" data-cat="${g.cat}">${g.label}</button>`).join('')}</div>
      <div class="grid stagger" style="margin-top:14px">
        ${SERVICES.find((g) => g.cat === d.cat).items.map((i) => { const on = d.services.includes(i.id); const g = SERVICES.find((x) => x.cat === d.cat);
          return `<button class="choice ${on ? 'selected' : ''}" data-action="toggle" data-id="${i.id}" aria-pressed="${on}">
            <span class="chip ${g.color}">${icon(on ? 'check' : g.icon)}</span>
            <span class="txt"><strong>${i.name}</strong><small>${i.desc}</small></span><span class="price">${dt(i.price)}</span></button>`; }).join('')}
      </div>`;
  }

  function stepWhen(d) {
    return `<h2>2. Quand ?</h2><p class="lead">Choisissez le jour puis l'heure.</p>
      <p class="group-label">Jour</p>
      <div class="pills">${days().map((x) => `<button class="pill ${d.day === x.key ? 'selected' : ''}" data-action="day" data-v="${x.key}">${x.label}</button>`).join('')}</div>
      <p class="group-label">Heure</p>
      ${d.day ? `<div class="pills">${SLOTS.map((s) => { const off = taken(d.day, s); return `<button class="pill ${d.time === s ? 'selected' : ''}" data-action="time" data-v="${s}" ${off ? 'disabled aria-label="' + s + ' complet"' : ''}>${s}</button>`; }).join('')}</div>` : '<p class="lead">Choisissez d\'abord un jour.</p>'}`;
  }

  function stepWhere(d) {
    return `<h2>3. Où ?</h2><p class="lead">On vient avec tout le matériel, eau comprise.</p>
      <div class="pills" style="margin:14px 0 18px">${['Domicile', 'Travail', 'Autre'].map((p) => `<button class="pill ${d.place === p ? 'selected' : ''}" data-action="place" data-v="${p}">${p}</button>`).join('')}</div>
      <div class="field"><label for="f-address">Adresse</label><input id="f-address" class="input" data-field="address" value="${esc(d.address)}" placeholder="Ex. 12 rue de Marseille, Tunis" autocomplete="street-address"></div>
      <div class="field"><label for="f-car">Votre voiture</label><input id="f-car" class="input" data-field="car" value="${esc(d.car)}" placeholder="Ex. Peugeot 208 grise"></div>
      <div class="field"><label for="f-phone">Téléphone</label><input id="f-phone" class="input" data-field="phone" value="${esc(d.phone)}" placeholder="Ex. 22 123 456" inputmode="tel" autocomplete="tel"></div>`;
  }

  function stepPay(d) {
    const opts = [['card', 'card', 'Carte en ligne', 'Paiement simulé'], ['onsite', 'phone', 'Carte sur place', 'Avec notre terminal'], ['cash', 'cash', 'Espèces', 'À la fin du service']];
    return `<h2>4. Paiement</h2><p class="lead">C'est une démo : aucun paiement réel.</p>
      <div class="grid" style="margin-top:14px">${opts.map(([v, ic, t, s]) => `<button class="choice ${d.pay === v ? 'selected' : ''}" data-action="pay" data-v="${v}"><span class="chip c-teal">${icon(ic)}</span><span class="txt"><strong>${t}</strong><small>${s}</small></span></button>`).join('')}</div>
      <div class="field" style="margin-top:18px"><label for="f-promo">Code promo</label>
        <div style="display:flex;gap:8px"><input id="f-promo" class="input" data-field="promo" value="${esc(d.promo)}" placeholder="PRIME10" autocapitalize="characters"><button class="btn btn-ghost" data-action="promo">Appliquer</button></div></div>`;
  }

  function canNext(d) {
    if (d.step === 1) return d.services.length > 0;
    if (d.step === 2) return d.day && d.time;
    if (d.step === 3) return d.address.trim().length > 3 && d.phone.trim().length > 5;
    return true;
  }

  function viewBook() {
    if (!draft) draft = newDraft();
    const d = draft;
    const body = [stepServices, stepWhen, stepWhere, stepPay][d.step - 1](d);
    return `<div class="view">
      ${header('Réservation', 'Réserver une visite')}
      <div class="steps" aria-label="Étape ${d.step} sur 4">${[1, 2, 3, 4].map((i) => `<span class="${i <= d.step ? 'on' : ''}"></span>`).join('')}</div>
      <div class="two-col">
        <div>${body}
          <div class="actions">
            ${d.step > 1 ? `<button class="btn btn-ghost" data-action="prev">${icon('back')} Retour</button>` : ''}
            ${d.step < 4 ? `<button class="btn btn-primary" data-action="next" ${canNext(d) ? '' : 'disabled'}>Continuer ${icon('arrow')}</button>`
                         : `<button class="btn btn-primary" data-action="confirm">${icon('check')} Confirmer · ${dt(bookTotal(d).total)}</button>`}
          </div>
        </div>
        <div class="sticky">${summaryCard(d)}</div>
      </div>
    </div>`;
  }

  function viewBooked(b) {
    return `<div class="view"><div class="card success">
      <div class="check">${icon('check')}</div>
      <h1 class="page-title">C'est réservé !</h1>
      <p class="lead">${dayLabel(b.day)} à ${b.time} · ${esc(b.place)}<br>${esc(b.services.map((id) => svc(id).name).join(' · '))}</p>
      <span class="code">${b.code}</span>
      <p class="lead">Total : <b style="color:var(--text)">${dt(b.total)}</b> · +${Math.floor(b.total / 10)} points fidélité</p>
      <div class="actions" style="justify-content:center;width:100%">
        <a href="#/suivi" class="btn btn-primary">${icon('pin')} Suivre l'équipe</a>
        <a href="#/" class="btn btn-ghost">Accueil</a>
      </div>
    </div></div>`;
  }

  /* ----- Boutique ----- */
  function viewShop() {
    const lines = Object.entries(S.cart);
    const sub = cartTotal(); const disc = Math.round(sub * shopDiscount());
    return `<div class="view">
      ${header('Boutique', 'Produits pro', 'Les produits que nous utilisons, à acheter pour chez vous.')}
      <div class="brand-strip section" style="margin-top:16px"><span class="tag">Partenaire officiel · Koch-Chemie</span></div>
      <div class="two-col section" style="margin-top:16px">
        <div class="grid grid-2 grid-3 stagger">${PRODUCTS.map(productCard).join('')}</div>
        <div class="sticky card summary" id="cart">
          <strong>Mon panier</strong>
          ${lines.length ? lines.map(([id, q]) => `<div class="cart-line"><span class="name">${esc(prod(id).name)}</span>
              <div class="qty"><button data-action="dec" data-id="${id}" aria-label="Retirer un">−</button><span>${q}</span><button data-action="add" data-id="${id}" aria-label="Ajouter un">+</button></div></div>`).join('')
            : '<p class="empty">Votre panier est vide.</p>'}
          ${disc ? `<div class="row"><span>Abonné Confort -10 %</span><span>-${dt(disc)}</span></div>` : ''}
          <div class="row"><span>Livraison</span><span>Offerte à la prochaine visite</span></div>
          <div class="row total"><span>Total</span><span>${dt(sub - disc)}</span></div>
          <button class="btn btn-primary btn-block" data-action="checkout" ${lines.length ? '' : 'disabled'}>${icon('bag')} Commander</button>
        </div>
      </div>
    </div>`;
  }

  function viewOrdered(o) {
    return `<div class="view"><div class="card success">
      <div class="check">${icon('check')}</div>
      <h1 class="page-title">Commande validée !</h1>
      <p class="lead">${o.count} article(s) · ${dt(o.total)}<br>On vous les apporte à votre prochaine visite.</p>
      <span class="code">${o.code}</span>
      <div class="actions" style="justify-content:center;width:100%"><a href="#/reserver" class="btn btn-primary">${icon('calendar')} Réserver une visite</a><a href="#/boutique" class="btn btn-ghost">Boutique</a></div>
    </div></div>`;
  }

  /* ----- Suivi ----- */
  let trackTimer = null; let etaTimer = null;
  const ROUTE = 'M40 250 C 120 250, 140 170, 220 170 S 330 90, 410 120 S 520 210, 600 150';
  function mapSvg() {
    return `<svg viewBox="0 0 640 400" role="img" aria-label="Carte du trajet de l'équipe">
      <rect width="640" height="400" fill="#0A1915"/>
      <g stroke="#13302A" stroke-width="22" fill="none" stroke-linecap="round">
        <path d="M0 80 H640"/><path d="M0 300 H640"/><path d="M160 0 V400"/><path d="M470 0 V400"/><path d="M0 200 L640 40"/>
      </g>
      <g fill="#0F241F"><rect x="20" y="110" width="110" height="60" rx="8"/><rect x="190" y="210" width="120" height="70" rx="8"/><rect x="500" y="200" width="120" height="80" rx="8"/><rect x="290" y="320" width="150" height="60" rx="8"/><rect x="200" y="20" width="230" height="40" rx="8"/></g>
      <path id="route" d="${ROUTE}" fill="none" stroke="url(#rg)" stroke-width="6" stroke-linecap="round" stroke-dasharray="2 12"/>
      <defs><linearGradient id="rg" x1="0" x2="1"><stop offset="0" stop-color="#22D66B"/><stop offset="1" stop-color="#19D3C5"/></linearGradient></defs>
      <circle cx="40" cy="250" r="9" fill="#1D7FD6"/>
      <g transform="translate(600 150)"><circle r="26" fill="#22D66B" opacity=".18"/><circle r="13" fill="#22D66B"/><circle r="5" fill="#07201A"/></g>
      <g id="vanpin"><circle r="20" fill="#EEF7F2"/><g transform="translate(-12 -12) scale(1)" stroke="#07201A" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round">${P.truck}</g></g>
    </svg>`;
  }

  function viewTrack() {
    const b = active() || S.bookings[0];
    if (!b) {
      return `<div class="view">${header('Suivi', 'Suivre mon équipe')}
        <div class="card success section"><div class="check">${icon('truck')}</div><p class="lead">Pas de visite en cours. Réservez et suivez l'équipe en direct ici.</p><a href="#/reserver" class="btn btn-primary">${icon('calendar')} Réserver</a></div></div>`;
    }
    const steps = [['Réservation confirmée', b.code], ["L'équipe est en route", 'Karim et Youssef arrivent'], ["L'équipe est sur place", 'Le travail commence'], ['Terminé', 'Votre voiture est prête']];
    const done = b.state >= 4;
    return `<div class="view">
      ${header('Suivi en direct', done ? 'Visite terminée' : 'Votre équipe arrive')}
      <div class="two-col section" style="margin-top:16px">
        <div class="grid">
          <div class="map">${mapSvg()}</div>
          <div class="card live">
            <div class="live-row">${done ? icon('check') : '<span class="dot"></span>'}<strong style="flex:1" id="eta">${done ? 'Votre voiture est prête !' : b.state >= 2 ? 'Sur place · travail en cours' : `Arrivée dans ${b.eta} min`}</strong></div>
            <div class="bar"><i id="trackbar" style="width:${[10, 35, 70, 100, 100][b.state]}%"></i></div>
          </div>
        </div>
        <div class="grid sticky">
          <div class="card crew"><div class="av">KY</div><div style="flex:1"><strong>Karim & Youssef</strong><small class="lead" style="display:block">Camion PRIME · 4,9 ★</small></div><button class="btn btn-ghost" data-action="call" aria-label="Appeler l'équipe">${icon('phone')}</button></div>
          <div class="card"><div class="timeline">${steps.map((s, i) => `<div class="tl ${i < b.state || (i === 3 && done) ? 'done' : i === b.state ? 'now' : ''}"><span class="n">${i < b.state || (i === 3 && done) ? icon('check') : ''}</span><div><strong>${s[0]}</strong><small>${s[1]}</small></div></div>`).join('')}</div></div>
          ${done ? (b.rating ? `<div class="card"><strong>Merci pour votre avis !</strong><p class="lead">${'★'.repeat(b.rating)}</p></div>` :
            `<div class="card"><strong>Notez la visite</strong><p class="lead">+20 points fidélité</p><div class="pills" style="margin-top:10px">${[1, 2, 3, 4, 5].map((n) => `<button class="pill" data-action="rate" data-v="${n}" aria-label="${n} étoiles">${'★'.repeat(n)}</button>`).join('')}</div></div>`)
            : `<button class="btn btn-ghost btn-block" data-action="skip">${icon('zap')} Avancer la démo</button>`}
        </div>
      </div>
    </div>`;
  }

  function placeVan(b) {
    const route = $('#route'); const pin = $('#vanpin'); if (!route || !pin) return;
    const L = route.getTotalLength();
    const t = b.state >= 2 ? 1 : b.state === 1 ? Math.min(1, (15 - b.eta) / 15) * 0.9 + 0.05 : 0;
    const pt = route.getPointAtLength(L * t);
    pin.setAttribute('transform', `translate(${pt.x} ${pt.y})`);
  }

  function startTracking() {
    stopTracking();
    const b = active(); if (!b) { const last = S.bookings[0]; if (last) requestAnimationFrame(() => placeVan(last)); return; }
    requestAnimationFrame(() => placeVan(b));
    if (b.state === 0) setTimeout(() => { if (b.state === 0) { b.state = 1; save(); render(); } }, 2500);
    etaTimer = setInterval(() => {
      if (b.state !== 1) return;
      b.eta = Math.max(0, b.eta - 1); save();
      const e = $('#eta'); if (e) e.textContent = `Arrivée dans ${b.eta} min`;
      placeVan(b);
      if (b.eta === 0) advance(b);
    }, 4000);
  }
  function stopTracking() { clearInterval(etaTimer); clearTimeout(trackTimer); }
  function advance(b) {
    b.state = b.state >= 2 ? 4 : b.state + 1; if (b.state === 2) b.eta = 0;
    if (b.state === 2) trackTimer = setTimeout(() => { if (b.state === 2) { b.state = 4; save(); render(); toast('Votre voiture est prête !'); } }, 8000);
    save(); render();
  }

  /* ----- Compte ----- */
  function viewAccount() {
    const level = S.points >= 500 ? 'Or' : S.points >= 250 ? 'Argent' : 'Bronze';
    const next = S.points >= 500 ? null : S.points >= 250 ? 500 : 250;
    return `<div class="view">
      ${header('Mon compte', 'Bonjour !', 'Vos points, votre abonnement et vos visites.')}
      <div class="card points section">
        <div><p class="eyebrow">Points fidélité · ${level}</p><p class="big">${S.points}</p><small class="lead">${next ? `Encore ${next - S.points} points pour le niveau suivant` : 'Niveau maximum, bravo !'}</small></div>
        <span class="chip c-green" style="width:64px;height:64px;border-radius:50%;display:grid;place-items:center;color:#07201A">${icon('gift')}</span>
      </div>
      <section class="section">
        <div class="section-head"><h2>Abonnements</h2>${S.plan ? `<span class="status">Actif : ${PLANS.find((p) => p.id === S.plan).name}</span>` : ''}</div>
        <div class="grid grid-3 stagger">${PLANS.map((p) => `<div class="card plan ${p.best ? 'best' : ''}">${p.best ? '<span class="ribbon">Populaire</span>' : ''}
          <strong>${p.name}</strong><p class="amount">${p.price ? dt(p.price) : 'Sur devis'} <small>${p.unit}</small></p>
          <ul>${p.perks.map((x) => `<li>${icon('check')}<span>${x}</span></li>`).join('')}</ul>
          ${p.id === 'pro' ? `<button class="btn btn-ghost btn-block" data-action="quote">${icon('building')} Demander un devis</button>`
            : S.plan === p.id ? `<button class="btn btn-ghost btn-block" data-action="unsub">Arrêter</button>` : `<button class="btn btn-primary btn-block" data-action="sub" data-id="${p.id}">Choisir</button>`}
        </div>`).join('')}</div>
      </section>
      <section class="section">
        <div class="section-head"><h2>Mes visites</h2></div>
        <div class="card">${S.bookings.length ? S.bookings.map((b) => `<div class="history-item"><span class="chip c-mint" style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center;color:#07201A">${icon('drop')}</span>
          <div class="meta"><strong>${esc(b.services.map((id) => svc(id).name).join(' · '))}</strong><small>${dayLabel(b.day)} · ${b.time} · ${b.code}</small></div>
          <span class="status">${b.state >= 4 ? 'Terminé' : 'En cours'}</span></div>`).join('') : '<p class="empty">Pas encore de visite.</p>'}
          ${S.orders.length ? S.orders.map((o) => `<div class="history-item"><span class="chip c-blue" style="width:40px;height:40px;border-radius:50%;display:grid;place-items:center">${icon('bag')}</span><div class="meta"><strong>Commande boutique</strong><small>${o.count} article(s) · ${o.code}</small></div><span class="status">${dt(o.total)}</span></div>`).join('') : ''}
        </div>
      </section>
      <section class="section"><button class="btn btn-ghost" data-action="reset">${icon('trash')} Remettre la démo à zéro</button></section>
    </div>`;
  }

  /* ---------------- Routeur ---------------- */
  let flash = null; // écran de succès à montrer une fois
  function route() { return (location.hash.replace(/^#\/?/, '').split('?')[0]) || 'home'; }

  let lastRoute = null;
  function render() {
    stopTracking();
    const changed = route() !== lastRoute || flash; lastRoute = route();
    app.classList.toggle('animate', !!changed);
    const r = route();
    let html;
    if (flash && flash.route === r) { html = flash.html; }
    else {
      flash = null;
      html = r === 'reserver' ? viewBook() : r === 'boutique' ? viewShop() : r === 'suivi' ? viewTrack() : r === 'compte' ? viewAccount() : viewHome();
    }
    app.innerHTML = html;
    document.querySelectorAll('.nav a').forEach((a) => a.classList.toggle('active', a.dataset.route === (['reserver', 'boutique', 'suivi', 'compte'].includes(r) ? r : 'home')));
    updateBadge();
    if (r === 'suivi') startTracking();
  }

  window.addEventListener('hashchange', () => { flash = null; render(); window.scrollTo(0, 0); });

  /* ---------------- Actions ---------------- */
  app.addEventListener('input', (e) => {
    const f = e.target.dataset.field; if (!f || !draft) return;
    draft[f] = e.target.value;
    if (f !== 'promo') {
      const btn = $('[data-action="next"]'); if (btn) btn.disabled = !canNext(draft);
    }
  });

  app.addEventListener('click', (e) => {
    const el = e.target.closest('[data-action]'); if (!el) return;
    const a = el.dataset.action; const v = el.dataset.v; const id = el.dataset.id;
    switch (a) {
      case 'book': draft = newDraft(el.dataset.cat); location.hash = '#/reserver'; if (route() === 'reserver') render(); break;
      case 'cat': draft.cat = el.dataset.cat; render(); break;
      case 'toggle': { const i = draft.services.indexOf(id); i >= 0 ? draft.services.splice(i, 1) : draft.services.push(id); render(); break; }
      case 'day': draft.day = v; draft.time = null; render(); break;
      case 'time': draft.time = v; render(); break;
      case 'place': draft.place = v; render(); break;
      case 'pay': draft.pay = v; render(); break;
      case 'next': if (canNext(draft)) { draft.step++; render(); window.scrollTo(0, 0); } break;
      case 'prev': draft.step--; render(); window.scrollTo(0, 0); break;
      case 'promo': {
        const c = (draft.promo || '').trim().toUpperCase();
        if (c !== 'PRIME10') toast('Code inconnu');
        else if (S.usedPromo) toast('Code déjà utilisé');
        else { draft.promoOk = true; toast('-10 % appliqué !'); }
        render(); break;
      }
      case 'confirm': { lastRoute = null;
        const t = bookTotal(draft);
        const b = { code: code(), services: draft.services.slice(), day: draft.day, time: draft.time, place: draft.place, address: draft.address, total: t.total, state: 0, eta: 15, created: Date.now() };
        S.bookings.unshift(b); S.points += Math.floor(t.total / 10); if (draft.promoOk) S.usedPromo = true; save();
        draft = null; flash = { route: 'reserver', html: viewBooked(b) }; render(); window.scrollTo(0, 0); break;
      }
      case 'add': S.cart[id] = (S.cart[id] || 0) + 1; save(); updateBadge(); toast(`${prod(id).name} ajouté`); if (route() === 'boutique') { const y = window.scrollY; render(); window.scrollTo(0, y); } break;
      case 'dec': S.cart[id]--; if (S.cart[id] <= 0) delete S.cart[id]; save(); { const y = window.scrollY; render(); window.scrollTo(0, y); } break;
      case 'checkout': { lastRoute = null;
        const sub = cartTotal(); const total = sub - Math.round(sub * shopDiscount());
        const o = { code: code(), count: cartCount(), total };
        S.orders.unshift(o); S.points += Math.floor(total / 10); S.cart = {}; save();
        flash = { route: 'boutique', html: viewOrdered(o) }; render(); window.scrollTo(0, 0); break;
      }
      case 'skip': { const b = active(); if (b) { if (b.state === 1) b.eta = 0; advance(b); } break; }
      case 'rate': { const b = S.bookings[0]; b.rating = Number(v); S.points += 20; save(); render(); toast('Merci ! +20 points'); break; }
      case 'call': toast('Appel simulé : démo'); break;
      case 'sub': S.plan = id; save(); render(); toast(`Abonnement ${PLANS.find((p) => p.id === id).name} activé`); break;
      case 'unsub': S.plan = null; save(); render(); toast('Abonnement arrêté'); break;
      case 'quote': toast('Demande envoyée : démo'); break;
      case 'reset': S = fresh(); save(); draft = null; render(); toast('Démo remise à zéro'); break;
    }
  });

  /* Icônes de la barre de navigation */
  document.querySelectorAll('[data-icon]').forEach((n) => { n.outerHTML = icon(n.dataset.icon); });
  render();
})();
