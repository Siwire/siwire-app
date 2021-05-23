import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router'; // react-router v4/v5
import { ConnectedRouter } from 'connected-react-router';
import configereStore, { history } from './redux/configureStore';
import MainContainer from './containers/MainContainer';
import './App.css';

const store = configereStore(/* provide initial state if any */)

function App() {
  return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route path="/" render={() => {
                return <MainContainer />
              }} />
            </Switch>
          </>
        </ConnectedRouter>
      </Provider>
  );
}
export default App;








