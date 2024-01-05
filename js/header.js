var toggleNav = new Event("toggleNav");

$(".hamburger--spin").on("click", () => {
    $(".hamburger--spin").toggleClass("is-active");
    $("html").trigger("toggleNav");
});