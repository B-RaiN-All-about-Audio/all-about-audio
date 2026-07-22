'use strict';

const CONTACT_EMAIL = 'hello@allaboutaudio.org'; // Change this if a different mailbox is connected to the domain.
const STORAGE_KEY = 'allAboutAudioBuildsV1';

const guides = [
  {
    id: 'amp-wiring-basics',
    category: 'electrical',
    level: 'Beginner',
    time: '8 min',
    icon: '⚡',
    title: 'Amplifier Wiring Basics',
    summary: 'Understand power, ground, remote, RCA, speaker wiring, and the order used to install them safely.',
    content: `
      <h3>What each connection does</h3>
      <ul>
        <li><strong>Power:</strong> carries battery current to the amplifier and must be fused near the battery.</li>
        <li><strong>Ground:</strong> returns current to the chassis. Keep it short, secure, and attached to clean bare metal.</li>
        <li><strong>Remote turn-on:</strong> tells the amplifier when the radio is on.</li>
        <li><strong>RCA or signal input:</strong> carries the audio signal from the source unit or converter.</li>
        <li><strong>Speaker output:</strong> sends amplified power to the speakers or subwoofer.</li>
      </ul>
      <h3>A safer installation order</h3>
      <ol>
        <li>Plan cable routes away from moving parts, sharp metal, heat, and factory safety wiring.</li>
        <li>Disconnect the negative battery terminal.</li>
        <li>Mount the amplifier where it has airflow and cannot be struck by cargo.</li>
        <li>Run and protect the power cable, but install the fuse last.</li>
        <li>Prepare the ground point and tighten the connection securely.</li>
        <li>Connect signal, remote, and speaker wiring.</li>
        <li>Verify polarity and final impedance before installing the main fuse.</li>
      </ol>
      <p class="guide-note"><strong>Important:</strong> The fuse protects the power wire. Its rating must not exceed what the cable and installation can safely support.</p>`
  },
  {
    id: 'final-impedance',
    category: 'electrical',
    level: 'Beginner',
    time: '7 min',
    icon: 'Ω',
    title: 'Final Impedance Without the Confusion',
    summary: 'Learn how coil wiring and multiple subwoofers combine to create the load seen by an amplifier.',
    content: `
      <h3>The basic rules</h3>
      <ul>
        <li>Equal impedances in <strong>series</strong> add together.</li>
        <li>Equal impedances in <strong>parallel</strong> divide by the number of equal loads.</li>
        <li>A dual-voice-coil subwoofer is two separate coils on one speaker. Both coils normally need to be used.</li>
      </ul>
      <h3>Example: one dual 2-ohm subwoofer</h3>
      <p>Coils in series: 2 Ω + 2 Ω = 4 Ω. Coils in parallel: 2 Ω ÷ 2 = 1 Ω.</p>
      <h3>Example: two dual 2-ohm subwoofers</h3>
      <p>Wire each sub's coils in series for 4 Ω per sub, then wire the two subs in parallel for a 2 Ω final load.</p>
      <p class="guide-note">The amplifier's minimum stable impedance matters. A lower number is not automatically better, and wiring below the rated load can cause overheating, protect mode, or amplifier failure.</p>`
  },
  {
    id: 'big-three',
    category: 'electrical',
    level: 'Intermediate',
    time: '9 min',
    icon: '🔋',
    title: 'Big 3 Upgrade Planning Guide',
    summary: 'Know what the Big 3 changes, what it does not change, and how to plan it without creating new problems.',
    content: `
      <h3>The three upgraded paths</h3>
      <ol>
        <li>Alternator positive to battery positive.</li>
        <li>Battery negative to chassis.</li>
        <li>Engine block or alternator case to chassis.</li>
      </ol>
      <h3>What it helps</h3>
      <p>Larger, lower-resistance connections can reduce voltage loss through old or undersized factory paths when a high-current audio system is installed.</p>
      <h3>What it does not do</h3>
      <p>It does not increase alternator output, repair a failing battery, or compensate for an amplifier power cable that is too small.</p>
      <p class="guide-note">Add the upgraded cables alongside sound factory grounds unless a qualified technician confirms a factory cable should be replaced. Fuse any added positive cable according to its route and manufacturer guidance.</p>`
  },
  {
    id: 'speaker-install',
    category: 'installation',
    level: 'Beginner',
    time: '10 min',
    icon: '🔊',
    title: 'Door Speaker Upgrade Checklist',
    summary: 'A practical sequence for replacing factory speakers while avoiding rattles, reversed polarity, and damaged door panels.',
    content: `
      <h3>Before ordering</h3>
      <ul>
        <li>Confirm speaker size, mounting depth, impedance, and whether an adapter bracket is needed.</li>
        <li>Check whether the vehicle uses a factory amplifier or unusual speaker wiring.</li>
        <li>Get vehicle-specific harness adapters when available instead of cutting factory wiring.</li>
      </ul>
      <h3>During installation</h3>
      <ol>
        <li>Photograph the panel and fastener locations before removing anything.</li>
        <li>Use trim tools and store screws by location.</li>
        <li>Seal the speaker to the mounting surface with suitable foam tape.</li>
        <li>Verify positive and negative polarity on both sides.</li>
        <li>Test the speaker before fully reinstalling the panel.</li>
      </ol>
      <p class="guide-note">A secure, sealed mounting surface often improves midbass more than simply buying a more expensive speaker.</p>`
  },
  {
    id: 'gain-setting',
    category: 'tuning',
    level: 'Intermediate',
    time: '11 min',
    icon: '🎚️',
    title: 'Gain Is Not a Volume Knob',
    summary: 'Set amplifier input sensitivity more intelligently and understand why excessive gain can create distortion.',
    content: `
      <h3>What gain actually does</h3>
      <p>Gain matches the amplifier's input sensitivity to the signal voltage supplied by the source. Turning it higher does not create free clean power.</p>
      <h3>Preparation</h3>
      <ul>
        <li>Disable loudness, bass boost, and aggressive EQ while establishing a clean baseline.</li>
        <li>Set crossovers before final listening adjustments.</li>
        <li>Use a known clean test signal and a repeatable source-volume position.</li>
      </ul>
      <h3>Listen for warning signs</h3>
      <p>Harshness, a sudden change in tone, excessive heat, protect mode, or a burnt smell means stop and inspect the system. A distortion detector or oscilloscope provides more reliable confirmation than guessing by ear.</p>
      <p class="guide-note">Never tune a system by turning every control to maximum. That method is popular only because replacement equipment keeps retailers in business.</p>`
  },
  {
    id: 'noise-diagnosis',
    category: 'tuning',
    level: 'Intermediate',
    time: '9 min',
    icon: '〰️',
    title: 'Diagnosing Whine, Hiss, and Pops',
    summary: 'Use a repeatable isolation process instead of replacing random components until the noise becomes somebody else’s problem.',
    content: `
      <h3>Identify the pattern</h3>
      <ul>
        <li>Noise that changes with engine speed often points toward charging-system or grounding issues.</li>
        <li>A pop only at startup or shutdown can involve turn-on timing or a component fault.</li>
        <li>Constant hiss may come from gain structure, source noise, or sensitive speakers.</li>
      </ul>
      <h3>Isolate one stage at a time</h3>
      <ol>
        <li>Reduce amplifier gain and note whether the noise changes.</li>
        <li>Inspect grounds for clean metal, tight hardware, and appropriate cable size.</li>
        <li>Temporarily disconnect signal cables from the amplifier to determine whether the noise enters before or after the amplifier.</li>
        <li>Keep RCA cables away from high-current power wiring where practical.</li>
        <li>Test with a known-good signal source or cable before buying parts.</li>
      </ol>
      <p class="guide-note">Do not defeat safety grounds or install random ground-loop devices before identifying the source. A workaround can hide a wiring problem without fixing it.</p>`
  }
];

const diagnostics = {
  'no-power': {
    title: 'Amplifier will not power on',
    steps: [
      'Measure battery voltage at the amplifier power terminal and ground terminal with a multimeter.',
      'Check the battery-side fuse and any amplifier fuses. Replace only with the correct type and rating.',
      'Verify the remote terminal receives roughly 12 volts when the source unit is on.',
      'Inspect the ground for bare metal, tight hardware, corrosion, and an excessively long cable.',
      'If power, ground, and remote voltage are present, disconnect speaker outputs and signal inputs, then retest according to the amplifier manual.'
    ]
  },
  protect: {
    title: 'Amplifier goes into protect mode',
    steps: [
      'Turn the system off and inspect speaker wiring for shorts, loose strands, or contact with vehicle metal.',
      'Calculate the final speaker load and compare it with the amplifier minimum stable impedance.',
      'Disconnect the speaker outputs and power the amplifier on. If protect clears, inspect the speakers and output wiring.',
      'Check voltage at the amplifier while the problem occurs. Severe voltage drop can trigger protection.',
      'Confirm the amplifier has airflow and is not overheating. Persistent protect mode with all loads removed may indicate amplifier failure.'
    ]
  },
  dimming: {
    title: 'Lights dim or voltage drops',
    steps: [
      'Measure resting battery voltage and charging voltage at idle with the system off.',
      'Measure voltage at the amplifier during a demanding passage and compare it with battery voltage.',
      'Inspect power and ground cable size, connection quality, fuse holders, and distribution blocks for heat or resistance.',
      'Estimate amplifier current demand and compare it with the vehicle charging system capacity.',
      'Address weak batteries or charging problems before adding more batteries or capacitors.'
    ]
  },
  'no-bass': {
    title: 'Subwoofer has weak or no bass',
    steps: [
      'Confirm the amplifier powers on and the source unit subwoofer output is enabled.',
      'Check RCA or signal wiring and verify the amplifier input mode is correct.',
      'Inspect speaker polarity and voice-coil wiring. Opposing polarity can cancel bass.',
      'Check gain, low-pass filter, subsonic filter, phase, and bass-remote settings.',
      'Test the subwoofer coils with a multimeter after disconnecting them from the amplifier.'
    ]
  },
  noise: {
    title: 'Whine, hiss, or popping noise',
    steps: [
      'Note whether the noise changes with engine speed, volume, source selection, or amplifier gain.',
      'Inspect the source-unit and amplifier grounds before replacing parts.',
      'Separate signal wiring from high-current power wiring where practical.',
      'Disconnect the RCA or signal input at the amplifier. If the noise stops, work backward toward the source.',
      'Test with a known-good cable or portable signal source to isolate the faulty stage.'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initStatsCounter();
  initBackToTop();
  initActiveNavLinks();
  initToolTabs();
  initImpedanceCalculator();
  initPowerCalculator();
  initTroubleshooter();
  initGuides();
  initBuildPlanner();
  initFeedbackForm();
  document.getElementById('currentYear').textContent = new Date().getFullYear();
});

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 60);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileMenu() {
  const button = document.getElementById('hamburger');
  const menu = document.getElementById('mobileMenu');
  const close = () => {
    button.classList.remove('open');
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', 'Open menu');
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  button.addEventListener('click', () => {
    const opening = !menu.classList.contains('open');
    menu.classList.toggle('open', opening);
    button.classList.toggle('open', opening);
    button.setAttribute('aria-expanded', String(opening));
    button.setAttribute('aria-label', opening ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!opening));
    document.body.style.overflow = opening ? 'hidden' : '';
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', close));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') close();
  });
}

function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
  elements.forEach(el => observer.observe(el));
}

function initStatsCounter() {
  const counters = document.querySelectorAll('[data-count]');
  const run = element => {
    const target = Number(element.dataset.count);
    const start = performance.now();
    const animate = now => {
      const progress = Math.min((now - start) / 900, 1);
      element.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  };
  if (!('IntersectionObserver' in window)) return counters.forEach(run);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        run(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(counter => observer.observe(counter));
}

function initBackToTop() {
  const button = document.getElementById('backToTop');
  window.addEventListener('scroll', () => button.classList.toggle('visible', window.scrollY > 500), { passive: true });
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

function initActiveNavLinks() {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...document.querySelectorAll('.nav-links a[href^="#"]')];
  const update = () => {
    let current = 'home';
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${current}`));
  };
  window.addEventListener('scroll', update, { passive: true });
  update();
}

function initToolTabs() {
  const tabs = document.querySelectorAll('[data-tool-tab]');
  const panels = document.querySelectorAll('[data-tool-panel]');
  tabs.forEach(tab => tab.addEventListener('click', () => {
    const selected = tab.dataset.toolTab;
    tabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle('active', active);
      item.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.toolPanel === selected;
      panel.classList.toggle('active', active);
      panel.hidden = !active;
    });
  }));
}

function initImpedanceCalculator() {
  const form = document.getElementById('impedanceForm');
  const voiceCoils = document.getElementById('voiceCoils');
  const coilWiringField = document.getElementById('coilWiringField');
  const updateCoilField = () => {
    coilWiringField.hidden = Number(voiceCoils.value) === 1;
  };
  voiceCoils.addEventListener('change', updateCoilField);
  form.addEventListener('submit', event => {
    event.preventDefault();
    calculateImpedance();
  });
  form.querySelectorAll('select').forEach(input => input.addEventListener('change', calculateImpedance));
  updateCoilField();
  calculateImpedance();
}

function calculateImpedance() {
  const count = Number(document.getElementById('subCount').value);
  const coils = Number(document.getElementById('voiceCoils').value);
  const coilOhms = Number(document.getElementById('coilOhms').value);
  const coilWiring = document.getElementById('coilWiring').value;
  const subWiring = document.getElementById('subWiring').value;
  const perSub = coils === 1 ? coilOhms : (coilWiring === 'series' ? coilOhms * coils : coilOhms / coils);
  const finalLoad = count === 1 ? perSub : (subWiring === 'series' ? perSub * count : perSub / count);

  const result = document.getElementById('impedanceResult');
  result.querySelector('.result-number').innerHTML = `${formatOhms(finalLoad)} <span>Ω</span>`;
  const coilText = coils === 1 ? `SVC ${coilOhms}-ohm` : `DVC ${coilOhms}-ohm with coils wired ${coilWiring}`;
  const subText = count === 1 ? 'one subwoofer' : `${count} subwoofers wired ${subWiring}`;
  result.querySelector('.result-summary').textContent = `${capitalize(subText)}, using ${coilText} configuration.`;
  result.querySelector('.wiring-path').innerHTML = buildWiringPath(count, coils, coilOhms, coilWiring, subWiring, finalLoad);

  const alert = result.querySelector('.result-alert');
  alert.className = 'result-alert warning';
  if (finalLoad < 1) {
    alert.className = 'result-alert danger';
    alert.textContent = 'This is a sub-1-ohm load. Use it only if the amplifier manufacturer explicitly rates the amplifier for this impedance and the electrical system is suitable.';
  } else if (finalLoad >= 8) {
    alert.textContent = 'This high load is generally easier on the amplifier but may produce substantially less power. Compare the amplifier RMS rating at this impedance.';
  } else {
    alert.textContent = 'Confirm your amplifier is stable at the calculated load before connecting it.';
  }
}

function buildWiringPath(count, coils, coilOhms, coilWiring, subWiring, finalLoad) {
  const joiner = coilWiring === 'series' ? '+' : '∥';
  const coilParts = Array.from({ length: coils }, () => `<span>${coilOhms} Ω coil</span>`).join(`<b>${joiner}</b>`);
  const perSub = coils === 1 ? coilOhms : (coilWiring === 'series' ? coilOhms * coils : coilOhms / coils);
  const multi = count > 1 ? `<b>→</b><span>${count} × ${formatOhms(perSub)} Ω subs ${subWiring}</span>` : '';
  return `${coilParts}<b>=</b><span>${formatOhms(perSub)} Ω per sub</span>${multi}<b>=</b><strong>${formatOhms(finalLoad)} Ω final</strong>`;
}

function formatOhms(value) {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2).replace(/0$/, '');
}

function initPowerCalculator() {
  const form = document.getElementById('powerForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    calculatePower();
  });
  form.querySelectorAll('input, select').forEach(input => input.addEventListener('input', calculatePower));
  calculatePower();
}

function calculatePower() {
  const rms = Number(document.getElementById('ampRms').value);
  const efficiency = Number(document.getElementById('ampClass').value);
  const voltage = Number(document.getElementById('systemVoltage').value);
  const length = Number(document.getElementById('cableLength').value);
  if (![rms, efficiency, voltage, length].every(Number.isFinite) || rms <= 0 || voltage <= 0 || length <= 0) return;

  const current = rms / (voltage * efficiency);
  const fuse = nextStandardFuse(current * 1.25);
  const adjustedCurrent = current * (length > 20 ? 1.3 : length > 15 ? 1.15 : 1);
  const wire = recommendWire(adjustedCurrent);

  document.getElementById('currentResult').textContent = `${Math.ceil(current)} A`;
  document.getElementById('fuseResult').textContent = fuse ? `${fuse} A` : 'Custom design';
  document.getElementById('wireResult').textContent = wire;
  document.getElementById('powerSummary').textContent = `At ${rms.toLocaleString()} watts RMS, ${voltage.toFixed(1)} volts, and ${Math.round(efficiency * 100)}% estimated efficiency, full-output current is approximately ${Math.ceil(current)} amps before other vehicle loads.`;
}

function nextStandardFuse(value) {
  const sizes = [20, 25, 30, 40, 50, 60, 80, 100, 125, 150, 175, 200, 225, 250, 300, 350, 400];
  return sizes.find(size => size >= value) || null;
}

function recommendWire(current) {
  if (current <= 45) return '8 AWG OFC';
  if (current <= 80) return '4 AWG OFC';
  if (current <= 120) return '2 AWG OFC';
  if (current <= 225) return '1/0 AWG OFC';
  if (current <= 300) return '2/0 AWG OFC';
  if (current <= 400) return '4/0 AWG OFC';
  return 'Multiple runs / professional design';
}

function initTroubleshooter() {
  const form = document.getElementById('troubleForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    renderTroubleshooting();
  });
  document.getElementById('symptom').addEventListener('change', renderTroubleshooting);
  renderTroubleshooting();
}

function renderTroubleshooting() {
  const symptom = document.getElementById('symptom').value;
  const timing = document.getElementById('timing').value;
  const diagnostic = diagnostics[symptom];
  const result = document.getElementById('troubleResult');
  result.querySelector('h3').textContent = diagnostic.title;
  result.querySelector('.diagnostic-list').innerHTML = diagnostic.steps.map(step => `<li>${step}</li>`).join('');
  const timingNote = {
    volume: 'Because it occurs at higher volume, pay extra attention to voltage drop, final impedance, heat, and clipped signal.',
    startup: 'Because it occurs during startup or shutdown, inspect remote-turn-on timing, source-unit behavior, and loose connections.',
    driving: 'Because it occurs only with the engine running, charging-system noise or voltage behavior becomes more likely.',
    always: 'Because it occurs constantly, begin with basic power, ground, signal, and wiring checks before replacing equipment.'
  }[timing];
  result.querySelector('.result-alert').textContent = `${timingNote} Turn the system off before tightening power or ground connections, and disconnect the negative battery terminal before altering main power wiring.`;
}

function initGuides() {
  const grid = document.getElementById('guidesGrid');
  grid.innerHTML = guides.map((guide, index) => `
    <article class="guide-card reveal reveal-delay-${(index % 3) + 1}" tabindex="0" role="button" data-guide-id="${guide.id}" data-category="${guide.category}" aria-label="Open guide: ${guide.title}">
      <div class="guide-card-thumb"><span class="guide-card-tag">${guide.level}</span><span class="guide-thumb-icon">${guide.icon}</span></div>
      <div class="guide-card-body">
        <div class="guide-card-meta"><span class="guide-card-level">${capitalize(guide.category)}</span><span class="guide-card-time">◷ ${guide.time}</span></div>
        <h3 class="guide-card-title">${guide.title}</h3>
        <p class="guide-card-desc">${guide.summary}</p>
        <div class="guide-card-footer"><span class="guide-card-author">All About Audio</span><span class="guide-card-arrow">→</span></div>
      </div>
    </article>`).join('');

  initScrollReveal();
  const modal = document.getElementById('guideModal');
  const openGuide = id => {
    const guide = guides.find(item => item.id === id);
    if (!guide) return;
    document.getElementById('guideModalCategory').textContent = `${guide.level} · ${capitalize(guide.category)} · ${guide.time}`;
    document.getElementById('guideModalTitle').textContent = guide.title;
    document.getElementById('guideModalSummary').textContent = guide.summary;
    document.getElementById('guideModalContent').innerHTML = guide.content;
    if (typeof modal.showModal === 'function') modal.showModal();
    else modal.setAttribute('open', '');
  };

  grid.addEventListener('click', event => {
    const card = event.target.closest('[data-guide-id]');
    if (card) openGuide(card.dataset.guideId);
  });
  grid.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') {
      const card = event.target.closest('[data-guide-id]');
      if (card) {
        event.preventDefault();
        openGuide(card.dataset.guideId);
      }
    }
  });

  document.getElementById('closeGuideModal').addEventListener('click', () => modal.close ? modal.close() : modal.removeAttribute('open'));
  modal.addEventListener('click', event => {
    if (event.target === modal) modal.close();
  });

  let activeFilter = 'all';
  const search = document.getElementById('guideSearch');
  const filterButtons = document.querySelectorAll('[data-filter]');
  const applyFilters = () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll('[data-guide-id]').forEach(card => {
      const guide = guides.find(item => item.id === card.dataset.guideId);
      const matchesFilter = activeFilter === 'all' || guide.category === activeFilter;
      const haystack = `${guide.title} ${guide.summary} ${guide.category} ${guide.level}`.toLowerCase();
      const matchesSearch = !query || haystack.includes(query);
      card.hidden = !(matchesFilter && matchesSearch);
      if (!card.hidden) visible += 1;
    });
    document.getElementById('guideEmpty').hidden = visible !== 0;
  };
  search.addEventListener('input', applyFilters);
  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach(item => item.classList.toggle('active', item === button));
    applyFilters();
  }));
}

function initBuildPlanner() {
  const form = document.getElementById('buildForm');
  const clearButton = document.getElementById('clearBuildForm');
  const exportButton = document.getElementById('exportBuilds');
  renderBuilds();

  form.addEventListener('submit', event => {
    event.preventDefault();
    const build = {
      id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      name: document.getElementById('buildName').value.trim(),
      vehicle: document.getElementById('vehicle').value.trim(),
      headUnit: document.getElementById('headUnit').value.trim(),
      amplifier: document.getElementById('amplifier').value.trim(),
      subwoofers: document.getElementById('subwoofers').value.trim(),
      targetLoad: document.getElementById('targetLoad').value,
      notes: document.getElementById('buildNotes').value.trim(),
      createdAt: new Date().toISOString()
    };
    if (!build.name || !build.vehicle) return;
    const builds = getBuilds();
    builds.unshift(build);
    saveBuilds(builds);
    form.reset();
    document.getElementById('targetLoad').value = '1 Ω';
    setStatus('buildStatus', 'Build saved in this browser.');
    showToast('Build saved');
    renderBuilds();
  });

  clearButton.addEventListener('click', () => {
    form.reset();
    document.getElementById('targetLoad').value = '1 Ω';
    setStatus('buildStatus', 'Form cleared.');
  });

  exportButton.addEventListener('click', async () => {
    const builds = getBuilds();
    if (!builds.length) return showToast('No builds to copy');
    const text = builds.map(formatBuildText).join('\n\n--------------------\n\n');
    await copyText(text);
    showToast('All builds copied');
  });

  document.getElementById('savedBuilds').addEventListener('click', async event => {
    const card = event.target.closest('[data-build-id]');
    if (!card) return;
    const builds = getBuilds();
    const build = builds.find(item => item.id === card.dataset.buildId);
    if (event.target.matches('.copy-build') && build) {
      await copyText(formatBuildText(build));
      showToast('Build copied');
    }
    if (event.target.matches('.delete-build')) {
      saveBuilds(builds.filter(item => item.id !== card.dataset.buildId));
      renderBuilds();
      showToast('Build deleted');
    }
  });
}

function getBuilds() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveBuilds(builds) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(builds));
  } catch {
    setStatus('buildStatus', 'The browser could not save this build. Local storage may be disabled.');
  }
}

function renderBuilds() {
  const container = document.getElementById('savedBuilds');
  const builds = getBuilds();
  if (!builds.length) {
    container.innerHTML = '<div class="empty-builds"><span>🔊</span><p>No builds saved yet. The planner is patiently pretending not to judge.</p></div>';
    return;
  }
  container.innerHTML = builds.map(build => `
    <article class="saved-build-card" data-build-id="${escapeHtml(build.id)}">
      <h4>${escapeHtml(build.name)}</h4>
      <p class="vehicle-line">${escapeHtml(build.vehicle)} · ${escapeHtml(build.targetLoad)}</p>
      <div class="saved-build-details">
        ${build.headUnit ? `<span><strong>Head unit:</strong> ${escapeHtml(build.headUnit)}</span>` : ''}
        ${build.amplifier ? `<span><strong>Amplifier:</strong> ${escapeHtml(build.amplifier)}</span>` : ''}
        ${build.subwoofers ? `<span><strong>Subs:</strong> ${escapeHtml(build.subwoofers)}</span>` : ''}
        ${build.notes ? `<span><strong>Notes:</strong> ${escapeHtml(build.notes)}</span>` : ''}
      </div>
      <div class="saved-build-actions"><button class="copy-build" type="button">Copy summary</button><button class="delete-build" type="button">Delete</button></div>
    </article>`).join('');
}

function formatBuildText(build) {
  return [
    `BUILD: ${build.name}`,
    `Vehicle: ${build.vehicle}`,
    `Target load: ${build.targetLoad}`,
    build.headUnit && `Head unit: ${build.headUnit}`,
    build.amplifier && `Amplifier: ${build.amplifier}`,
    build.subwoofers && `Subwoofer setup: ${build.subwoofers}`,
    build.notes && `Notes: ${build.notes}`
  ].filter(Boolean).join('\n');
}

function initFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = document.getElementById('feedbackName').value.trim();
    const email = document.getElementById('feedbackEmail').value.trim();
    const type = document.getElementById('feedbackType').value;
    const message = document.getElementById('feedbackMessage').value.trim();
    const subject = encodeURIComponent(`[All About Audio] ${type}`);
    const body = encodeURIComponent(`Name: ${name}\nReply email: ${email}\n\n${message}`);
    setStatus('feedbackStatus', `Opening your email app. Messages are addressed to ${CONTACT_EMAIL}.`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  });
}

function setStatus(id, message) {
  document.getElementById(id).textContent = message;
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('visible'), 2200);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;'
  })[character]);
}
