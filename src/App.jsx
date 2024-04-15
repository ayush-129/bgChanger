import { useState } from "react";

function App() {
  const [color, setColor] = useState("#240A34");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>
      {/* style ka syntax hai double curly braces, issilye color variable ke liye {} lagane ki need nahi hai */}

      {/* div jisme sare color buttons rakhenge. */}
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0">
        
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl">

          <button
            onClick={() => setColor("#F8D664")}
            // onClick={setColor("#F8D664")}   ----- is wrong way
            // 'onClick' is the method which accepts FUNCTION only.
            // firing a callback on 'onClick'
            // setColor is the menotod which calls another function and returns the color, basically now also the 'onClick' is accepting function only.
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#F8D664" }}
          >
            Happy
          </button>

          <button
            onClick={() => setColor("#2A3B90")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#2A3B90" }}
          >
            Sad
          </button>

          <button
            onClick={() => setColor("#F2476A")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#F2476A" }}
          >
            Love
          </button>

          <button
            onClick={() => setColor("#d1001f")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#d1001f" }}
          >
            Hungry
          </button>

          <button
            onClick={() => setColor("#C2C3FF")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#C2C3FF" }}
          >
            Cool
          </button>

          <button
            onClick={() => setColor("#EE4B2B")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#EE4B2B" }}
          >
            Sexy
          </button>

          <button
            onClick={() => setColor("#636363")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#636363" }}
          >
            Fear
          </button>

          <button
            onClick={() => setColor("#4CA64C")}
            className="outline-none px-4  py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#4CA64C" }}
          >
            Fresh
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
