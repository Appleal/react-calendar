import React from 'react'
import {solar2lunar} from 'solarLunar';
import className from 'classnames'
export default class ChooseDate extends React.Component {
    constructor() {
        super()
    }
    //组件将要更新，这个生命周期出现在render之前，它的形参是nextProps
    componentWillUpdate({year,month,data,setDate}){
      if(new Date(year,momth-1,date).getMonth()!=month-1){
        setDate(new Date(year,month,0).getDate())
      }
    }
    clickTdHandler(d,isPreMonth,isNextMonth){
      this.props.setDate(d)
      if(isPreMonth){
        var dd = new Date(this.props.year,this.props.month-2,d)
        this.props.setMonth(dd.getMonth()+1)
        this.props.setYear(dd.getFullYear())
      }else if(isNextMonth){
        var dd = new Date(this.props.year,this.props.month,d)
        this.props.setMonth(dd.getMonth()+1)
        this.props.setYear(dd.getFullYear())
      }
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
          cn:sl.term||sl.dayCn,
          prevMonth:true,
          gray:true,
          cur:false
        })
      }
     // 
     var count=1
     while(count<=MonthDay){
       var d = count++
       var sl = solar2lunar(year,month,d)
       arr.push({
         d,
         cn:sl.term||sl.dayCn,
          gray:false,
          cur:date == d
       })
     }
     var count=1
     while(arr.length!=42){
      var d = count++
      var sl = solar2lunar(year,month+1,d)
      arr.push({
        d,
        cn:sl.term||sl.dayCn,
        NextMonth:true,
        gray:true,
          cur:false
      })
     }
     var domarr = []
     for(var i=0;i<arr.length/7;i++){
       domarr.push(
         <tr key={i}>
          {
            arr.slice(i*7,(i+1)*7).map((item,index)=>{
              return <td key={index}
              className={className({'gray':item.gray,'cur':item.cur})}
              onClick={()=>{this.clickTdHandler(item.d,item.preMonth,item.nextMonth)}}>
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
