import "./App.css";

import Header from "./Components/Commons/Heading/Header.jsx";
import Home from "./Components/home/Home.jsx";
import Progress from "./Components/Commons/Progress/Progress.jsx";



const App = () => {
  return (
    <>
      
      <Home />
      <Progress />
      {/*<Router>    
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>*/}
      
    </>
  )
}

export default App
