import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./Components/Commons/Heading/Header.jsx";
import Home from "./Components/home/Home.jsx";
import About from "./Components/home/about/About.jsx";
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
