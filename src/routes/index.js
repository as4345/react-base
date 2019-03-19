import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import asyncComponent from "../components/asyncComponent/asyncComponent"
import Wrap from '../components/Wrap/Wrap'


const Home = asyncComponent(() => import("../pages/Home/Home"))
const Second = asyncComponent(() => import("../pages/Second/Second"))
const Third = asyncComponent(() => import("../pages/Third/Third"))
const Test = asyncComponent(() => import("../pages/Test/Test"))

const Content = () => (
	<Router>
    <Wrap>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/second">Second</Link>
        </li>
        <li>
          <Link to="/third">Third</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/second" component={Second} />
      <Route path="/third" component={Third} />
      <Route path="/test" component={Test} />
    </Wrap>
	</Router>
)

export default Content