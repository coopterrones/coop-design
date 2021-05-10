import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route, Switch } from "react-router";
import Grid from "../Grid";
import WorkDetails from "../WorkDetails";
import { useStore } from "../../store";
import { AnimatePresence } from "framer-motion";
import Project from "../Project";

function App() {
  const store = useStore((state) => state);

  const sandboxItems = store.sandbox;

  const workItems = store.work;

  return (
    <AnimatePresence>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/work"
            render={() => <Work workItems={workItems} />}
          />
          <Route
            exact
            path="/projects"
            render={() => (
              <Grid
                header="This is my playground. A safe space to experiment and flex my imagination."
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
            render={() => <WorkDetails name={"Canoe Club"} />}
          />
          <Route
            exact
            path="/work-poppn-co"
            render={() => <WorkDetails name={"Poppn"} />}
          />
          <Route
            exact
            path="/work-highland-style"
            render={() => <WorkDetails name={"Highland Style"} />}></Route>
          <Route exact path="/" render={() => <MainPage />} />
          <Route path="/playground/:id" component={Project}></Route>
        </Switch>
      </div>
    </AnimatePresence>
  );
}

export default App;
