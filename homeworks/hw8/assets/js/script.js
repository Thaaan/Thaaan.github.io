function toggleSongs() {
    songsSecondHalf = document.getElementById("songs-second-half");
    if (songsSecondHalf.classList == '') {
        songsSecondHalf.classList.add("hidden");
    } else {
        songsSecondHalf.classList.remove("hidden");
    }
}

document.getElementById("toggle-button").onclick = toggleSongs;