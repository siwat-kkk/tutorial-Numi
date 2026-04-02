// src/About.jsx
// This file only contains the content for your About page

import React from 'react'; // Don't forget to import React if you're using JSX
// import { YouTubePlaylist } from "@codesweetly/react-youtube-playlist";

function About() {

  // Replace YOUR_YOUTUBE_API_KEY with the key you got from Google Cloud
  // const youTubeAPIKey = "AIzaSyAAfafagvgnAADhXF-VlBxvezNRvGGZpa8"; 
  // Replace YOUR_PLAYLIST_ID with the ID you found earlier
  // const playlistId = "OLAK5uy_l2jeM2191mdtcjsx9dKE4PSCoB6FMHxvk"; 

  return (
    <div>
      {/* <h2>About me? nothing much</h2>
      <p>Just a ramdom guy that bored to the death</p>
      <p>but I really love Numichi ship</p>
      <p>2*0=0</p> */}
       {/* The YouTubePlaylist component will now work with your credentials */}
        {/* <YouTubePlaylist
          apiKey={youTubeAPIKey}
          playlistId={playlistId}
          columnCount={3}
        /> */}
    </div>
  );
}

export default About;