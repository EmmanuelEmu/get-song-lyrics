
const apiURL = "https://api.lyrics.ovh";
//search wbutton event handler
document.getElementById("searchBtn").addEventListener("click", function () {
    const songName = document.getElementById("userInput").value;
    fetch(`${apiURL}/suggest/${songName}`)
        .then(res => res.json())
        .then(data => {

            // console.log(data);
            artistAndAlbum(data);
        });
})

 function artistAndAlbum(userData) {


    //button tag attribute set 
    const getLyricsButton = document.getElementsByClassName("getLy");
    // console.log(getLyricsButton);

    //album name
    const result = document.getElementsByClassName("lyricsResult");
    for (let i = 0,j=0,m=0; i < result.length,j<result.length,m<result.length; i++,j++,m++) {
        const element = result[i];
        const albumLocation = userData.data[j].album.title;
        element.innerHTML = albumLocation;
        getLyricsButton[m].setAttribute('data-album',albumLocation);
    }
    //artist name
    const albumWriter = document.getElementsByClassName("albumWriter");
    for (let k = 0,l=0,n=0; k < albumWriter.length,l<albumWriter.length,n<albumWriter.length; k++,l++,n++) {
        const album = albumWriter[k];
        const artistLocation = userData.data[l].artist.name;
        album.innerHTML = artistLocation;
        getLyricsButton[n].setAttribute("data-artist",artistLocation);
    }


 }
 //Function of Getting the lyrics 
function getLyrics(artist,album) {
    fetch(`${apiURL}/v1/${artist}/${album}`)
    .then(res => res.json())
    .then(data => {
        document.getElementById("mainLyrics").innerHTML = data.lyrics.replace(/(\r\n|\r|\n)/g,"<br>");
        // song Title set
    document.getElementById("songTitle").innerHTML = album;
    })
}


//  Get lyrics 
 document.getElementById("possibleLyrics").addEventListener("click", function(e) {
    const clickedButton = e.target;
    if (clickedButton.tagName==="BUTTON") {
        const artist  = clickedButton.getAttribute("data-artist");
        const album = clickedButton.getAttribute("data-album");
        getLyrics(artist,album);
    }
 })
