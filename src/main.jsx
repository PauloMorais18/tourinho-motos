import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowUpRight, ArrowRight, MessageCircle, MapPin, Wrench, Menu, X, ShieldCheck, CircleGauge, Droplets, Disc3, Settings2, Zap, Check, Instagram } from 'lucide-react';
import './style.css';

const whatsapp = 'https://wa.me/554999038801';
const maps = 'https://www.google.com/maps/search/?api=1&query=Tourinho+Motos+Rua+Santa+Catarina+86+Herval+d%27Oeste';
const mapEmbed = 'https://www.google.com/maps?q=Rua+Santa+Catarina,+86,+Centro,+Herval+d%27Oeste,+SC&z=17&output=embed';
const reviews = 'https://www.google.com/search?q=Tourinho+Motos+Herval+d%27Oeste+avaliações';
const services = [
  [Droplets, 'Troca de óleo', 'O cuidado essencial para manter o motor da sua moto em dia.'],
  [CircleGauge, 'Pneus e rodas', 'Atenção ao que conecta você à estrada, do desgaste à calibragem.'],
  [Settings2, 'Revisão da moto', 'Uma avaliação para entender o que sua moto precisa.'],
  [Disc3, 'Sistema de freios', 'Cuidado com os componentes que fazem a diferença na frenagem.'],
  [Wrench, 'Manutenção mecânica', 'Converse com a oficina sobre ruídos, falhas e desempenho.'],
  [Zap, 'Parte elétrica', 'Atenção à bateria, à iluminação e ao funcionamento elétrico.'],
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
 <div className="topline"><div className="container"><span><MapPin size={13}/> Herval d’Oeste · Santa Catarina</span><a href={whatsapp} target="_blank" rel="noreferrer">Sua próxima parada é aqui. <ArrowUpRight size={13}/></a></div></div>
 <header><div className="container header-inner"><Brand/><button className="menu-toggle" onClick={()=>setMenu(!menu)} aria-label={menu?'Fechar menu':'Abrir menu'} aria-expanded={menu} aria-controls="navigation">{menu?<X/>:<Menu/>}</button><nav id="navigation" className={menu?'open':''} onClick={()=>setMenu(false)}><a href="#servicos">Serviços</a><a href="#oficina">A oficina</a><a href="#avaliacoes">Avaliações</a><a href="#contato">Onde estamos</a><a className="button small" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16}/> Fale pelo WhatsApp</a></nav></div></header>
 <main id="conteudo"><section className="hero" id="inicio"><div className="hero-image" role="img" aria-label="Imagem ilustrativa de uma motocicleta no elevador de manutenção"/><div className="container hero-content"><span className="eyebrow"><span/> PAIXÃO POR MOTOS. RESPEITO POR VOCÊ.</span><h1>SUA MOTO<br/>EM BOAS<br/><em>MÃOS.</em></h1><p>Da rotina à próxima estrada, o cuidado que sua moto merece. Conte com a Luciano Motos em Herval d’Oeste.</p><div className="hero-actions"><a className="button" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Fale pelo WhatsApp <ArrowUpRight size={18}/></a><a className="text-link" href="#servicos">Conheça os serviços <ArrowRight size={17}/></a></div><div className="hero-note"><ShieldCheck size={19}/><span>Conversa direta. Cuidado em cada detalhe.</span></div></div><div className="image-caption">MECÂNICA • MANUTENÇÃO • CUIDADO<span>Imagem ilustrativa</span></div></section>
 <div className="ticker" aria-hidden="true"><span>QUEM CUIDA, VAI MAIS LONGE</span><Wrench/><span>SUA MOTO. NOSSA PAIXÃO.</span><Wrench/><span>LUCIANO MOTOS</span><Wrench/></div>
 <section className="section container" id="servicos"><div className="section-heading"><div><h2>O que sua moto<br/>precisa hoje?</h2></div><p>Manutenção faz parte de uma boa viagem.<br/>Fale com a gente sobre o cuidado que você precisa.</p></div><div className="services">{services.map(([Icon,title,desc],i)=><a href={whatsapp} target="_blank" rel="noreferrer" className="service" key={title}><div className="service-top"><Icon size={29} strokeWidth={1.5}/><span>0{i+1}</span></div><h3>{title}</h3><p>{desc}</p><span className="service-bottom">Consultar serviço <ArrowUpRight size={19}/></span></a>)}</div></section>
 <section className="about section" id="oficina"><div className="container about-grid"><div className="about-photo"><img src="/images/oficina.jpg" alt="Detalhe ilustrativo de uma motocicleta em manutenção" loading="lazy"/><span className="photo-label"><Wrench size={21}/> FEITO POR QUEM GOSTA DE MOTOS</span></div><div><h2>Mais que mecânica.<br/><span className="yellow">Uma relação<br/>de confiança.</span></h2><p>A gente sabe que sua moto faz parte da sua vida. É trabalho, liberdade e a companhia de todos os dias.</p><p>Na Luciano Motos, cada conversa começa pelo que você e sua moto precisam. Venha conhecer a oficina no centro de Herval d’Oeste.</p><ul className="values"><li><Check/> Atendimento próximo e direto</li><li><Check/> Clareza sobre os serviços</li><li><Check/> Cuidado para seguir rodando</li></ul><a href={maps} target="_blank" rel="noreferrer" className="text-link">Venha nos conhecer <ArrowUpRight size={18}/></a></div></div></section>
 <section className="section container" id="avaliacoes"><div className="section-heading"><div><h2>Confiança que vem<br/>de quem já conhece.</h2></div><a className="review-link" href={reviews} target="_blank" rel="noreferrer"><b>75 comentários no Google <ArrowUpRight size={17}/></b><span>No perfil Tourinho Motos</span></a></div><div className="reviews">{['Essa mecânica de motos é top, dispõe de ótimo atendimento e preço justo.','Competente, honesto, produtos bons, explica direitinho os serviços realizados.','Ótimo trabalho, excelente atendimento e ótimos preços.'].map((quote)=><figure key={quote}><span className="quote-mark">“</span><blockquote>{quote}</blockquote><figcaption><span className="google-g">G</span><span>Comentário no Google<small>Perfil Tourinho Motos</small></span><ArrowUpRight size={17}/></figcaption></figure>)}</div></section>
 <section className="contact" id="contato"><div className="container contact-grid"><div><h2>BORA CUIDAR<br/>DA SUA MOTO?</h2><p>Chame no WhatsApp para conversar sobre o serviço e combinar sua visita.</p><a className="button dark" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={19}/> (49) 9903-8801 <ArrowUpRight size={20}/></a></div><div className="address"><iframe className="contact-map" title="Localização da Luciano Motos no Google Maps" src={mapEmbed} width="600" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen/><MapPin size={30}/><h3>É fácil chegar.</h3><p>Rua Santa Catarina, 86 — Centro<br/>Herval d’Oeste — SC<br/>CEP 89610-000</p><a className="text-link" href={maps} target="_blank" rel="noreferrer">Traçar rota no Google Maps <ArrowUpRight size={19}/></a><span className="hours">Consulte os horários de atendimento pelo WhatsApp.</span></div></div></section>
 </main><footer className="container"><Brand/><span>© {new Date().getFullYear()} Luciano Motos.</span><a href="https://www.instagram.com/tourinho.motos/" target="_blank" rel="noreferrer"><Instagram size={18}/> Instagram <ArrowUpRight size={15}/></a><a href="#inicio" aria-label="Voltar ao início">Voltar ao topo ↑</a></footer><a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com a Luciano Motos pelo WhatsApp"><MessageCircle size={30} aria-hidden="true"/><span className="whatsapp-label">Fale pelo WhatsApp</span></a></>
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
