import React from "react";
import Meaning from "./Meaning.js";

export default function Result(props) {
  if (props.result) {
    return (
      <div className="Result">
        <h3 className="word">{props.result.word}</h3>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
