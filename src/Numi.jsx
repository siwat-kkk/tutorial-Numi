// src/Introduce.jsx
// This file only contains the content for your Introduce page

import React, { useEffect } from "react";
import "./style/Numi.css";
import NumiImage from "./assets/Numi.jfif";
import { FaTwitch, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Use your preferred icon
import { XEmbed, YouTubeEmbed } from "react-social-media-embed";

function Numi() {
  return (
    <div>
      <h2 className="Numi-heading">Akuma Nihmune</h2>
      <div className="social-icons-container">
        <a
          className="social-icon-link twitch-icon"
          href="https://www.twitch.tv/nihmune"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitch />
        </a>
        <a
          className="social-icon-link x-icon"
          href="https://x.com/nihmune"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter /> {/* Use the FaXTwitter icon */}
        </a>
        <a
          className="social-icon-link yt-icon"
          href="https://www.youtube.com/@AkumaNihmune/featured"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
      </div>
      <h3 className="Numi-subline">Yes, she's my oshi so what?</h3>

      <img
        className="numi-image"
        src={NumiImage}
        alt="A description of the Numi image"
      />

      <div className="video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/gJdg3JHr6To?si=SfSpDsuirBfCAYdA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {/* <YouTubeEmbed url="https://www.youtube.com/watch?v=yGnR2Fb9lMc"></YouTubeEmbed> */}
      {/* This new container will hold both X embeds side-by-side */}
      <div className="x-embeds-container">
        <div className="my-custom-x-embed-container">
          <XEmbed
            url="https://x.com/nihmune/status/1934687672007839855"
            width={520}
            conversation="none"
            align="center"
          />
        </div>

        <div className="my-custom-x-embed-container">
          <XEmbed
            url="https://x.com/nihmune/status/1951705009483399169"
            width={520}
            conversation="none"
            align="center"
          />
        </div>
        
      </div>
    </div>
  );
}

export default Numi;
