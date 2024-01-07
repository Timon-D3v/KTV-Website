$("img, svg").on("dragstart", () => {return false;});
$("img, svg").attr("draggable", "false");
var device = getDevice();
$("#stylesheet").attr("href", "./css/" + device + ".css");
var toggleNav = new Event("toggleNav");

$(".hamburger--spin").on("click", () => {
    $(".hamburger--spin").toggleClass("is-active");
    $("html").trigger("toggleNav");
});

function getDevice () {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {
        return "tablet";
    } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        return "mobile";
    } else {
        return "desktop";
    };
};

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