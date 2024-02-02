const img = [],
      img2 = [];

for (let i = 0; i < 9; i++) {
    if (i < 6) {
        img[i] = new Image(1, 1);
        img[i].src = "./img/common/pcd (" + (i + 1).toString() + ").jpg";
    };
    img2[i] = new Image(1, 1);
    img2[i].src = "./img/common/vollgas (" + (i + 1).toString() + ").jpg";
};

img[0].src = "./img/common/pcd (1).jpeg";
img[1].src = "./img/common/pcd (3).jpg";
img[2].src = "./img/common/pcd (2).jpg";

var i = 3,
    j = 3;

function nextImgPCD () {
    if (i === 0 || i === 3) {
        $("#img_pcd1").attr("src", img[i].src);
    } else if (i === 1 || i === 4) {
        $("#img_pcd2").attr("src", img[i].src);
    } else {
        $("#img_pcd3").attr("src", img[i].src);
    };
    i++;
    i > 5 ? i = 0 : i = i;
};

function nextImgV () {
    if (j === 0 || j === 3 || j === 6) {
        $("#img_v1").attr("src", img2[j].src);
    } else if (j === 1 || j === 4 || j === 7) {
        $("#img_v2").attr("src", img2[j].src);
    } else {
        $("#img_v3").attr("src", img2[j].src);
    };
    j++;
    j > 8 ? j = 0 : j = j;
};

setInterval(nextImgPCD, 5000);
setInterval(nextImgV, 5000);


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


const dw = window.innerWidth,
      dh = window.innerHeight,
      ik = "https://ik.imagekit.io/timondev/ktv",
      images = [
        [".hero", "/stock/min", "/ball.jpg"]
      ];

$(() => {
    images.forEach((e, i) => {
        let img = new Image(1, 1);
        img.src = ik + e[1] + `/tr:w-${dw},h-${dh}` + e[2];
        img.onload = () => $(e[0]).css("background-image", "url(" + img.src + ")");
    });
});