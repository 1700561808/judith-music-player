// Define the playlist
const playlist = [
  { title: 'Yaya', artist: 'Black Sherif', file: 'Yaya.mp3' },
  { title: 'Kafra', artist: 'Bisa Kdei', file: 'Bisa_Kdei_Kafra-1.mp3' },
  { title: 'Highlife Mix', artist: 'Emmalex', file: 'Emmalex-Bisa-Kdei-Highlife-Mix.mp3' },
  { title: 'Kafra', artist: 'Bisa Kdei', file: 'Bisa_Kdei_Kafra-1.mp3' }
];

// Define the current song index
let currentSongIndex = 0;

// Define the audio element
const audio = document.querySelector('audio');

// Define the play/pause button
const playPauseButton = document.getElementById('play-pause-button');

// Define the next button
const nextButton = document.getElementById('next-button');

// Define the previous button
const previousButton = document.getElementById('previous-button');

// Define the volume slider
const volumeSlider = document.getElementById('volume-slider');

// Define the playlist list element
const playlistList = document.getElementById('playlist-list');

// Define the image path
const imagePath = 'images.jpg';

// Load the first song
loadSong();

// Define the load song function
function loadSong() {
  audio.src = playlist[currentSongIndex].file;
  document.querySelector('.song-img').src = imagePath;
  document.querySelector('h1').innerText = playlist[currentSongIndex].title;
  document.querySelector('p').innerText = playlist[currentSongIndex].artist;
}

// Define the play/pause function
function playPause() {
  if (audio.paused) {
    audio.play();
    playPauseButton.innerHTML = '<i class="fa-solid fa-pause"></i>';
  } else {
    audio.pause();
    playPauseButton.innerHTML = '<i class="fa-solid fa-play"></i>';
  }
}

// Define the next function
function next() {
  currentSongIndex = (currentSongIndex + 1) % playlist.length;
  loadSong();
  playPause();
}

// Define the previous function
function previous() {
  currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
  loadSong();
  playPause();
}

// Define the volume change function
function volumeChange() {
  audio.volume = volumeSlider.value / 100;
}

// Define the display playlist function
function displayPlaylist() {
  playlistList.innerHTML = '';
  playlist.forEach((song, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${song.title} by ${song.artist}`;
    listItem.addEventListener('click', () => {
      currentSongIndex = index;
      loadSong();
      playPause();
    });
    playlistList.appendChild(listItem);
  });
}

// Add event listeners
playPauseButton.addEventListener('click', playPause);
nextButton.addEventListener('click', next);
previousButton.addEventListener('click', previous);
volumeSlider.addEventListener('input', volumeChange);
document.getElementById('show-song').addEventListener('click', displayPlaylist);
