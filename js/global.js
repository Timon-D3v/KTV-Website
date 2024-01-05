$("img, svg").on("dragstart", () => {return false;});
$("img, svg").attr("draggable", "false");
var device = getDevice();
$("#stylesheet").attr("href", "./css/" + device + ".css");

function getDevice () {
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent)) {
        return "tablet";
    } else if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
        return "mobile";
    } else {
        return "desktop";
    };
};