const menuButton=document.querySelector('.menu-toggle');
const mobileMenu=document.querySelector('#mobile-nav');
function closeMenu(restoreFocus=false){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.querySelector('span').textContent='+';if(restoreFocus)menuButton.focus();}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';mobileMenu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('span').textContent=open?'−':'+';});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden)closeMenu(true);});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
mobileMenu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu();});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches&&'IntersectionObserver'in window){document.body.classList.add('js-motion');const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}});},{threshold:.06,rootMargin:'0px 0px -20px 0px'});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}

const study=sessionStorage.getItem('dagyeong-study');if(['a','b','c'].includes(study)){document.querySelectorAll('a[href="../b/index.html"]').forEach(a=>a.href='../'+study+'/index.html');}
