#Create Slideshow for KTV Website
numberOutOf = 1
maxNumber = int(input("Gib die Anzahl verschiedener Bilder an: "))
shuffleSlideNumber = int(input("Gib an, das wie vielte Caroussel das aktuelle ist: ")) - 1
part = ''

while numberOutOf < maxNumber + 1:
    inputImg = input("Gib den HTML-Tag des Bildes ein: ")
    inputCaption = input("Gib die Beschreibung des Bildes an: ")
    part = part + '<div class="shuffleSlide' + str(shuffleSlideNumber) + '">\n\
    <div class="numberOutOf">\n\
        <p>' + str(numberOutOf) + ' / ' + str(maxNumber) + '</p>\n\
    </div>\n\
    <div class="cardShuffleDiv">\n\
        ' + inputImg + '\n\
    </div>\n\
    <div class="imgCaption">\n\
        <p>' + inputCaption + '</p>\n\
    </div>\n\
</div>\n\n'
    numberOutOf += 1

#print(part)

part2 = '\n<a class="prev" onclick="plusSlides(-1, ' + str(shuffleSlideNumber) + ')">&#10094;</a>\n\
<a class="next" onclick="plusSlides(1, ' + str(shuffleSlideNumber) + ')">&#10095;</a>\n'

print(part + part2)

secondPart = '</div><br>\n\n\
<div class="dotsHolder">\n'

i = 0

while i < maxNumber:
    secondPart = secondPart + '    <span class="currentSlideDot' + str(shuffleSlideNumber) + '" onclick="currentSlide(' + str(i + 1) + ', ' + str(shuffleSlideNumber) + ')"></span>\n'
    i += 1

secondPart = secondPart + '</div>\n'

print(secondPart)
