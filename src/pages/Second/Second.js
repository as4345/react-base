import React, { Component } from "react"
import { observer } from "mobx-react"


@observer
class Second extends Component {
	componentDidMount() {
	}
	render() {
		return (
			<div>
				这是Second页
				这是Home页到计数器
			</div>
		)
	}
}

export default Second