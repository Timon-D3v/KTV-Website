function topbarChatOn () {
    document.getElementById("topbarChat").className = "topbarChatActive";
};

function topbarChatOff () {
    document.getElementById("topbarChat").className = "topbarChat";
};

function topbarPhoneOn () {
    document.getElementById("topbarPhone").className = "topbarPhoneActive";
};

function topbarPhoneOff () {
    document.getElementById("topbarPhone").className = "topbarPhone";
};

function topbarInstagramOn () {
    document.getElementById("topbarInstagram").src = "static/SVG/instagram_icon_colored.svg";
    document.getElementById("topbarInstagram").className = "topbarInstagramActive";
};

function topbarInstagramOff () {
    document.getElementById("topbarInstagram").src = "static/SVG/instagram_icon.svg";
    document.getElementById("topbarInstagram").className = "topbarInstagram";
};