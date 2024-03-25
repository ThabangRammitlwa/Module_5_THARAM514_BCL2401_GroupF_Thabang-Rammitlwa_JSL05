
// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
    { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
    { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
    { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
    { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
    { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
    { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
    { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
    { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
    { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
    { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
    { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
    // Feel free to add even more songs
];


// Object containing each Guardian's preferred genre
const guardians = {
    "Star-Lord": "Rock",
    "Gamora": "Pop",
    "Drax":"Rock",
    "Rocket":"Pop",
    "Groot":"Rock",
    // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
     let playlist={};
    for(let guardian in guardians){
        let preferredGenre=guardians[guardian];
        let filteredSongs=songs.filter(song=>song.genre===preferredGenre);
        playlist[guardian]=filteredSongs;
    }
    return playlist;
}
// Call generatePlaylist and display the playlists for each Guardian
let playlist=generatePlaylist(guardians, songs);
for(let guardian in playlist){
    console.log(`${guardian}'s Playlist:`);

    playlist[guarding].forEach(song =>{
        console.log(`${song.title}-${song.artist}`);

    });
    console.log(); 
}



