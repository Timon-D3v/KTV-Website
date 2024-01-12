for (let i = 0; i < $(".download").length; i++) {
    switch (i) {
        case 0:
            $(".download").eq(i).on("click", (e) => {
                e.preventDefault();
                downloadOrganigramm();
            });
            break;
        case 1:
            $(".download").eq(i).on("click", (e) => {
                e.preventDefault();
                downloadJahresprogramm();
            });
            break;
        case 2:
            $(".download").eq(i).on("click", (e) => {
                e.preventDefault();
                downloadJunioren();
            });
            break;
    };
};

function downloadOrganigramm() {
    const url = window.location.href.replace(
        /\/[^/]*$/,
        "/public/Organigramm%202021.pdf"
    );

    fetch(url)
        .then((response) => response.blob())
        .then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);

            link.download = "Organigramm 2021";

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

function downloadJahresprogramm() {
    const url = window.location.href.replace(
		/\/[^/]*$/,
		`/public/Jahresprogramm%202022.pdf`
	);

	fetch(url)
		.then((response) => response.blob())
		.then((blob) => {
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);

			link.download = "Jahresprogramm 2022";

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

function downloadJunioren() {
    const url = window.location.href.replace(
		/\/[^/]*$/,
		"/public/Junioren%20Volleyball.pdf"
	);

	fetch(url)
		.then((response) => response.blob())
		.then((blob) => {
			const link = document.createElement("a");
			link.href = URL.createObjectURL(blob);

			link.download = "Junioren Volleyball";

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