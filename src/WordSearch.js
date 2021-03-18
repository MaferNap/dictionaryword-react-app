import React, { useState } from "react";

import axios from "axios";

export default function WordSearch() {
  let [word, showWord] = useState("");
  let [updated, getUpdate] = useState(false);
  let [definition, getDefinition] = useState("");
  let [concept, getConcept] = useState("");
  let [pronunciation, getPronunciation] = useState("");
  let [type, getType] = useState("");
  let [example, getExample] = useState("");
  let [secondDef, getSecondDef] = useState("");
  let [secondExample, getSecondExample] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

    axios.get(apiUrl).then(displayWord);
  }
  function displayWord(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0].meanings[0].definitions[1].definition);
    console.log(response.data[0].word);
    console.log(response.data[0].meanings[0].partOfSpeech);
    console.log(response.data[0]);

    console.log(response.data[0].phonetics[0].text);
    console.log(response.data[0].meanings[0].definitions[0].example);
    console.log(response.data[0].meanings[0].definitions[1].example);

    getUpdate(true);

    getDefinition(response.data[0].meanings[0].definitions[0].definition);
    getSecondDef(response.data[0].meanings[0].definitions[1].definition);
    getConcept(response.data[0].word);
    getPronunciation(response.data[0].phonetics[0].text);
    getType(response.data[0].meanings[0].partOfSpeech);
    getExample(response.data[0].meanings[0].definitions[0].example);
    getSecondExample(response.data[0].meanings[0].definitions[1].example);
  }

  function getWord(event) {
    showWord(event.target.value);
  }
  let form = (
    <div>
      <form className="wordSearch" id="word-search" onSubmit={handleSubmit}>
        <input
          className="wordBox"
          type="text"
          placeholder="I want to know..."
          autoComplete="off"
          autoFocus={false}
          id="word-quest"
          onChange={getWord}
        />
        <p> </p>
        <input
          className="searchbutton"
          type="submit"
          value="Look it up!"
          id="word-search-button"
        />
      </form>
    </div>
  );

  if (updated) {
    return (
      <div>
        {form}

        <br />
        <div className="definition">
          <span className="concept"> {concept}</span>
          <br />
          {pronunciation}
          <br />
          {type}
          <br />
          <p>
            <span> {definition} </span>
          </p>
          <br />
          <p>"...{example}"</p>
          <p> or, {concept} can also mean: </p>
          <br />
          {secondDef}
          <br />
          <p>like in this last example:</p>
          <br />
          <p> "...{secondExample}"</p>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
