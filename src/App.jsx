import React, { useState } from 'react';
import { getRandomNumber } from './utils/getRandomNumber';
import { getBackground } from './utils/getBackground';
import Card from './components/Card/Card';
import Button from './components/Button/Button';
import Author from './components/Author/Author';
import phrases from './assets/JSON/phrases.json';
const App = () => {
  const [indexBack, setIndexBack] = useState(getRandomNumber(0, 3));
  let indexRandomPhrase = getRandomNumber(0, phrases.length - 1);
  const [indexPhrase, setIndexPhrase] = useState(indexRandomPhrase);
  console.log(`${indexPhrase} - ${indexRandomPhrase}`);
  const getPraseRandom = () => {
    while (indexPhrase == indexRandomPhrase) {
      indexRandomPhrase = getRandomNumber(0, phrases.length - 1);
    }
    setIndexPhrase(indexRandomPhrase);
  };
  const phraseRandom = phrases[indexPhrase];
  return (
    <div className={`min-h-full flex flex-col items-center justify-center`}>
      <div
        className={`bg ${getBackground(
          indexBack,
        )} h-screen w-screen min-w-screen min-h-screen absolute top-0 bg-slate-500`}
      ></div>
      <h3 className="title text-3xl uppercase py-24 w-80 text-center mx-auto relative z-0 text-white">
        Fortune cookies
      </h3>
      <Card>
        <p className="text-justify">{phraseRandom.quote}</p>
      </Card>
      <Button setIndexBack={setIndexBack} getPraseRandom={getPraseRandom}>
        <p>Try my luck</p>
      </Button>
      <Author authorName={phraseRandom.author}></Author>
    </div>
  );
};

export default App;
