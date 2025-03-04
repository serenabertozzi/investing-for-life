import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-[#0c333b] text-white py-4 w-full mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} StarDevs Valley. Dundee Game Jam </p>
        <a href="https://www.flaticon.com" title="Flaticon icons" className="text-blue-400 hover:underline">
          All icons provided by: Flaticon
        </a>
      </div>
    </footer>
  );
};
