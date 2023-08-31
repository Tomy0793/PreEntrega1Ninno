import './App.css';
import ItemsListContainer from './components/ItemsListContainer';
import NavBar1 from './components/NavBar1';


function App() {
  return (
    <div className="App">
      <NavBar1/>
      <ItemsListContainer greeting="Bienvenidos al E-commerce"/>      
    </div>
  );
}

export default App;
