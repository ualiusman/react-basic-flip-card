import { useState } from "react";
import './FlipCard.css'

function FlipCard({ cardFront, cardBack }) {

    const [flipped, setFlipped] = useState(false);


    const flip = () => {
        setFlipped(!flipped);
    }

    return (
        <div className="card-container">
            <div onClick={() => flip()} className={flipped ? "card flipped" : "card"}>
                <div className="front">
                    {cardFront}
                </div>
                <div className="front back">
                    {cardBack}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;