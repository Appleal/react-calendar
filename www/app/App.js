import React from 'react'
import Calender from './components/Calender'




export default class App extends React.Component {
    constructor() {
        super()
        }
    render() {
        return (
            <div className='calender'>
           <h4>日期：</h4><Calender></Calender>
            </div>
        )
    }
}
