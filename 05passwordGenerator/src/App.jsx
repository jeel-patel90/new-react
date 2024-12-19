import { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  // Generate password function
  const generatePassword = () => {
    let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) characters += '0123456789';
    if (includeSpecialChars) characters += '!@#$%^&*()_+=-';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      generatedPassword += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setPassword(generatedPassword);
  };

  // Copy password to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 overflow-hidden relative">
      {/* Dynamic revolving background */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 opacity-30 animate-spin-slow blur-2xl"></div>

      {/* Password box */}
      <div className="relative max-w-lg w-full bg-white shadow-2xl rounded-xl p-8 text-center z-10">
        <h1 className="text-3xl font-bold text-gradient bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">Password Generator</h1>

        {/* Password Display */}
        <div className="relative mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="w-full text-center py-3 px-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 text-lg shadow-md"
          />
          <button
            onClick={copyToClipboard}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white px-3 py-1 rounded-md shadow-md hover:bg-pink-600 transition-all"
          >
            Copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Password Length: {length}</label>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full cursor-pointer"
          />
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-around mb-6">
          <button
            onClick={() => setIncludeNumbers(!includeNumbers)}
            className={`px-4 py-2 rounded-md font-medium shadow-md transition-all ${includeNumbers ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {includeNumbers ? 'Numbers: ON' : 'Numbers: OFF'}
          </button>

          <button
            onClick={() => setIncludeSpecialChars(!includeSpecialChars)}
            className={`px-4 py-2 rounded-md font-medium shadow-md transition-all ${includeSpecialChars ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            {includeSpecialChars ? 'Special: ON' : 'Special: OFF'}
          </button>
        </div>

        {/* Generate Button */}
        <button
          onClick={generatePassword}
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold rounded-md shadow-lg hover:shadow-2xl hover:from-pink-600 hover:to-purple-600 transform hover:scale-105 transition-all"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
