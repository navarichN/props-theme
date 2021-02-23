import logo from './logo.svg';
import './App.css';
import dataToDisplay from '../src/data/etsy';
import Listing from './components/Listing/Listing';

function App() {
  return (
    <div className="App">
      <Listing items = {dataToDisplay}/>
    </div>
  );
}

export default App;
