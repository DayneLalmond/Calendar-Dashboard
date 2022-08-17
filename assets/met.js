document.querySelector(".imgDisplay")

var apiUrl =("https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=Auguste Renoir")

var metImg



//var rand = randImg[~~(Math.random() * randImg.length)];

function fetchImage (data) {
    fetch (apiUrl)
        .then(res => res.json())
        .then(data => console.log(data))
        
        //imgDisplay(data);

    


    }

//function imgDisplay {  const {img,artist} = }





document.addEventListener("DOMContentLoaded",fetchImage());


