import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav className="flex items-center justify-between bg-white px-4 py-2 shadow-md sticky top-0 z-10">
        <div className="text-2xl font-bold text-red-600">YouView</div>
        <div className="w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border rounded-full"
          />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
