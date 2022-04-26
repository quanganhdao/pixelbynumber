import logo from './logo.svg';
import GameField from './components/GameField'
import UI from './components/UI'
import './App.css';

function App() {
  return (
      <div className="wrapper">
        <GameField></GameField>
        <UI></UI>
      </div>
    );
}

export default App;
