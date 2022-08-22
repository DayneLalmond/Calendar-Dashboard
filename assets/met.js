var apiUrl =("https://collectionapi.metmuseum.org/public/collection/v1");

const randomArray = [];

const masterPieceCollectionArray = ["435621","11417","437891","437877","53441","12127","451023","49177","44858"];


//Selects a random ObjectID from the array to use for the image.//
let randomId = masterPieceCollectionArray[Math.floor(Math.random() * masterPieceCollectionArray.length)];


//Fetch the Object IDs of the images.//

async function fetchObjects () {

     await fetch (apiUrl +"/search?hasImages=true&isPublicDomain=true&q=paintings")
        .then (res => res.json())
        .then (data => {randomArray.push(data.objectIDs) });
        console.log (randomArray);
        console.log(randomId);

    fetchImage();
}

//Fetch Image from the Object ID//

 function fetchImage () {
    
        fetch (apiUrl +"/objects/" + randomId)
    
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

    $("#apiImg").on('click', function() {
        window.location = objectUrl;    
    });
}

document.addEventListener("DOMContentLoaded",fetchObjects());



