// Define current language
let currentLang = 'en'; // can be 'en' or 'hi'

document.addEventListener('DOMContentLoaded', () => {

    // 1. Language Toggle Logic
    const langToggleBtn = document.getElementById('lang-toggle');
    const spanEn = langToggleBtn.querySelector('.en');
    const spanHi = langToggleBtn.querySelector('.hi');

    // Make elements translatable by selecting all with data-en or data-hi
    const translatableElements = document.querySelectorAll('[data-en], [data-hi]');

    function updateLanguage() {
        translatableElements.forEach(el => {
            // Read from attributes based on current language
            const text = el.getAttribute(`data-${currentLang}`);
            if (text) {
                // Determine if it requires innerText or a more complex update 
                // Mostly setting textContent is fine here.
                el.textContent = text;
            }
        });

        // Update Button Active state
        if (currentLang === 'en') {
            spanEn.classList.add('active');
            spanHi.classList.remove('active');
        } else {
            spanHi.classList.add('active');
            spanEn.classList.remove('active');
        }
    }

    // Toggle button click logic
    langToggleBtn.addEventListener('click', () => {
        currentLang = currentLang === 'en' ? 'hi' : 'en';
        updateLanguage();
    });

    // Intialize on load
    updateLanguage();

    // 2. Mobile Nav Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Close mobile menu when a link is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 3. Navbar Scrolled State (Optional nice effect)
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
            navbar.style.padding = '15px 0';
        } else {
            navbar.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)';
            navbar.style.padding = '20px 0';
        }
    });
    // 4. Spiritual Audio Player Logic
    const audio = document.getElementById('temple-audio');
    const playPauseBtn = document.getElementById('play-pause-btn');
    let isPlaying = false;

    if (audio && playPauseBtn) {
        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                audio.pause();
                playPauseBtn.innerHTML = '▶️'; // Switch to Play icon
            } else {
                // Ensure audio volume is pleasant, not blasting
                audio.volume = 0.5;
                audio.play().catch(e => console.log("Audio play failed:", e));
                playPauseBtn.innerHTML = '⏸️'; // Switch to Pause icon
            }
            isPlaying = !isPlaying;
        });
    }
});
