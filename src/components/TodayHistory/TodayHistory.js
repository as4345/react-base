import React, { Component } from "react"
import "./TodayHistory.scss"


/**
 * 组建入参
 * dataArr Array
 * 例:[{title:String, pic:String, year:String, month:String, day:String, des:String, lunar:String}]
 */


class TodayHistory extends Component {
  render() {
    const { dataArr } = this.props
    return (
      <ul className="TodayHistory">
        {
          dataArr.map((item, idx) => {
            return (
              <li key={idx}>
                <p className="title">{item.title}</p>
                <div dangerouslySetInnerHTML={{__html: item.content}}></div>
                <p className="date">日期：{item.year + "-" + item.month + "-" + item.day}</p>
              </li>
            )
          })
        }
      </ul>
    )
  }
}
export default TodayHistory