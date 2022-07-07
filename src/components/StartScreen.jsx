import React from "react";
import Footer from "./Footer";

const StartScreen = ({ startGame }) => {
  return (
    <div className="flex flex-col w-max-[1024px] justify-center items-center text-center">
      <h1 className="text-5xl p-4">Descubra o agente</h1>
      <p className="mb-6 text-[##fcd7da]">
        Clique no botão abaixo para começar a jogar!
      </p>
      <button
        onClick={startGame}
        className="border border-[#FFFBF5] border-1 p-4 shadow-lg hover:bg-[#063940] transition-all text-white font-semibold uppercase "
      >
        COMEÇAR O JOGO
      </button>

      <Footer />
    </div>
  );
};

export default StartScreen;
