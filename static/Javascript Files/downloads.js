const nameOrganigramm = "Organigramm 2021";
const nameJahresprogramm = "Jahresprogramm 2022";
const nameJunior = "Junioren Volleyball";

function downloadOrganigramm() {
    const directory = "static/Content Files/";
    const filename = "Organigramm 2021.pdf";
    const file = directory + filename;
    const url = window.location.href.replace(/\/[^/]*$/, `/${file}`);

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = file;

            link.download = nameOrganigramm;

            if (document.createEvent) {
                const event = document.createEvent("MouseEvents");
                event.initEvent("click", true, true);
                link.dispatchEvent(event);
            } else {
                link.click();
            };
        })
        .catch(error => {
            console.error("Error fetching the file:", error);
        });
};

function downloadJahresprogramm() {
    const directory = "static/Content Files/";
    const filename = "Jahresprogramm 2022.pdf";
    const file = directory + filename;
    const url = window.location.href.replace(/\/[^/]*$/, `/${file}`);

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = file;

            link.download = nameJahresprogramm;

            if (document.createEvent) {
                const event = document.createEvent("MouseEvents");
                event.initEvent("click", true, true);
                link.dispatchEvent(event);
            } else {
                link.click();
            };
        })
        .catch(error => {
            console.error("Error fetching the file:", error);
        });
};

function downloadJunioren() {
    const directory = "static/Content Files/";
    const filename = "Junioren Volleyball.pdf";
    const file = directory + filename;
    const url = window.location.href.replace(/\/[^/]*$/, `/${file}`);

    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = file;

            link.download = nameJunior;

            if (document.createEvent) {
                const event = document.createEvent("MouseEvents");
                event.initEvent("click", true, true);
                link.dispatchEvent(event);
            } else {
                link.click();
            };
        })
        .catch(error => {
            console.error("Error fetching the file:", error);
        });
};

$("#download___jahresprogramm").on("click", downloadJahresprogramm);
$("#download___organigramm").on("click", downloadOrganigramm);
$("#download___junioren").on("click", downloadJunioren);