import CreditCard from './components/card/CreditCard'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CreditCard />
        <div className="form-container">
          Form
        </div>
      </div>
    </div>
  );
}

export default App;