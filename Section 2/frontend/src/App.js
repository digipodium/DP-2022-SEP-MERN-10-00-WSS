import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';

function App() {
  
  return (
    <div>
      <h1 style={ { color: 'white', backgroundColor: 'blueviolet', border: '1px solid red' } } >My React App</h1>
      <button className='btn btn-primary'>Nice</button>

      <br />
      <Login />
      <input type="text" />
    </div>
  );
}

export default App;