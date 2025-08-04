import React, { Component } from "react";

class SuggestedVideo extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="flex gap-2 cursor-pointer">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="w-40 h-24 object-cover rounded"
        />
        <div>
          <h2 className="text-sm font-medium">{video.title}</h2>
          <p className="text-xs text-gray-500">{video.channel}</p>
          <p className="text-xs text-gray-500">{video.views} views</p>
        </div>
      </div>
    );
  }
}

export default SuggestedVideo;
