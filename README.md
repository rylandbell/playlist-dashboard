## Description
Spotify algorithmically computes numerical values to describe song features like danceability, instrumentalness, and popularity. Playlist Dashboard provides an interface to explore and refine playlists with respect to these features.

## Live Version

Live version available [here]( https://spotify.ryland-bell.com).

## Usage
<img src="http://g.recordit.co/KW0kfB6X2O.gif" width=100%>

### Connect to Spotify
Playlist Dashboard needs to be able to

* Read your publicly available information
* Access your private playlists
* Manage your private playlists

To authorize it to perform these actions click "Connect to Spotify" and follow the instructions on the resulting Spotify page.

### Select a Playlist
The sidebar displays a list of up to 50 of the user's personal and followed playlists. Selecting a playlist will load data about its tracks and their features.

### Filter and Sort Tracks by Audio Features
In the sidebar's Filters tab, select minimum and maximum allowed values for any number of features. As the user adjusts a filter, the tracks table displays a live-updating view of the playlist's length and contents.

To sort the playlist by a feature, click on the feature's name in the track data table. Continue clicking the name to cycle between sorting in descending order, ascending order, and the playlist's original order. 

### Save the Result
Select the "Save..." tab, and enter a title for the modified playlist. Clicking the Save button will create a new Spotify playlist with the selected tracks. Existing playlists are never modified or deleted from within Playlist Dashboard.

## Possible Next Steps
* Save snapshot of app state in localStorage when renewing authorization
* Continue to expand test coverage
* Add support for loading more than 50 playlist names
* Add support for playlists with more than 100 tracks
* Freeze top row of tracks table
* Allow user to adjust chart height

## License

MIT License

Copyright (c) 2017 Ryland Bell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.