import React from 'react'
import CalenderMenu from './CalenderMenu'

export default class Calender  extends React.Component {
    constructor() {
        super()
        this.state = {
          year:new Date().getFullYear(),
          month:new Date().getMonth()+1,
          date:new Date().getDate(),
          isShowMenu:false
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
    const {year,month,date,isShowMenu} = this.state
    return (
      <div className='calender_menu'>
        <div className='inputBox'
         onClick={() => { this.setState({ "isShowMenu": true})}}>
            {year}年{month}月{date}日
        </div>
        {
          isShowMenu
          ?
          <CalenderMenu year={year}  month={month}  date={date}
          setYear={this.setYear.bind(this)}
          setMonth={this. setMonth.bind(this)}
          setDate={this.setDate.bind(this)}
          setShowMenu={this.setShowMenu.bind(this)
          }
          ></CalenderMenu>
          :null
        }
        
      </div>
    )
  }
}
