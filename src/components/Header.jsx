import React, { useState, useEffect } from "react";
import axios from "axios";
import giphy from "./icons/giphy.svg";
function Header(props) {
  const [data, setData] = useState([]);
  const [inputUser, setInputUser] = useState("");
  const [sendInfo, setSendInfo] = useState(false);

  useEffect(() => {
    const api_key = `h01Tera32dL2ON8WTtHvlEcCDMtjWq2C`;
    const api = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${inputUser}&limit=8&offset=0&rating=g&lang=en`;
    const fetchGifsData = async () => {
      const results = await axios(api);
      setData(results.data.data);
    };
    fetchGifsData();
  }, [sendInfo, inputUser]);

  const handleChange = (e) => {
    setInputUser(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setSendInfo(true);
    props.handleClick(data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <nav className="flex justify-between px-20 py-10 items-center bg-black">
      <h1 className="text-xl text-white font-bold">
        <img src={giphy} alt="SVG logo image" />
        GIPHY
      </h1>
      <div className="flex items-center">
        <form onSubmit={handleSubmit} className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 pt-0.5 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            onChange={handleChange}
            className="ml-2 outline-none bg-transparent text-white font-"
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
          />
          <button className="text-black" type="submit" onClick={handleClick}>
            ok
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Header;
