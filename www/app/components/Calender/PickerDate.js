import React from 'react'
import {solar2lunar} from 'solarLunar';
export default class PickerDate extends React.Component {
    constructor() {
        super()
    }
    showTable(){
      const {year,month,date} = this.props
      const preMonthDay = new Date(year,month-1,0).getDate()
      const MonthDay = new Date(year,month,0).getDate()
      const FirstDay = new Date(year,month-1,1).getDay()
     
      var arr = []
      var count = FirstDay
      while(count--){
        var d = preMonthDay-count
        var sl = solar2lunar(year,month-1,d)
        arr.push({
          d,
          cn:sl.term||sl.dayCn
        })
      }
     // 
     var count=1
     while(count<=MonthDay){
       var d = count++
       var sl = solar2lunar(year,month,d)
       arr.push({
         d,
         cn:sl.term||sl.dayCn
       })
     }
     var count=1
     while(arr.length!=42){
      var d = count++
      var sl = solar2lunar(year,month+1,d)
      arr.push({
        d,
        cn:sl.term||sl.dayCn
      })
     }
     var domarr = []
     for(var i=0;i<arr.length/7;i++){
       domarr.push(
         <tr key={i}>
          {
            arr.slice(i*7,(i+1)*7).map((item,index)=>{
              return <td key={index}>
                <span>{item.d}</span>
                <span className='cd'>{item.cn}</span>
              </td>
            })
          }
         </tr>
       )
     }
     return domarr
    }
  render() {
    
    return (
      <div className='pickerdate'>
        <table>
          <thead>
          <tr>
            <th>日</th>
            <th>一</th>
            <th>二</th>
            <th>三</th>
            <th>四</th>
            <th>五</th>
            <th>六</th>
          </tr>
          </thead>
          <tbody>
            {this.showTable()}
          </tbody>
          
        </table>
      </div>
    )
  }
}
