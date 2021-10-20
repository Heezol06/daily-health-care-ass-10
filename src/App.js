import './App.css';
import Footer from './component/Footer/Footer';
import { BrowserRouter , Switch, Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import OurExpert from './component/OurExpert/OurExpert';
import AboutUs from './component/AboutUs/AboutUs';
import NotFound from './component/NotFound/NotFound';
import Registration from './component/Registration/Registration';
import AutheProvider from './component/Context/AutheProvider';
import Details from './component/Details/Details';
import PrivetRoute from './component/PrivetRoute/PrivetRoute';
import Navabr from './component/Header/Navabr';

function App() {
  return (
    <div className="App">
      <AutheProvider>
      <BrowserRouter>
      <Navabr></Navabr>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>
        <Route path="/home">
        <Home></Home>
        </Route>
        <Route path="/login">
        <Login></Login>
        </Route>
        <Route path="/registration">
        <Registration></Registration>
        </Route>
        <Route path="/ourexpert">
        <OurExpert></OurExpert>
        </Route>
        <Route path="/aboutus">
        <AboutUs></AboutUs>
        </Route>
        <PrivetRoute path="/Details/:serviceId">
        <Details></Details>
        </PrivetRoute>
        <Route exact path="*">
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
      </AutheProvider>
    </div>
  );
}

export default App;
