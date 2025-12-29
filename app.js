const synth=speechSynthesis;
const voiceSel=document.getElementById('voice');

function load(){
 const v=synth.getVoices().filter(x=>x.lang.startsWith('es'));
 voiceSel.innerHTML='';
 v.forEach((x,i)=>{
  const o=document.createElement('option');
  o.value=i;o.textContent=x.name;
  voiceSel.appendChild(o);
 });
}
synth.onvoiceschanged=load;load();

document.getElementById('speak').onclick=()=>{
 const t=document.getElementById('text').value;
 if(!t)return;
 const u=new SpeechSynthesisUtterance(t);
 u.voice=synth.getVoices().filter(x=>x.lang.startsWith('es'))[voiceSel.value];
 synth.speak(u);
};