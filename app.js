const btn=document.getElementById('btn');
const audio=document.getElementById('audio');
const loader=document.getElementById('loader');

btn.addEventListener('click',()=>{
 loader.style.display='inline';
 setTimeout(()=>{
  audio.src='voice1.wav';
  audio.play();
  loader.style.display='none';
 },600);
});