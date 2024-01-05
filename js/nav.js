var nav = $(".nav");

$("html").on("toggleNav", () => {
    nav.hasClass("active") ? openNav() : closeNav();
    nav.toggleClass("active");
});

function openNav() {
    gsap.to("nav", { opacity: 0, ease: "power2.out", duration: 0.6 });
    switch (device) {
        case "desktop":
            gsap.to(".nav", { x: 0, ease: "power2.out", duration: 0.6 });
            break;
        case "tablet":
            gsap.to(".nav", { y: 0, ease: "power2.out", duration: 0.6 });
            break;
        case "mobile":
            gsap.to(".nav", { y: 0, ease: "power2.out", duration: 0.6 });
            break;
        default:
            gsap.to(".nav", { x: 0, ease: "power2.out", duration: 0.6 });
            break;
    };
};

function closeNav() {
    gsap.to("nav", { opacity: 1, ease: "power2.out", duration: 0.6 });
    switch (device) {
        case "desktop":
            gsap.to(".nav", { x: "-40vw", ease: "power2.out", duration: 0.6 });
            break;
        case "tablet":
            gsap.to(".nav", { y: "100vh", ease: "power2.out", duration: 0.6 });
            break;
        case "mobile":
            gsap.to(".nav", { y: "100vh", ease: "power2.out", duration: 0.6 });
            break;
        default:
            gsap.to(".nav", { x: "-40vw", ease: "power2.out", duration: 0.6 });
            break;
    };
};