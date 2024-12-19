import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed bottom-12 inset-x-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-emerald-800 px-3 py-2 rounded-2xl w-fit">
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "green" }}>Green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "blue" }}>Blue</button>
          <button onClick={() => setColor('indigo')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "indigo" }}>Indigo</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "orange" }}>Orange</button>
          <button onClick={() => setColor('black')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "black" }}>Black</button>
          <button onClick={() => setColor('fuchsia')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "fuchsia" }}>Fuchsia</button>
          <button onClick={() => setColor('maroon')} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{ backgroundColor: "maroon" }}>Maroon</button>

        </div>
      </div>
    </div>
  );
}

export default App;
