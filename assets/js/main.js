/* ===============================================
   CREATIK DESIGNS — JAVASCRIPT

   यह file website ke interactions handle karti hai:
   - Theme toggle (dark/light mode)
   - Mobile menu
   - Animations
   - Scroll effects

   🔧 WHAT TO CHANGE (क्या बदलें):

   1. Theme Colors:
      - design-system.css me colors badalne hain
      - JavaScript me nahi

   2. Animation Speed:
      - initScrollReveal(): scroll animation timing
      - initHeroParallax(): hover effect speed
      - initCursorGlow(): glow effect size

   3. Feature Toggle:
      - Line 522: किस bhi function ko comment out karke
        disable kar sakte ho
      - Upar se niche:
        • initPageTransition() - page transitions
        • initCursorGlow() - mouse glow effect
        • initRippleEffect() - button ripple
        • initScrollProgress() - progress bar
        • initBackToTop() - back to top button

   ⚠️ DON'T CHANGE (मत छुएं):
   - Core functionality
   - Event listeners ki logic
   - DOM manipulation ka structure
   =============================================== */

// CREATIK DESIGNS — ENHANCED JAVASCRIPT

// ============================================
// Theme System (Dark/Light Mode)
// ============================================
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Get saved theme or detect system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

  html.setAttribute('data-theme', theme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = html.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

      // Add transition
      html.style.transition = 'background 0.3s, color 0.3s';

      html.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);

      // Trigger theme change animation
      document.body.style.opacity = '0.9';
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 150);
    });
  }
}

// ============================================
// Mobile Menu (Enhanced)
// ============================================
function initMobileMenu() {
  const menuToggle = document.getElementById('mobile-menu-toggle');
  const menu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-overlay');
  const menuLinks = document.querySelectorAll('.mobile-menu-nav a');

  function openMenu() {
    menu.classList.add('active');
    overlay.classList.add('active');
    menuToggle.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menu.classList.remove('active');
    overlay.classList.remove('active');
    menuToggle.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      if (menu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', closeMenu);
  }

  if (overlay) {
    overlay.addEventListener('click', closeMenu);
  }

  menuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('active')) {
      closeMenu();
    }
  });
}

// ============================================
// Navbar Effects
// ============================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');

  if (navbar) {
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }

      lastScroll = currentScroll;
    });
  }
}

// ============================================
// Scroll Reveal Animations
// ============================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px'
  });

  reveals.forEach(element => {
    observer.observe(element);
  });

  // Reveal .reveal-stagger containers and their children simultaneously
  const staggerContainers = document.querySelectorAll('.reveal-stagger');

  const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Also reveal each direct child with staggered delay
        entry.target.querySelectorAll(':scope > *').forEach(child => {
          child.classList.add('active');
        });
      }
    });
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -50px 0px'
  });

  staggerContainers.forEach(container => {
    staggerObserver.observe(container);
  });
}

// ============================================
// Scroll Progress Bar
// ============================================
function initScrollProgress() {
  const progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    progressBar.style.width = scrollPercent + '%';
  });
}

// ============================================
// Back to Top Button
// ============================================
function initBackToTop() {
  const backToTop = document.createElement('button');
  backToTop.className = 'back-to-top';
  backToTop.innerHTML = `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 15l-6-6-6 6"/></svg>`;
  backToTop.setAttribute('aria-label', 'Back to top');
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// ============================================
// Cursor Glow Effect
// ============================================
function initCursorGlow() {
  if (!window.matchMedia('(hover: hover)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const glow = document.createElement('div');
  glow.classList.add('cursor-glow');
  document.body.appendChild(glow);

  let ticking = false;

  document.addEventListener('mousemove', (e) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ============================================
// Hero Parallax with Mouse
// ============================================
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  const floatingIcons = document.querySelectorAll('.floating-icon');

  if (!hero || floatingIcons.length === 0) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.addEventListener('mousemove', (e) => {
    const rect = hero.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    floatingIcons.forEach((element, index) => {
      const speed = (index + 1) * 15;
      const rotateSpeed = index * 3;
      const moveX = x * speed;
      const moveY = y * speed;

      requestAnimationFrame(() => {
        element.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${x * rotateSpeed}deg)`;
      });
    });
  });

  // Reset on mouse leave
  hero.addEventListener('mouseleave', () => {
    floatingIcons.forEach((element) => {
      requestAnimationFrame(() => {
        element.style.transform = 'translate(0, 0) rotate(0)';
      });
    });
  });
}

// ============================================
// Magnetic Buttons
// ============================================
function initMagneticButtons() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const magneticElements = document.querySelectorAll('.btn, .navbar-brand, .category-card');

  magneticElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      // Subtle magnetic effect
      el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });
}

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ============================================
// Ripple Effect on Buttons
// ============================================
function initRippleEffect() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const buttons = document.querySelectorAll('.btn');

  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement('span');
      ripple.classList.add('ripple');
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// ============================================
// Copy to Clipboard with Feedback
// ============================================
function initCopyToClipboard() {
  const copyElements = document.querySelectorAll('[data-copy]');

  copyElements.forEach(el => {
    el.addEventListener('click', async () => {
      const textToCopy = el.getAttribute('data-copy') || el.textContent;

      try {
        await navigator.clipboard.writeText(textToCopy);

        // Show feedback
        const feedback = document.createElement('div');
        feedback.className = 'copy-feedback';
        feedback.innerHTML = '✓ Copied!';
        document.body.appendChild(feedback);

        setTimeout(() => feedback.classList.add('show'), 10);
        setTimeout(() => {
          feedback.classList.remove('show');
          setTimeout(() => feedback.remove(), 300);
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
  });
}

// ============================================
// Product Card Interactions
// ============================================
function initProductCards() {
  const productCards = document.querySelectorAll('.product-card, .category-card');

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
  });
}

// ============================================
// Active Navigation Link
// ============================================
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-nav a');

  navLinks.forEach(link => {
    const linkPath = new URL(link.href).pathname;

    if (currentPath.includes(linkPath) && linkPath !== '/') {
      link.classList.add('active');
    }
  });

  // Handle index.html
  if (currentPath.endsWith('/') || currentPath.endsWith('index.html')) {
    const homeLink = document.querySelector('.navbar-nav a[href="index.html"]');
    if (homeLink) homeLink.classList.add('active');
  }
}

// ============================================
// Lazy Loading Images
// ============================================
function initLazyLoad() {
  const lazyImages = document.querySelectorAll('img[data-src]');

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  lazyImages.forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// Page Transition (Optional)
// ============================================
function initPageTransition() {
  const links = document.querySelectorAll('a[href$=".html"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Skip external links and anchors
      if (href.startsWith('http') || href.startsWith('#')) return;

      e.preventDefault();

      const transition = document.createElement('div');
      transition.className = 'page-transition';
      document.body.appendChild(transition);

      // Trigger animation
      requestAnimationFrame(() => {
        transition.classList.add('active');
      });

      setTimeout(() => {
        window.location.href = href;
      }, 500);
    });
  });
}

// ============================================
// Keyboard Navigation Enhancements
// ============================================
function initKeyboardNav() {
  // Escape closes mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-menu');
      const overlay = document.getElementById('mobile-overlay');

      if (mobileMenu?.classList.contains('active')) {
        mobileMenu.classList.remove('active');
        overlay?.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });
}

// ============================================
// Performance: Pause off-screen animations
// ============================================
function initPerformanceOptimizations() {
  // Pause animations when tab is not visible
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      document.body.style.animationPlayState = 'paused';
      document.body.style.transform = 'translateZ(0)'; // Force GPU
    } else {
      document.body.style.animationPlayState = 'running';
    }
  });

  // Throttle scroll events
  let scrollTimeout;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) {
      cancelAnimationFrame(scrollTimeout);
    }

    scrollTimeout = requestAnimationFrame(() => {
      // Scroll-based actions go here
    });
  }, { passive: true });
}

// ============================================
// Initialize Everything
// ============================================
function init() {
  initTheme();
  initMobileMenu();
  initNavbar();
  initScrollReveal();
  initScrollProgress();
  initBackToTop();
  initCursorGlow();
  initHeroParallax();
  initMagneticButtons();
  initSmoothScroll();
  initRippleEffect();
  initCopyToClipboard();
  initProductCards();
  initActiveNavLink();
  initLazyLoad();
  initKeyboardNav();
  initPerformanceOptimizations();

  // Optional: Page transition
  // initPageTransition();

  console.log('✨ Creatik Designs website initialized');
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
