import "./App.css";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

//Todo dentro de un div
//los atributos tienen nombres distintos, con camelCase
//todo dentro del return de la funcion
//concatenando cosas dentro de llaves -> ej src ={logo}
//cada componente retorna UN SOLO DIV

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <NavBar />
        <ItemListContainer text="Soy un container!" />
        
      </header>
    </div>
  );
}

export default App;
