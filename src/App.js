import logo from './logo.svg';
import './App.css';
import Item from './Components/Item';
import Card from './Components/Card'

function App() {
  return (
    <Card>
    <Item day="Nirma"> This should be completed</Item>
    <Item day="Surf"> This should be completed</Item>
    <Item day="sjdf;lasdfa"> This should be completed</Item>

    <div className="App">
      Hello JEE
    </div>
    </Card>
  );
}

export default App;
