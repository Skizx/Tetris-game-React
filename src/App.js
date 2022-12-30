/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';

import Game from "./components/Game";

function App() {
  return (
    <div className="App">
      <header /* Props Lignes&Colonnes envoyées au composant Game */>
        <Game rows={20} columns={10} />
      </header>
    </div>
  );
}

export default App;
