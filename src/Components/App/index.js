import "./App.scss";
import MainPage from "../MainPage/index";
import Work from "../Work/index";
import { Route, Switch } from "react-router";
import WorkDetails from "../WorkDetails";
import Vibe from "../Vibe";
import { useStore } from "../../store";
import { AnimatePresence } from "framer-motion";

function App() {
  const workItems = useStore((state) => state.work);

  return (
    <AnimatePresence>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/work"
            render={() => <Work workItems={workItems} />}
          />
          <Route exact path="/vibe" render={() => <Vibe />} />
          <Route
            exact
            path="/work-brandfolder"
            render={() => <WorkDetails name={"Brandfolder"} />}
          />
          <Route
            exact
            path="/work-smartsheet"
            render={() => <WorkDetails name={"Smartsheet"} />}
          />
          <Route exact path="/" render={() => <MainPage />} />
        </Switch>
      </div>
    </AnimatePresence>
  );
}

export default App;
