const artistSearch = document.getElementById('artist-search');
const search = document.getElementById('search');
const lyrics = document.getElementById('lyrics');
const songSearch = document.getElementById('song-search');
const lyricContent = document.getElementById('lyric-content');


const getLyrics = async() => {
     const response = await fetch(`https://api.lyrics.ovh/v1/${artistSearch.value}/${songSearch.value}`);
     const data = await response.json();
     console.log(data)
     lyricContent.innerHTML = `<p>${data.lyrics}</p>`
}

search.addEventListener('click', getLyrics);