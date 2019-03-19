import React, { Component } from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "./Wrap.scss"


class Wrap extends Component {
  state = {
    minHeight: window.innerHeight
  }
  headerDom = null
  componentDidMount() {
    const ddg = document.defaultView.getComputedStyle
    console.log(this.headerDom)
  }
  render() {
    return (
      <div className='Wrap'>
        <Header ref={ref => {this.headerDom = ref}} />
        <div className='d1'>
          { this.props.children }
        </div>
        <Footer ref='Footer' />
      </div>
    )
  }
}
export default Wrap