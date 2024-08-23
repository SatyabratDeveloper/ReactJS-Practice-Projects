import { useState } from "react";
import { colorList, randomColor } from "./constants/colorsList";

function App() {
  const [bgColor, setBgColor] = useState(randomColor);

  return (
    <>
      <div
        className={`${bgColor} duration-300 h-screen w-screen flex justify-center`}
      >
        <div className="absolute bottom-12 px-16 py-8 rounded-md bg-gray-100 flex justify-center items-center gap-5">
          {/* Random color button */}
          <button
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-sm text-white px-8 py-3 rounded-md font-medium hover:opacity-75"
            onClick={() =>
              setBgColor(colorList[Math.floor(Math.random() * 12)].class)
            }
          >
            Random
          </button>

          {/* Color buttons */}
          {colorList.map((color, index) => {
            return (
              <button
                key={index}
                className={`${
                  color.class
                } hover:opacity-75 px-6 py-3 rounded-md text-sm font-medium ${
                  color.name === "White" ? "text-black" : "text-white"
                }`}
                onClick={() => setBgColor(color.class)}
              >
                {color.name}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
