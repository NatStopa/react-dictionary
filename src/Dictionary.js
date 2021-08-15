import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Result from "./Result.js";
import Photos from "./Photos.js";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResult(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f9170000100000148ba34ba9d584f6396110fcdf4e5c1fd";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
