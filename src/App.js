import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';


function App() {
  return (
    <div className="App">
      <PersonCard firstName="John" lastName="Smith" age={8} hairColor="Brown" />
      <PersonCard firstName="Sarah" lastName="Johnson" age={26} hairColor="Black" />
      <PersonCard firstName="Martin" lastName="Vera" age={25} hairColor="Brown" />
      <PersonCard firstName="Jessica" lastName="Navarro" age={24} hairColor="Green" />
    </div>
  );
}

export default App;
