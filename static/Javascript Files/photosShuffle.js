let currentSlideList = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; //Max 10 Shuffles Allowed

let slideClassName = ["shuffleSlide", "shuffleSlide1", "shuffleSlide2", "shuffleSlide3", "shuffleSlide4", "shuffleSlide5", "shuffleSlide6", "shuffleSlide7", "shuffleSlide8", "shuffleSlide9"];
let dotClassName = ["currentSlideDot", "currentSlideDot1", "currentSlideDot2", "currentSlideDot3", "currentSlideDot4", "currentSlideDot5", "currentSlideDot6", "currentSlideDot7", "currentSlideDot8", "currentSlideDot9"];

showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
showSlides(1, 4);
showSlides(1, 5);
showSlides(1, 6);
showSlides(1, 7);
showSlides(1, 8);
showSlides(1, 9);

function currentSlide(slideNumber, slideType) {
    showSlides(
        currentSlideList[slideType] = slideNumber,
        slideType
    );
};

function plusSlides(slideNumber, slideType) {
    showSlides(
        currentSlideList[slideType] += slideNumber,
        slideType
    );
};
  
function showSlides(slideNumber, slideType) {
    let i;
    let slides = document.getElementsByClassName(slideClassName[slideType]);
    let dots = document.getElementsByClassName(dotClassName[slideType]);

    if (slideNumber > slides.length) {
        currentSlideList[slideType] = 1;
    };    
    if (slideNumber < 1) {
        currentSlideList[slideType] = slides.length;
    };

    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    };
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    };

    slides[currentSlideList[slideType]-1].style.display = "block";
    dots[currentSlideList[slideType]-1].className += " active";
}