import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from './App'
import Asteroid from './Asteroid'

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/asteroid">
            <Asteroid />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  );
}