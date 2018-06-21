import React  from 'react'

export default class PickerYear extends React.Component {
    constructor() {
        super()
    }
  render() {
      const {year,setYear} = this.props
    return (
        <div className='pickeryear'>
        <div className='left'><a href="###" className='btn'
        onClick={()=>{setYear(year-10)}}
        >上十年</a></div>
         <div className='center'>
           <a href="###">{year}年</a>
         </div>
        <div className='right'><a href="###" className='btn'
        onClick={()=>{setYear(year+10)}}>下十年</a></div>
        </div>
    )
  }
}

