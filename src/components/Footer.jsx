import React from "react";

export default function Footer(){
  return (
    <footer className="mt-12 border-t py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="max-w-6xl mx-auto px-6">
        © {new Date().getFullYear()} Khwahish Seth • Built for interviews & MNC roles • Made with ❤️
      </div>
    </footer>
  );
}
