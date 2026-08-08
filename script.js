// Basic interactivity for the demo website

document.addEventListener('DOMContentLoaded', () => {
  // Loader
  const loader = document.getElementById('loader');
  setTimeout(()=> { loader.style.opacity = '0'; loader.style.pointerEvents='none'; setTimeout(()=> loader.remove(),600) }, 700);

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  }, {threshold: 0.12});
  reveals.forEach(r => observer.observe(r));

  // Counters
  const counters = document.querySelectorAll('.num');
  const counterObserver = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.getAttribute('data-target') || 0;
        let count = 0;
        const step = Math.max(1, Math.floor(target / 80));
        const timer = setInterval(()=> {
          count += step;
          if (count >= target) { el.textContent = target; clearInterval(timer); }
          else el.textContent = count;
        }, 18);
        obs.unobserve(el);
      }
    })
  }, {threshold: 0.4});
  counters.forEach(c => counterObserver.observe(c));

  // FAQ accordion
  document.querySelectorAll('.acc-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        // close others
        document.querySelectorAll('.acc-panel').forEach(p => p.style.maxHeight = null);
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Appointment form: fake booking popup
  const form = document.getElementById('appointmentForm');
  const modal = document.getElementById('modal');
  const modalClose = document.getElementById('modalClose');
  const modalOk = document.getElementById('modalOk');

  function showModal(){
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
  }
  function hideModal(){
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // fake processing delay
      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      submitBtn.textContent = 'Booking...';
      setTimeout(()=> {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Book Appointment';
        form.reset();
        showModal();
      }, 900);
    });
  }
  modalClose.addEventListener('click', hideModal);
  modalOk.addEventListener('click', hideModal);
  modal.addEventListener('click', (e)=> { if (e.target === modal) hideModal() });

  // Testimonials slider (simple)
  const track = document.querySelector('.testi-track');
  const prev = document.getElementById('prevTesti');
  const next = document.getElementById('nextTesti');
  let index = 0;
  const slides = track ? track.children.length : 0;
  function updateSlider() {
    if (!track) return;
    track.style.transform = `translateX(-${index * 100}%)`;
  }
  prev && prev.addEventListener('click', () => { index = (index -1 + slides)%slides; updateSlider(); });
  next && next.addEventListener('click', () => { index = (index +1)%slides; updateSlider(); });
  // autoplay
  setInterval(()=> { index = (index+1)%Math.max(1,slides); updateSlider(); }, 5000);

  // Gallery lightbox (very small)
  document.querySelectorAll('.gallery-item').forEach(img => {
    img.addEventListener('click', ()=> {
      const overlay = document.createElement('div');
      overlay.style.position='fixed';overlay.style.inset=0;overlay.style.background='rgba(0,0,0,0.6)';overlay.style.display='flex';overlay.style.alignItems='center';overlay.style.justifyContent='center';overlay.style.zIndex=120;
      const big = document.createElement('img');
      big.src = img.src; big.style.maxWidth='90%'; big.style.maxHeight='90%'; big.style.borderRadius='10px'; big.style.boxShadow='0 20px 50px rgba(0,0,0,0.4)';
      overlay.appendChild(big);
      overlay.addEventListener('click', ()=> overlay.remove());
      document.body.appendChild(overlay);
    });
  });

  // Scroll-to-top
  const scrollTop = document.getElementById('scrollTop');
  window.addEventListener('scroll', ()=> {
    if (window.scrollY > 400) scrollTop.style.display = 'block'; else scrollTop.style.display = 'none';
  });
  scrollTop.addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

  // Simple nav behavior for anchor links (smooth scrolling)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Header book buttons open appointment section
  ['heroBookBtn','bookHeaderBtn','aboutBookBtn'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', ()=> { document.getElementById('appointment').scrollIntoView({behavior:'smooth'}); });
  });

  // Mobile hamburger toggle
  const hamburger = document.getElementById('hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', ()=> {
      const nav = document.querySelector('.nav');
      if (nav) nav.style.display = (nav.style.display === 'flex' ? 'none' : 'flex');
    });
  }
});