import React from 'react'
import className from 'classnames'
export default class ChooseYear extends React.Component {
    constructor() {
        super()
    }
    componentDidMount(){
      var self = this
      $(this.refs.table).on('click','td',function(){
         var year = $(this).html()
         self.props.setYear(year)
         self.props.setView('date')
      })
    }
    showTable(){
      const{year} = this.props
      const baseYear = year - year%10
      var arr = []
      for(var i = 0;i<10;i++){
        arr.push(
          <tr key={i}>
            <td>{baseYear+i-10}</td>
            <td className={className({'cur':baseYear+i==year})}>{baseYear+i}</td>
            <td>{baseYear+i+10}</td>
          </tr>
        )
      }
      return arr
    }
  render() {
    return (
      <div className='choose_year'>
        <table ref='table'>
          <tbody>
            {this.showTable()}
          </tbody>
        </table>
      </div>
    )
  }
}
