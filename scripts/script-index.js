document.getElementById('silverPlan').addEventListener('click', function() {
    const email = 'luka41935@gmail.com';
    const subject = 'None';
    const body = "Hello, I’m interested in purchasing the Silver Plan from your website. Could you kindly assist me with the process?";

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
})