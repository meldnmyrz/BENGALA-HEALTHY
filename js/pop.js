(function(){
  var b=document.getElementById('burger'),m=document.getElementById('mnav');
  if(b&&m){
    b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');});
    m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('open');});});
  }
  var els=document.querySelectorAll('[data-rv]');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.12});
    els.forEach(function(el){io.observe(el);});
  }else{els.forEach(function(el){el.classList.add('in');});}
  var tr=document.querySelector('.track');
  if(tr){document.querySelectorAll('[data-dir]').forEach(function(btn){btn.addEventListener('click',function(){tr.scrollBy({left:parseInt(btn.dataset.dir,10)*300,behavior:'smooth'});});});}
})();
