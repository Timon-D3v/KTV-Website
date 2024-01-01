//Site Metadata

let siteTitle = document.getElementById("currentSiteTitle").innerHTML;
let siteNameDE = document.getElementById("currentSiteNameDE").innerHTML;
let siteNameEN = document.getElementById("currentSiteNameEN").innerHTML;
let siteType = document.getElementById("currentSiteType").innerHTML;
let filename = document.getElementById("currentFilename").innerHTML;


//Header

let header = '\n\
            <div class="topbar">\n\
                <div class="topbarContainer1" onclick="toggleNavbar()" onmouseenter="hoverNavbarOn()" onmouseleave="hoverNavbarOff()">\n\
                    <div class="topbarMenu">\n\
                        <i id="topbarMenuButton" class="gg-menu"></i>\n\
                    </div>\n\
                    <img class="topbarLogo" src="static/Canvas/logo.jpg">\n\
                </div>\n\
                <div class="topbarContainer2">\n\
                    <h1 class="topbarTitle">' +
siteTitle + '</h1>\n\
                </div>\n\
                <div class="topbarContainer3">\n\
                    <a href="contact.html#messageUs"><img class="topbarChat" src="static/SVG/chat_symbol.svg" id="topbarChat" onmouseenter="topbarChatOn()" onmouseleave="topbarChatOff()"></a>\n\
                    <a href="contact.html"><img class="topbarPhone" src="static/SVG/phone_symbol.svg" id="topbarPhone" onmouseenter="topbarPhoneOn()" onmouseleave="topbarPhoneOff()"></a>\n\
                    <a href="https://instagram.com/ktv.altstetten" nofollow><img class="topbarInstagram" src="static/SVG/instagram_icon.svg" id="topbarInstagram" onmouseenter="topbarInstagramOn()" onmouseleave="topbarInstagramOff()"></a>\n\
                </div>\n\
            </div>';

document.getElementById("header").innerHTML = header;


//Navbar

let navbar = "";

if (siteType !== "Index") {
    navbar = navbar + '\n\
            <div class="navbarIndex">\n\
                <img class="navbarSVG" src="static/SVG/home.svg">\n\
                <p>\n\
                    <a href="index.html">Startseite</a>\n\
                </p>\n\
            </div>';
};
if (siteType !== "Contact") {
    navbar = navbar + '\n\
            <div class="navbarContact">\n\
                <img class="navbarSVG" src="static/SVG/contact.svg">\n\
                <p>\n\
                    <a href="contact.html">Vorstand | Kontakt</a>\n\
                </p>\n\
            </div>';
};
navbar = navbar + '\n\
            <div class="navbarTeams">\n\
                <details id="navbarTeamsDetails">\n\
                    <summary>\n\
                        <div class="navbarSummaryDiv">\n\
                            <img class="navbarSVG" src="static/SVG/volleyball.svg">\n\
                        </div>\n\
                        <div class="navbarSummaryDiv">\n\
                            <p>Mannschaften Volleyball</p>\n\
                        </div>\n\
                    </summary>\n\
                    <open>';
if (filename !== "teamVolley.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="teamVolley.html">Mannschaften Volleyball</a>\n\
                        </p>';
};
if (filename !== "teamVolleyAmigos.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="teamVolleyAmigos.html">Amigos</a>\n\
                        </p>';
};
if (filename !== "teamVolleyJunior.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="teamVolleyJunior.html">Junior/innen</a>\n\
                        </p>';
};
if (filename !== "teamVolleyPallavolo.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="teamVolleyPallavolo.html">Pallavolo Capelli due</a>\n\
                        </p>';
};
if (filename !== "teamVolleyVollgas.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="teamVolleyVollgas.html">Vollgas</a>\n\
                        </p>';
};
navbar = navbar + '\n\
                    </open>\n\
                </details>\n\
            </div>';
navbar = navbar + '\n\
            <div class="navbarRiege">\n\
                <details id="navbarRiegeDetails">\n\
                    <summary>\n\
                        <div class="navbarSummaryDiv">\n\
                            <img class="navbarSVG" src="static/SVG/fistball.svg">\n\
                        </div>\n\
                        <div class="navbarSummaryDiv">\n\
                            <p>Männerriege</p>\n\
                        </div>\n\
                    </summary>\n\
                    <open>';
if (filename !== "riege.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="riege.html">Männerriege</a>\n\
                        </p>';
};
if (filename !== "riegeFaustball.html") {
        navbar = navbar + '\n\
                        <p>\n\
                            <a href="riegeFaustball.html">Faustball</a>\n\
                        </p>';
};
navbar = navbar + '\n\
                    </open>\n\
                </details>\n\
            </div>';
if (siteType !== "Documents") {
    navbar = navbar + '\n\
             <div class="navbarDocuments">\n\
                <img class="navbarSVG" src="static/SVG/document.svg">\n\
                <p>\n\
                    <a href="documents.html">Programm | Dokumente</a>\n\
                </p>\n\
            </div>';
};
navbar = navbar + '\n\
            <div class="navbarPhotos">\n\
                <details id="navbarPhotosDetails">\n\
                    <summary>\n\
                        <div class="navbarSummaryDiv">\n\
                            <img class="navbarSVG" src="static/SVG/image_symbol.svg">\n\
                        </div>\n\
                        <div class="navbarSummaryDiv">\n\
                            <p>Fotogalerie</p>\n\
                        </div>\n\
                    </summary>\n\
                    <open>';
if (filename !== "photos.html") {
    navbar = navbar + '\n\
                        <p>\n\
                            <a href="photos.html">Fotogalerie</a>\n\
                        </p>';
};
if (filename !== "photosAktive.html") {
    navbar = navbar + '\n\
                        <p>\n\
                            <a href="photosAktive.html">Aktive</a>\n\
                        </p>';
};
if (filename !== "photosJunior.html") {
    navbar = navbar + '\n\
                        <p>\n\
                            <a href="photosJunior.html">Junioren</a>\n\
                        </p>';
};
if (filename !== "photosRiege.html") {
    navbar = navbar + '\n\
                        <p>\n\
                            <a href="photosRiege.html">Männerriege</a>\n\
                        </p>';
};
navbar = navbar + '\n\
                    </open>\n\
                </details>\n\
            </div>';
if (siteType !== "Imprint") {
    navbar = navbar + '\n\
            <div class="navbarImprint">\n\
                <img class="navbarSVG" src="static/SVG/imprint.svg">\n\
                <p>\n\
                    <a href="imprint.html">Impressum</a>\n\
                </p>\n\
            </div>';
};
navbar = navbar + "\n";

document.getElementById("navbar").innerHTML = navbar;


//Footer

const footer = '\n\
                <div class="footerbar">\n\
                    <p class="fat"><a>Kontakt</a></p>\n\
                    <p class="fat">|</p>\n\
                    <p class="fat"><a>Impressum</a></p>\n\
                </div>\n\
                <p class="footerbarCopyright">Copyright © 2023 Volleyball KTV Altstetten | Alle Rechte vorbehalten</p>\n\
                <p class="siteName"><i>' +
siteNameDE + '</i></p>';

document.getElementById("footerDiv").innerHTML = footer