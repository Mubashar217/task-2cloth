import React from "react";

export default function Tags() {
  return (
    <div className="main bg-gray-100 w-full max-w-[1920] mx-auto py-10 ">
      <div className="container text-center">
        <p className="text-md font-bold">
          “We've got custom T-shirts in a range of fits and sizes, so <br className="hidden md:block" />
          everyone can wear your brand or message.”
        </p>
      </div>
      <div className="imageloc grid itme-center md:grid-cols-6  justify-center mt-2">
        <img src="spotify.png" alt="img" />
        <img src="feedly.png" alt="img" />
        <img src="hopin.png" alt="img" />
        <img src="upwork.png" alt="img" />
        <img src="lattice.png" alt="img" />
        <img src="hopin.png" alt="img" />
      </div>
    </div>
  );
}
