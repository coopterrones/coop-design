import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route, Switch } from "react-router";
import Grid from "../Grid";
import WorkDetails from "../WorkDetails";
import { useStore } from "../../store";
import { Helmet } from "react-helmet";

function App() {
  const store = useStore((state) => state);

  const sandboxItems = store.sandbox;

  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cooper Terrones Design</title>
      </Helmet>
      <Switch>
        <Route exact path="/work" render={() => <Work />} />
        <Route
          exact
          path="/sandbox"
          render={() => (
            <Grid
              header="This is my sandbox. A safe space to experiment and flex my imagination."
              subheader="A place
            to let my mind wander and grow."
              items={sandboxItems}
            />
          )}
        />
        <Route
          exact
          path="/film"
          render={() => (
            <Grid
              header="The beauty of film lies in the finite. The comfort in the imperfection."
              subheader="Film captures the emotion of which a sensor could never recreate."></Grid>
          )}
        />
        <Route exact path="/current-projects"></Route>
        <Route
          exact
          path="/work-canoe-club"
          render={() => <WorkDetails name="Canoe Club" />}
        />
        <Route
          exact
          path="/work-poppn-co"
          render={() => <WorkDetails name="Poppn Co." />}
        />
        <Route exact path="/" render={() => <MainPage />} />
      </Switch>
    </div>
  );
}

export default App;
