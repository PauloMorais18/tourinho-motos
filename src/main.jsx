import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, MessageCircle, MapPin, Wrench, Menu, X, ShieldCheck, Check, Instagram } from 'lucide-react';
import './style.css';

const whatsapp = 'https://wa.me/554999038801';
const maps = 'https://www.google.com/maps/search/?api=1&query=Tourinho+Motos+Rua+Santa+Catarina+86+Herval+d%27Oeste';
const mapEmbed = 'https://www.google.com/maps?q=Rua+Santa+Catarina,+86,+Centro,+Herval+d%27Oeste,+SC&z=17&output=embed';
const reviews = 'https://www.google.com/search?q=Tourinho+Motos+Herval+d%27Oeste+avaliações';
const reviewPeople = [
 {name: 'Ricardo Almeida', avatar: '/images/avatar-ricardo.svg'},
 {name: 'Mariana Costa', avatar: '/images/avatar-mariana.svg'},
 {name: 'Felipe Santos', avatar: '/images/avatar-felipe.svg'},
];
const services = [
  ['Troca de óleo', '/images/servico-1.png'],
  ['Pneus e rodas', '/images/servico-2.png'],
  ['Revisão da moto', '/images/servico-3.png'],
  ['Sistema de freios', '/images/servico-4.png'],
  ['Manutenção mecânica', '/images/servico-5.png'],
  ['Parte elétrica', '/images/servico-6.png'],
];
function Brand(){return <a className="brand" href="#inicio" aria-label="Luciano Motos, início"><img className="brand-logo" src="/images/logooficial.png" alt="Luciano Motos" width="640" height="640"/></a>}
function App(){
 const [menu,setMenu]=useState(false);
 useEffect(() => {
  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (preference.matches || !('IntersectionObserver' in window)) return;
  const elements = [...document.querySelectorAll('.hero-content > *, .section-heading, .service, .about-grid > *, .reviews figure, .contact-grid > *')];
  const observer = new IntersectionObserver((entries) => {
   entries.forEach(({isIntersecting, target}) => {
    if (isIntersecting) {
     target.classList.add('is-visible');
     observer.unobserve(target);
    }
   });
  }, {threshold: 0.08});
  elements.forEach((element) => {
   element.classList.add('reveal');
   observer.observe(element);
  });
  const showAll = () => {
   if (preference.matches) {
    observer.disconnect();
    elements.forEach((element) => element.classList.add('is-visible'));
   }
  };
  preference.addEventListener('change', showAll);
  return () => {
   observer.disconnect();
   preference.removeEventListener('change', showAll);
   elements.forEach((element) => element.classList.remove('reveal', 'is-visible'));
  };
 }, []);
 return <><a className="skip" href="#conteudo">Pular para o conteúdo</a>
 <header><div className="container header-inner"><Brand/><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="navigation">{menu?<X/>:<Menu/>}</button><nav id="navigation" className={menu?'open':''} onClick={()=>setMenu(false)}><a href="#servicos">Serviços</a><a href="#oficina">A oficina</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Onde estamos</a><a className="button small" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Fale pelo WhatsApp</a></nav></div></header>
 <main id="conteudo"><section className="hero" id="inicio"><div className="hero-image" role="img" aria-label="Imagem ilustrativa de uma motocicleta no elevador de manutenção"/><div className="container hero-content"><span className="eyebrow"><span/> PAIXÃO POR MOTOS. RESPEITO POR VOCÊ.</span><h1>SUA MOTO<br/>EM BOAS<br/><em>MÃOS.</em></h1><p>Da rotina à próxima estrada, o cuidado que sua moto merece. Conte com a Luciano Motos em Herval d’Oeste.</p><div className="hero-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Fale pelo WhatsApp <ArrowUpRight size={18}/></a><a className="text-link" href="#servicos">Conheça os serviços <ArrowRight size={17}/></a></div><div className="hero-note"><ShieldCheck size={19}/><span>Conversa direta. Cuidado em cada detalhe.</span></div></div><div className="image-caption">MECÂNICA • MANUTENÇÃO • CUIDADO<span>Imagem ilustrativa</span></div></section>
 <div className="ticker" aria-hidden="true"><div className="ticker-track">{[0,1].map((copy)=><div className="ticker-group" key={copy}><span>QUEM CUIDA, VAI MAIS LONGE</span><Wrench/><span>SUA MOTO. NOSSA PAIXÃO.</span><Wrench/><span>LUCIANO MOTOS</span><Wrench/></div>)}</div></div>
 <section className="service-gallery section" id="servicos" aria-labelledby="services-title"><div className="container"><div className="section-heading"><div><h2 id="services-title">O que sua moto<br/>precisa hoje?</h2></div><p>Manutenção faz parte de uma boa viagem.<br/>Fale com a gente sobre o cuidado que você precisa.</p></div><div className="services">{services.map(([title,photo])=><a href={whatsapp} target="_blank" rel="noreferrer" className="service" key={title} aria-label={`${title}: consultar pelo WhatsApp`}><div className="service-photo"><img src={photo} alt={`Imagem ilustrativa: ${title}`} width="1536" height="1024" loading="lazy"/></div><h3>{title}</h3></a>)}</div></div></section>
 <section className="about section" id="oficina"><div className="container about-grid"><div className="about-photo"><img src="/images/oficina.jpg" alt="Detalhe ilustrativo de uma motocicleta em manutenção" loading="lazy"/><span className="photo-label"><Wrench size={21}/> FEITO POR QUEM GOSTA DE MOTOS</span></div><div><h2>Mais que mecânica.<br/><span className="yellow">Uma relação<br/>de confiança.</span></h2><p>A gente sabe que sua moto faz parte da sua vida. É trabalho, liberdade e a companhia de todos os dias.</p><p>Na Luciano Motos, cada conversa começa pelo que você e sua moto precisam. Venha conhecer a oficina no centro de Herval d’Oeste.</p><ul className="values"><li><Check/> Atendimento próximo e direto</li><li><Check/> Clareza sobre os serviços</li><li><Check/> Cuidado para seguir rodando</li></ul><a href={maps} target="_blank" rel="noreferrer" className="text-link">Venha nos conhecer <ArrowUpRight size={18}/></a></div></div></section>
 <section className="section container" id="avaliacoes"><div className="section-heading"><div><h2>Confiança que vem<br/>de quem já conhece.</h2></div><a className="review-link" href={reviews} target="_blank" rel="noreferrer"><b>75 comentários no Google <ArrowUpRight size={17}/></b><span>No perfil Tourinho Motos</span></a></div><div className="reviews">{['Essa mecânica de motos é top, dispõe de ótimo atendimento e preço justo.','Competente, honesto, produtos bons, explica direitinho os serviços realizados.','Ótimo trabalho, excelente atendimento e ótimos preços.'].map((quote,i)=><figure key={quote}><span className="quote-mark">“</span><blockquote>{quote}</blockquote><figcaption><img className="review-avatar" src={reviewPeople[i].avatar} alt="" width="44" height="44" loading="lazy"/><span className="review-person">{reviewPeople[i].name}<small>Identidade ilustrativa</small></span></figcaption></figure>)}</div></section>
 <section className="contact" id="contato"><div className="container contact-grid"><div><h2>BORA CUIDAR<br/>DA SUA MOTO?</h2><p>Chame no WhatsApp para conversar sobre o serviço e combinar sua visita.</p><a className="button dark" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19}/> (49) 9903-8801 <ArrowUpRight size={20}/></a></div><div className="address"><iframe className="contact-map" title="Localização da Luciano Motos no Google Maps" src={mapEmbed} width="600" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div></div></section>
 </main><footer className="site-footer"><div className="container">
 <div className="footer-main">
  <div className="footer-identity"><div className="footer-brand-row"><Brand/><div className="footer-wordmark">LUCIANO <span>MOTOS</span><small>OFICINA MECÂNICA</small></div></div><p>Cuidado em cada detalhe.<br/>Confiança para a próxima estrada.</p><span className="footer-location"><MapPin size={15}/> Herval d’Oeste, Santa Catarina</span></div>
  <div className="footer-links"><h3>Explore</h3><a href="#servicos">Serviços</a><a href="#oficina">A oficina</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Como chegar</a></div>
  <div className="footer-contact"><h3>Vamos conversar?</h3><a className="footer-whatsapp" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={22}/><span><small>Chame no WhatsApp</small>(49) 9903-8801</span><ArrowUpRight size={20}/></a><a className="footer-instagram" href="https://www.instagram.com/tourinho.motos/" target="_blank" rel="noreferrer"><Instagram size={18}/> Acompanhe no Instagram <ArrowUpRight size={15}/></a></div>
 </div>
 <div className="footer-bottom"><span>© {new Date().getFullYear()} Luciano Motos. Todos os direitos reservados.</span><a href="#inicio">Voltar ao topo <ArrowUpRight size={16}/></a></div>
 </div></footer><a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com a Luciano Motos pelo WhatsApp"><MessageCircle size={30} aria-hidden="true"/><span className="whatsapp-label">Fale pelo WhatsApp</span></a></>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
