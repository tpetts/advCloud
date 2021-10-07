import logo from './logo.svg';
import './App.css';
import {Addition} from './Addition';

function App() {
  return (
    <>
    <h2>Adding two numbers together:</h2>
    <Addition numberOne={1} numberTwo={1} />
    <Addition numberOne={10} numberTwo={12} />
    <Addition numberOne={3} numberTwo={0.14159} /> 
    {/* hey look, it's pi! */}
    </>
  );
}

export default App;
