import NavBar from  './components/navbar/NavBar'
import ItemListContainer from './components/itemlistcontainer/ItemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="Hola Mundo"/>
    </div>
  );
}

export default App;
