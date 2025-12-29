const textEl=document.getElementById('text');
const voiceEl=document.getElementById('voice');
const audioEl=document.getElementById('audio');
const dl=document.getElementById('download');

document.getElementById('btnPreview').onclick=()=>{
 audioEl.src='/voice1.wav';
 audioEl.play();
};

document.getElementById('btnGen').onclick=async()=>{
 if(!textEl.value) return;
 const r=await fetch('/api/tts',{
  method:'POST',
  headers:{'Content-Type':'application/json'},
  body:JSON.stringify({text:textEl.value,voice:voiceEl.value})
 });
 const b=await r.blob();
 const u=URL.createObjectURL(b);
 audioEl.src=u;
 dl.href=u;
 dl.style.display='inline';
};