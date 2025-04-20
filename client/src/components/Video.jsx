import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import Title from "./Title";

const Video = () => {
  return (
    <div id="video"
      style={{
        backgroundImage:
          'url("https://i.pinimg.com/736x/24/43/75/2443750c23853a49a9612230f211d23a.jpg")',
      }}
      className="py-16 bg-gray-100 px-[20px]"
    >
      <Title preTitle={"Know More"} title={"About Us"} />
      <YoutubeVideo videoId={"j8cPFeu8fQQ"} />
    </div>
  );
};

export default Video;
