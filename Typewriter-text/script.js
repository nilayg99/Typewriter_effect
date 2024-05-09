const text = "Hello World !";
const textElement = document.getElementById('typewriter-text');
let i = 0;

function typeWriter() {
    if (i < text.length) {
        textElement.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust the typing speed here (in milliseconds)
    }
}

typeWriter();