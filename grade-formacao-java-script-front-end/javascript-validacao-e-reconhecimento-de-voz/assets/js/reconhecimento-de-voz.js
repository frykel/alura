 
 window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

 const recognition = new SpeechRecognition();
 recognition.lang = 'pt-Br';
 recognition.start();

 recognition.addEventListener('result',onSpeak)

 function onSpeak(evento){
    const texto = document.querySelector('.box');
    const reconhecimento = evento.results[0][0].transcript
    texto.innerHTML=reconhecimento

 }