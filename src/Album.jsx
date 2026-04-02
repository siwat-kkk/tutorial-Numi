// src/Album.jsx

import React, { useState, useEffect } from "react";
import "./style/Album.css";

function Album() {
  const youTubeAPIKey = "AIzaSyAAfafagvgnAADhXF-VlBxvezNRvGGZpa8";
  const albums = [
    {
      name: "Sun Always Sets",
      id: "OLAK5uy_lpfZ5V2SNzuAxM9MfQJVE7bVn9RtXO6z4",
    },
    {
      name: "Summer in the dark",
      id: "OLAK5uy_l2jeM2191mdtcjsx9dKE4PSCoB6FMHxvk",
    },
    {
      name: "Spill the bean",
      id: "OLAK5uy_kBQWdSLBDYKB9JRM47OJkvZ_sI9MyQWgY",
    },
    {
      name: "We're Alright",
      id: "OLAK5uy_ml6WUEJvTb3UQERPyJSRSWRwBWtq6wGFs",
    },
    {
      name: "Are You Okay?",
      id: "OLAK5uy_mputCjeNFm5CROCeqX8phoC4iUI5MYywI",
    },
    {
      name: "Hard to Think",
      id: "OLAK5uy_l-rlX4Rk3AJ2NTw9U2EhPCHWYeQwn-Gw0",
    },
    {
      name: "Run from the Sun",
      id: "OLAK5uy_kT4ixUskTVjtvkBv9QFHDAJaenSf9nIMM",
    },
    {
      name: "Winter Blooms",
      id: "OLAK5uy_ml8BaMNg6Ucrmb2tmZJmZZeKvuocNTzG8",
    },
    {
      name: "Hate it Here",
      id: "OLAK5uy_mvhtK10w4H-WjVRU0GtTTNFLk892Y1QzY",
    },
    {
      name: "Carry me Home",
      id: "OLAK5uy_mizgcAtzkiI6XwhfnOklUkgP3cFKj0A04",
    },
    {
      name: "Numicore",
      id: "OLAK5uy_mgVLKOYlg5wFbuD8qLeO51hH_Q7173YPE",
    },
  ];

  const coverSongs = [
    {
      videoId: "ADKpTHKYVe0",
      title: "「Cover」pretty girl I'll make you famous",
    },
    {
      videoId: "gJdg3JHr6To",
      title: "「Cover」Hell of a Good Time ft. Michi Mochievee",
    },
  ];

  const [visibleStartIndex, setVisibleStartIndex] = useState(0);

  // A new variable to control how many albums are visible at once
  const albumsToShow = 3; // You can change this number

  // A new function to handle moving the album list
  const handleNextClick = () => {
    const nextIndex = visibleStartIndex + albumsToShow;
    if (nextIndex < albums.length) {
      setVisibleStartIndex(nextIndex);
    }
  };

  const handlePrevClick = () => {
    const prevIndex = visibleStartIndex - albumsToShow;
    if (prevIndex >= 0) {
      setVisibleStartIndex(prevIndex);
    }
  };

  // A new state to track the active song type ("Original" or "Cover")
  const [activeSongType, setActiveSongType] = useState("Original");

  // Your existing states
  const [activeAlbumId, setActiveAlbumId] = useState(albums[0].id);
  const [videos, setVideos] = useState([]);
  const [activeVideoId, setActiveVideoId] = useState(null);

  // The useEffect hook has been updated to handle both cases
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        if (activeSongType === "Cover") {
          // If "Cover" is selected, use the hardcoded array
          setVideos(
            coverSongs.map((song) => ({
              snippet: {
                resourceId: { videoId: song.videoId },
                title: song.title,
              },
            }))
          );
          // Set the first video from the cover list as the active one
          setActiveVideoId(coverSongs[0]?.videoId || null);
        } else {
          // If "Original" is selected, fetch from the YouTube API
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${activeAlbumId}&key=${youTubeAPIKey}`
          );
          const data = await response.json();
          setVideos(data.items);
          setActiveVideoId(data.items[0]?.snippet?.resourceId?.videoId || null);
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };
    fetchVideos();
  }, [activeAlbumId, youTubeAPIKey, activeSongType]); // The effect runs whenever these variables change

  return (
    <div>
      <h1 className="Album-heading">Numi Songs</h1>

      {/* This is the new button bar for 'Original' and 'Cover' */}
      <div className="song-type-buttons">
        <button
          className={`album-button ${
            activeSongType === "Original" ? "active" : ""
          }`}
          onClick={() => {
            setActiveSongType("Original");
            // Reset to the first album of the "Original" category
            setActiveAlbumId(albums[0].id);
          }}
        >
          Original
        </button>
        <button
          className={`album-button ${
            activeSongType === "Cover" ? "active" : ""
          }`}
          onClick={() => setActiveSongType("Cover")}
        >
          Cover
        </button>
      </div>

      <div className="album-container">
        {/* Only show the album buttons if 'Original' is selected */}
        {activeSongType === "Original" && (
          <div className="album-navigation">
            <button
              className="nav-arrow prev-arrow"
              onClick={handlePrevClick}
              disabled={visibleStartIndex === 0}
            >
              &#9664; {/* Left arrow character */}
            </button>
            <div className="album-buttons">
              {albums
                .slice(visibleStartIndex, visibleStartIndex + albumsToShow)
                .map((album) => (
                  <button
                    key={album.id}
                    className={`album-button ${
                      activeAlbumId === album.id ? "active" : ""
                    }`}
                    onClick={() => setActiveAlbumId(album.id)}
                  >
                    {album.name}
                  </button>
                ))}
            </div>

            <button
              className="nav-arrow next-arrow"
              onClick={handleNextClick}
              disabled={visibleStartIndex + albumsToShow >= albums.length}
            >
              &#9654; {/* Right arrow character */}
            </button>
          </div>
        )}

        {/* The custom-playlist section will show based on the active type */}
        <div className="custom-playlist">
          {activeVideoId && (
            <div className="main-player-container">
              <iframe
                width="860"
                height="540"
                src={`https://www.youtube.com/embed/${activeVideoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="song-list">
            {videos.length > 0 ? (
              videos.map((video) => (
                <button
                  key={
                    activeSongType === "Original"
                      ? video.snippet.resourceId.videoId
                      : video.snippet.resourceId.videoId
                  }
                  className={`song-button ${
                    activeVideoId ===
                    (activeSongType === "Original"
                      ? video.snippet.resourceId.videoId
                      : video.snippet.resourceId.videoId)
                      ? "active"
                      : ""
                  }`}
                  onClick={() =>
                    setActiveVideoId(
                      activeSongType === "Original"
                        ? video.snippet.resourceId.videoId
                        : video.snippet.resourceId.videoId
                    )
                  }
                >
                  {video.snippet.title}
                </button>
              ))
            ) : (
              <p>Loading songs...</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Album;
