document.querySelector(".imgDisplay")

var apiUrl =("https://collectionapi.metmuseum.org/public/collection/v1/objects/hasImages=true")

var metImg



//var rand = randImg[~~(Math.random() * randImg.length)];

function fetchImage (data) {
    fetch (apiUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        

       // imgDisplay(data);

    


    }

function imgDisplay(data) {
    const {primaryImage, artistDisplayName, rightsAndReproduction, } = data;

    document.querySelector(".imgDisplay").src = primaryImage;
    document.querySelector(".artistName").innerText = artistDisplayName;
    document.querySelector(".credits").InnerText = rightsAndReproduction;
}





document.addEventListener("DOMContentLoaded",fetchImage());


