import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import VideoPlayer from "./components/VideoPlayer";
import SuggestionList from "./components/SuggestionList";
import videos from "./data/videos";

class App extends Component {
  render() {
    const mainVideo = videos[0]; 
    const suggestions = videos.slice(1); 

    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex flex-col lg:flex-row p-4 gap-4 w-full">
            <div className="flex-1">
              <VideoPlayer video={mainVideo} />
            </div>
            <div className="w-full lg:w-1/3">
              <SuggestionList videos={suggestions} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

