import { useState} from 'react'
import Result from './component/Result'
import Scoreboard from './component/Scoreboard'
import ChoiceBtn from './component/ChoiceBtn'
import { GetBotChoice, ResultCondition} from './utils/Logic'

function App() {
  const [player1Choice, setPlayer1Choice] = useState(null);
  const [player2Choice, setPlayer2Choice] = useState(null);
  const [result, setResult] = useState(null);

  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  const handleChoice = (choice) => {
    setPlayer1Choice(choice);
    const Bot = GetBotChoice();
    setPlayer2Choice(Bot);

    const result = ResultCondition(choice, Bot);
    setResult(result);

    if(result === "Player 1 wins!"){
      setPlayer1Score(player1Score + 1);
    }else if(result === "Player 2 wins!"){
      setPlayer2Score(player2Score + 1);
    }
  };

  const handlePlayAgain = () => {
    setResult(null);
    setPlayer1Choice(null);
    setPlayer2Choice(null);
    setPlayer1Score(0);
    setPlayer2Score(0);
  };

  return (
    <div className="min-h-screen py-15">
      <div className="mx-auto max-w-lg">

        {/*Title*/}
        <div className="text-center py-10">
          <h1 className="text-4xl font-bold">
            Rock Paper Scissors
          </h1>
        </div>

        {/*Scoreboard*/}
        <Scoreboard 
          player1Score={player1Score}
          player2Score={player2Score}
        />

        {/*Result*/}
        <Result
          player1Choice={player1Choice}
          result={result}
          player2Choice={player2Choice}
        />

        {/*Choices*/}
        <div>
          <h2 className="text-center text-lg font-semibold pt-45">
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
          <button
            className="rounded-lg bg-red-600 px-5 py-2 font-medium text-white hover:bg-red-700"
            onClick={handlePlayAgain}
          >
            Reset Game
          </button>
        </div>

      </div>
    </div>
  );
}

export default App
