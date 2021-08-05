import React from "react";
import Synonyms from "./Synonyms.js";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <span className="part-of-speech">{props.meaning.partOfSpeech}</span>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div>
              <span key={index} className="definition">
                {definition.definition}
              </span>
              <br />
              <span>
                <Synonyms synonyms={definition.synonyms} />
              </span>
            </div>
          );
        })}
      </p>
    </div>
  );
}
