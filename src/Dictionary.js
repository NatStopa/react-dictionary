import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>What word do you want to search?</h2>
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Type a word"
          onChange={handleKeywordChange}
        />
      </form>
    </div>
  );
}
