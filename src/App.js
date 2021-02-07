import CreditCard from './components/card/CreditCard'
import Form from './components/form/Form'
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="container">
        <CreditCard />
        <div className="form-container">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;