import React, { Component } from "react"
import * as u from '@/utils'

class Test extends Component {
    async componentDidMount() {
        const rrr = await u.get(u.config.testHost + '/japi/toh?v=1.0&month=10&day=1&key=0add0496c3d22dc25aa14fefa2297b2b')
		console.log(111111, rrr)
    }
	render() {
		return (
			<div>
				这是Test页
			</div>
		)
	}
}

export default Test