import react, { useState } from 'react'
import GameOver from './GameOver';
import Card from './Card';
import "./game.css";

const GameBoard = () => {

    const cards = [
        "TV",
        "TV",
        "VT",
        "VT",
        "hbird",
        "hbird",
        "name",
        "name",
        "seal",
        "seal",
        "tracks",
        "tracks"
    ];



    const shuffle = (array) => {
        let currentIndex = array.length,
            temporaryValue,
            randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;

        }

        return array;
    }


    const [cardList, setCardList] = useState(
        shuffle(cards).map((name, index) => {
            return {
                id: index,
                name: name,
                flipped: false,
                matched: false,
            }
        })
    );

    const [flippedCards, setFlippedCards] = useState([]);
    const [gameOver, setGameOver] = useState(false);



    const handleClick = (name, index) => {

    }


    const check = () => {

    }

    const isGameOver = () => {
        var isDone = true;
        cardList.forEach(card => {
            if (!card.matched)
                isDone = false;
        });

        setGameOver(isDone);
    }


    const restartGame = () => {

        setCardList(
            shuffle(cards).map((name, index) => {
                return {
                    name: name,
                    index: index,
                    matched: false,
                    flipped: false
                }
            })
        );


        setGameOver(false);
        setFlippedCards([]);
    }


    return (

        <div className='game-board'>
            {!gameOver &&
                cardList.map((card, index) => {
                    <Card
                        key={index}
                        id={index}
                        name={card.name}
                        flipped={card.flipped}
                        matched={card.matched}
                        clicked={flippedCards.length == 2 ? () => { } : handleClick()}
                    />
                })}
            {gameOver && <GameOver restartGame={restartGame} />}
        </div>
    );

}

export default GameBoard;