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
    const statsSection = document.getElementById('statsSection') || document.getElementById('profile');

    if (scrollTrigger && statsSection) {
        scrollTrigger.addEventListener('click', () => {
            statsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // 4. Video Player Modal & YouTube Embed Handler
    const videoCard = document.getElementById('videoCard');
    const playBtn = document.getElementById('playBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideoModal = document.getElementById('closeVideoModal');
    const videoIframe = document.getElementById('videoIframe');

    // Helper untuk mengubah link YouTube (watch/youtu.be) menjadi embed link agar bisa diputar di iframe
    function formatYouTubeEmbedUrl(url) {
        if (!url) return '';
        if (url.includes('/embed/')) {
            return url.includes('autoplay=1') ? url : (url + (url.includes('?') ? '&autoplay=1' : '?autoplay=1'));
        }
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        if (match && match[2] && match[2].length === 11) {
            return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
        }
        return url;
    }

    const defaultProfileVideoUrl = "https://www.youtube.com/watch?v=dnzXTbfvBUE";

    const openVideoModal = () => {
        const rawUrl = (videoCard && videoCard.dataset.videoUrl) || defaultProfileVideoUrl;
        videoIframe.src = formatYouTubeEmbedUrl(rawUrl);
        videoModal.classList.add('active');
    };

    const closeVideo = () => {
        videoModal.classList.remove('active');
        videoIframe.src = ""; // Menghentikan pemutaran video
    };

    if (videoModal && closeVideoModal && videoIframe) {
        if (videoCard) {
            videoCard.addEventListener('click', openVideoModal);
        }

        if (playBtn) {
            playBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                openVideoModal();
            });
        }

        closeVideoModal.addEventListener('click', closeVideo);

        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeVideo();
            }
        });

        // Tutup modal jika tombol ESC ditekan
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                closeVideo();
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
