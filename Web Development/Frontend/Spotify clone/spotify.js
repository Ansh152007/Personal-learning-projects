let currentsong = new Audio();

async function getsongs() {
    let response = await fetch("http://127.0.0.1:5500/Projects/Web%20Development/Frontend/Spotify%20clone/Songs/");
    let text = await response.text();
    
    let div = document.createElement("div");
    div.innerHTML = text;
    let anchors = div.getElementsByTagName('a');
    
    let songs = [];
    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
        if (element.href.endsWith(".mp3")) {
            let songName = decodeURIComponent(element.href.split('/Songs/')[1]);
            songs.push(songName);
        }
    }
    return songs;
}

const playmusic = (track) => {
    currentsong.src = 'http://127.0.0.1:5500/Projects/Web%20Development/Frontend/Spotify%20clone/Songs/' + encodeURIComponent(track);
    currentsong.play();
    play.src = 'Assets/pause.svg'
    document.querySelector('.songinfo').innerHTML = `${track}`
    document.querySelector('.songduration').innerHTML = '00:00/00:00'
}

const createSongElement = (song) => {
    return `<li>
                <img src="Assets/music.svg" alt="">
                <div class="info">
                    <div>${song.replaceAll('%20', ' ')}</div>
                    <div>Artist</div>
                </div>
                <div class="playnow">
                    <div>Play Now</div>
                    <img src="Assets/play.svg" alt="play">
                </div>
            </li>`;
}

const setupEventListeners = () => {
    document.querySelectorAll(".songlist li").forEach(e => {
        e.addEventListener('click', () => {
            let songTitle = e.querySelector(".info").firstElementChild.innerHTML;
            playmusic(songTitle);
        });
    });

    document.getElementById('play').addEventListener('click', () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = 'Assets/pause.svg'
        } else {
            currentsong.pause();
            play.src = 'Assets/play.svg'
        }
    });

    currentsong.addEventListener('timeupdate',()=>{
        console.log(currentsong.currentTime, currentsong.duration)
        let cirle = (currentsong.currentTime/currentsong.duration)*100
        document.querySelector('.circle').style.s
        

    })
}

async function main() {
    let songs = await getsongs();
    console.log(songs);

    let songul = document.querySelector('.songlist ul');
    songul.innerHTML = ''; // Clear the list before adding new items
    
    songs.forEach(song => {
        songul.innerHTML += createSongElement(song);
    });

    setupEventListeners();
}

main();

