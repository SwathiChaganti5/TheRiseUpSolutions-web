import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowUpRight, Menu, X, CheckCircle2, TrendingUp, Users, WalletCards, Workflow, Cpu, ShieldCheck, Sparkles, ChevronRight, Mail, Phone, MessageCircle, Check, MapPin} from 'lucide-react';
import './App.css';
import './MobileContact.css';
import './MobileNav.css';
import './HeroVideo.css';

const renderSocialIcon = type => {
 if (type === 'instagram') return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.8"/><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor"/></svg>;
 if (type === 'facebook') return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3h-3.1V7.2c0-.9.3-1.5 1.6-1.5H17V2.7c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V10H8v3h2.5v8h3Z" fill="currentColor"/></svg>;
 return null;
};

const focusAreas=[
 {icon:TrendingUp,title:'Business Strategy',text:'Turn ideas into practical direction, stronger decisions and sustainable growth.',tone:'peach'},
 {icon:Workflow,title:'Operations & SOPs',text:'Create repeatable systems that bring clarity, consistency and efficiency to everyday work.',tone:'mint'},
 {icon:Users,title:'Leadership',text:'Explore modern leadership approaches that help teams adapt, collaborate and perform.',tone:'lavender'},
 {icon:WalletCards,title:'Financial Planning',text:'Build stronger financial foundations through planning, discipline and informed choices.',tone:'sun'},
 {icon:ShieldCheck,title:'Investment & Risk',text:'Understand diversification and thoughtful approaches to long-term financial risk.',tone:'sky'},
 {icon:Cpu,title:'Digital Transformation',text:'Use technology, data and digital thinking to make organizations more adaptable.',tone:'rose'}
];
const insights=[
 {category:'Business Operations', title:'The Importance of SOPs in Business Operations', image:'operations.svg', summary:'Clear processes help business teams stay consistent, reduce errors and scale without chaos.', date:'September 8, 2026', author:'Rise Up Solutions', sections:[{heading:'Why SOPs matter', text:'Standard Operating Procedures help teams work with more clarity, consistency and accountability. When processes are clear, businesses can move faster and reduce costly mistakes.'},{heading:'Better consistency', text:'An SOP gives every team member a shared framework for how work should be performed. That reduces confusion, creates accountability and helps maintain service quality as the business grows.'},{heading:'Operational resilience', text:'When the business is under pressure, systems matter. SOPs give leaders a repeatable roadmap for onboarding, task ownership and process improvement without relying on memory alone.'}]},
 {category:'Finance', title:'Building Stronger Financial Foundations', image:'finance.svg', summary:'Good financial habits create the stability needed for lasting growth and smarter business decisions.', date:'August 29, 2026', author:'Rise Up Solutions', sections:[{heading:'Start with the basics', text:'Financial strength begins with clarity: knowing cash flow, identifying priorities and creating a practical plan for expenses, savings and investments.'},{heading:'Build for resilience', text:'A strong financial foundation helps businesses handle uncertainty with less stress. It creates room for reinvestment, better planning and smarter risk-taking.'},{heading:'Growth without chaos', text:'When financial decision-making is disciplined, businesses can grow intentionally rather than reactively. The result is more confidence, clearer strategy and fewer surprises.'}]},
 {category:'Leadership', title:'Leadership for the Modern Business', image:'leadership.svg', summary:'Modern leaders create focus, trust and momentum by aligning people, systems and purpose.', date:'August 26, 2026', author:'Rise Up Solutions', sections:[{heading:'Leadership is adaptive', text:'Business environments change quickly, so leaders need to shift from rigid control to clear guidance, empowerment and continuous learning.'},{heading:'People first', text:'Strong leadership supports team confidence and accountability. When people understand the direction, they can contribute more effectively and solve problems with greater ownership.'},{heading:'Lead with systems', text:'Modern leadership is not only about direction. It is also about building habits, communication and structures that help organizations respond well under pressure.'}]} 
];

function App(){
 const [menu,setMenu]=useState(false); const [scrolled,setScrolled]=useState(false); const [contactOpen,setContactOpen]=useState(false); const [selectedInsight,setSelectedInsight]=useState(null);
 const [formData,setFormData]=useState({fullName:'',email:'',phone:'',interest:'',details:''});
 const whatsappNumber='919666238177';

 useEffect(()=>{const f=()=>setScrolled(scrollY>30);addEventListener('scroll',f);return()=>removeEventListener('scroll',f)},[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:'smooth'});setMenu(false)};
 const handleFieldChange=e=>{const {name,value}=e.target;setFormData(prev=>({...prev,[name]:value}));};
 const handleContactSubmit=e=>{e.preventDefault();
  const message = [
   'Hello Rise Up Solutions,',
   '',
   `Full Name: ${formData.fullName}`,
   `Email: ${formData.email}`,
   `Phone: ${formData.phone || 'Not provided'}`,
   `Interest: ${formData.interest || 'Not specified'}`,
   `Project details: ${formData.details || 'No additional details provided'}`
  ].join('\n');
  const whatsappUrl=`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl,'_blank');
  setFormData({fullName:'',email:'',phone:'',interest:'',details:''});
  setContactOpen(false);
 };
 return <>
  <header className={scrolled?'nav scrolled':'nav'}><div className="nav-inner">
   <button className="brand" onClick={()=>go('home')}><img className="brand-mark" src="/images/logo.jpg" alt="Rise Up Solutions logo" /><span>RISE UP <b>SOLUTIONS</b></span></button>
   <nav className={menu?'open':''}>{[['home','Home'],['about','About'],['focus','Focus Areas'],['insights','Insights'],['contact','Contact']].map(([id,t])=><button key={id} onClick={()=>go(id)}>{t}</button>)}<button type="button" className="nav-cta" onClick={()=>setContactOpen(true)}>Let's Connect <ArrowUpRight size={16}/></button></nav>
    <button className="menu" onClick={()=>setMenu(!menu)} aria-label={menu?'Close menu':'Open menu'} aria-expanded={menu}>{menu?<X/>:<Menu/>}</button>
  </div></header>

  {contactOpen && <div className="contact-modal-backdrop" onClick={()=>setContactOpen(false)}><div className="contact-modal" onClick={e=>e.stopPropagation()}>
   <div className="contact-panel">
    <div className="contact-kicker"><span className="dot"></span> RISE UP SOLUTIONS</div>
    <h2>LET'S TALK ABOUT BETTER BUSINESS.</h2>
    <p>Whether you need guidance selecting the ideal business strategy, custom systems, or have questions regarding growth and execution, we are here to help.</p>
    <div className="contact-option-list">
     <div className="contact-option available"><div><div className="opt-title"><span className="option-icon"><Check size={12}/></span> DIRECT ENQUIRY</div><small>Located in Durga Nagar, Rajahmundry. Share your requirement and we’ll respond quickly.</small></div><span className="status">AVAILABLE</span></div>
     <a href="https://maps.google.com/?q=Durga+Nagar+Rajahmundry" target="_blank" rel="noreferrer" className="contact-option available"><div><div className="opt-title"><span className="option-icon"><MapPin size={12}/></span> LOCATION</div><small>Durga Nagar, Rajahmundry, Andhra Pradesh</small></div><span className="status">OPEN MAPS</span></a>
     <a href="tel:+919666238177" className="contact-option available"><div><div className="opt-title"><span className="option-icon"><Phone size={12}/></span> CALL</div><small>+91 96662 38177 / +91 88978 11229</small></div><span className="status">AVAILABLE</span></a>
     <a href="mailto:theriseupsolutionsrjy@gmail.com" className="contact-option available"><div><div className="opt-title"><span className="option-icon"><Mail size={12}/></span> EMAIL</div><small>theriseupsolutionsrjy@gmail.com</small></div><span className="status">AVAILABLE</span></a>
     <a href="https://wa.me/919666238177" target="_blank" rel="noreferrer" className="contact-option available"><div><div className="opt-title"><span className="option-icon"><MessageCircle size={12}/></span> WHATSAPP</div><small>Connect directly for quick discussion and business enquiries.</small></div><span className="status">AVAILABLE</span></a>
     <a href="https://www.instagram.com/theriseupsolutions/" target="_blank" rel="noreferrer" className="contact-option available"><div><div className="opt-title"><span className="option-icon social-icon">{renderSocialIcon('instagram')}</span> INSTAGRAM</div><small>@theriseupsolutions</small></div><span className="status">AVAILABLE</span></a>
     <a href="https://www.facebook.com/TheRiseupSolutions/" target="_blank" rel="noreferrer" className="contact-option available"><div><div className="opt-title"><span className="option-icon social-icon">{renderSocialIcon('facebook')}</span> FACEBOOK</div><small>@TheRiseupSolutions</small></div><span className="status">AVAILABLE</span></a>
    </div>
   </div>
   <div className="form-panel">
    <button type="button" className="modal-close" onClick={()=>setContactOpen(false)} aria-label="Close form"><X size={18}/></button>
    <div className="form-header">CONTACT RISE UP SOLUTIONS</div>
    <p className="form-subtitle">Tell us about your business goals, challenges, or next step and we’ll get back to you.</p>
    <div className="mobile-contact-socials" aria-label="Connect with us">
      <a href="tel:+919666238177" aria-label="Call Rise Up Solutions" title="Call Rise Up Solutions"><Phone size={18}/></a>
     <a href="https://wa.me/919666238177" target="_blank" rel="noreferrer" aria-label="WhatsApp" title="WhatsApp"><MessageCircle size={18}/></a>
     <a href="https://www.instagram.com/theriseupsolutions/" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram"><span className="social-icon">{renderSocialIcon('instagram')}</span></a>
     <a href="https://www.facebook.com/TheRiseupSolutions/" target="_blank" rel="noreferrer" aria-label="Facebook" title="Facebook"><span className="social-icon">{renderSocialIcon('facebook')}</span></a>
    </div>
    <form onSubmit={handleContactSubmit} className="contact-form">
     <div className="form-grid">
      <div className="field"><label htmlFor="fullName">FULL NAME *</label><input id="fullName" name="fullName" value={formData.fullName} onChange={handleFieldChange} placeholder="Enter your full name" required /></div>
      <div className="field"><label htmlFor="email">EMAIL ADDRESS *</label><input id="email" name="email" type="email" value={formData.email} onChange={handleFieldChange} placeholder="Enter your email address" required /></div>
      <div className="field"><label htmlFor="phone">PHONE NUMBER</label><input id="phone" name="phone" value={formData.phone} onChange={handleFieldChange} placeholder="Enter your phone number" /></div>
      <div className="field"><label htmlFor="interest">WHAT ARE YOU LOOKING FOR? *</label><select id="interest" name="interest" value={formData.interest} onChange={handleFieldChange} required><option value="">Select your focus area</option><option value="Business Strategy">Business Strategy</option><option value="Operations & SOPs">Operations & SOPs</option><option value="Leadership">Leadership</option><option value="Financial Planning">Financial Planning</option><option value="Investment & Risk">Investment & Risk</option><option value="Digital Transformation">Digital Transformation</option></select></div>
     </div>
     <div className="field textarea-field"><label htmlFor="details">TELL US WHAT YOU NEED</label><textarea id="details" name="details" value={formData.details} onChange={handleFieldChange} placeholder="Share your requirement, preferred timeline, and any details you'd like us to know." rows="5" /></div>
     <button type="submit" className="submit-btn">SEND ENQUIRY <ArrowUpRight size={18}/></button>
    </form>
   </div>
  </div></div>}

  <main id="home">
   <section className="hero section-pad"><div className="orb orb-a"></div><div className="orb orb-b"></div><div className="hero-grid">
    <div className="hero-copy reveal"><div className="eyebrow"><Sparkles size={15}/> PRACTICAL BUSINESS INSIGHTS</div><h1>Ideas that help businesses <em>rise, adapt & grow.</em></h1><p>Clear perspectives, practical strategies and modern business thinking for people who want to turn good ideas into meaningful action.</p><div className="hero-actions"><button className="primary" onClick={()=>go('focus')}>Explore our focus <ArrowUpRight size={18}/></button><button className="text-btn" onClick={()=>go('about')}>Discover our approach <ChevronRight size={18}/></button></div><div className="micro-proof"><CheckCircle2 size={18}/> Practical over theoretical <span></span> Built for action</div></div>
    <div className="hero-art reveal delay"><div className="art-ring ring1"></div><div className="art-ring ring2"></div><div className="sun-disc"></div><div className="hero-video-circle"><video src="/images/video1-first8s.mp4" autoPlay muted loop playsInline aria-label="Rise Up Solutions brand video" /></div></div>
   </div></section>

   <section id="about" className="about section-pad"><div className="section-kicker">WHO WE ARE</div><div className="about-grid"><div><h2>Digital growth with <span>real business impact.</span></h2></div><div><p className="lead">The Riseup Solutions is a digital marketing and creative agency based in Rajamahendravaram (Rajahmundry), Andhra Pradesh, India. With over 8 years of experience, we help brands grow through strategy, creative execution, and digital visibility.</p><p>We support businesses with web design, SEO, social media management, paid advertising, and brand development, having served over 250 brands across regional hubs in Andhra Pradesh. Our focus is simple: turn ideas into measurable growth.</p><button className="outline" onClick={()=>go('insights')}>Explore our insights <ArrowUpRight size={17}/></button></div></div><div className="principles"><div><strong>01</strong><span>Strategy</span><p>Build the right digital direction for your business goals.</p></div><div><strong>02</strong><span>Creative</span><p>Design memorable experiences that connect with your audience.</p></div><div><strong>03</strong><span>Growth</span><p>Drive visibility, engagement and measurable business momentum.</p></div></div></section>

   <section id="focus" className="focus section-pad"><div className="section-head"><div><div className="section-kicker">WHAT WE EXPLORE</div><h2>Six lenses for <span>better business.</span></h2></div><p>Explore the areas that shape resilient, adaptable and forward-looking organizations.</p></div><div className="focus-grid">{focusAreas.map(({icon:Icon,title,text,tone},i)=><article className={`focus-card ${tone}`} key={title}><div className="icon-box"><Icon size={23}/></div><span className="num">0{i+1}</span><h3>{title}</h3><p>{text}</p><div className="card-arrow"><ArrowUpRight size={18}/></div></article>)}</div></section>

   <section className="flow section-pad"><div className="flow-panel"><div className="flow-copy"><div className="section-kicker">FROM INSIGHT TO ACTION</div><h2>Think clearly.<br/><span>Move deliberately.</span></h2><p>Good business decisions rarely come from one dramatic moment. They grow from understanding the challenge, choosing a direction and consistently putting it into practice.</p><button className="light-btn" onClick={()=>setContactOpen(true)}>Start a conversation <ArrowUpRight size={17}/></button></div><div className="steps">{[['01','DISCOVER','Identify the real challenge.'],['02','UNDERSTAND','Turn information into clarity.'],['03','APPLY','Put the right strategy into action.'],['04','GROW','Learn, adapt and keep moving.']].map(([n,t,d],i)=><div className="step" key={n}><span>{n}</span><div><b>{t}</b><p>{d}</p></div>{i<3&&<div className="step-line"/>}</div>)}</div></div></section>

   <section id="insights" className="insights section-pad"><div className="section-head"><div><div className="section-kicker">LATEST INSIGHTS</div><h2>Ideas worth <span>taking further.</span></h2></div><p>Business topics presented with a practical, action-oriented perspective.</p></div><div className="insight-grid">{insights.map((insight,i)=><article className="insight" key={insight.title}><div className="insight-img"><img src={`/images/${insight.image}`} alt=""/><span>{insight.category}</span></div><div className="insight-body"><small>RISE UP / INSIGHT 0{i+1}</small><h3>{insight.title}</h3><button type="button" onClick={()=>setSelectedInsight(insight)}>Read insight <ArrowUpRight size={16}/></button></div></article>)}</div></section>

   {selectedInsight && <div className="insight-modal-backdrop" onClick={()=>setSelectedInsight(null)}><div className="insight-modal" onClick={e=>e.stopPropagation()}><button type="button" className="insight-close" onClick={()=>setSelectedInsight(null)} aria-label="Close insight"><X size={18}/></button><div className="insight-hero"><img src={`/images/${selectedInsight.image}`} alt="" /><div className="insight-hero-copy"><span className="insight-tag">{selectedInsight.category}</span><h3>{selectedInsight.title}</h3><div className="insight-meta"><span>{selectedInsight.date}</span><span>•</span><span>{selectedInsight.author}</span></div></div></div><div className="insight-content"><p className="insight-summary">{selectedInsight.summary}</p>{selectedInsight.sections.map(section=><section key={section.heading} className="insight-section"><h4>{section.heading}</h4><p>{section.text}</p></section>)}</div></div></div>}

   <section id="contact" className="contact section-pad"><div className="contact-box"><div className="contact-decor"></div><div className="section-kicker">LET'S CONNECT</div><h2>Ready to turn ideas<br/>into <span>action?</span></h2><p>Have a business question, a project in mind, or simply want to exchange ideas? Start the conversation.</p><div className="contact-actions"><a className="light-btn" href="mailto:theriseupsolutionsrjy@gmail.com"><span className="contact-action-icon"><Mail size={17}/></span><span>theriseupsolutionsrjy@gmail.com</span></a><a className="ghost-light" href="https://maps.google.com/?q=Durga+Nagar+Rajahmundry" target="_blank" rel="noreferrer"><span className="contact-action-icon"><MapPin size={17}/></span><span>Visit location</span><ArrowUpRight size={16}/></a><a className="ghost-light" href="https://www.instagram.com/theriseupsolutions/" target="_blank" rel="noreferrer"><span className="contact-action-icon social-pill">{renderSocialIcon('instagram')}</span><span>Instagram</span></a><a className="ghost-light" href="https://www.facebook.com/TheRiseupSolutions/" target="_blank" rel="noreferrer"><span className="contact-action-icon social-pill">{renderSocialIcon('facebook')}</span><span>Facebook</span></a></div></div></section>
  </main>
  <footer><div className="footer-main"><div className="brand footer-brand"><img className="brand-mark" src="/images/logo.jpg" alt="Rise Up Solutions logo" /><div className="footer-brand-copy"><span>RISE UP <b>SOLUTIONS</b></span><div className="footer-phone-links"><a href="tel:+919666238177"><Phone size={14}/>+91 96662 38177</a><a href="tel:+918897811229"><Phone size={14}/>+91 88978 11229</a></div></div></div><p>Practical insights. Smarter strategies. Better business decisions.</p><div className="footer-links"><button onClick={()=>go('about')}>About</button><button onClick={()=>go('focus')}>Focus Areas</button><button onClick={()=>go('insights')}>Insights</button><button onClick={()=>go('contact')}>Contact</button></div></div><div className="footer-bottom"><span>© 2026 The Rise Up Solutions</span><span>Built for ideas that move.</span></div></footer>
 </>
}
createRoot(document.getElementById('root')).render(<App/>);
