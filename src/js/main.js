(function () {
  'use strict';

  // ─── Scroll Animations (IntersectionObserver) ───
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.animate-on-scroll, .animate-scale, .animate-from-left').forEach((el) => {
    observer.observe(el);
  });

  // ─── Stats Counter ───
  document.querySelectorAll('[data-counter]').forEach((el) => {
    const target = parseInt(el.dataset.counter, 10);
    const duration = 2000;
    let started = false;

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            let startTime;
            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              el.textContent = Math.floor(progress * target);
              if (progress < 1) requestAnimationFrame(animate);
              else el.textContent = target;
            };
            requestAnimationFrame(animate);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counterObserver.observe(el);
  });

  // ─── Header Scroll Effect ───
  const header = document.getElementById('site-header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.remove('header-top');
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
        header.classList.add('header-top');
      }
    });
  }

  // ─── Mobile Menu Toggle ───
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const iconOpen = document.getElementById('menu-icon-open');
  const iconClose = document.getElementById('menu-icon-close');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      const isOpen = mobileNav.classList.contains('open');
      mobileNav.classList.toggle('open');
      if (iconOpen) iconOpen.classList.toggle('hidden', !isOpen);
      if (iconClose) iconClose.classList.toggle('hidden', isOpen);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        if (iconOpen) iconOpen.classList.remove('hidden');
        if (iconClose) iconClose.classList.add('hidden');
      });
    });
  }

  // ─── Accordion ───
  document.querySelectorAll('.accordion-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const item = trigger.closest('.accordion-item');
      const content = item.querySelector('.accordion-content');
      const chevron = trigger.querySelector('.accordion-chevron');
      const isOpen = content.classList.contains('open');

      // Close all siblings in same parent
      const parent = item.parentElement;
      parent.querySelectorAll('.accordion-content.open').forEach((openContent) => {
        openContent.style.maxHeight = null;
        openContent.classList.remove('open');
        const openChevron = openContent.closest('.accordion-item').querySelector('.accordion-chevron');
        if (openChevron) openChevron.classList.remove('rotated');
        const openTriggerSpan = openContent.closest('.accordion-item').querySelector('.accordion-trigger span');
        if (openTriggerSpan) {
          openTriggerSpan.classList.remove('text-primary');
          openTriggerSpan.classList.add('text-white');
        }
      });

      if (!isOpen) {
        content.classList.add('open');
        content.style.maxHeight = content.scrollHeight + 'px';
        if (chevron) chevron.classList.add('rotated');
        const triggerSpan = trigger.querySelector('span');
        if (triggerSpan) {
          triggerSpan.classList.remove('text-white');
          triggerSpan.classList.add('text-primary');
        }
      }
    });
  });

  // ─── FAQ Category Switcher (Desktop) ───
  document.querySelectorAll('.faq-category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const categoryId = btn.dataset.category;

      // Update button styles
      document.querySelectorAll('.faq-category-btn').forEach((b) => {
        b.classList.remove('bg-primary', 'text-slate-950', 'font-bold', 'shadow-lg', 'shadow-primary/20');
        b.classList.add('text-slate-400', 'hover:bg-slate-900', 'hover:text-white');
      });
      btn.classList.add('bg-primary', 'text-slate-950', 'font-bold', 'shadow-lg', 'shadow-primary/20');
      btn.classList.remove('text-slate-400', 'hover:bg-slate-900', 'hover:text-white');

      // Show/hide panels
      document.querySelectorAll('.faq-category-panel').forEach((panel) => {
        panel.classList.add('hidden');
      });
      const target = document.querySelector(`[data-category-panel="${categoryId}"]`);
      if (target) target.classList.remove('hidden');
    });
  });

  // ─── FAQ Mobile Bottom Sheet ───
  setupBottomSheet('faq-fab', 'faq-backdrop', 'faq-bottom-sheet', 'faq-sheet-close', '.faq-mobile-category-btn');

  // ─── FAQ Mobile Category Navigation ───
  document.querySelectorAll('.faq-mobile-category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const categoryId = btn.dataset.category;
      const el = document.getElementById(categoryId);
      if (el) {
        const offset = 100;
        const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
      closeBottomSheet('faq-backdrop', 'faq-bottom-sheet');
    });
  });

  // ─── Support Sidebar Nav ───
  document.querySelectorAll('.support-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const sectionId = btn.dataset.section;

      // Update active state
      document.querySelectorAll('.support-nav-btn').forEach((b) => {
        b.classList.remove('bg-primary', 'text-slate-950', 'font-bold', 'shadow-lg', 'shadow-primary/20');
        b.classList.add('text-slate-400', 'hover:bg-slate-900', 'hover:text-white');
      });
      btn.classList.add('bg-primary', 'text-slate-950', 'font-bold', 'shadow-lg', 'shadow-primary/20');
      btn.classList.remove('text-slate-400', 'hover:bg-slate-900', 'hover:text-white');

      scrollToElement(sectionId);
    });
  });

  // ─── Support Mobile Bottom Sheet ───
  setupBottomSheet('support-fab', 'support-backdrop', 'support-bottom-sheet', 'support-sheet-close', '.support-mobile-nav-btn');

  document.querySelectorAll('.support-mobile-nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      scrollToElement(btn.dataset.section);
      closeBottomSheet('support-backdrop', 'support-bottom-sheet');
    });
  });

  // ─── Support Mat Image Switcher ───
  document.querySelectorAll('[data-mat-btn]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const matId = btn.dataset.matBtn;

      // Update button styles
      document.querySelectorAll('[data-mat-btn]').forEach((b) => {
        b.classList.remove('bg-primary', 'text-slate-950');
        b.classList.add('bg-slate-800', 'text-slate-400', 'hover:bg-slate-700');
      });
      btn.classList.add('bg-primary', 'text-slate-950');
      btn.classList.remove('bg-slate-800', 'text-slate-400', 'hover:bg-slate-700');

      // Show/hide images
      document.querySelectorAll('[data-mat-img]').forEach((img) => {
        img.classList.toggle('hidden', img.dataset.matImg !== matId);
      });
    });
  });

  // ─── Contact Form ───
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const status = document.getElementById('form-status');
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);

      submitBtn.disabled = true;
      submitBtn.textContent = 'SKICKAR...';

      try {
        const res = await fetch(contactForm.dataset.action, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        const result = await res.json();

        if (status) {
          status.classList.remove('hidden', 'bg-red-900/50', 'text-red-200', 'bg-green-900/50', 'text-green-200');
          if (result.success) {
            status.classList.add('bg-green-900/50', 'text-green-200');
            status.textContent = 'Tack! Ditt meddelande har skickats. Vi återkommer så snart vi kan.';
            contactForm.reset();
          } else {
            status.classList.add('bg-red-900/50', 'text-red-200');
            status.textContent = result.error || 'Något gick fel. Försök igen eller maila oss direkt.';
          }
        }
      } catch {
        if (status) {
          status.classList.remove('hidden', 'bg-green-900/50', 'text-green-200');
          status.classList.add('bg-red-900/50', 'text-red-200');
          status.textContent = 'Något gick fel. Försök igen eller maila oss på info@swedenindoorgolf.se';
        }
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'SKICKA MEDDELANDE';
      }
    });
  }

  // ─── Helper Functions ───
  function scrollToElement(id) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 100;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  function setupBottomSheet(fabId, backdropId, sheetId, closeId, mobileBtnSelector) {
    const fab = document.getElementById(fabId);
    const backdrop = document.getElementById(backdropId);
    const sheet = document.getElementById(sheetId);
    const closeBtn = document.getElementById(closeId);

    if (!fab || !backdrop || !sheet) return;

    fab.addEventListener('click', () => {
      backdrop.classList.add('open');
      sheet.classList.add('open');
    });

    const close = () => {
      backdrop.classList.remove('open');
      sheet.classList.remove('open');
    };

    if (closeBtn) closeBtn.addEventListener('click', close);
    backdrop.addEventListener('click', close);
  }

  function closeBottomSheet(backdropId, sheetId) {
    const backdrop = document.getElementById(backdropId);
    const sheet = document.getElementById(sheetId);
    if (backdrop) backdrop.classList.remove('open');
    if (sheet) sheet.classList.remove('open');
  }
})();
