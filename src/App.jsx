import GameOverScreen from "./components/GameOverScreen";
import GameScreen from "./components/GameScreen";
import StartScreen from "./components/StartScreen";

import { useState } from "react";

import { agentlist } from "./data/agentlist";
import { useEffect } from "react";

const stages = [
  {
    id: 1,
    name: "start",
  },
  {
    id: 2,
    name: "game",
  },
  {
    id: 3,
    name: "end",
  },
];

function App() {
  const [stage, setStage] = useState(stages[0].name);
  const [agent] = useState(agentlist);
  const [pickedAgent, setPickedAgent] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

  window.onload = () => {
    setStage(stages[0].name);
    setScore(0);
  };

  // pick agentlist

  function handlePickedAgent() {
    const randomAgent =
      agent.agentes[Math.floor(Math.random() * agent.agentes.length)];

    return { randomAgent };
  }

  // start game
  function startGame() {
    // clear all latters
    clearLetterStates();

    // pick agent

    const randomAgent = handlePickedAgent();

    // create an array of letters

    let randomAgentLetters = randomAgent.randomAgent.split("");

    // split the agent name into an array of letters

    randomAgentLetters = randomAgentLetters.map((letter) => {
      return letter.toLowerCase();
    });

    // fill states

    setPickedAgent(randomAgent.randomAgent);
    setLetters(randomAgentLetters);

    setStage(stages[1].name);
  }

  // process the letter input
  function verifyLetter(letter) {
    const normalizedLetter = letter.toLowerCase();

    // check if letter hans already been utilized

    if (
      wrongLetters.includes(normalizedLetter) ||
      guessedLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess

    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  }

  function clearLetterStates() {
    setGuessedLetters([]);
    setWrongLetters([]);
    setGuesses(3);
  }

  useEffect(() => {
    if (guesses <= 0) {
      // reset all states

      clearLetterStates();

      setStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    if (guessedLetters.length === uniqueLetters.length) {
      setScore((actualScore) => actualScore + 100);

      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  // restarts the game
  function retry() {
    clearLetterStates();

    setScore(0);
    setGuesses(3);
    setStage(stages[0].name);
  }

  return (
    <>
      <div className="flex justify-center items-center text-center">
        {stage === "start" && <StartScreen startGame={startGame} />}
        {stage === "game" && (
          <GameScreen
            verifyLetter={verifyLetter}
            letters={letters}
            guessedLetters={guessedLetters}
            wrongLetters={wrongLetters}
            guesses={guesses}
            score={score}
          />
        )}
        {stage === "end" && <GameOverScreen retry={retry} score={score} />}
      </div>
    </>
  );
}

export default App;
