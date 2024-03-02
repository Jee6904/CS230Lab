// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import NavBar from './Navbar';
import Cards from './Card';
function App() {
  return (
    <div className="App">
    <NavBar />
    <h1>CS 230L</h1>
    <h2>Section-01</h2>
    <p>WVU ID: 800395276</p>
    <p>Hi I am Geoffrey McCloud</p>
    <Cards />
    </div>
  );
}

export default App;
