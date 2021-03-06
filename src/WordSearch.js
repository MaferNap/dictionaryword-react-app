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

  function handleSubmit(event) {
    event.preventDefault();
    //const options = {
    //method: "GET",
    //url: `https://wordsapiv1.p.rapidapi.com/words/${word}`,
    //headers: {
    // "x-rapidapi-key": "501708158bmsh8630056176c00b0p1049dejsnc7f2e070c2a0",
    //"x-rapidapi-host": "wordsapiv1.p.rapidapi.com"
    //}
    //};

    //axios.get(options).then(displayWord);
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;

    axios.get(apiUrl).then(displayWord);
  }
  function displayWord(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    console.log(response.data[0].word);
    console.log(response.data[0].meanings[0].partOfSpeech);
    console.log(response.data[0]);

    console.log(response.data[0].phonetics[0].text);
    console.log(response.data[0].meanings[0].definitions[0].example);
    getUpdate(true);
    //alert(`The word you're looking for is ${word}`);
    getDefinition(response.data[0].meanings[0].definitions[0].definition);
    getConcept(response.data[0].word);
    getPronunciation(response.data[0].phonetics[0].text);
    getType(response.data[0].meanings[0].partOfSpeech);
    getExample(response.data[0].meanings[0].definitions[0].example);
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
        </div>
      </div>
    );
  } else {
    return form;
  }
}
