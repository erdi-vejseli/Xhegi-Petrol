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
        navbar.style.top = "";
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
              
            document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    let current = 0;
    const increment = target / 200; // sa shpejt ngjitet

    // Merr suffix nga data-suffix në HTML, ose bosh nëse nuk ka
    const suffix = counter.getAttribute("data-suffix") || "";

    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.ceil(current) + suffix;
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + suffix;
      }
    };

    updateCounter();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.8 });

  counters.forEach(counter => {
    observer.observe(counter);
  });
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

// Toggle front/back me click
document.querySelectorAll('.flip-card').forEach(card => {
  card.addEventListener('click', function() {
    card.classList.toggle('flip'); // çdo klik alternon front/back
  });
});



