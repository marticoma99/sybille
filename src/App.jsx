import NavigationBar from "./components/NavigationBar";
import LandingPage from "./components/LandingPage";
import ContactPage from "./components/ContactPage";
import ShowsPage from "./components/ShowsPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./components/AboutPage";

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
            <ShowsPage />
          </Route>
          <Route path="/contact">
            <ContactPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
