import React from 'react'
import PickerDate from './PickerDate'
import PickerYear from './PickerYear'
import ChooseDate from './ChooseDate'
import ChooseYear from './ChooseYear'
import ChooseMonth from './ChooseMonth'


export default class CalenderMenu extends React.Component {
    constructor() {
        super()
        this.state = {
          view:'date'
        }
    }
    setView(view){
      this.setState({
        view
      })
    }
  render() {
    const {year,month,date,setYear,setMonth,setDate,setShowMenu} = this.props
     const Choose = ()=>{
       if(this.state.view=='date'){
         return  <ChooseDate year={year}
          month={month} date = {date}
         setYear = {setYear}
         setMonth={setMonth}
         setDate ={setDate}
        ></ChooseDate>
       }else if(this.state.view=='year'){
         return<ChooseYear year={year}
        setYear = {setYear}
        setView = {this.setView.bind(this)}
       ></ChooseYear>
       }else if(this.state.view=='month'){
        return <ChooseMonth  month={month} 
        setMonth={setMonth}
        setView = {this.setView.bind(this)}
       ></ChooseMonth>
       }
   }
   const Picker = ()=>{
     if(this.state.view=='date'){
       return <PickerDate year={year}
       month={month} date = {date}
      setYear = {setYear}
      setMonth={setMonth}
      setDate ={setDate}
      setView = {this.setView.bind(this)}
     ></PickerDate>
     }else if(this.state.view=='year'){
     return <PickerYear year={year} 
      setYear = {setYear}
      ></PickerYear>
     }else if(this.state.view=='month'){
       return null
     }
   }
    return (
      <div className='view'>
        <Picker></Picker>
        <Choose></Choose>
      </div>
    )
  }
}
