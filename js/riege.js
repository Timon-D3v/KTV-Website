const img = [];

for (let i = 0; i < 5; i++) {
    img[i] = new Image(1, 1);
    img[i].src = "./img/common/faustball (" + (i + 1).toString() + ").jpg";
};

img.splice(2, 1);

var i = 2;

function nextImg () {
    if (i === 0 || i === 2) {
        $("#faustball1").attr("src", img[i].src);
    } else {
        $("#faustball2").attr("src", img[i].src);
    };
    i++;
    i > 3 ? i = 0 : i = i;
};

setInterval(nextImg, 5000);


function downloadBeitritt() {
    const url = window.location.href.replace(
		/\/[^/]*$/,
		`/public/Beitrittserklärung%20KTV%20Altstetten.pdf`
	);

	fetch(url)
		.then((response) => response.blob())
		.then((blob) => {
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);

			link.download = "Beitrittserklärung KTV Altstetten";

			if (document.createEvent) {
				const event = document.createEvent("MouseEvents");
				event.initEvent("click", true, true);
				link.dispatchEvent(event);
			} else {
				link.click();
			}
		})
		.catch((error) => {
			console.error("Error fetching the file:", error);
		});
};

$("#download_beitrittsdokument").on("click", downloadBeitritt);