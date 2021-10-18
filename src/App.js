import './App.css';
import Banner from './component/Banner/Banner';
import Navabr from './component/Header/Navabr';
import Introduction from './component/Introduction/Introduction';
import Service from './Service/Service';

function App() {
  return (
    <div className="App">
      <Navabr></Navabr>
      <Banner></Banner>
      <Introduction></Introduction>
      <Service></Service>
    </div>
  );
}

export default App;
