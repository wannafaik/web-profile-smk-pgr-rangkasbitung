// JavaScript Interaktif untuk Website Profil Sekolah

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dynamic Navbar Height & Scroll Effect
    const navbar = document.getElementById('navbar');
    const updateNavbarHeight = () => {
        if (navbar) {
            const h = navbar.offsetHeight;
            document.documentElement.style.setProperty('--navbar-height', `${h}px`);
        }
    };
    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        updateNavbarHeight();
    });

    // 2. Mobile Menu Toggle & Smooth Navigation
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-list a, .dropdown-menu a');
    const dropdowns = document.querySelectorAll('.dropdown');

    const closeNavDrawer = () => {
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            document.body.classList.remove('no-scroll');
            if (mobileToggle) {
                const icon = mobileToggle.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        }
    };

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            document.body.classList.toggle('no-scroll', isOpen);

            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (isOpen) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });

        // Mobile dropdown accordion tap support (screen <= 992px)
        dropdowns.forEach(dropdown => {
            const toggle = dropdown.querySelector('.dropdown-toggle');
            if (toggle) {
                toggle.addEventListener('click', (e) => {
                    if (window.innerWidth <= 992) {
                        e.preventDefault();
                        e.stopPropagation();
                        dropdowns.forEach(d => {
                            if (d !== dropdown) d.classList.remove('open');
                        });
                        dropdown.classList.toggle('open');
                    }
                });
            }
        });

        // Close mobile menu on link click (kecuali klik dropdown toggle di mode mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (link.classList.contains('dropdown-toggle') && window.innerWidth <= 992) {
                    return;
                }
                closeNavDrawer();
            });
        });

        // Close mobile menu jika klik di luar navMenu
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
                closeNavDrawer();
            }
        });

        // Reset state jika window di-resize ke desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth > 992) {
                closeNavDrawer();
                dropdowns.forEach(d => d.classList.remove('open'));
            }
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
    const hubungiButtons = document.querySelectorAll('.btn-hubungi, .btn-menu-hubungi, #btnHubungi');
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.getElementById('closeContactModal');

    if (contactModal && closeContactModal) {
        hubungiButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeNavDrawer(); // Tutup drawer navigasi jika sedang terbuka di mobile
                contactModal.classList.add('active');
            });
        });

        closeContactModal.addEventListener('click', () => {
            contactModal.classList.remove('active');
        });

        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.classList.remove('active');
            }
        });

        // Tutup modal contact jika tombol ESC ditekan
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                contactModal.classList.remove('active');
            }
        });
    }
});
