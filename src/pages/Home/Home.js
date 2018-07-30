import React, { Component } from "react"
import { observer } from "mobx-react"

import act from "./homeAct"
import {
	TodayHistory
} from "../../components"


const { data } = act
let ihtTime = null

@observer
class Home extends Component {
	componentDidMount() {
		ihtTime = setInterval(() => {
			data.inHomeTime = data.inHomeTime + 1
		},1000)
		act.getTodayHistory()
	}
	componentWillUnmount() {
		clearInterval(ihtTime)
	}
	render() {
		return (
			<div>
				这是Home页
				<div>你在Home页停留了{data.inHomeTime}秒</div>
				<TodayHistory dataArr={data.dataArr}/>
			</div>
		)
	}
}

export default Home