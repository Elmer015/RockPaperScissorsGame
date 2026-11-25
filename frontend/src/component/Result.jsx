function Result({ result, player1Choice, player2Choice}) {
  return (
    <div className="pt-25">
        <h2 className="text-center font-bold">{result}</h2>
        <div className="flex justify-center gap-3 text-center py-4">
            <h3>Player 1 Choice:</h3>
            <h3>Player 2 Choice:</h3>
        </div>
        
        <div className="flex justify-center gap-5 text-center py-4">
            <p className="mt-2 text-xl font-bold">{player1Choice || "None"}</p>
            <p className="mt-2 text-xl font-bold">{player2Choice || "None"}</p>
        </div>
        
    </div>
  );
}

export default Result;