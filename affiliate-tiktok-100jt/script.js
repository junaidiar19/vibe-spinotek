// Countdown Timer with urgent flash
function updateCountdown() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const diff = tomorrow - now;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

    const countdownEl = document.getElementById('countdown');
    if (hours === 0 && minutes === 0 && seconds < 30) {
        countdownEl.classList.add('urgent');
    } else {
        countdownEl.classList.remove('urgent');
    }

    // Update progress bar
    const totalMs = 24 * 60 * 60 * 1000;
    const progress = ((totalMs - diff) / totalMs) * 100;
    const progressBar = document.getElementById('promo-progress');
    if (progressBar) {
        progressBar.style.width = progress + '%';
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// FAQ Toggle
// ... (keep existing)

// Typewriter effect
function typeWriter(element, text, speed = 40) {
    element.innerHTML = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Testimonial carousel
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
function nextTestimonial() {
    testimonialCards.forEach((card, index) => {
        card.classList.toggle('active-test', index === currentTestimonial);
    });
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
}

// Confetti on CTA
function launchConfetti() {
    // Simple canvas confetti
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '9999';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    // ... basic confetti particles (simplified)
    let particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: canvas.height + 10,
            vx: (Math.random() - 0.5) * 10,
            vy: Math.random() * -15 - 5,
            color: ['#ff4d4d', '#ffcc00', '#00ff9d'][Math.floor(Math.random()*3)]
        });
    }
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.2;
            p.rotation += 0.01;
            ctx.fillStyle = p.color;
            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.fillRect(-5, -5, 10, 10);
            ctx.restore();
        });
        particles = particles.filter(p => p.y < canvas.height);
        if (particles.length > 0) requestAnimationFrame(animate);
        else canvas.remove();
    }
    animate();
}

// Parallax
function parallax() {
    const scrolled = window.pageYOffset;
    const heroImg = document.querySelector('.hero-image img');
    if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Existing FAQ, observer, smooth scroll...
    const subtitle = document.querySelector('.subtitle');
    if (subtitle) typeWriter(subtitle, subtitle.textContent);

    setInterval(nextTestimonial, 4000);
    nextTestimonial();

    const orderBtns = document.querySelectorAll('.btn-order, .btn-wa');
    orderBtns.forEach(btn => {
        btn.addEventListener('click', launchConfetti);
    });

    window.addEventListener('scroll', parallax);
});

// Sticky WhatsApp button (add to HTML if needed)
