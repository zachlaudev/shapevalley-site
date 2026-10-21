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
