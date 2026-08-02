// ============ DATA ============
const services = [
  {name:"Teeth Cleaning", img:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=70", desc:"Professional cleaning to remove plaque and keep your gums healthy."},
  {name:"Teeth Whitening", img:"https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=500&q=70", desc:"Brighten your smile with safe, effective whitening treatments."},
  {name:"Root Canal Treatment", img:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=500&q=70", desc:"Pain-free root canal therapy to save and restore your natural tooth."},
  {name:"Dental Implants", img:"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=70", desc:"Permanent, natural-looking replacements for missing teeth."},
  {name:"Braces", img:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=70", desc:"Traditional braces to gradually align teeth for a confident smile."},
  {name:"Invisible Aligners", img:"https://images.unsplash.com/photo-1595302754997-a9f9075f2e5c?auto=format&fit=crop&w=500&q=70", desc:"Clear, comfortable aligners that straighten teeth discreetly."},
  {name:"Smile Makeover", img:"https://images.unsplash.com/photo-1541604193435-422b5a3c8d6f?auto=format&fit=crop&w=500&q=70", desc:"A complete, customized plan to transform your smile."},
  {name:"Tooth Extraction", img:"https://images.unsplash.com/photo-1609207825181-52d3214556dd?auto=format&fit=crop&w=500&q=70", desc:"Safe, gentle removal of damaged or problematic teeth."},
  {name:"Dental Crowns", img:"https://images.unsplash.com/photo-1588776814546-ec7e5307f4a6?auto=format&fit=crop&w=500&q=70", desc:"Durable crowns to restore strength and shape to damaged teeth."},
  {name:"Kids Dentistry", img:"https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?auto=format&fit=crop&w=500&q=70", desc:"Gentle, friendly dental care designed especially for children."},
  {name:"Gum Treatment", img:"https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=500&q=70", desc:"Effective care for healthy gums and prevention of gum disease."},
  {name:"Dental Fillings", img:"https://images.unsplash.com/photo-1609207807107-e8ec2120f9de?auto=format&fit=crop&w=500&q=70", desc:"Tooth-colored fillings that restore function and natural appearance."}
];

const whyItems = [
  {icon:"🦷", title:"Experienced Dentist", desc:"10+ years of trusted clinical expertise."},
  {icon:"😊", title:"Painless Treatment", desc:"Gentle techniques for a comfortable visit."},
  {icon:"📷", title:"Digital X-Ray", desc:"Fast, precise, low-radiation diagnostics."},
  {icon:"✨", title:"Sterilized Equipment", desc:"Hospital-grade hygiene and safety standards."},
  {icon:"💰", title:"Affordable Pricing", desc:"Transparent, budget-friendly treatment plans."},
  {icon:"🚑", title:"Emergency Care", desc:"Prompt attention when you need it most."}
];

const galleryItems = [
  {label:"Treatment Room", img:"https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=700&q=70", big:true},
  {label:"Reception", img:"https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=500&q=70"},
  {label:"Dental Chair", img:"https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=70"},
  {label:"Equipment", img:"https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=500&q=70"},
  {label:"Happy Patients", img:"https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=500&q=70"},
  {label:"Smile Transformation", img:"https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=500&q=70"}
];

const testimonials = [
  {name:"Priya Sharma", quote:"Wonderful experience! Highly recommend Dr. Richa. The clinic is spotless and the staff is so caring."},
  {name:"Rohan Mehta", quote:"My teeth whitening results are amazing. I can't stop smiling in photos now!"},
  {name:"Anjali Verma", quote:"Best dental clinic in town. Dr. Richa made my root canal completely painless."},
  {name:"Karan Singh", quote:"Very professional and gentle with my kids. They actually look forward to their checkups now!"}
];

const faqs = [
  {q:"Does root canal hurt?", a:"With modern anesthesia and techniques, root canal treatment at Smile Karo is virtually painless. Most patients report feeling only mild pressure, and any post-treatment sensitivity is easily managed."},
  {q:"Do you treat children?", a:"Yes! We offer gentle, kid-friendly dentistry designed to keep young patients relaxed and comfortable, from routine checkups to cavity treatment."},
  {q:"Do you accept emergency patients?", a:"Absolutely. We reserve same-day slots for dental emergencies like severe pain, broken teeth, or swelling. Call us directly for immediate assistance."},
  {q:"How long does teeth whitening take?", a:"A professional in-clinic whitening session typically takes 45–60 minutes and can brighten your smile by several shades in a single visit."}
];

// ============ ICONS (simple SVGs for dynamic sections) ============
const svgTooth = `<svg viewBox="0 0 64 64" width="28" height="28"><path fill="currentColor" d="M32 6c-7 0-11 4-14 4-3.5 0-6.5-2-9-2-3.5 0-5 3-5 8 0 10 3 18 5 26 1.4 5.4 2.6 12 7 12 4 0 4-9 6-16 1-3.6 2-6 5-6s4 2.4 5 6c2 7 2 16 6 16 4.4 0 5.6-6.6 7-12 2-8 5-16 5-26 0-5-1.5-8-5-8-2.5 0-5.5 2-9 2-3 0-7-4-14-4z"/></svg>`;

// ============ RENDER SERVICES ============
const servicesGrid = document.getElementById('servicesGrid');
servicesGrid.innerHTML = services.map(s => `
  <div class="service-card reveal">
    <div class="service-img"><img src="${s.img}" alt="${s.name}" loading="lazy"></div>
    <div class="service-body">
      <h3>${s.name}</h3>
      <p>${s.desc}</p>
      <a href="#appointment" class="service-link">Learn More →</a>
    </div>
  </div>
`).join('');

// ============ RENDER WHY US ============
const whyGrid = document.getElementById('whyGrid');
whyGrid.innerHTML = whyItems.map(w => `
  <div class="why-card reveal">
    <div class="why-icon" style="font-size:1.6rem;">${w.icon}</div>
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
  </div>
`).join('');

// ============ RENDER GALLERY ============
const galleryGrid = document.getElementById('galleryGrid');
galleryGrid.innerHTML = galleryItems.map(g => `
  <div class="gallery-item reveal ${g.big ? 'big' : ''}" data-label="${g.label}">
    <img src="${g.img}" alt="${g.label}" loading="lazy">
  </div>
`).join('');

// ============ RENDER TESTIMONIALS ============
const track = document.getElementById('carouselTrack');
const dotsWrap = document.getElementById('carouselDots');
track.innerHTML = testimonials.map(t => `
  <div class="t-card">
    <div class="t-inner">
      <div class="t-stars">★★★★★</div>
      <p class="t-quote">"${t.quote}"</p>
      <div class="t-author">
        <div class="t-avatar">${t.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div>
        <span class="t-name">${t.name}</span>
      </div>
    </div>
  </div>
`).join('');
dotsWrap.innerHTML = testimonials.map((_, i) => `<button data-i="${i}" class="${i===0?'active':''}" aria-label="Slide ${i+1}"></button>`).join('');

let currentSlide = 0;
function goToSlide(i){
  currentSlide = i;
  track.style.transform = `translateX(-${i * 100}%)`;
  [...dotsWrap.children].forEach((d, idx) => d.classList.toggle('active', idx === i));
}
[...dotsWrap.children].forEach(d => d.addEventListener('click', () => goToSlide(+d.dataset.i)));
setInterval(() => goToSlide((currentSlide + 1) % testimonials.length), 5000);

// ============ RENDER FAQ ============
const faqList = document.getElementById('faqList');
faqList.innerHTML = faqs.map((f, i) => `
  <div class="faq-item" data-i="${i}">
    <div class="faq-q"><span>${f.q}</span><span class="plus">+</span></div>
    <div class="faq-a"><p>${f.a}</p></div>
  </div>
`).join('');
faqList.querySelectorAll('.faq-item').forEach(item => {
  item.querySelector('.faq-q').addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    faqList.querySelectorAll('.faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-a').style.maxHeight = null;
    });
    if(!isOpen){
      item.classList.add('open');
      const a = item.querySelector('.faq-a');
      a.style.maxHeight = a.scrollHeight + 'px';
    }
  });
});

// ============ FLOATING HERO ICONS ============
const floatWrap = document.getElementById('floatingIcons');
const positions = [
  {top:'12%', left:'8%', size:24, delay:0}, {top:'22%', left:'42%', size:18, delay:1.2},
  {top:'68%', left:'12%', size:20, delay:2.4}, {top:'78%', left:'46%', size:16, delay:.6},
  {top:'15%', left:'86%', size:22, delay:1.8}, {top:'55%', left:'92%', size:18, delay:.9},
  {top:'88%', left:'80%', size:20, delay:2.1}
];
floatWrap.innerHTML = positions.map(p => `
  <span class="f-icon" style="top:${p.top};left:${p.left};width:${p.size}px;animation-delay:${p.delay}s;">${svgTooth}</span>
`).join('');

// ============ LOADER ============
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader').classList.add('hide'), 400);
});

// ============ NAVBAR SCROLL ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ============ MOBILE MENU ============
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('mobile-open');
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  hamburger.classList.remove('open');
  navLinks.classList.remove('mobile-open');
}));

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold:0.15, rootMargin:'0px 0px -60px 0px'});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ============ APPOINTMENT FORM ============
const form = document.getElementById('appointmentForm');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  modalOverlay.classList.add('show');
  form.reset();
});
modalClose.addEventListener('click', () => modalOverlay.classList.remove('show'));
modalOverlay.addEventListener('click', (e) => {
  if(e.target === modalOverlay) modalOverlay.classList.remove('show');
});

// Set min date to today for the date field
const dateInput = document.getElementById('date');
if(dateInput){
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);
}
