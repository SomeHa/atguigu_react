import React, { Component } from 'react'
import {NavLink} from'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        //标签体的内容 <>内容</> 会通过this.props.children 接到，展开运算符会用children={children}赋值达到一样的效果
        return (
            <NavLink  activeClassName="atguigu" className="list-group-item" {...this.props}/>
        )
    }
}
