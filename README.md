# [JSL05] Submission: Galaxy Playlist Generator

# Overview
Guardians of the Playlist is a JavaScript application that generates personalized playlists for each Guardian based on their preferred genre. The playlists are created from a collection of songs, and each Guardian's playlist consists of songs belonging to their favorite genre.

# Features
Personalized Playlists: Each Guardian gets a playlist tailored to their preferred genre.
Dynamic Display: Playlists are dynamically generated and displayed in the web browser.
Easy-to-Read Format: Playlists are presented neatly, with each song listed along with its title and artist.
How It Works
Song Collection: An array of song objects is provided, with each song having properties for title, artist, and genre.
Guardian Preferences: The preferred genre for each Guardian is defined in an object.
Playlist Generation: The generatePlaylist function filters songs based on each Guardian's preferred genre and organizes them into playlists.
Display: The displayPlaylists function creates HTML elements to display each Guardian's playlist in the web browser.

# Song Collection
The application comes with a predefined set of songs, but you can easily add more songs to expand the collection.

# Guardian Preferences
Each Guardian's preferred genre is specified in the guardians object. You can modify this object to reflect each Guardian's musical tastes.

# Challenges faced
Manipulating the DOM,had to go back on understanding DOM better, still not my strongest point but, its Promising.