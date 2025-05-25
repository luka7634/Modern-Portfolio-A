document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById('basic').addEventListener('click', function() {
    const email = 'luka41935@gmail.com';
    const subject = 'Purchase';
    const body = "Hello, I’m interested in...\n\nCould you kindly assist me with the process?";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('full').addEventListener('click', function() {
    const email = 'luka41935@gmail.com';
    const subject = 'Purchase';
    const body = "Hello, I’m interested in...\n\nCould you kindly assist me with the process?";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.getElementById('enterprise').addEventListener('click', function() {
    const email = 'luka41935@gmail.com';
    const subject = 'Purchase';
    const body = "Hello, I’m interested in...\n\nCould you kindly assist me with the process?";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
let i = 0, b = a.length - 1;
