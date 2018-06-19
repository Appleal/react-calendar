import React from 'react'
import CalenderMenu from './CalenderMenu'
import Year from './Year'
import Month from './Month'
export default class Calender  extends React.Component {
    constructor() {
        super()
        this.state = {
          year:2018,//new Date().getFullYear()
          month:6,//new Date().getMonth()+1
          date:19,//new Date().getDate()
          isShowMenu:true
    }
  }
  setShowMenu(isShowMenu){
    this.setState({isShowMenu})
  }
  setYear(year){
    this.setState({year})
  }
  setMonth(month){
    this.setState({month})
  }
  setDate(date){
    this.setState({date})
  }
  
  
   render() {
    const {year,month,date,isShow} = this.state
    return (
      <div className='calender_menu'>
        <div className='inputBox'>
            {year}年{month}月{date}日
        </div>
        {
          this.state.isShowMenu
          ?
          <CalenderMenu year={year}  month={month}  date={date}
          setYear={this.setYear.bind(this)}
          setMonth={this. setMonth.bind(this)}
          setDate={this.setDate.bind(this)}
          ></CalenderMenu>
          :null
        }
        
      </div>
    )
  }
}
