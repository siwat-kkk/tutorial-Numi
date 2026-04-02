// src/Spotify_player.jsx
import React from "react";

function Spotify_player() {
  // ลองใช้ URL มาตรฐานของ Spotify ดูครับ
  // ตัวอย่างนี้คือ Playlist ของ Nihmune
  const embedUrl = "https://open.spotify.com/embed/artist/6vS03mR0K9U1YxZ9pX6X6c?utm_source=generator";

  return (
    <div className="spotify-player-container">
      <iframe 
        style={{ borderRadius: '12px' }}
        src={embedUrl} 
        width="100%" 
        height="352" 
        frameBorder="0" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Spotify_player;