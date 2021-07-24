import './App.css';
import CalculatorForm from './components/calculatorForm';
import background from "./assets/background.jpg";


function App() {
  return (
        <div class="container" style={{ backgroundImage: `url(${background})` }}>
       <CalculatorForm />
    </div>
  );
}

export default App;
