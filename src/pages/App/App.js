import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import asyncComponent from "../../public/asyncComponent"


const Home = asyncComponent(() => import("../Home/Home"))
const Second = asyncComponent(() => import("../Second/Second"))
const Third = asyncComponent(() => import("../Third/Third"))

const Content = () => (
	<Router>
    <div>
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
    </div>
	</Router>
)

export default Content