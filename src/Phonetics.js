import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        href={props.phonetic.audio}
        target="_blank"
        rel="noreferrer"
        className="audio-button"
      >
        🔊
      </a>
      <span className="each-phonetic">{props.phonetic.text}</span>
    </div>
  );
}
