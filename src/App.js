import { React, useState } from "react";
import Axios from "axios";
import "./App.css";
import { FaSearch } from "react-icons/fa";
 
function App() {
  // Setting up the initial states using react hook 'useState'
 
  const [data, setData] = useState();
  const [searchWord, setSearchWord] = useState("");
 
  // Function to fetch information on button
  // click, and set the data accordingly
  function getMeaning() {
    Axios.get(
      `https://api.datamuse.com/words?ml=${searchWord}&max=4`
    ).then((response) => {
      console.log(data);
      setData(response.data);
    });
  }

  return (
    <div className="App">
      <h1>Find a similar word</h1>
      <div className="searchBox">
 
        
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchWord(e.target.value);
          }}
        />
        <button
          onClick={() => {
            getMeaning();
          }}
        >
          <FaSearch size="20px" />
        </button>
      </div>
      {data && (
        <div className="showResults">
          <h2>
            <div>
            {data[0].word}{" "} 
            </div>
            <div>
            {data[1].word}{" "}
            </div>
            <div>
            {data[2].word}{" "}
            </div>
            {data[3].word}{" "}
            </h2>
 
        </div>
      )}
    </div>
  );
}
 
export default App;