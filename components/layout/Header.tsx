import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-2xl font-bold cursor-pointer">ListingApp</div>

      <nav className="space-x-4 hidden md:flex">
        <button className="px-3 py-1 border rounded">Sign In</button>
        <button className="px-3 py-1 border rounded bg-blue-600 text-white">Sign Up</button>
      </nav>

      <div className="hidden md:flex space-x-3 ml-6">
        <span className="cursor-pointer hover:underline">Rooms</span>
        <span className="cursor-pointer hover:underline">Mansion</span>
        <span className="cursor-pointer hover:underline">Countryside</span>
      </div>

      <input
        type="search"
        placeholder="Search..."
        className="border rounded px-2 py-1 ml-auto hidden md:block"
      />
    </header>
  );
};

export default Header;
