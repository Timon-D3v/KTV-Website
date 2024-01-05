const images = [
    [".hero", "./img/stock/hero.jpg"]
];

$(() => {
    images.forEach((e, i) => {
        let img = new Image(1, 1);
        img.src = e[1];
        if (i === 0 && device === "mobile") {
            e[1] = e[1].replace(".jpg", "") + "_mobile.jpg";
        };
        img.onload = () => $(e[0]).css("background-image", "url(" + e[1] + ")");
    });
});

new Typed('#hero_title', {
    stringsElement: '#hero_text',
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    cursorChar: '|',
    smartBackspace: true,
    loop: true
});