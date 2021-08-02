import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <span className="part-of-speech">{props.meaning.partOfSpeech}</span>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <span key={index} className="definition text-lowercase">
              {definition.definition}
            </span>
          );
        })}
      </p>
    </div>
  );
}
