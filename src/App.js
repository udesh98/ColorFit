import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import OutfitIllustration from './components/OutfitIllustration'; // Import your illustration component
import chroma from "chroma-js"; // Color contrast validation

// Predefined outfit combinations for male and female
const outfitTypes = {
  male: ["Shirt & Jeans", "Shirt & Shorts", "T-Shirt & Shorts"],
  female: ["Top & Skirt", "Top & Shorts", "Bra & Pants"]
};

export default function ColorMatcherApp() {
  const [topColor, setTopColor] = useState("#ffffff");
  const [bottomColor, setBottomColor] = useState("#000000");
  const [gender, setGender] = useState("male");
  const [outfit, setOutfit] = useState("Shirt & Jeans");
  const [matchResult, setMatchResult] = useState(null);  // To store the match result
  const [search, setSearch] = useState("");
  const [colorPart, setColorPart] = useState("top");  // To track the color part being selected (top or bottom)
  const [searchFocused, setSearchFocused] = useState(false);

  const [allColors, setAllColors] = useState([]);
  const [filteredColors, setFilteredColors] = useState([]);

  // Fetch color data from the API
  useEffect(() => {
    fetch("https://cdn.jsdelivr.net/npm/color-name-list@11.3.0/dist/colornames.json")
      .then((res) => res.json())
      .then((data) => {
        setAllColors(data);
        console.log("Fetched colors:", data);
      })
      .catch((err) => console.error("Color fetch error:", err));
  }, []);

  // Update filtered colors based on the search term
  useEffect(() => {
    if (search.trim()) {
      const filtered = allColors.filter((color) =>
        color.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredColors(filtered.slice(0, 10)); // Limit to 10 suggestions
    } else {
      setFilteredColors([]); // Clear suggestions when search is empty
    }
  }, [search, allColors]);

  // Function to check if colors are a good match (based on contrast)
  const isColorMatch = (color1, color2) => {
    if (!color1 || !color2) return false;
    const contrast = chroma.contrast(color1, color2);
    return contrast > 1.5 && contrast < 7;  // Good contrast ensures readability
  };

  // Handle match button click
  const handleMatch = () => {
    setMatchResult(isColorMatch(topColor, bottomColor));
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-3xl font-bold text-center text-gray-800">Outfit Color Matcher</h1>

        {/* Outfit Settings */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Top Color</label>
            <input
              type="color"
              value={topColor}
              onChange={(e) => setTopColor(e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bottom Color</label>
            <input
              type="color"
              value={bottomColor}
              onChange={(e) => setBottomColor(e.target.value)}
              className="w-full h-12 rounded-lg cursor-pointer border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
                setOutfit(e.target.value === "male" ? "Shirt & Jeans" : "Top & Skirt");
              }}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Outfit Type</label>
            <select
              value={outfit}
              onChange={(e) => setOutfit(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300"
            >
              {outfitTypes[gender].map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Check Match Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.02 }}
          onClick={handleMatch}
          className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition"
        >
          Check Color Match
        </motion.button>

        {/* Match Result */}
        {matchResult !== null && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`text-center font-semibold text-lg ${matchResult ? "text-green-600" : "text-red-500"}`}
          >
            {matchResult ? "Great Match! These colors go well together." : "These colors might clash. Try other combinations."}
          </motion.div>
        )}

        {/* Color Search */}
        <div>
          <div className="flex items-center gap-4 mb-2">
            <select
              value={colorPart}
              onChange={(e) => setColorPart(e.target.value)}
              className="border rounded-lg px-2 py-1"
            >
              <option value="top">Top</option>
              <option value="bottom">Bottom</option>
            </select>

            <div className="relative w-full">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 200)}
                placeholder="Search for color (e.g. khaki, olive)"
                className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <AnimatePresence>
                {searchFocused && filteredColors.length > 0 && (
                  <motion.ul
                    className="absolute top-full left-0 w-full mt-1 border rounded-lg bg-white shadow max-h-40 overflow-y-auto z-10"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {filteredColors.map((color) => (
                      <motion.li
                        key={color.name}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          if (colorPart === "top") {
                            setTopColor(color.hex);
                          } else {
                            setBottomColor(color.hex);
                          }
                          setSearch(""); // Clear search after selection
                        }}
                        className="px-4 py-2 hover:bg-indigo-100 cursor-pointer flex items-center gap-2"
                      >
                        <span
                          className="inline-block w-4 h-4 rounded-full border"
                          style={{ backgroundColor: color.hex }}
                        ></span>
                        {color.name}
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Outfit Illustration */}
        <div className="flex justify-center mt-4">
          <OutfitIllustration topColor={topColor} bottomColor={bottomColor} gender={gender} outfit={outfit} />
        </div>
      </motion.div>
    </div>
  );
}
