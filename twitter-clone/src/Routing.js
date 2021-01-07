import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import Store from './Redux/store/Store';
import Home from './pages/Home';


const Routing = () => {
    return (
        <BrowserRouter>
            {/* <Provider store={Store}> */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            {/* </Provider> */}
        </BrowserRouter>
    )
};
export default Routing;