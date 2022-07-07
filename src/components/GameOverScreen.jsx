import React from "react";
import Footer from "./Footer";

const GameOverScreen = ({ retry, score }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h1 className="text-5xl p-4">Fim de jogo!</h1>
      <h2>
        Sua pontuação foi: <span className="">{score}</span>
      </h2>
      <button
        onClick={retry}
        className="border border-[#FFFBF5] border-1 p-4 shadow-lg hover:bg-[#063940] transition-all text-white font-semibold uppercase "
      >
        TENTE NOVAMENTE, NOVATO
      </button>

      <img
        src="src/assets/images/maxresdefault.jpg"
        alt=""
        className="max-w-md"
      />

      <footer className=" absolute bottom-2 mx-auto ">
        Feito com 🤍 por{" "}
        <a href="https://www.github.com/gustavros" target="_blank">
          Gustavo Santana
        </a>{" "}
      </footer>
    </div>
  );
};

export default GameOverScreen;
