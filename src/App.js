import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar';
import Men from './components/menu';
import Navmen from './components/navmen';
import Gal from './components/navbar';
import Carouse from './components/carsoul';
function App() {
  return (
    <div className="App">
     <Navmen/>
     <Gal/>
     <Carouse/>
    </div>
  );
}

export default App;
