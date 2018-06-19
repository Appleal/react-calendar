import React from 'react'

export default class PickerYear extends React.Component {
    constructor() {
        super()
    }
    goPrev(){
      const {year,month,setDate,setMonth,setYear,setShow} = this.props
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
    showMonth(){
     setShow()
    }
    showYear(){}

  render() {
    const {year,month,setDate,setMonth,setYear} = this.props
    return (
      <div className='pickeryear'>
       <div className='left'><a href="###" className='btn'
       onClick={()=>{this.goPrev()}}
       >上个月</a></div>
        <div className='center'>
          <a href="###" onClick={()=>{this.showYear()}}>{year}年</a>
          <a href="###" onClick={()=>{this.showMonth()}}>{month}月</a>
        </div>
       <div className='right'><a href="###" className='btn'
       onClick={()=>{this.goNext()}}>下个月</a></div>
      </div>
    )
  }
}
