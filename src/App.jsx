import { useState } from "react";
import React from "react";
import Login from "./component/Login";

function App() {
  const [showLogin, setshowLogin] = useState(false);

  const onButtonClick = (event) => {
    event.preventDefault();
    setshowLogin(true);
  };

  const closelogin = () => {
    setshowLogin(false);
  };

  return (
    <div className="flex justify-center">
      <button
        className="bg-blue-600 m-5 p-2 rounded-[30px] text-white hover:scale-[1.07]"
        onClick={onButtonClick}
      >
        User Login
      </button>
      {showLogin && <Login closelogin={closelogin} />}
    </div>
  );
}

export default App;
