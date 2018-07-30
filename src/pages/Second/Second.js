import React, { Component } from "react"
import { observer } from "mobx-react"
import HomeAct from "../Home/homeAct"


const { data } = HomeAct

@observer
class Second extends Component {
	render() {
		return (
			<div>
				这是Second页
				这是Home页到计数器{data.inHomeTime}
			</div>
		)
	}
}

export default Second