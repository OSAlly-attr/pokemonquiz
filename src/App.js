import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Start } from "./start";
import { Silhouette } from "./silhouette";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
        <br /> */}

        <Switch>
          {/* exactをつけると完全一致になります。Homeはexactをつけてあげます */}
          <Route exact path="/">
            <Start />
          </Route>
          <Route path="/silhouette">
            <Silhouette />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
