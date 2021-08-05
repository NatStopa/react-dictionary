import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span className="similar">similar</span>
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return (
              <li key="index" className="each-synonym">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
