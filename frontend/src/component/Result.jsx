import rockHand from "../assets/rockHand.jpg";
import paperHand from "../assets/paperHand.jpg";
import scissorsHand from "../assets/scissorsHand.jpg";

function Result({ result, player1Choice, player2Choice}) {
  const images = {
    Rock: rockHand,
    Paper: paperHand,
    Scissors: scissorsHand,
  };

  return (
    <div className="pt-25">
        <h2 className="text-center font-bold text-white">{result}</h2>
        <div className="flex justify-center gap-5 text-center py-4">
            <h3 className="text-white">Player 1 Choice:</h3>
            <h3 className="text-white">Player 2 Choice:</h3>
        </div>
        
        <div className="flex justify-center gap-5 text-center pt-4 ">
            <img src={images[player1Choice]} alt={player1Choice} className="w-20 h-20 rounded-lg bg-[#9EDAE5] p-1" />
            <img src={images[player2Choice]} alt={player2Choice} className="w-20 h-20 rounded-lg bg-[#9EDAE5] p-1" />
        </div>
        
        <div className="flex justify-center gap-11 text-center pt-1">
            <h3 className="text-white">{player1Choice}</h3>
            <h3 className="text-white">{player2Choice}</h3>
        </div>
    </div>
  );
}

export default Result;