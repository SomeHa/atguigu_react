import React, { Component } from 'react'
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import { addPerson } from '../../redux/Actions/person'


class Person extends Component {
    add = ()=>{
        const name = this.setNameNode.value
        const age = this.setAgeNode.value
        const personObj = {id:nanoid(),name,age}
        this.props.jia(personObj)
        this.setNameNode.value =''
        this.setAgeNode.value =''
    }
  render() {
    return (
      <div>
          <h2>Person组件,上面的和为{this.props.he}</h2>
          <input ref={c=>this.setNameNode = c} type='text'></input>
          <input ref={c=>this.setAgeNode = c} type='text'></input>
          <button onClick={this.add}>添加</button>
          <hr/>
          <ul>
             { this.props.yiduiren.map(p=>
                {
                    return <li key={p.id}>{p.name}---{p.age}</li>
                }

             )}
          </ul>
        </div>
    )
  }
}


export default connect(
    state => ({yiduiren:state.rens,he:state.he}),//状态
    {
        jia:addPerson
    }//映射操作状态的方法
)(Person)