import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Result from './component/Result'
import Scoreboard from './component/Scoreboard'
import ChoiceBtn from './component/ChoiceBtn'

function App() {
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
          player1Score={2}
          player2Score={1}
        />

        {/*Result*/}
        <Result
          result="You Win!"
        />

        {/*Choices*/}
        <div>
          <h2 className="text-center text-lg font-semibold pt-45">
            Make Your Move
          </h2>

          <div className="flex justify-center gap-3">
            <ChoiceBtn choice="Rock" onClick={() => {}} />
            <ChoiceBtn choice="Paper" onClick={() => {}} />
            <ChoiceBtn choice="Scissors" onClick={() => {}} />
          </div>
        </div>

        {/*Game Button*/}
        <div className="flex justify-center gap-3 py-10">
          <button className="rounded-lg bg-yellow-600 px-5 py-2 font-medium text-white hover:bg-yellow-700">
            Play Again
          </button>
        </div>

      </div>
    </div>
  );
}

export default App
