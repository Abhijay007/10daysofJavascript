const btn = document.querySelector('.Talk');
const content = document.querySelector('.content');


const greetings = [
    'I am good,what about you',
    'leave me alone',
    'Doing good'];


const SpeechRecognition = window.SpeechRecognation || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = function () {
    console.log('voice is activated, you can Speak now');
}


recognition.onresult = function (event) {

    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = 'i am still learning , dont know what you said';

    if (message.includes('how are you')) {
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech)
}