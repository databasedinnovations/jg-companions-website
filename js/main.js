/* ==========================================================================
   Jollygood Companions — Main JavaScript
   ========================================================================== */

(function () {
  'use strict';

  /* -------------------------------------------------------------------------
     Mobile Navigation Toggle
     ----------------------------------------------------------------------- */
  const hamburger  = document.getElementById('nav-hamburger');
  const mobileNav  = document.getElementById('nav-mobile');
  const mobileLinks = mobileNav ? mobileNav.querySelectorAll('a') : [];

  function openMenu() {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.classList.add('is-open');
  }

  function closeMenu() {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.classList.remove('is-open');
  }

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      if (mobileNav.classList.contains('open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on link click
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        closeMenu();
      }
    });
  }

  /* -------------------------------------------------------------------------
     Active Nav Link (based on current page)
     ----------------------------------------------------------------------- */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href && href !== '#' && href.split('/').pop() === currentPath) {
      link.classList.add('active');
    }
  });

  /* -------------------------------------------------------------------------
     Sticky Nav shadow on scroll
     ----------------------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* -------------------------------------------------------------------------
     Back to Top Button
     ----------------------------------------------------------------------- */
  var backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* -------------------------------------------------------------------------
     Intersection Observer — fade-in on scroll
     ----------------------------------------------------------------------- */
  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: just show everything
    document.querySelectorAll('.fade-in').forEach(function (el) {
      el.classList.add('in-view');
    });
  }

  /* -------------------------------------------------------------------------
     Analytics — Phone click & form submit events
     Safe to call before GA4/Meta IDs are filled in; events queue silently.
     ----------------------------------------------------------------------- */

  // Fire an event whenever a phone number link is tapped/clicked
  document.querySelectorAll('a[href^="tel:"]').forEach(function (link) {
    link.addEventListener('click', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'phone_call_click', {
          event_category: 'engagement',
          event_label: link.href
        });
      }
      // Meta Pixel: counts phone taps as "Contact" conversions
      if (typeof fbq === 'function') {
        fbq('track', 'Contact');
      }
    });
  });

  // Fire an event when the contact form is submitted (before Web3Forms redirects)
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      if (typeof gtag === 'function') {
        gtag('event', 'form_submit', {
          event_category: 'engagement',
          event_label: 'contact_form'
        });
      }
      if (typeof fbq === 'function') {
        fbq('track', 'Lead');
      }
    });
  }

})();
