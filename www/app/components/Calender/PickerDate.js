import React from 'react'

export default class PickerDate extends React.Component {
    constructor() {
        super()
    }
    goPrev(){
      const {year,month,setDate,setMonth,setYear,setShowMenu} = this.props
      if(month>1){
        setMonth(month-1)
      }else{
        setYear(year-1)
        setMonth(12)
      }
    }
    goNext(){
      const {year,month,setDate,setMonth,setYear,setShow,isShowMenu} = this.props
      if(month<12){
        setMonth(month+1)
      }else{
        setYear(year+1)
        setMonth(1)
      }
    }

  render() {
    const {year,month,setDate,setMonth,setYear,setView} = this.props
    return (
      <div className='pickeryear'>
       <div className='left'><a href="###" className='btn'
       onClick={()=>{this.goPrev()}}
       >上个月</a></div>
        <div className='center'>
          <a href="###" onClick={()=>{setView('year')}}>{year}</a>年
          <a href="###" onClick={()=>{setView('month')}}>{month}</a>月
        </div>
       <div className='right'><a href="###" className='btn'
       onClick={()=>{this.goNext()}}>下个月</a></div>
      </div>
    )
  }
}
