var currentIndex = 0;

function changeText(){
    var textsArray = ["I been", "not using", "VScode", "for 3 years", "already forgot how to use it", ]
    document.getElementById("heading").innerHTML = textsArray[currentIndex];
    currentIndex++;
    if (currentIndex >= textsArray.length) {
        currentIndex = 0;
    }
}

function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}
