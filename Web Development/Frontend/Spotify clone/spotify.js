let currentsong = new Audio();
let songs;
let currentfolder;

async function getsongs(folder) {
    currentfolder = folder
    let response = await fetch(`songs/${folder}/`);
    let text = await response.text();
    let div = document.createElement("div");
    div.innerHTML = text;
    let anchors = div.getElementsByTagName('a');
    songs = [];
    for (let index = 0; index < anchors.length; index++) {
        const element = anchors[index];
       
        if (element.href.endsWith(".mp3")) {
           
            let songName = decodeURIComponent(element.href.split(`/${folder}/`)[1]);
          
            songs.push(songName);
        }
    }
    let songul = document.querySelector('.songlist ul');
    songul.innerHTML = ''; 

    songs.forEach(song => {
        songul.innerHTML += createSongElement(song);
    });

    Array.from(document.querySelectorAll(".songlist li")).forEach(e => {
        e.addEventListener('click', () => {
            let songTitle = e.querySelector(".info").firstElementChild.innerHTML;
            playmusic(songTitle);
        });
    });

    return songs
}
const playmusic = (track, pause = false) => {
    currentsong.src = `songs/${currentfolder}/` + encodeURIComponent(track);
   
    if (!pause) {
        currentsong.play();
        play.src = 'Assets/pause.svg'
    }
    document.querySelector('.songinfo').innerHTML = `${track}`
    document.querySelector('.songduration').innerHTML = '00:00 / 00:00'
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

function convertseconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');
    return `${formattedMinutes}:${formattedSeconds}`;
}

const setupEventListeners = () => {

    document.getElementById('play').addEventListener('click', () => {
        if (currentsong.paused) {
            currentsong.play();
            play.src = 'Assets/pause.svg'
        } else {
            currentsong.pause();
            play.src = 'Assets/play.svg'
        }
    });

    currentsong.addEventListener('timeupdate', () => {
        document.querySelector('.songduration').innerHTML = `${convertseconds(currentsong.currentTime)} / ${convertseconds(currentsong.duration)}`
        document.querySelector('.circle').style.left = `${(currentsong.currentTime / currentsong.duration) * 100}%`
        document.querySelector('.fill').style.width = `${(currentsong.currentTime / currentsong.duration) * 100}%`
    })
    document.querySelector('.seekbar').addEventListener('click', e => {
        let completion_percentage = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector('.circle').style.left = `${completion_percentage}%`
        document.querySelector('.fill').style.width = `${completion_percentage}%`
        currentsong.currentTime = ((currentsong.duration) * completion_percentage) / 100
    })

    document.querySelector('.menu').addEventListener('click', () => {
        document.querySelector('.left').style.left = `${0}%`
    })
    document.querySelector('.cross').addEventListener('click', () => {
        document.querySelector('.left').style.left = `${-100}%`
    })
    previous.addEventListener('click', () => {
        let index = songs.indexOf(currentsong.src.split('/').slice(-1)[0].replaceAll('%20', ' '))
        if ((index - 1) >= 0) {
            playmusic(songs[index - 1])
        }
        if ((index - 1) <= 0) {
            document.querySelector('#previous').style = 'filter: invert(0.5);'
        }
        else {
            document.querySelector('#next').style = 'filter: invert(1);'
        }
        document.querySelector('#next').style = 'filter: invert(1);'
    })
    next.addEventListener('click', () => {
        let index = songs.indexOf(currentsong.src.split('/').slice(-1)[0].replaceAll('%20', ' '))
        if ((index + 1) < songs.length) {
            playmusic(songs[index + 1])
        }
        if ((index + 1) == (songs.length)) {
            document.querySelector('#next').style = 'filter: invert(0.5);'
        }
        else {
            document.querySelector('#next').style = 'filter: invert(1);'
        }
        document.querySelector('#previous').style = 'filter: invert(1);'
    })
    currentsong.addEventListener('timeupdate', () => {
        if (currentsong.currentTime == currentsong.duration) {
            let index = songs.indexOf(currentsong.src.split('/').slice(-1)[0].replaceAll('%20', ' '))
            if ((index + 1) < songs.length) {
                playmusic(songs[index + 1])
            }
        }
    })
    range.addEventListener('change', (e) => {
        currentsong.volume = e.target.value / 100
        if (e.target.value == 0) {
            document.querySelector('.volume').innerHTML = '<img src="Assets/mute.svg" alt="" style="filter: invert();">'
        }
        else {
            document.querySelector('.volume').innerHTML = '<img src="Assets/volume.svg" alt="" style="filter: invert();">'
        }
    })
    document.querySelector(".volume>img").addEventListener("click", e => {
        if (e.target.src.includes("volume.svg")) {
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentsong.volume = 0;
            document.querySelector("#range").value = 0;
        }
        else {
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentsong.volume = .10;
            document.querySelector("#range").value = 10;
        }

    })

}
async function getalbums() {
    let response = await fetch(`songs/`);
    let text = await response.text();
   
    let div = document.createElement("div");
    div.innerHTML = text;
    let anchors = div.getElementsByTagName('a');

    let card_container = document.querySelector('.card_container')
    let array = Array.from(anchors)
    
    for (let index = 0; index < array.length; index++) {
        const e = array[index];

        if (e.href.includes('/songs/') && (!e.href.includes(".htaccess"))) {
            
            let folder = (e.href.split('/').slice(-2)[0]);
            let response = await fetch(`songs/${folder}/info.json`);
           
            let info = await response.json();
           
            card_container.innerHTML = card_container.innerHTML + `<div data-folder="${folder}" class="card">
            <div class="play">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>
            <img class="thumbnail" src="songs/${folder}/cover.jpg" alt="">
            <h3>${info.title}</h3>
            <p>${info.discription}</p>
        </div>`
        }
    }
    Array.from(document.getElementsByClassName("card")).forEach(e => {
        e.addEventListener("click", async item => {
            songs = await getsongs(`${item.currentTarget.dataset.folder}`)
            playmusic(songs[0])

        })
    })
}

async function main() {

    await getsongs("");
    playmusic(songs, true)

    getalbums()
    setupEventListeners();
}

main();
