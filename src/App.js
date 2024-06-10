import FlipCard from './components/FlipCard'
import './App.css';

function App() {
  return (
    <div>
      <FlipCard
        cardFront={<Front />}
        cardBack={<Back />}
      >
      </FlipCard>
      <FlipCard
        cardFront={<Front />}
        cardBack={<Back />}
      >

      </FlipCard>
    </div>
  );


}


const Front = () => {
  return <img src="https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" alt="Jimmy Eat World" />
}

const Back = () => {
  return "Ensamle cast";
}

export default App;
