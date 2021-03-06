import React from "react";
import WordSearch from "./WordSearch";

export default function Frame() {
  return (
    <div>
      <div className="container">
        <div className="card frame">
          <div className="card-body">
            <div className="row">
              <div className="col-12">
                <h2> Which word are you looking for?</h2>
                <WordSearch />
                <p> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
