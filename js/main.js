// ===== MYSTAKEN ESPORTS - Main JavaScript =====

document.addEventListener('DOMContentLoaded', function() {
    // ===== TACTICAL PRELOADER =====
    const preloader = document.getElementById('preloader');
    const progressPercent = document.querySelector('.progress-percent');
    const intelText = document.querySelector('.intel-text');
    const statusLabel = document.querySelector('.status-label');
    
    // Intel messages to cycle through
    const intelMessages = [
        'ESTABLISHING SECURE CONNECTION',
        'VERIFYING CREDENTIALS',
        'LOADING TACTICAL DATA',
        'SYNCING WITH HQ',
        'DEPLOYING ASSETS',
        'INITIALIZING COMBAT SYSTEMS',
        'CALIBRATING TARGETING',
        'CONNECTION ESTABLISHED'
    ];
    
    // Status messages
    const statusMessages = [
        'DEPLOYING OPERATIVE',
        'STANDBY FOR DEPLOYMENT',
        'ENTERING THE WARZONE',
        'SYSTEMS ONLINE'
    ];
    
    let progress = 0;
    let intelIndex = 0;
    let statusIndex = 0;
    
    // Animate progress percentage
    const progressInterval = setInterval(function() {
        if (progress < 100) {
            progress += Math.random() * 8 + 2;
            if (progress > 100) progress = 100;
            if (progressPercent) {
                progressPercent.textContent = Math.floor(progress) + '%';
            }
        }
    }, 150);
    
    // Cycle intel messages
    const intelInterval = setInterval(function() {
        if (intelText) {
            intelIndex = (intelIndex + 1) % intelMessages.length;
            intelText.style.opacity = '0';
            setTimeout(() => {
                intelText.textContent = intelMessages[intelIndex];
                intelText.style.opacity = '1';
            }, 100);
        }
    }, 400);
    
    // Cycle status messages
    const statusInterval = setInterval(function() {
        if (statusLabel) {
            statusIndex = (statusIndex + 1) % statusMessages.length;
            statusLabel.textContent = statusMessages[statusIndex];
        }
    }, 800);
    
    // Hide preloader
    window.addEventListener('load', function() {
        setTimeout(function() {
            clearInterval(progressInterval);
            clearInterval(intelInterval);
            clearInterval(statusInterval);
            if (progressPercent) progressPercent.textContent = '100%';
            if (statusLabel) statusLabel.textContent = 'DEPLOYMENT COMPLETE';
            if (intelText) intelText.textContent = 'WELCOME TO MYSTAKEN';
            
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 500);
        }, 2500);
    });

    // ===== NAVBAR =====
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Active link on scroll
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // ===== BACK TO TOP BUTTON =====
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== SCROLL REVEAL ANIMATIONS =====
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Add animation classes to elements
    const animateElements = document.querySelectorAll('.player-card, .timeline-item, .join-card, .stat, .team-badge');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Style for revealed elements
    const style = document.createElement('style');
    style.textContent = `
        .revealed {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // ===== CONTACT FORM =====
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simple validation
            if (!data.name || !data.email || !data.subject || !data.message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Build mailto link
            const recipient = 'mystakenesport@gmail.com';
            const subjectText = `[${data.subject}] Contact from ${data.name}`;
            const bodyText = `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`;
            
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Show notification and reset form
            showNotification('Opening your email client...', 'success');
            contactForm.reset();
        });
    }

    // ===== NOTIFICATION SYSTEM =====
    function showNotification(message, type) {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 30px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            border-radius: 8px;
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        `;

        document.body.appendChild(notification);

        // Auto remove after 5 seconds
        setTimeout(function() {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 5000);
    }

    // Add notification animations
    const notificationStyle = document.createElement('style');
    notificationStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(notificationStyle);

    // ===== PARALLAX EFFECT ON HERO =====
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / (window.innerHeight * 0.8));
        }
    });

    // ===== PLAYER CARDS TILT EFFECT =====
    const playerCards = document.querySelectorAll('.player-card');

    playerCards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // ===== COUNTER ANIMATION =====
    function animateCounter(element, target, duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(function() {
            current += increment;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    }

    // Observe stats section for counter animation
    const statsSection = document.querySelector('.about-stats');
    if (statsSection) {
        const statsObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number[data-count]');
                    counters.forEach(counter => {
                        const target = parseInt(counter.getAttribute('data-count'));
                        if (!isNaN(target)) {
                            animateCounter(counter, target);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(statsSection);
    }

    // ===== TYPING EFFECT FOR HERO TAGLINE =====
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Apply typing effect after preloader
    setTimeout(function() {
        const tagline = document.querySelector('.hero-tagline');
        if (tagline) {
            const text = tagline.textContent;
            typeWriter(tagline, text, 80);
        }
    }, 2000);

    // ===== LAZY LOADING IMAGES =====
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });

    // ===== CONSOLE MESSAGE =====
    console.log('%c MYSTAKEN ESPORTS ', 'background: #C8102E; color: white; font-size: 24px; font-weight: bold; padding: 10px 20px;');
    console.log('%c #MystakenStrong 💪 ', 'color: #C8102E; font-size: 16px; font-weight: bold;');
    console.log('%c EST. 2021 | Worldwide ', 'color: #666; font-size: 12px;');
});
