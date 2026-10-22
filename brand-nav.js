sessionStorage.setItem('dagyeong-study','b');
const menuButton=document.querySelector('.menu-toggle'),mobileMenu=document.querySelector('#mobile-nav');
function closeMenu(restore=false){mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.querySelector('span').textContent='+';if(restore)menuButton.focus()}
menuButton.addEventListener('click',()=>{const open=mobileMenu.hidden;mobileMenu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('span').textContent=open?'−':'+'});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileMenu.hidden)closeMenu(true)});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu()});
mobileMenu.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
matchMedia('(min-width:761px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
if(!matchMedia('(prefers-reduced-motion:reduce)').matches)document.body.classList.add('motion');
window.addEventListener('message',e=>{if(e.origin===location.origin&&e.data?.type==='dagyeong-grid')document.body.classList.toggle('show-grid',!!e.data.value)});
if(new URLSearchParams(location.search).get('grid')==='1')document.body.classList.add('show-grid');
