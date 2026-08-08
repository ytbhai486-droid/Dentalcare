import React, { useEffect, useMemo, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Activity, ArrowRight, Award, Baby, BadgeCheck, Ban, Bot, CalendarDays,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Clock3, Droplets,
  HeartPulse, Instagram, Mail, MapPin, Menu, MessageCircle, Moon, Phone,
  ShieldCheck, Sparkles, Star, Sun, Syringe, Tooth, UserRound, Users,
  X, Zap
} from "lucide-react";
import doctorImage from "./assets/doctor-richa.png";

const clinic = {
  name: "Smile Care Dental Clinic",
  doctor: "Dr. Richa",
  phone: "+91 00000 00000",
  email: "contact@smilecare.example",
  address: "Your Clinic Address, Your City, India",
  hours: "Mon–Sat · 9:00 AM – 7:00 PM"
};

const services = [
  ["Dental Checkup","Complete oral examination and preventive care.",Activity],
  ["Teeth Cleaning","Gentle professional cleaning for a fresh, healthy smile.",Sparkles],
  ["Teeth Whitening","Brighten your smile with professional whitening care.",Sun],
  ["Root Canal Treatment","Modern, careful treatment to save infected teeth.",HeartPulse],
  ["Dental Fillings","Natural-looking fillings for damaged or decayed teeth.",Tooth],
  ["Dental Implants","Long-lasting tooth replacement planned around your needs.",BadgeCheck],
  ["Braces & Aligners","Modern options for a healthier, more confident smile.",Zap],
  ["Tooth Extraction","Safe and comfortable extraction when clinically necessary.",Syringe],
  ["Pediatric Dentistry","Friendly, gentle dental care for children.",Baby],
  ["Smile Makeover","A personalized combination of cosmetic treatments.",Sparkles],
  ["Gum Treatment","Care for gums and prevention of periodontal problems.",Droplets],
  ["Crowns & Bridges","Restore strength, function and appearance of teeth.",Award]
];

const reasons = [
  ["Experienced Dentist","Patient-first care with careful treatment planning.",Award],
  ["Latest Technology","Modern equipment designed for precision and comfort.",Zap],
  ["Affordable Pricing","Clear treatment plans with transparent communication.",CheckCircle2],
  ["Pain-Free Approach","Gentle techniques and comfort-focused treatment.",HeartPulse],
  ["Emergency Care","Prompt guidance when an unexpected dental problem occurs.",Clock3],
  ["Sterilized Equipment","Strict hygiene and sterilization protocols.",ShieldCheck],
  ["Personalized Care","Treatment recommendations tailored to each patient.",UserRound],
  ["Friendly Staff","A welcoming clinic experience from arrival to follow-up.",Users]
];

const reviews = [
  ["Priya Sharma","Dr. Richa is extremely gentle and professional. Highly recommended."],
  ["Rahul Verma","The clinic is clean and modern. My treatment was painless."],
  ["Sneha Gupta","Best dental clinic in the city."],
  ["Amit Jain","I got my smile makeover done and the results are amazing."]
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("show"); });
    }, { threshold: 0.12 });
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const links = [["Home","home"],["About","about"],["Services","services"],["Why Us","why"],["Reviews","reviews"],["Gallery","gallery"],["AI Assistant","assistant"],["Contact","contact"]];
  return <header className="nav-wrap">
    <nav className="nav glass">
      <a href="#home" className="brand" onClick={() => setOpen(false)}>
        <span className="brand-icon"><Tooth size={22}/></span>
        <span><b>Smile Care</b><small>Dental Clinic</small></span>
      </a>
      <div className={`nav-links ${open ? "open" : ""}`}>
        {links.map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
        <a className="nav-cta" href="#appointment" onClick={() => setOpen(false)}>Book Appointment</a>
      </div>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Toggle theme" onClick={() => setDark(!dark)}>{dark ? <Sun size={18}/> : <Moon size={18}/>}</button>
        <button className="icon-btn menu-btn" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
    </nav>
  </header>
}

function App() {
  const [dark, setDark] = useState(false);
  const [review, setReview] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{from:"bot", text:"Hi! I’m Smile Care AI Assistant. How can I help with your dental questions today?"}]);
  const [typing, setTyping] = useState(false);
  useReveal();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  useEffect(() => {
    const timer = setInterval(() => setReview(r => (r + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const askAI = (text) => {
    setMessages(m => [...m, {from:"user", text}]);
    setTyping(true);
    setTimeout(() => {
      const q = text.toLowerCase();
      let answer = "For a personalized answer, please book an appointment with Dr. Richa. You can also call the clinic directly.";
      if (q.includes("time") || q.includes("timing")) answer = `Our listed hours are ${clinic.hours}. Please confirm availability before visiting.`;
      if (q.includes("pain") || q.includes("emergency")) answer = "If you have severe dental pain, swelling, trauma or another urgent concern, contact the clinic promptly. Avoid self-medicating and seek professional dental advice.";
      if (q.includes("root")) answer = "A root canal can help treat an infected or inflamed tooth and may help save it. Dr. Richa can assess whether it is appropriate for you.";
      if (q.includes("brace") || q.includes("align")) answer = "Braces and clear aligners can both move teeth gradually. The best option depends on your bite and treatment goals.";
      if (q.includes("clean")) answer = "Professional cleaning removes plaque and tartar that regular brushing cannot fully remove.";
      if (q.includes("whiten")) answer = "Professional whitening can brighten natural teeth. A dental checkup first is useful to make sure whitening is appropriate.";
      if (q.includes("implant")) answer = "Dental implants are a long-term tooth replacement option. Suitability depends on oral health, bone support and your overall dental assessment.";
      setMessages(m => [...m, {from:"bot", text:answer}]);
      setTyping(false);
    }, 850);
  };

  return <div className="site">
    <Header dark={dark} setDark={setDark}/>

    <main>
      <section id="home" className="hero section">
        <div className="orb orb-a"/><div className="orb orb-b"/>
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow"><Sparkles size={16}/> Modern care. Human touch.</div>
            <h1>Your Smile <span>Deserves</span> the Best Care</h1>
            <p>Expert dental care by <b>Dr. Richa</b> using modern technology and compassionate treatment.</p>
            <div className="hero-buttons">
              <a className="btn primary" href="#appointment">Book Appointment <ArrowRight size={18}/></a>
              <button className="btn secondary" onClick={() => setChatOpen(true)}><Bot size={18}/> Chat with AI Assistant</button>
            </div>
            <div className="trust-row"><span><CheckCircle2/> Gentle care</span><span><CheckCircle2/> Modern technology</span><span><CheckCircle2/> Patient-first</span></div>
          </div>
          <div className="hero-visual reveal">
            <div className="image-glow"/>
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. Richa at Smile Care Dental Clinic" fetchPriority="high"/>
              <div className="doctor-badge"><span className="status-dot"/> Available for appointments<div><b>Dr. Richa</b><small>Cosmetic & General Dentist</small></div></div>
            </div>
            <div className="float-pill pill-one"><ShieldCheck/> Sterile & Safe</div>
            <div className="float-pill pill-two"><Star fill="currentColor"/> 4.9 Patient Rating</div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container about-grid">
          <div className="about-image reveal">
            <img src={doctorImage} alt="Dr. Richa" loading="lazy"/>
            <div className="credential-card glass"><BadgeCheck/><div><b>Dr. Richa</b><small>BDS · Cosmetic & General Dentistry</small></div></div>
          </div>
          <div className="reveal">
            <div className="eyebrow">Meet your dentist</div>
            <h2>Care that feels <span>personal.</span></h2>
            <p className="lead">At Smile Care Dental Clinic, every treatment starts with listening. Dr. Richa combines a patient-first approach with modern equipment and gentle treatment planning.</p>
            <div className="info-list">
              <div><CheckCircle2/><span><b>Patient-first approach</b><small>Clear explanations and comfortable care.</small></span></div>
              <div><CheckCircle2/><span><b>Modern equipment</b><small>Technology that supports accurate diagnosis and treatment.</small></span></div>
              <div><CheckCircle2/><span><b>Gentle philosophy</b><small>Comfort and trust at every stage of your visit.</small></span></div>
            </div>
            <div className="stats">
              {[["1000+","Happy Patients"],["10+","Years Experience"],["15+","Dental Services"],["4.9★","Patient Rating"]].map(([n,l]) => <div className="stat" key={l}><b>{n}</b><span>{l}</span></div>)}
            </div>
            <p className="small-note">Qualifications, certifications and experience shown above can be replaced with verified clinic information before launch.</p>
          </div>
        </div>
      </section>

      <section id="services" className="section soft">
        <div className="container">
          <div className="section-head reveal"><div><div className="eyebrow">Comprehensive care</div><h2>Dental services, <span>beautifully delivered.</span></h2></div><p>From prevention to restorative and cosmetic care, explore a modern range of dental services.</p></div>
          <div className="card-grid services-grid">{services.map(([title,desc,Icon]) => <article className="service-card glass reveal" key={title}><div className="service-icon"><Icon/></div><h3>{title}</h3><p>{desc}</p><button onClick={() => document.getElementById("appointment").scrollIntoView({behavior:"smooth"})}>Learn More <ArrowRight size={15}/></button></article>)}</div>
        </div>
      </section>

      <section id="why" className="section">
        <div className="container">
          <div className="center-head reveal"><div className="eyebrow">Why Smile Care</div><h2>A better dental experience from <span>start to finish.</span></h2></div>
          <div className="card-grid reasons-grid">{reasons.map(([title,desc,Icon]) => <article className="reason-card reveal" key={title}><Icon/><h3>{title}</h3><p>{desc}</p></article>)}</div>
        </div>
      </section>

      <section id="reviews" className="section soft">
        <div className="container review-layout">
          <div className="reveal"><div className="eyebrow">Patient stories</div><h2>Kind words from <span>happy smiles.</span></h2><p className="lead">Real clinic reviews can replace these placeholders before launch.</p><div className="review-controls"><button className="icon-btn" onClick={() => setReview((review-1+reviews.length)%reviews.length)}><ChevronLeft/></button><button className="icon-btn" onClick={() => setReview((review+1)%reviews.length)}><ChevronRight/></button></div></div>
          <div className="testimonial glass reveal"><div className="stars">★★★★★</div><blockquote>“{reviews[review][1]}”</blockquote><div className="reviewer"><div className="avatar">{reviews[review][0][0]}</div><div><b>{reviews[review][0]}</b><small>Verified patient · Placeholder review</small></div></div></div>
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="container">
          <div className="section-head reveal"><div><div className="eyebrow">Inside Smile Care</div><h2>A clinic designed around <span>comfort.</span></h2></div></div>
          <div className="gallery"><div className="gallery-main reveal"><img src={doctorImage} alt="Smile Care clinic" loading="lazy"/><span>Modern treatment environment</span></div><div className="gallery-tile reveal"><div className="gallery-placeholder"><Tooth/><b>Reception</b><small>Add clinic photo</small></div></div><div className="gallery-tile reveal"><div className="gallery-placeholder"><Syringe/><b>Treatment Room</b><small>Add clinic photo</small></div></div><div className="gallery-tile reveal"><div className="gallery-placeholder"><ShieldCheck/><b>Sterilized Equipment</b><small>Add clinic photo</small></div></div><div className="gallery-tile reveal"><div className="gallery-placeholder"><Users/><b>Happy Patients</b><small>Add clinic photo</small></div></div></div>
        </div>
      </section>

      <section id="appointment" className="section appointment">
        <div className="container appointment-grid">
          <div className="appointment-copy reveal">
            <div className="eyebrow">Your next smile starts here</div>
            <h2>Book your visit with <span>Dr. Richa.</span></h2>
            <p>Share your preferred date and treatment. Our team will contact you to confirm the appointment.</p>
            <div className="appointment-doctor"><img src={doctorImage} alt="Dr. Richa" loading="lazy"/><div><b>Dr. Richa</b><small>Cosmetic & General Dentist</small></div></div>
            <div className="appointment-note"><ShieldCheck/> Your information is used to handle your appointment request.</div>
          </div>
          <AppointmentForm/>
        </div>
      </section>

      <section id="assistant" className="section assistant-section">
        <div className="container assistant-banner reveal">
          <div><div className="eyebrow"><Bot/> Smart dental guidance</div><h2>Have a dental question?</h2><p>Ask Smile Care AI Assistant about services, timings and common dental topics.</p></div>
          <button className="btn primary" onClick={() => setChatOpen(true)}>Open AI Assistant <ArrowRight/></button>
        </div>
      </section>

      <section id="contact" className="section soft">
        <div className="container contact-grid">
          <div className="reveal"><div className="eyebrow">Contact</div><h2>Let's take care of your <span>smile.</span></h2><div className="contact-list">
            <a href={`tel:${clinic.phone}`}><Phone/><span><b>Call us</b><small>{clinic.phone}</small></span></a>
            <a href={`mailto:${clinic.email}`}><Mail/><span><b>Email</b><small>{clinic.email}</small></span></a>
            <div><MapPin/><span><b>Clinic</b><small>{clinic.address}</small></span></div>
            <div><Clock3/><span><b>Working hours</b><small>{clinic.hours}</small></span></div>
          </div><div className="contact-actions"><a className="btn primary" href={`tel:${clinic.phone}`}><Phone/> Call Clinic</a><a className="btn whatsapp" href="https://wa.me/910000000000" target="_blank" rel="noreferrer"><MessageCircle/> WhatsApp</a></div></div>
          <div className="map reveal"><iframe title="Smile Care Dental Clinic map" src="https://www.google.com/maps?q=dental%20clinic%20India&output=embed" loading="lazy"/></div>
        </div>
      </section>
    </main>

    <footer><div className="container footer-grid"><div><a href="#home" className="brand"><span className="brand-icon"><Tooth/></span><span><b>Smile Care</b><small>Dental Clinic</small></span></a><p>Creating Healthy & Beautiful Smiles.</p></div><div><b>Quick Links</b><a href="#services">Services</a><a href="#appointment">Appointments</a><a href="#reviews">Reviews</a></div><div><b>Contact</b><a href={`tel:${clinic.phone}`}>{clinic.phone}</a><a href={`mailto:${clinic.email}`}>{clinic.email}</a><span>{clinic.address}</span></div><div><b>Follow</b><div className="social"><a href="#" aria-label="Instagram"><Instagram/></a><a href="#" aria-label="Facebook">f</a></div></div></div><div className="container copyright">© {new Date().getFullYear()} Smile Care Dental Clinic · <a href="#">Privacy Policy</a> · <a href="#">Terms & Conditions</a></div></footer>

    <a className="floating-wa" href="https://wa.me/910000000000" target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a>
    <button className="floating-ai" onClick={() => setChatOpen(true)} aria-label="Open AI assistant"><Bot/></button>

    {chatOpen && <div className="chat-panel glass">
      <div className="chat-head"><div><div className="bot-avatar"><Bot/></div><span><b>Smile Care AI</b><small>Dental Assistant · Online</small></span></div><button className="icon-btn" onClick={() => setChatOpen(false)}><X/></button></div>
      <div className="chat-body">{messages.map((m,i) => <div className={`bubble ${m.from}`} key={i}>{m.text}</div>)}{typing && <div className="bubble bot typing"><i/><i/><i/></div>}</div>
      <div className="quick"><button onClick={() => askAI("What are your clinic timings?")}>Clinic timings</button><button onClick={() => askAI("Tell me about root canal")}>Root canal</button><button onClick={() => askAI("I have tooth pain")}>Tooth pain</button><button onClick={() => {setChatOpen(false);document.getElementById("appointment").scrollIntoView({behavior:"smooth"})}}>Book Appointment</button></div>
    </div>}
  </div>
}

function AppointmentForm() {
  const initial = {name:"",phone:"",email:"",age:"",gender:"",service:"",date:"",time:"",message:""};
  const [form,setForm] = useState(initial);
  const [status,setStatus] = useState("");
  const [busy,setBusy] = useState(false);

  const update = e => setForm({...form,[e.target.name]:e.target.value});

  const submit = async e => {
    e.preventDefault();
    if (busy) return;
    setStatus("");
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    if (!publicKey || !serviceId || !templateId) {
      setStatus("config");
      return;
    }
    setBusy(true);
    const now = new Date();
    try {
      await emailjs.send(serviceId, templateId, {
        name:form.name, phone:form.phone, email:form.email, age:form.age,
        gender:form.gender, service:form.service, date:form.date, time:form.time,
        message:form.message, current_date:now.toLocaleDateString("en-IN"),
        current_time:now.toLocaleTimeString("en-IN")
      }, {publicKey});
      setStatus("success"); setForm(initial);
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally { setBusy(false); }
  };

  return <form className="appointment-form glass reveal" onSubmit={submit}>
    <div className="form-grid">
      <label>Full Name*<input name="name" value={form.name} onChange={update} required placeholder="Your full name"/></label>
      <label>Phone Number*<input name="phone" value={form.phone} onChange={update} required type="tel" placeholder="+91"/></label>
      <label>Email Address<input name="email" value={form.email} onChange={update} type="email" placeholder="you@example.com"/></label>
      <label>Age<input name="age" value={form.age} onChange={update} type="number" min="1" max="120" placeholder="Age"/></label>
      <label>Gender<select name="gender" value={form.gender} onChange={update}><option value="">Select</option><option>Female</option><option>Male</option><option>Other</option><option>Prefer not to say</option></select></label>
      <label>Select Service*<select name="service" value={form.service} onChange={update} required><option value="">Choose a service</option>{services.map(([s])=><option key={s}>{s}</option>)}</select></label>
      <label>Preferred Date*<input name="date" value={form.date} onChange={update} required type="date" min={new Date().toISOString().split("T")[0]}/></label>
      <label>Preferred Time*<input name="time" value={form.time} onChange={update} required type="time"/></label>
      <label className="full">Additional Message<textarea name="message" value={form.message} onChange={update} rows="4" placeholder="Tell us anything you'd like the clinic to know..."/></label>
    </div>
    <button className="btn primary submit-btn" disabled={busy}>{busy ? "Sending..." : <>Book Appointment <ArrowRight/></>}</button>
    {status==="success" && <div className="form-status success"><CheckCircle2/> Thank you! Your appointment request has been received. We will contact you shortly.</div>}
    {status==="error" && <div className="form-status error"><Ban/> We couldn't send the request right now. Please try again or call the clinic.</div>}
    {status==="config" && <div className="form-status error"><Ban/> EmailJS is not configured yet. Add the three VITE_EMAILJS_* values in Replit Secrets.</div>}
  </form>
}

export default App;