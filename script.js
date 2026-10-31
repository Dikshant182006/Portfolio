/**
 * Dikshant Sharma — Portfolio Interactive Engine
 * Handling scroll indicators, motion toggling, mobile navigation,
 * copy-to-clipboard, discipline tabs, and live time updates.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. DOM Elements ---
  const scrollProgress = document.getElementById('scrollProgress');
  const navigation = document.getElementById('navigation');
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');
  const motionToggle = document.getElementById('motionToggle');
  const motionToggleText = document.getElementById('motionToggleText');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');
  const liveClock = document.getElementById('liveClock');
  const currentYear = document.getElementById('currentYear');
  const disciplineTabs = document.querySelectorAll('.discipline-tab');
  const disciplinePanels = document.querySelectorAll('.discipline-panel');

  // Set current year
  if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
  }

  // --- 2. Scroll Progress & Glass Navigation ---
  function updateScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

    if (scrollProgress) {
      scrollProgress.style.transform = `scaleX(${scrollPercent})`;
    }

    if (navigation) {
      if (scrollTop > 40) {
        navigation.classList.add('nav-scrolled');
      } else {
        navigation.classList.remove('nav-scrolled');
      }
    }
  }

  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // --- 3. Motion Toggle ---
  let isMotionEnabled = localStorage.getItem('dikshant_portfolio_motion') !== 'false';

  function applyMotionState(enabled) {
    if (enabled) {
      document.body.classList.remove('motion-disabled');
      if (motionToggleText) motionToggleText.textContent = 'MOTION ON';
      if (motionToggle) motionToggle.setAttribute('aria-pressed', 'true');
    } else {
      document.body.classList.add('motion-disabled');
      if (motionToggleText) motionToggleText.textContent = 'MOTION OFF';
      if (motionToggle) motionToggle.setAttribute('aria-pressed', 'false');
    }
    localStorage.setItem('dikshant_portfolio_motion', enabled);
  }

  applyMotionState(isMotionEnabled);

  if (motionToggle) {
    motionToggle.addEventListener('click', () => {
      isMotionEnabled = !isMotionEnabled;
      applyMotionState(isMotionEnabled);
    });
  }

  // --- 4. Mobile Menu Toggle ---
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 5. Interactive Discipline Tabs (Expertise Section) ---
  disciplineTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');

      // Update tab active state
      disciplineTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Update panels
      disciplinePanels.forEach(panel => {
        if (panel.id === `panel-${targetTab}`) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });

  // --- 6. One-Click Copy Email to Clipboard ---
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = 'dikshantsharma098@gmail.com';
      try {
        await navigator.clipboard.writeText(email);
        const originalText = copyBtnText ? copyBtnText.textContent : 'Copy Email';
        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        copyEmailBtn.style.borderColor = 'var(--accent)';
        copyEmailBtn.style.color = 'var(--accent)';

        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = originalText;
          copyEmailBtn.style.borderColor = '';
          copyEmailBtn.style.color = '';
        }, 2500);
      } catch (err) {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);

        if (copyBtnText) copyBtnText.textContent = 'Copied!';
        setTimeout(() => {
          if (copyBtnText) copyBtnText.textContent = 'Copy Email';
        }, 2500);
      }
    });
  }

  // --- 7. Live Local Clock (New Delhi, India — IST) ---
  function updateLiveClock() {
    if (!liveClock) return;
    try {
      const now = new Date();
      // Format time in Asia/Kolkata timezone
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const formatter = new Intl.DateTimeFormat([], options);
      liveClock.textContent = `${formatter.format(now)} IST`;
    } catch (e) {
      // Fallback
      const now = new Date();
      liveClock.textContent = now.toLocaleTimeString() + ' IST';
    }
  }

  setInterval(updateLiveClock, 1000);
  updateLiveClock();

  // --- 8. Intersection Observer for Subtle Scroll Animations ---
  if ('IntersectionObserver' in window && isMotionEnabled) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.work-piece, .about-grid, .step-card, .skill-group, .timeline-item');
    revealElements.forEach(el => observer.observe(el));
  }
});

