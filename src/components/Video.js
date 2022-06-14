import React from "react";

const Video = ({
  video: {
    id: { videoId },
    snippet: { title, channelTitle, description },
  },
}) => {
  if (!videoId) return <p className="noResult">No result :) </p>;

  const videoSrc = `https://www.youtube.com/embed/${videoId}`;

  return (
    <>
      <div className="videoIframe">
        <iframe
          src={videoSrc}
          frameBorder="0"
          allowFullScreen
          title="video player"
        ></iframe>
        <div className="videoInfo">
          <h1 className="titleVideo"> {title}</h1>
          <h3 className="channelTitle">{channelTitle}</h3>
          <p className="descriptionVideo"> {description} </p>
        </div>
      </div>
    </>
  );
};

export default Video;
