import React, { Component } from "react"
import { observer } from "mobx-react"
import * as u from '@/utils'

// import message from 'antd/lib/message';  // 加载 JS

let ihtTime = null
@observer
class Home extends Component {
	componentDidMount() {
		ihtTime = setInterval(() => {
			u.store.stayHomeTime = u.store.stayHomeTime + 1
			// message.success('This is a message of success');
		},1000)
		console.log(u.config)
		u.a.Toast.loading('加载中...', 20)
	}
	componentWillUnmount() {
		clearInterval(ihtTime)
	}
	render() {
		return (
			<div>
				这是Home页啦
				<div>你在Home页停留了{u.store.stayHomeTime}秒</div>
			</div>
		)
	}
}

export default Home