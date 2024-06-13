import { useState } from "react";
import './FlipCard.css'

function FlipCard({ cardFront, cardBack, rotation = 'x', flipEvent = 'onHover' }) {

    const [flipped, setFlipped] = useState(false);


    const flipOnClicked = () => {
        if (flipEvent.toLowerCase() === 'onclick')
            setFlipped(!flipped);
    }


    const flipOnHover = () => {
        if (flipEvent.toLowerCase() === 'onhover')
            setFlipped(!flipped);
    }

    const getStyles = (rotation) => {
        if (!flipped)
            return;
        if (rotation.toLowerCase() === "x") {
            return {
                transform: "rotateX(180deg)"
            };
        }
        else {
            return {
                transform: "rotateY(180deg)"
            };
        }


    }

    return (
        <div className="card-container">
            <div style={getStyles(rotation)}
                className={"card"}
                onClick={() => flipOnClicked()}
                onMouseEnter={() => flipOnHover()}
                onMouseLeave={() => flipOnHover()}
            >
                <div className="front">
                    {cardFront}
                </div>
                <div style={getStyles(rotation)} className="front back">
                    {cardBack}
                </div>
            </div>
        </div>
    )
}

export default FlipCard;