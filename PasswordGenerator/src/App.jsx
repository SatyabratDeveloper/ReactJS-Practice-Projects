import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpacialChar, setIsSpacialChar] = useState(false);
  const passwordRef = useRef(null);

  /**
   * Generates random passwords
   */
  const generatePassword = useCallback(() => {
    let pwd = "";
    let allowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (isNumber) allowedChars += "0123456789";
    if (isSpacialChar) allowedChars += "!@#$%^&*()_-+={}[]";

    for (let i = 0; i < length; i++) {
      pwd += allowedChars.charAt(
        Math.floor(Math.random() * allowedChars.length)
      );
    }

    setPassword(pwd);
  }, [length, isNumber, isSpacialChar, setPassword]);

  /**
   * Copy generated passwords
   */
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 50);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  /**
   * useEffect hook to call generatePassword when depandancies changes
   */
  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isSpacialChar, generatePassword]);

  return (
    <>
      <div className="h-screen bg-gray-900 flex justify-center">
        <div className="h-min bg-gray-700 my-10 px-20 py-10 rounded-lg">
          <h1 className="flex justify-center text-white text-4xl">
            Generate Password
          </h1>
          <div className="flex mt-10">
            <input
              type="text"
              className="w-full h-12 rounded-l-lg text-2xl text-orange-500 font-medium outline-none px-5"
              value={password}
              readOnly
              ref={passwordRef}
            />
            <button
              onClick={copyPasswordToClipboard}
              className="bg-blue-600 h-12 w-24 rounded-r-lg font-bold text-white hover:bg-blue-700"
            >
              Copy
            </button>
          </div>
          <div className="m-5">
            <input
              type="range"
              id="length"
              min={3}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="mr-2"
            />
            <label
              htmlFor="length"
              className="mr-7 text-orange-600 font-medium"
            >
              Length - {length}
            </label>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              className="mr-2"
              value={isNumber}
              onChange={() => setIsNumber((prev) => !prev)}
            />
            <label
              htmlFor="numbers"
              className="mr-7 text-orange-600 font-medium"
            >
              Numbers
            </label>
            <input
              type="checkbox"
              name="spacialChar"
              id="spacialChar"
              className="mr-2"
              value={isSpacialChar}
              onChange={() => setIsSpacialChar((prev) => !prev)}
            />
            <label
              htmlFor="spacialChar"
              className="text-orange-600 font-medium"
            >
              Spacial Charactors
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
