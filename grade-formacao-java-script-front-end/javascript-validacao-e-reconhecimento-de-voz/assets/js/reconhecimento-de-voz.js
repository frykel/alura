 
 window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.lang = 'pt-Br';
 recognition.start();
 const texto = document.querySelector('.box');

 recognition.addEventListener('result',onSpeak)

 function onSpeak(evento){
    
    const chute = evento.results[0][0].transcript
    console.log(1)
    exibeChuteNaTela(chute)  
    verificaSeOChuteEValido(chute)

 }
 function exibeChuteNaTela(parametro){
   
   texto.innerHTML=`${parametro}`
 }
recognition.addEventListener('end',()=>recognition.start())