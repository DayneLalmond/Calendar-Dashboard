document.querySelector(".imgDisplay")

var apiUrl =("https://collectionapi.metmuseum.org/public/collection/v1")

var metImg



//var rand = randObj[~~(Math.random() * randObj.length)];


function fetchObjects (data) {
    fetch (apiUrl +"/search?hasImages=true&isPublicDomain=true&q=paintings")
        .then(res => res.json())
        .then(data => console.log(data))
}


function fetchImage (data) {
    fetch (apiUrl +"/objects/229569")
        .then(res => res.json())
        .then(data => {console.log(data)
        
        imgDisplay(data);
        })
     }

function imgDisplay(data) {
    var img = data.primaryImage;
    var artistName = data.artistDisplayName;
    var rR = data.rightsAndReproduction;

    document.querySelector("#apiImg").src = img;
    document.querySelector(".artistName").innerText = artistName;
    document.querySelector(".credits").InnerText = rR;
}




//document.addEventListener("DOMContentLoaded",fetchObjects());
document.addEventListener("DOMContentLoaded",fetchImage());


