const btn=document.getElementById('btn');
const loader=document.getElementById('loader');

btn.addEventListener('click',()=>{
 const text=document.getElementById('text').value;
 if(!text) return;
 loader.style.display='inline';
 const u=new SpeechSynthesisUtterance(text);
 u.lang='es-ES';
 u.onend=()=>loader.style.display='none';
 speechSynthesis.cancel();
 speechSynthesis.speak(u);
});
