import React, { Component } from 'react'

export default class Detail extends Component {
  state = {
    mes: [
      { id: '01', content: "我爱你，中国" },
      { id: '02', content: "我爱你" },
      { id: '03', content: "我爱国" },
    ]
  }
  render() {
    console.log(this.props)
    const { id, name } = this.props.match.params
    const mess = this.state.mes.find((obj) => { return obj.id == id })
    return (
      <div>
        <li>Id: {id}</li>
        <li>Name: {name}</li>
        <li>Content: {mess.content}</li>
      </div>
    )
  }
}
