
import './App.css';
import {Redirect, BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/NavBar/NavBar';
import Gallery from './Components/Gallery/Gallery';
import LoginClass from './Components/Login/LoginClass';
import Products from './Components/Products/Products';
import {createStore} from 'redux';
import allReducers from './reducers/allreducers';
import {Provider} from 'react-redux';
import history from './history'

const store=createStore(allReducers);

function App() {
  console.log(process.env.REACT_APP_API)
  return (
    <Provider  store={store}>
    <Router history={history}>   
        <NavBar></NavBar>
        <div className="Content">
        <Switch>
         <Route path="/" exact>
            <Redirect exact from="/" to="/Login" />
         </Route>
         <Route path="/Home/" exact>
         <Home></Home>
         </Route>

        <Route path="/Gallery" exact>
          <Gallery ></Gallery>
         </Route>
         <Route path="/Products" exact>
          <Products ></Products>
         </Route>
         <Route path="/Login" exact>
          <LoginClass ></LoginClass>
         </Route>
         </Switch>
        </div>
        
         <footer>
            This is the footer Regisetered @Training
        </footer>
    </Router>
    </Provider>
  );
}

export default App;
