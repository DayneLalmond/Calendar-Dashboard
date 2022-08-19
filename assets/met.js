var apiUrl =("https://collectionapi.metmuseum.org/public/collection/v1")

var randomArrayItem


//Fetch the Object IDs of the images.//

function fetchObjects (data) {
    fetch (apiUrl +"/search?hasImages=true&isPublicDomain=true&q=paintings")
        .then(res => res.json())
        .then(data => console.log(data))
        .then(data => randomArrayItem => data);


        randomObject(data);

        fetchImage(data);
}

//Select a Random object from the var array//

function randomObject (data){
    let randomArrayItemSelection = randomArrayItem[Math.floor(Math.random() * randomArrayItem.length)];
    console.log (randomArrayItemSelection);
    
}

//Fetch Image from the Object ID//

function fetchImage (_data) {
    fetch (apiUrl +"/objects/448160")
        .then(res => res.json())
        .then(data => {console.log(data)
        
        imgDisplay(data);
        })
     }

//Display the selected image and the relevant information//

function imgDisplay(data) {
    var img = data.primaryImage;
    var artistName = data.artistDisplayName;
    var artTitle = data.title;
    var objectUrl = data.objectURL;

    document.querySelector("#apiImg").src = img;
    document.querySelector(".artistName").innerText = artistName;
    document.querySelector(".artTitle").innerText = artTitle;
   
    //clicking on the image will bring you to the url//

    $("#apiImg").on('click', function(){
        window.location = objectUrl;    
    });
}

document.addEventListener("DOMContentLoaded",fetchObjects());
document.addEventListener("DOMContentLoaded",fetchImage());


