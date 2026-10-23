(function(){var els=document.querySelectorAll('.reveal');if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{rootMargin:'0px 0px -8% 0px'});els.forEach(function(e){io.observe(e)});})();
/* Blog: auto TOC, reading time, calm clips */
(function(){
function slug(t){return t.toLowerCase().replace(/[’']/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')}
var toc=document.querySelector('[data-toc]'),art=document.querySelector('.prose');
if(toc&&art){var hs=art.querySelectorAll('h2:not(.toc-title)'),ol=document.createElement('ol'),n=0;
hs.forEach(function(h){if(h.closest('.toc,.related,.takeaways'))return;if(!h.id)h.id=slug(h.textContent);var li=document.createElement('li'),a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;li.appendChild(a);ol.appendChild(li);n++;});
if(n>2){toc.appendChild(ol);}else{toc.remove();}}
var rt=document.querySelector('[data-reading-time]');if(rt&&art&&!rt.textContent.trim()){var w=(art.innerText||'').split(/\s+/).length;rt.textContent=Math.max(1,Math.round(w/220))+' min read';}
var reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('video.clip').forEach(function(v){
if(reduce){v.removeAttribute('autoplay');v.pause();v.controls=true;return;}
if(!('IntersectionObserver' in window)){v.play().catch(function(){});return;}
new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){v.play().catch(function(){v.controls=true});}else{v.pause();}})},{threshold:.25}).observe(v);});
})();
/* Launch list signup. Paste the Apps Script web app URL below. */
var LAUNCH_ENDPOINT="https://script.google.com/macros/s/AKfycbxZBNmaDSXjvQp1KRVSKb59kY1B5Hh-_kd0g6VA-d2jxQfOnNFcJnvlylGToiwdabYHCQ/exec";
(function(){var f=document.getElementById('launch-form');if(!f)return;var m=f.querySelector('.signup-msg'),b=f.querySelector('button');
function say(t,ok){m.textContent=t;m.className='signup-msg '+(ok?'ok':'err');}
f.addEventListener('submit',function(e){e.preventDefault();
var em=f.email.value.trim();if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)){say('Please enter a valid email address.');return;}
if(!f.parent.checked){say('Please confirm you\u2019re a parent or guardian (18+).');return;}
if(f.website.value){say('Thanks! You\u2019re on the list.',1);f.reset();return;}
if(LAUNCH_ENDPOINT.indexOf('http')!==0){say('Sign-ups open very soon. Please check back, or email zachlaudev@gmail.com.');return;}
b.disabled=true;say('Joining\u2026',1);
fetch(LAUNCH_ENDPOINT,{method:'POST',mode:'no-cors',body:new URLSearchParams({email:em,parent:'yes',website:'',source:location.pathname})})
.then(function(){location.href='/launch/thanks/';})
.catch(function(){say('Sorry, something went wrong. Please try again, or email zachlaudev@gmail.com.');})
.finally(function(){b.disabled=false;});});})();
