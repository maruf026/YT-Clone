import React, { Component } from "react";

class VideoPlayer extends Component {
  render() {
    const { video } = this.props;
    return (
      <div>
        <div
  className="w-full mb-4 relative rounded overflow-hidden"
  style={{ paddingTop: "56.25%" }} // 16:9 aspect ratio
>
  <iframe
    className="absolute top-0 left-0 w-full h-full"
    src={`https://www.youtube.com/embed/${video.id}`}
    title={video.title}
    allowFullScreen
  ></iframe>
</div>

        <h1 className="text-xl font-semibold">{video.title}</h1>
        <p className="text-sm text-gray-600 mt-1">{video.views} views • {video.channel}</p>
      </div>
    );
  }
}

export default VideoPlayer;
