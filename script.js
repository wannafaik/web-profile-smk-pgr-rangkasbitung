// JavaScript Interaktif untuk Website Profil Sekolah

document.addEventListener('DOMContentLoaded', () => {
    // 1. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle & Smooth Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-list a, .dropdown-menu a');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close mobile menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = mobileToggle.querySelector('i');
                    if (icon) {
                        icon.classList.remove('fa-xmark');
                        icon.classList.add('fa-bars');
                    }
                }
            });
        });
    }

    // 3. Smooth Scroll Indicator Trigger
    const scrollTrigger = document.getElementById('scrollTrigger');
    const profileSection = document.getElementById('profile');

    if (scrollTrigger && profileSection) {
        scrollTrigger.addEventListener('click', () => {
            profileSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Video Player Modal
    const videoCard = document.getElementById('videoCard');
    const videoModal = document.getElementById('videoModal');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const videoIframe = document.getElementById('videoIframe');

    const sampleVideoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

    if (videoCard && videoModal && closeVideoModal && videoIframe) {
        videoCard.addEventListener('click', () => {
            videoIframe.src = sampleVideoUrl;
            videoModal.classList.add('active');
        });

        closeVideoModal.addEventListener('click', () => {
            videoModal.classList.remove('active');
            videoIframe.src = ""; // Reset video
        });

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                videoIframe.src = "";
            }
        });
    }

    // 5. Contact Modal ("Hubungi Kami")
    const btnHubungi = document.getElementById('btnHubungi');
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.getElementById('closeContactModal');

    if (btnHubungi && contactModal && closeContactModal) {
        btnHubungi.addEventListener('click', () => {
            contactModal.classList.add('active');
        });

        closeContactModal.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });
    }
});
