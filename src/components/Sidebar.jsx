import React, { Component } from "react";

class Sidebar extends Component {
  render() {
    return (
      <aside className="hidden md:flex flex-col w-48 bg-white p-4 shadow-sm min-h-screen">
        <div className="py-2 font-medium hover:bg-gray-100 rounded px-2">Home</div>
        <div className="py-2 font-medium hover:bg-gray-100 rounded px-2">Explore</div>
        <div className="py-2 font-medium hover:bg-gray-100 rounded px-2">Subscriptions</div>
      </aside>
    );
  }
}

export default Sidebar;
