import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Jumbotron from "react-bootstrap/Jumbotron";
import GameCard from "./components/GameCard"


function App() {
  return (
    <div>
      <Jumbotron fluid className="d-flex justify-content-center">
        <h1>Clever Game</h1>
      </Jumbotron>
        <GameCard />
    </div>
  );
}

export default App;
