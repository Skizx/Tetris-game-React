import './App.css';

import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header>
        <div>{/* Props Lignes&Colonnes envoyées au composant Game */}</div>
        <Game rows={20} columns={10} />
      </header>
    </div>
  );
}

export default App;
