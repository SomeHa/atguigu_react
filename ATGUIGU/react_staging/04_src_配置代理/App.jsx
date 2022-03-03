import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

  getStudentData = () => {
      axios.get('http://localhost:3000/api1/students').then(
          response => {console.log('成功了', response.data);},
          error => {console.log('失败了', error)}
      )
  }

  getCarsData = () => {
    axios.get('http://localhost:3000/api2/cars').then(
        response => {console.log('成功了', response.data);},
        error => {console.log('失败了', error)}
    )
}

  render() {
    return (
      <div>App....

          <button onClick={this.getStudentData}>获取学生数据</button>
          <button onClick={this.getCarsData}>获取Cars数据</button>
      </div>
    )
  }
}
