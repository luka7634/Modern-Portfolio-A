document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const textElement = document.getElementById('animated');
const animationSequence = [
    "      ",
    "R     ",
    "Ro    ",
    "Roy   ",
    "Royb  ",
    "Roybe ",
    "Roybel",
    "Roybe ",
    "Royb  ",
    "Roy   ",
    "Ro    ",
    "R     ",
];

let current = 0;

function animateText() {
    textElement.textContent = animationSequence[current];
    current = (current + 1) % animationSequence.length;

    if (current === 0) setTimeout(animateText, 500);
    else setTimeout(animateText, 500);
}

animateText();

function sum(end, duration) {
    let start = 0;
    let i = end / (duration / 10);
    let amount = document.getElementById("amount");

    let intervalo = setInterval(() => {
        start += i;
        if (start >= end) {
            start = end;
            clearInterval(intervalo);
        }
        amount.textContent = Math.floor(start);
    }, 10);
}

sum(1, 500);



const email = 'luka41935@gmail.com';
const subject = 'Purchase';
const body = "Hello, I’m interested in...\n\nCould you kindly assist me with the process?";


document.getElementById('basic').addEventListener('click', function() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('full').addEventListener('click', function() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('enterprise').addEventListener('click', function() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('contactBtn').addEventListener('click', function() {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
});