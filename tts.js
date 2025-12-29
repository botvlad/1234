import tts from '@google-cloud/text-to-speech';
const c=new tts.TextToSpeechClient({credentials:JSON.parse(process.env.GOOGLE_CREDENTIALS)});
export default async (req,res)=>{
 const {text,voice}=req.body;
 const [r]=await c.synthesizeSpeech({
  input:{text},
  voice:{languageCode:'es-ES',name:voice},
  audioConfig:{audioEncoding:'MP3'}
 });
 res.setHeader('Content-Type','audio/mpeg');
 res.send(Buffer.from(r.audioContent,'base64'));
};