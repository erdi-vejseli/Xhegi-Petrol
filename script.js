// Current Date
document.addEventListener("DOMContentLoaded", function() {
    const sot = new Date();
    const dite = String(sot.getDate()).padStart(2, '0');
    const muaj = String(sot.getMonth() + 1).padStart(2, '0');
    const vit = sot.getFullYear();
    const dataFormatuar = `${dite}/${muaj}/${vit}`;
    document.getElementById('dateButton').textContent = dataFormatuar;
});

// Hamburger menu auto close
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {toggle:false});
        bsCollapse.hide();
    });
});

// Navbar hide on scroll
let lastScrollTop = 0;
const navbar = document.getElementById('mainNavbar');
window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop && st > 50){
        navbar.style.top = "-80px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = st <= 0 ? 0 : st;
});

// Typewriter loop
const txt = "Trusted by drivers for 16 years";
let i = 0;
let forward = true;
function typeWriterLoop(){
    const el = document.getElementById("typewriter");
    if(forward){
        if(i < txt.length){
            el.innerHTML += txt.charAt(i);
            i++;
        } else {
            forward = false;
            setTimeout(typeWriterLoop, 1000);
            return;
        }
    } else {
        if(i > 0){
            el.innerHTML = txt.substring(0,i-1);
            i--;
        } else {
            forward = true;
        }
    }
    setTimeout(typeWriterLoop, 80);
}
typeWriterLoop();
 document.addEventListener('DOMContentLoaded', function() {
            // Animacioni për counters kur të shfaqen në ekran
            const counterItems = document.querySelectorAll('.counter-item');
            let countersAnimated = false;
            
            function animateCounters() {
                if (countersAnimated) return;
                
                const rect = document.getElementById('counters').getBoundingClientRect();
                const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                
                if (isVisible) {
                    countersAnimated = true;
                    
                    counterItems.forEach(item => {
                        const counter = item.querySelector('.counter');
                        const target = parseInt(counter.getAttribute('data-target'));
                        let count = 0;
                        
                        const updateCount = () => {
                            const increment = target / 50;
                            if (count < target) {
                                count += increment;
                                counter.innerText = Math.ceil(count);
                                setTimeout(updateCount, 30);
                            } else {
                                counter.innerText = target;
                            }
                        }
                        
                        updateCount();
                    });
                }
            }
            
            // Kontrollo në fillim dhe gjatë scroll-it
            animateCounters();
            window.addEventListener('scroll', animateCounters);
            
            // Rregullim për kutinë e çmimeve në mobile
            function adjustPriceBox() {
                const priceBox = document.querySelector('.prices-box');
                if (window.innerWidth < 768) {
                    priceBox.style.position = 'absolute';
                    priceBox.style.right = '15px';
                    priceBox.style.top = '80px';
                    priceBox.style.width = 'calc(100% - 30px)';
                    priceBox.style.maxWidth = '300px';
                } else {
                    priceBox.style.position = 'static';
                    priceBox.style.width = '100%';
                }
            }
            
            adjustPriceBox();
            window.addEventListener('resize', adjustPriceBox);
        });

        document.addEventListener('DOMContentLoaded', () => {
    const animatedEls = document.querySelectorAll('.animate-fade, .animate-left, .animate-left-choose, .animate-right-choose');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedEls.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", function() {
    // Elementët që duam të mos ndryshojnë ngjyrën
    const elements = document.querySelectorAll(
        '.about-content, .choose-card, .contact-info, .prices-box, .footer, button, .btn-primary'
    );

    function applyColors() {
        elements.forEach(el => {
            el.style.backgroundColor = getComputedStyle(el).backgroundColor; // ruan current color
            el.style.color = getComputedStyle(el).color; // ruan current text color
            el.style.borderColor = getComputedStyle(el).borderColor; // ruan border
        });
    }

    // Ndal dark mode changes
    applyColors();

    // Opsionale: kontrollon nëse përdoruesi ndryshon dark mode ndërkohë që faqja është e hapur
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyColors);
});
