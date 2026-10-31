// JavaScript Interaktif untuk Website Profil Sekolah

document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Navbar Height & Scroll Effect
  const navbar = document.getElementById("navbar");
  const updateNavbarHeight = () => {
    if (navbar) {
      const h = navbar.offsetHeight;
      document.documentElement.style.setProperty("--navbar-height", `${h}px`);
    }
  };
  updateNavbarHeight();
  window.addEventListener("resize", updateNavbarHeight);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    updateNavbarHeight();
  });

  // 2. Mobile Menu Toggle & Smooth Navigation
  const mobileToggle = document.getElementById("mobileToggle");
  const navMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-list a, .dropdown-menu a");
  const dropdowns = document.querySelectorAll(".dropdown");

  const closeNavDrawer = () => {
    if (navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active");
      document.body.classList.remove("no-scroll");
      if (mobileToggle) {
        const icon = mobileToggle.querySelector("i");
        if (icon) {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    }
  };

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navMenu.classList.toggle("active");
      const isOpen = navMenu.classList.contains("active");
      document.body.classList.toggle("no-scroll", isOpen);

      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (isOpen) {
          icon.classList.remove("fa-bars");
          icon.classList.add("fa-xmark");
        } else {
          icon.classList.remove("fa-xmark");
          icon.classList.add("fa-bars");
        }
      }
    });

    // Mobile dropdown accordion tap support (screen <= 992px)
    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      if (toggle) {
        toggle.addEventListener("click", (e) => {
          if (window.innerWidth <= 992) {
            e.preventDefault();
            e.stopPropagation();
            dropdowns.forEach((d) => {
              if (d !== dropdown) d.classList.remove("open");
            });
            dropdown.classList.toggle("open");
          }
        });
      }
    });

    // Close mobile menu on link click (kecuali klik dropdown toggle di mode mobile)
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (
          link.classList.contains("dropdown-toggle") &&
          window.innerWidth <= 992
        ) {
          return;
        }
        closeNavDrawer();
      });
    });

    // Close mobile menu jika klik di luar navMenu
    document.addEventListener("click", (e) => {
      if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeNavDrawer();
      }
    });

    // Reset state jika window di-resize ke desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        closeNavDrawer();
        dropdowns.forEach((d) => d.classList.remove("open"));
      }
    });
  }

  // 3. ANIMASI STATS / AKREDITASI & PRESTASI (BARU DITAMBAHKAN TANPA MERUSAK LAINNYA)
  const statsSection = document.getElementById("statsSection");
  if (statsSection) {
    function animateNumber(element, target, duration = 2000, suffix = "") {
      let startTime = null;
      let startValue = 1;

      function update(currentTime) {
        if (!startTime) startTime = currentTime;
        let progress = Math.min((currentTime - startTime) / duration, 1);
        let easeProgress = 1 - Math.pow(1 - progress, 3);
        let current = Math.floor(
          easeProgress * (target - startValue) + startValue,
        );

        element.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          element.textContent = target + suffix;
        }
      }
      requestAnimationFrame(update);
    }

    let hasAnimated = false;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            const statCards = statsSection.querySelectorAll(".stat-card");

            statCards.forEach((card, index) => {
              const numberEl = card.querySelector(".stat-number");
              if (!numberEl) return;

              if (index === 1) {
                animateNumber(numberEl, 100, 2000, "%");
              } else if (index === 2) {
                animateNumber(numberEl, 150, 2000, "+");
              } else if (index === 3) {
                animateNumber(numberEl, 85, 2000, "%");
              }
            });
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(statsSection);
  }

  // Fungsi animasi angka berurutan dari 1 sampai nilai akhir (digunakan di banner prestasi)
  function animateRandomNumbers(
    element,
    finalValue,
    duration = 2200,
    suffix = "",
  ) {
    let startTime = null;
    const startValue = 1;

    function update(currentTime) {
      if (!startTime) startTime = currentTime;
      let progress = Math.min((currentTime - startTime) / duration, 1);
      let easeProgress = 1 - Math.pow(1 - progress, 3);
      let current = Math.floor(
        easeProgress * (finalValue - startValue) + startValue,
      );

      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.textContent = finalValue + suffix;
      }
    }
    requestAnimationFrame(update);
  }

  // 3.1 ANIMASI STATS BANNER PRESTASI (UNTUK PRESTASI.HTML)
  const prestasiStatsBanner = document.querySelector(".prestasi-stats-banner");
  if (prestasiStatsBanner) {
    let hasAnimatedPrestasi = false;

    const triggerPrestasiAnimation = () => {
      if (hasAnimatedPrestasi) return;
      hasAnimatedPrestasi = true;
      const statItems = prestasiStatsBanner.querySelectorAll(
        ".prestasi-stat-item",
      );

      statItems.forEach((item, index) => {
        const numEl = item.querySelector(".prestasi-stat-num");
        if (!numEl) return;

        if (index === 0) {
          animateRandomNumbers(numEl, 50, 2200, "+"); // Target 50+
        } else if (index === 1) {
          animateRandomNumbers(numEl, 12, 2000, ""); // Target 12
        } else if (index === 2) {
          animateRandomNumbers(numEl, 25, 2200, "+"); // Target 25+
        } else if (index === 3) {
          animateRandomNumbers(numEl, 100, 2000, "%"); // Target 100%
        }
      });
    };

    // Cek langsung saat load/refresh jika posisinya langsung terlihat
    const rectPrestasi = prestasiStatsBanner.getBoundingClientRect();
    if (rectPrestasi.top < window.innerHeight && rectPrestasi.bottom >= 0) {
      triggerPrestasiAnimation();
    }

    const prestasiObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            triggerPrestasiAnimation();
          }
        });
      },
      { threshold: 0.2 },
    );

    prestasiObserver.observe(prestasiStatsBanner);
  }
  //   CLOSE ANIMASI STATS / AKREDITASI & PRESTASI

  // 4. Smooth Scroll Indicator Trigger
  const scrollTrigger = document.getElementById("scrollTrigger");
  const targetSection =
    document.getElementById("statsSection") ||
    document.getElementById("profile");

  if (scrollTrigger && targetSection) {
    scrollTrigger.addEventListener("click", () => {
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  }

  // 5. Video Player Modal & YouTube Embed Handler
  const videoCard = document.getElementById("videoCard");
  const playBtn = document.getElementById("playBtn");
  const videoModal = document.getElementById("videoModal");
  const closeVideoModal = document.getElementById("closeVideoModal");
  const videoIframe = document.getElementById("videoIframe");

  // Helper untuk mengubah link YouTube (watch/youtu.be) menjadi embed link agar bisa diputar di iframe
  function formatYouTubeEmbedUrl(url) {
    if (!url) return "";
    if (url.includes("/embed/")) {
      return url.includes("autoplay=1")
        ? url
        : url + (url.includes("?") ? "&autoplay=1" : "?autoplay=1");
    }
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    if (match && match[2] && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
    }
    return url;
  }

  const defaultProfileVideoUrl = "https://www.youtube.com/watch?v=dnzXTbfvBUE";

  const openVideoModal = () => {
    const rawUrl =
      (videoCard && videoCard.dataset.videoUrl) || defaultProfileVideoUrl;
    videoIframe.src = formatYouTubeEmbedUrl(rawUrl);
    videoModal.classList.add("active");
  };

  const closeVideo = () => {
    videoModal.classList.remove("active");
    videoIframe.src = ""; // Menghentikan pemutaran video
  };

  if (videoModal && closeVideoModal && videoIframe) {
    if (videoCard) {
      videoCard.addEventListener("click", openVideoModal);
    }

    if (playBtn) {
      playBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        openVideoModal();
      });
    }

    closeVideoModal.addEventListener("click", closeVideo);

    videoModal.addEventListener("click", (e) => {
      if (e.target === videoModal) {
        closeVideo();
      }
    });

    // Tutup modal jika tombol ESC ditekan
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && videoModal.classList.contains("active")) {
        closeVideo();
      }
    });
  }

  // 6. Contact Modal ("Hubungi Kami")
  const hubungiButtons = document.querySelectorAll(
    ".btn-hubungi, .btn-menu-hubungi, #btnHubungi",
  );
  const contactModal = document.getElementById("contactModal");
  const closeContactModal = document.getElementById("closeContactModal");

  if (contactModal && closeContactModal) {
    hubungiButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        closeNavDrawer(); // Tutup drawer navigasi jika sedang terbuka di mobile
        contactModal.classList.add("active");
      });
    });

    closeContactModal.addEventListener("click", () => {
      contactModal.classList.remove("active");
    });

    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("active");
      }
    });

    // Tutup modal contact jika tombol ESC ditekan
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && contactModal.classList.contains("active")) {
        contactModal.classList.remove("active");
      }
    });
  }
});
