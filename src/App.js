import './App.css';
import Sortear from './Componentes/Aleatorio';
import Pesquisa from './Componentes/Pesquisa';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Sortear/>
        <Pesquisa/>
      </header>
    </div>
  );
}

export default App;
