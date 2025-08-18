import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Craig Sampson. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
