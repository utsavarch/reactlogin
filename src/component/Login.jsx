import { useEffect, useState } from "react";
import React from "react";
import Welcome from "./welcome.jsx";
import Cookies from "js-cookie";

function Login({ closelogin }) {
  const [login, setlogin] = useState(false);
  const [u, setu] = useState("");
  const [p, setp] = useState("");
  const [r, setr] = useState(false);
  const [l, setl] = useState("");

  const hanldeCookies = () => {
    if (r === true) {
      Cookies.set("username", u);
      Cookies.set("password", p);
    }
  };

  useEffect(() => {
    let username = Cookies.get("username");
    let password = Cookies.get("password");
    if (username && password) {
      setlogin(true);
    }
  }, []);

  const handleclick = (event) => {
    event.preventDefault();
    if (u === "admin" && p === "admin") {
      setlogin(true);
      hanldeCookies();
    } else {
      setl("Invalid Username or Password");
    }
  };
  const Logout = () => {
    setlogin(false);
    Cookies.remove("username");
    Cookies.remove("password");
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-[#f8fafc] p-10 rounded-lg max-w-4xl relative max-h-[90vh]">
        <button className="absolute top-2 right-2 text-xl" onClick={closelogin}>
          &times;
        </button>
        <h2 className="font-bold text-center mt-5 text-xl">Login</h2>
        <form>
          <label htmlFor="username" className="block mt-4">
            Username:
          </label>
          <input
            type="text"
            id="username"
            className="border p-2 w-full rounded"
            onChange={(event) => setu(event.target.value)}
          />
          <label htmlFor="password" className="block mt-4">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="border p-2 w-full rounded"
            onChange={(event) => setp(event.target.value)}
          />
          <label className="italic">
            <input
              type="checkbox"
              onChange={(event) => setr(event.target.checked)}
            ></input>
            Remember me
          </label>
          <button
            className="bg-blue-600 text-white p-2 rounded mt-4 w-full"
            onClick={handleclick}
          >
            Login
          </button>
        </form>
        {l && <div className="text-red-500 text-center">{l}</div>}
      </div>
      {login && <Welcome Logout={Logout} />}
    </div>
  );
}

export default Login;
