let isNavbarOn = false

function toggleNavbar() {
    if(isNavbarOn) {
        document.getElementById("topbarMenuButton").className = 'gg-menu';
        isNavbarOn = false;
        document.getElementById("navbar").className = "navbarOff";
        document.getElementById("navbarTeamsDetails").removeAttribute("open");
        document.getElementById("navbarRiegeDetails").removeAttribute("open");
        document.getElementById("navbarPhotosDetails").removeAttribute("open");
    } else {
        document.getElementById("topbarMenuButton").className = 'gg-close';
        isNavbarOn = true;
        document.getElementById("navbar").className = "navbarOn";
    };
};

function hoverNavbarOn () {
    document.getElementById("topbarMenuButton").style = "transform: scale(1.2);";
};

function hoverNavbarOff () {
    document.getElementById("topbarMenuButton").style = "transform: scale(1);";
};