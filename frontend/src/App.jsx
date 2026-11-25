import { useState} from 'react'
import Result from './component/Result'
import Scoreboard from './component/Scoreboard'
import ChoiceBtn from './component/ChoiceBtn'
import { GetBotChoice, ResultCondition} from './utils/Logic'
import backgroundImage from './assets/background.png'

function App() {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [botChoice, setbotChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [player1Score, setPlayer1Score] = useState(0);
  const [botScore, setbotScore] = useState(0);

  const handleChoice = (choice) => {
    setPlayer1Choice(choice);
    const Bot = GetBotChoice();
    setbotChoice(Bot);

    const result = ResultCondition(choice, Bot);
    setResult(result);

    if(result === "Player 1 wins!"){
      setPlayer1Score(player1Score + 1);
    }else if(result === "Bot wins!"){
      setbotScore(botScore + 1);
    }
  };

  const handleBackHome = () => {
    setIsPlaying(false);
    setResult(null);
    setPlayer1Choice(null);
    setbotChoice(null);
    setPlayer1Score(0);
    setbotScore(0);
  };

  const handlePlayAgain = () => {
    setResult(null);
    setPlayer1Choice(null);
    setbotChoice(null);
    setPlayer1Score(0);
    setbotScore(0);
  };

  return (
    <div>
      {!isPlaying ? (
      // Home Page
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Rock Paper Scissors
          </h1>

          <p className="mt-4 text-lg text-white">
            The Game
          </p>

          <button className="mt-8 rounded-lg bg-white px-10 py-3 text-lg font-bold text-black shadow-lg transition hover:bg-white-700 hover:bg-[#9EDAE5]" onClick={() => setIsPlaying(true)}>Play</button>
        </div>
      </div>
    ) : (
      // Game Page
      <div className="min-h-screen py-15" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
      <div className="mx-auto max-w-lg">

        {/*Title*/}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold  text-white">
            Rock Paper Scissors
          </h1>
        </div>
      
        {/*Scoreboard*/}
        <Scoreboard 
          player1Score={player1Score}
          botScore={botScore}
        />

        {/*Result*/}
        {result && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="rounded-lg bg-slate-900 p-6">
              <Result
                player1Choice={player1Choice}
                result={result}
                botChoice={botChoice}
              />

              <button className="mt-4 w-full rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700" onClick={() => setResult(null)}>Close</button>
            </div>
          </div>
        )}

        {/*Choices*/}
        <div>
          <h2 className="text-center text-lg font-semibold pt-35 text-white">
            Make Your Move
          </h2>

          <div className="flex justify-center gap-3 py-5">
            <ChoiceBtn choice="Rock" onClick={handleChoice} />
            <ChoiceBtn choice="Paper" onClick={handleChoice} />
            <ChoiceBtn choice="Scissors" onClick={handleChoice} />
          </div>
        </div>

        {/*Game Button*/}
        <div className="flex justify-center gap-3 py-10">
          <button className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700" onClick={handlePlayAgain}>Reset Game </button>
        </div>
        <div className="flex justify-center pt-50">
          <button className="rounded-lg bg-white px-5 py-2 font-medium text-black hover:bg-gray-200" onClick={handleBackHome}>Back to Home</button>
        </div>
      </div>
    </div>
    )}
    </div>
  );
}

export default App
