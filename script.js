// let speech = new SpeechSynthesisUtterance;

// let voices = [];

// let voiceSelector = document.querySelector("select");

// window.speechSynthesis.onvoiceschanged = () => {
//   voices = window.speechSynthesis.getVoices();
//   // speech.vocie = voice[0];

//   voices.forEach((voice,i) => (voiceSelector.option[i] = new Option(voice.name, i)));

// }

// voiceSelector.addEventListener("change", () => {
//   speech.voice = voices[voiceSelector.value];
// })


// document.querySelector("button").addEventListener("click", () => {
//   speech.text = document.querySelector("textarea").value;
//   speech.lang = "es-ES";
//   window.speechSynthesis.speak(speech);
// })

function speak(){
  const whatToSpeak = document.querySelector("textarea").value;
  const utterance = new SpeechSynthesisUtterance(whatToSpeak);

  utterance.lang = "es-EC"
  

  speechSynthesis.speak(utterance);
  
}