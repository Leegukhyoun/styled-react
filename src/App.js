import './App.css';
import Buttons from './components/Buttons';

function App() {
  return (
    <div className="App">
      <Buttons size="large" color="blue">BUTTON</Buttons>
      <Buttons size="medium" color="blue">BUTTON</Buttons>
      <Buttons size="small" color="blue">BUTTON</Buttons><br/>
      <Buttons size="large" color="black">BUTTON</Buttons>
      <Buttons size="medium" color="black">BUTTON</Buttons>
      <Buttons size="small" color="black">BUTTON</Buttons><br/>
      <Buttons size="large" color="pink">BUTTON</Buttons>
      <Buttons size="medium" color="pink">BUTTON</Buttons>
      <Buttons size="small" color="pink">BUTTON</Buttons><br/>
      <Buttons size="large" color="whiteblue">BUTTON</Buttons>
      <Buttons size="medium" color="whiteblack">BUTTON</Buttons>
      <Buttons size="small" color="whitepink">BUTTON</Buttons><br/>
      <Buttons size="long" color="blue">BUTTON</Buttons><br/>
      <Buttons size="long" color="black">BUTTON</Buttons><br/>
      <Buttons size="long" color="pink">BUTTON</Buttons>
    </div>
  );
}

export default App;
