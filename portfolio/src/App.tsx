import { useState, useEffect } from "react";


const MdBookPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(prefersDark);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`border-b shadow-sm ${
          darkMode ? "bg-[#1a1a1a] border-gray-700" : "bg-gray-100 border-gray-300"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <div
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            mdbook Documentation
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="#"
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Home
            </a>
            <a
              href="#"
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Guide
            </a>
            <a
              href="#"
              className={`text-sm transition-colors ${
                darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Reference
            </a>
            <button
              onClick={toggleTheme}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                darkMode
                  ? "bg-gray-700 text-white hover:bg-gray-600"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-8 leading-relaxed">
        <h1
          className={`text-4xl font-semibold mb-6 pb-2 border-b ${
            darkMode ? "text-white border-gray-700" : "text-gray-800 border-gray-300"
          }`}
        >
          Welcome to mdbook
        </h1>
        <p
          className={`text-lg mb-6 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          This is a simple page styled to match the classic mdbook theme. mdbook
          is a utility to create modern online books from Markdown files. It's
          designed to be fast, lightweight, and easy to use for creating
          beautiful documentation sites. The design emphasizes readability with
          clean typography, proper spacing, and a comfortable reading experience
          in both light and dark modes.
        </p>
        <p
          className={`text-lg ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          The layout features a clean navigation bar at the top, well-structured
          headings with subtle borders, and readable body text with generous
          line spacing. You can toggle between light and dark themes using the
          button in the navigation bar. The styling closely follows mdbook's
          aesthetic principles while being responsive and accessible.
        </p>
      </div>
    </div>
  );
};

export default MdBookPage;
