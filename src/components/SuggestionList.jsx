import React, { Component } from "react";
import SuggestedVideo from "./SuggestedVideo";

class SuggestionList extends Component {
  render() {
    return (
      <div className="flex flex-col gap-4">
        {this.props.videos.map((video) => (
          <SuggestedVideo key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default SuggestionList;
