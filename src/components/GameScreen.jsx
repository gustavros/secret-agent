import React from "react";
import { useState, useRef } from "react";
import Footer from "./Footer";

const GameScreen = ({
  verifyLetter,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
  letters,
}) => {
  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    verifyLetter(letter);
    setLetter("");

    letterInputRef.current.focus();
  }

  return (
    <div className="flex flex-col justify-center items-center text-center gap-2 bg-transparent shadow-2xl p-2 m-6 w-full">
      <p>
        <span className="font-bold">Pontuação: {score}</span>
      </p>

      <h1 className="text-2xl">Adivinhe o agente:</h1>
      <h3>
        Dica sobre o agente:{" "}
        <span className="text-[#53212B]">Você não precisa de dica.</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="m-4 p-4 border-4 flex max-w-[90%]">
        {letters.map((letter, index) =>
          guessedLetters.includes(letter) ? (
            <span
              key={index}
              className="text-7xl border border-1 h-24 w-24 font-bold flex justify-center items-center bg-green-300 uppercase sm:text-4xl sm:h-10 "
            >
              {letter}
            </span>
          ) : (
            <span
              key={index}
              className="text-7xl border border-1 h-24 w-24 font-bold flex justify-center items-center bg-[#fff] text-white  sm:text-4xl sm:h-10"
            ></span>
          )
        )}
      </div>
      <div>
        <p>Tente adivinhar uma letra do agente:</p>
        <form
          onSubmit={handleSubmit}
          className="flex align-center justify-center"
        >
          <input
            ref={letterInputRef}
            value={letter}
            onChange={(e) => {
              setLetter(e.target.value);
            }}
            type="text"
            name="letter"
            maxLength={1}
            required
            className=" w-14 h-14 text-center text-4xl m-4 focus:outline-offset-2 outline-[#063940] text-black"
          />
          <button className="border border-[#FFFBF5] border-1 p-2 shadow-lg hover:bg-[#063940] transition-all text-white font-semibold uppercase ">
            Jogar!
          </button>
        </form>
      </div>
      <div>
        <p className="mb-5">Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter},</span>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default GameScreen;
