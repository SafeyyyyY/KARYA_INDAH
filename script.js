/* =========================================================
   KARYA INDAH
   RESPONSIVE FINAL JAVASCRIPT
========================================================= */


/* =========================================================
   LOADER
========================================================= */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.classList.add("hidden");

    }, 900);

});


/* =========================================================
   NAVBAR
========================================================= */

const navbar = document.getElementById("navbar");

function updateNavbar() {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");


function closeMobileMenu() {

    navMenu.classList.remove("active");

    document.body.classList.remove("menu-open");

    const icon =
        menuToggle.querySelector("i");

    icon.classList.remove("bi-x-lg");

    icon.classList.add("bi-list");

}


menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    document.body.classList.toggle("menu-open");

    const icon =
        menuToggle.querySelector("i");


    if (navMenu.classList.contains("active")) {

        icon.classList.remove("bi-list");

        icon.classList.add("bi-x-lg");

    } else {

        icon.classList.remove("bi-x-lg");

        icon.classList.add("bi-list");

    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        closeMobileMenu();

    });

});


/* Tutup menu jika klik di luar */

document.addEventListener("click", (event) => {

    if (
        navMenu.classList.contains("active") &&
        !navMenu.contains(event.target) &&
        !menuToggle.contains(event.target)
    ) {

        closeMobileMenu();

    }

});


/* =========================================================
   RESET MOBILE MENU SAAT ROTATE / RESIZE
========================================================= */

window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

        closeMobileMenu();

    }

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".reveal, .reveal-left, .reveal-right"
    );


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.10,
            rootMargin: "0px 0px -40px 0px"
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll("section[id]");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");


        if (
            target ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNav,
    { passive: true }
);

updateActiveNav();


/* =========================================================
   BACK TO TOP
========================================================= */

const backTop =
    document.getElementById("backTop");


function updateBackTop() {

    if (window.scrollY > 500) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

}


window.addEventListener(
    "scroll",
    updateBackTop,
    { passive: true }
);


backTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================================
   FOOTER YEAR
========================================================= */

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   RIPPLE EFFECT
========================================================= */

const interactiveButtons =
    document.querySelectorAll(
        ".btn, .nav-button, .contact-button, .service-card a"
    );


interactiveButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        const ripple =
            document.createElement("span");


        ripple.style.position = "absolute";

        ripple.style.width = "10px";

        ripple.style.height = "10px";

        ripple.style.borderRadius = "50%";

        ripple.style.background =
            "rgba(255,255,255,0.35)";

        ripple.style.pointerEvents = "none";

        ripple.style.transform = "scale(0)";

        ripple.style.animation =
            "rippleEffect 0.6s linear";


        const rect =
            this.getBoundingClientRect();


        ripple.style.left =
            `${event.clientX - rect.left - 5}px`;


        ripple.style.top =
            `${event.clientY - rect.top - 5}px`;


        this.style.position =
            "relative";


        this.style.overflow =
            "hidden";


        this.appendChild(ripple);


        setTimeout(() => {

            ripple.remove();

        }, 600);

    });

});


/* =========================================================
   RIPPLE STYLE
========================================================= */

const rippleStyle =
    document.createElement("style");


rippleStyle.innerHTML = `

@keyframes rippleEffect {

    to {

        transform: scale(35);

        opacity: 0;

    }

}

`;


document.head.appendChild(rippleStyle);


/* =========================================================
   DESKTOP PARALLAX
========================================================= */

const heroVisual =
    document.querySelector(".hero-visual");


let isDesktop =
    window.innerWidth > 760;


window.addEventListener("resize", () => {

    isDesktop =
        window.innerWidth > 760;

});


window.addEventListener(
    "mousemove",
    (event) => {

        if (!isDesktop) return;

        if (!heroVisual) return;


        const x =
            (window.innerWidth / 2 -
                event.clientX) / 100;


        const y =
            (window.innerHeight / 2 -
                event.clientY) / 100;


        heroVisual.style.transform =
            `translate(${x}px, ${y}px)`;

    }
);


/* Reset parallax */

document.addEventListener(
    "mouseleave",
    () => {

        if (!heroVisual) return;

        heroVisual.style.transform =
            "translate(0, 0)";

    }
);


/* =========================================================
   CARD TILT
========================================================= */

const cards =
    document.querySelectorAll(
        ".service-card, .trust-card"
    );


cards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 800)
                return;


            const rect =
                card.getBoundingClientRect();


            const x =
                event.clientX -
                rect.left;


            const y =
                event.clientY -
                rect.top;


            const centerX =
                rect.width / 2;


            const centerY =
                rect.height / 2;


            const rotateX =
                ((y - centerY) /
                    centerY) * -2;


            const rotateY =
                ((x - centerX) /
                    centerX) * 2;


            card.style.transform =
                `
                translateY(-8px)
                perspective(700px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                `;

        }
    );


    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform = "";

        }
    );

});


/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId === "#" ||
                    !document.querySelector(
                        targetId
                    )
                ) {

                    return;

                }


                event.preventDefault();


                const target =
                    document.querySelector(
                        targetId
                    );


                const offset =
                    navbar.offsetHeight;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    offset;


                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


/* =========================================================
   CARD ANIMATION DELAYS
========================================================= */

const teamCards =
    document.querySelectorAll(
        ".team-card"
    );


teamCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.06}s`;

});


const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


serviceCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.1}s`;

});


const trustCards =
    document.querySelectorAll(
        ".trust-card"
    );


trustCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.1}s`;

});