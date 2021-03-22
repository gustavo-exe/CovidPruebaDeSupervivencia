import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PieChart from "./components/Charts/PieChart";
import Footer from "./components/Footer/Footer";
function App() {
  return (
      <div className="App">
        <NavBar/>
        <PieChart/>
        <Footer/>
      </div>
  );
}

export default App;
