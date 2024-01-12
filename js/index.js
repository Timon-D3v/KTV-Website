const dw = window.innerWidth,
      dh = window.innerHeight,
      ik = "https://ik.imagekit.io/timondev/ktv",
      images = [
        [".hero", "/stock/min", "/hero.jpg"]
];

$(() => {
    images.forEach((e, i) => {
        let img = new Image(1, 1);
        if (i === 0 && device === "mobile") {
            e[2] = e[2].replace(".jpg", "") + "_mobile.jpg";
        };
        img.src = ik + e[1] + `/tr:w-${dw},h-${dh}` + e[2];
        img.onload = () => $(e[0]).css("background-image", "url(" + img.src + ")");
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