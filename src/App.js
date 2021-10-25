import logo from "./logo.svg";
import "./App.scss";
import Nav from "./components/Nav";
import Slider from "./components/Slider";
import Description from "./components/Description";

function App() {
     return (
          <div className="App-container">
               <Nav />
               <Slider />
               <Description />
          </div>
     );
}

export default App;
