const artistSearch = document.getElementById('artist-search');
const search = document.getElementById('search');
const lyrics = document.getElementById('lyrics');
const songSearch = document.getElementById('song-search');
const findSong = document.getElementById('find-song');
const lyricContent = document.getElementById('lyric-content');



const getFullSongDetails = async () => {
  const response = await fetch (`https://api.lyrics.ovh/suggest/${artistSearch.value}`
  );

  const data = await response.json();
  console.log(data.data);
  const showDetails = data.data.map((item) => {
    return `
         <div class="card" style="width: 31rem;">
         <img src = ${item.album.cover_xl} width="300px" height = "350px" class="card-img-top" alt="...">
         <div class="card-body">
           <h1 class="card-title">${item.title}</h1>
           <h3 class="card-text" style = "font-weight: 100" >${item.album.title}</h3>
           <h5 class="card-text" style=" font-family: cursive"> ${item.duration} seconds</h5>    
           <button type="button"  class="btn btn-success card-text">
             <a href = ${item.link} target = "_blank"> Check Song</a>   
          </button>
          <br><br>
          <a href = "page-2/page_two.html" style="color: black; font-style: italic" target = "_blank">Get Lyric</a>
         </div>
       </div> 
         `;
  }).join('');
  lyrics.innerHTML = showDetails;
};

search.addEventListener('click', getFullSongDetails);



