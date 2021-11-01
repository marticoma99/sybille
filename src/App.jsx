import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <NavigationBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/shows">
            <LandingPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
