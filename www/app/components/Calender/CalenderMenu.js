import React from 'react'
import PickerDate from './PickerDate'
import PickerYear from './PickerYear'


export default class CalenderMenu extends React.Component {
    constructor() {
        super()
    }
  render() {
    const {year,month,date,setYear,setMonth,setDate} = this.props
    return (
      <div className='view'>
        <PickerYear year={year} month={month}
        setYear = {setYear}
        setMonth={setMonth}
        ></PickerYear>
        <PickerDate year={year} month={month} date = {date}
         setYear = {setYear}
         setMonth={setMonth}
         setDate ={setDate}
        ></PickerDate>
      </div>
    )
  }
}
