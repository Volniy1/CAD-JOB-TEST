import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function YouTubeEmbed() {
  return (
    <>
      <LiteYouTubeEmbed
        id="dQw4w9WgXcQ"
        title="Important Video"
        poster="maxresdefault"
        playerClass="lty-playbtn"
        wrapperClass="yt-lite"
      />
    </>
  );
}
