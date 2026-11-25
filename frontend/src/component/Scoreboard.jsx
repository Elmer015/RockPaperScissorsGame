function Scoreboard({ player1Score, player2Score, drawScore }) {
    return (
        <div className="scoreboard">
            <h2 className="text-xl font-bold text-center">Scoreboard</h2>

            <div className="flex justify-center gap-99 py-2">
                <div className="text-center">
                    <h3 className="font-semibold">Player 1</h3>
                    <p>{player1Score}</p>
                </div>
                <div className="text-center">
                    <h3 className="font-semibold">Player 2</h3>
                    <p>{player2Score}</p>
                </div>
            </div>
        </div>
    );
}

export default Scoreboard;