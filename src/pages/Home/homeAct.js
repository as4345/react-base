import { observable } from "mobx"
import * as Util from "../../public/Util"
import api from "./api"

class HomeAct {
	data = observable({
		inHomeTime: 0,
		dataArr: []
	})

	getTodayHistory = async () => {
		const data = await Util.Ajax({
			// url: "/showapi/341-3",
			url: api.toh,
			type: "get",
			// type: "post",
			// data: {
			// 	// "showapi_timestamp": formatterDateTime(),
			// 	"showapi_appid": '71024', //这里需要改成自己的appid
			// 	"showapi_sign": '8456c8b607af442f9feabd9f629303af',  //这里需要改成自己的应用的密钥secret
			// 	"page":"1",
			// 	"maxResult":"20"
			// },
			data: {
				appkey: "ccdfaf2fe3d95108",
				month: new Date().getMonth() + 1,
				day: new Date().getDate()
			}
		})
		this.data.dataArr = data.result
		console.log(data)
	}
	
}
export default new HomeAct()