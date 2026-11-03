const nav=document.querySelector('.nav'),b=document.querySelector('.burger');
const onS=()=>nav.classList.toggle('solid',scrollY>40);addEventListener('scroll',onS);onS();
b.onclick=()=>{const o=document.body.classList.toggle('menu');b.setAttribute('aria-expanded',o)};
document.querySelectorAll('.nav nav a').forEach(a=>a.onclick=()=>document.body.classList.remove('menu'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const sl=[...document.querySelectorAll('.slide')],dots=document.querySelector('.dots');
if(sl.length){let i=0,t;const go=n=>{sl[i].classList.remove('on');dots.children[i].classList.remove('on');i=(n+sl.length)%sl.length;sl[i].classList.add('on');dots.children[i].classList.add('on')};
sl.forEach((_,n)=>{const d=document.createElement('button');d.setAttribute('aria-label','Slide '+(n+1));d.onclick=()=>{go(n);clearInterval(t);t=setInterval(()=>go(i+1),6000)};dots.append(d)});dots.children[0].classList.add('on');t=setInterval(()=>go(i+1),6000);
let x0;const h=document.querySelector('.hero');h.addEventListener('touchstart',e=>x0=e.touches[0].clientX);h.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-x0;if(Math.abs(dx)>50)go(i+(dx<0?1:-1))})}
const lb=document.querySelector('.lightbox');if(lb){document.querySelectorAll('.g').forEach(g=>g.onclick=()=>{lb.querySelector('img').src=g.dataset.src;lb.hidden=false});lb.onclick=e=>{if(e.target!==lb.querySelector('img'))lb.hidden=true};addEventListener('keydown',e=>{if(e.key==='Escape')lb.hidden=true})}
document.querySelectorAll('.form').forEach(f=>{let to='ig';f.querySelectorAll('[data-to]').forEach(x=>x.onclick=()=>to=x.dataset.to);
f.onsubmit=async e=>{e.preventDefault();const d=new FormData(f),k=f.dataset.kind==='booking'?'Booking request':'Message';
const txt=k+' for MC Confess (via mcconfess.com)\n'+[...d].filter(([,v])=>v).map(([a,v])=>a.toUpperCase()+': '+v).join('\n');
try{await navigator.clipboard.writeText(txt)}catch(_){}
open(to==='ig'?'https://ig.me/m/mcconfessofficial':'https://m.me/McConfess','_blank','noopener');f.querySelector('.ok').hidden=false}});
document.getElementById('yr').textContent=new Date().getFullYear();
