import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <Router>
    <div className="App">
    
      <Navbar/>
  </div>


    </Router>
  ); 
}

export default App;
