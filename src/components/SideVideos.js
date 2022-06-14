import React from "react";

const SideVideos = ({ onVideoSelect, video }) => {
  return (
    <div>
      <div onClick={() => onVideoSelect(video)} className="videoItems">
        <div className="img_box">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt="overlay"
          />
        </div>
        <div className="titleVideo">
          <b title={video.snippet.title}> {video.snippet.title} </b> <br />
          <small title={video.snippet.channelTitle} className="small"> {video.snippet.channelTitle} </small>
        </div>
      </div>
    </div>
  );
};

export default SideVideos;
