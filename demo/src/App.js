import StyledButton from './components/Button/Button';
import { FancyButton } from './components/Button/Button.styles';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <button>Button</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <hr/>
      </div>
      <FancyButton variant="outlined">Styled Button</FancyButton>
    </div>
  );
}

export default App;
