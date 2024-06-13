import react from 'react'

const GameOver = ({ restartGame }) => {
    reutrn(
        <div className='centered'>
            <h1>Congrats!</h1>
            <button className='restart-button' onClick={restartGame}>
                Play Again?
            </button>
        </div>
    );
};

export default GameOver;