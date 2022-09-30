import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Ngoc';
  const age = 18;
  const isMale = true;
  const student ={
    name: 'Easy Frontend',

  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Vu Quoc Ngoc
        </p>

        <p>Hello {name} - {age} </p>
      </header>
    </div>
  );
}

export default App;
