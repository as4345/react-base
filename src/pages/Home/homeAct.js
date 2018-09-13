import { observable } from "mobx"
import * as Util from "../../public/Util"
import api from "./api"

class HomeAct {
	data = observable({
		inHomeTime: 0,
		dataArr: []
	})
	testAjax = async () => {
		const data = await Util.Ajax({
			url: api.test,
			type: "get",
			data: {
				key: "0add0496c3d22dc25aa14fefa2297b2b",
				month: new Date().getMonth() + 1,
				day: new Date().getDate()
			}
		})
		this.data.dataArr = data.result
		console.log(data)
	}
	
}
export default new HomeAct()