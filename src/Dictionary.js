import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h2>What word do you want to search?</h2>
      <form onSubmit={search}>
        <input
          className="search-input"
          type="search"
          placeholder="Search a word"
          onChange={handleKeywordChange}
        />
        <input type="submit" value="Search" className="search-button" />
      </form>
      <Result result={result} />
    </div>
  );
}
