let currentsong = new Audio()
async function getsongs() {
    let a = await fetch("http://127.0.0.1:5500/Projects/Web%20Development/Frontend/Spotify%20clone/Songs/");
    let r = await a.text();
    // console.log(r)
    let div = document.createElement("div")
    div.innerHTML = r
    let a_s = div.getElementsByTagName('a')
    // console.log(a_s)
    let songs = []
    for (let index = 0; index < a_s.length; index++) {
        const element = a_s[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split('/Songs/',)[1])
        }
    }
    return songs
}
const playmusic = (track) => {
    // let audio = new Audio('http://127.0.0.1:5500/Projects/Web%20Development/Frontend/Spotify%20clone/Songs/'+ track)
    currentsong.src = ('http://127.0.0.1:5500/Projects/Web%20Development/Frontend/Spotify%20clone/Songs/' + track)
    currentsong.play()
}
async function main() {
    let song = await getsongs()
    console.log(song)

    let songul = document.querySelector('.songlist').getElementsByTagName('ul')[0]
    // console.log(songul)
    for (const s of song) {
        songul.innerHTML = songul.innerHTML + `<li> <img src="Assets/music.svg" alt="">
                        <div class="info">
                            <div>${s.replaceAll('%20', ' ')}</div>
                            <div>Artist</div>
                        </div>
                        <div class="playnow"> <div>Play Now</div>
                            <img src="Assets/play.svg" alt="play">
                        </div>
                        </li>`
    }
    Array.from(document.querySelector(".songlist").getElementsByTagName('li')).forEach(e =>
        e.addEventListener('click', element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML)
            playmusic(e.querySelector(".info").firstElementChild.innerHTML)

        })
        
    // play.addEventListener('click', () => {
    //         if (currentsong.paused) {
    //             currentsong.play()
    //         }
    //         else {
    //             currentsong.pause()
    //         }
    //     })
    )

}
main()