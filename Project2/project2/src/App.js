import logo from './logo.svg';
import './App.css';
import {Addition} from './Addition';
import {Subtraction} from './Subtraction';
import {Multiply} from './Multiply';
import {Divide} from './Divide';

function App() {
  return (
    <>
    <h2>Adding two numbers together:</h2>
    <Addition numberOne={1} numberTwo={1} />
    <Addition numberOne={10} numberTwo={12} />
    <Addition numberOne={3} numberTwo={0.14159} /> 
    {/* hey look, it's pi! */}

    <h2>Subtracting two numbers:</h2>
    <Subtraction numberOne={1} numberTwo={1} />
    <Subtraction numberOne={10} numberTwo={12} />
    <Subtraction numberOne={30} numberTwo={25} />

    <h2>Multiplying two numbers:</h2>
    <Multiply numberOne={1} numberTwo={1} />
    <Multiply numberOne={10} numberTwo={12} />
    <Multiply numberOne={30} numberTwo={25} />

    <h2>Dividing two numbers:</h2>
    <Divide numberOne={280} numberTwo={17} />
    <Divide numberOne={10} numberTwo={5} />
    <Divide numberOne={30} numberTwo={25} />
    </>
  );
}

export default App;
