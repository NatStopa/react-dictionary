import React from "react";

export default function Result(props) {
  console.log(props.result);
  if (props.result) {
    return (
      <div className="Result">
        <h3 className="word">{props.result.word}</h3>
      </div>
    );
  } else {
    return null;
  }
}
