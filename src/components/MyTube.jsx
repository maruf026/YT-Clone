import { useState, useEffect } from "react";
import axios from "axios";

export default function MyTube() {
  const [searchTerm, setSearchTerm] = useState("react");
  const [videos, setVideos] = useState([]);
  const API_KEY = "AIzaSyDOb12C037ewF0zaDNITfPW4DfjYhBwBB0"; 

  const fetchVideos = async (term) => {
    try {
      const res = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          q: term,
          type: "video",
          maxResults: 12,
          order: "relevance",
          key: API_KEY,
        },
      });
      setVideos(res.data.items);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  useEffect(() => {
    fetchVideos(searchTerm);
  }, []);

  return (
    <div className="bg-[#f9f9f9] min-h-screen">
   
      <header className="bg-white flex items-center justify-between px-4 py-2 shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="MyTube Logo"
            className="h-6"
          />
          
        </div>
        <div className="flex items-center w-1/2">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="border border-gray-300 rounded-l-full px-4 py-1 w-full focus:outline-none"
          />
          <button
            onClick={() => fetchVideos(searchTerm)}
            className="bg-gray-100 border border-gray-300 rounded-r-full px-4 py-1 hover:bg-gray-200"
          >
            🔍
          </button>
        </div>
        <div className="flex space-x-4 items-center">
          <span className="cursor-pointer">📹</span>
          <span className="cursor-pointer">🔔</span>
          <span className="cursor-pointer">👤</span>
        </div>
      </header>

      {/* Video Grid */}
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow duration-200"
          >
            <iframe
              className="w-full h-48"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              allowFullScreen
            ></iframe>
            <div className="p-3">
              <h3 className="text-sm font-semibold line-clamp-2">
                {video.snippet.title}
              </h3>
              <p className="text-xs text-gray-500">{video.snippet.channelTitle}</p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
