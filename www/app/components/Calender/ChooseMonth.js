import React from 'react'

export default class ChooseMonth extends React.Component {
    constructor() {
        super()
    }
    //事件委托
    componentDidMount(){
      var self = this
      $(this.refs.table).on('click','td',function(){
        self.props.setMonth(parseInt($this).html())
        self.props.setView('date')
      })
    }
    
  render() {
    return (
      <div className="choose_month">
      <table ref="table">
          <tbody>
              <tr>
                  <td data-m="1">1月</td>
                  <td data-m="7">7月</td>
              </tr>
              <tr>
                  <td data-m="2">2月</td>
                  <td data-m="8">8月</td>
              </tr>
              <tr>
                  <td data-m="3">3月</td>
                  <td data-m="9">9月</td>
              </tr>
              <tr>
                  <td data-m="4">4月</td>
                  <td data-m="10">10月</td>
              </tr>
              <tr>
                  <td data-m="5">5月</td>
                  <td data-m="11">11月</td>
              </tr>
              <tr>
                  <td data-m="6">6月</td>
                  <td data-m="12">12月</td>
              </tr>
          </tbody>
      </table>
  </div>
    )
  }
}
