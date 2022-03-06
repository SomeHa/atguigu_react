import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr: [
            { id: '01', name: '消息001' },
            { id: '02', name: '消息002' },
            { id: '03', name: '消息003' },
        ]
    }
    render() {
        const { messageArr } = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj => {

                            return (
                                // 路由匹配
                                <li key={messageObj.id}>
                                    {/* 向路由传递params参数 */}
                                    {/* <Link to={`/home/message/detail/${messageObj.id}/${messageObj.name}`}>{messageObj.name}</Link> */}
                                    {/* 向路由传递search参数 */}
                                    
                                    {/* 向路由传递state参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:messageObj.id,name:messageObj.name}}}>{messageObj.name}</Link>
                                </li>
                            )
                        }))
                    }
                </ul>
                <hr/>
                {/* 路由注册 */}
                {/* 声明接收params参数 */}
                {/* <Route path='/home/message/detail/:id/:name' component={Detail} /> */}


                {/* state参数无需声明，正常注册路由即可 */}
                <Route path="/home/message/detail" component={Detail} />
            </div>
        )
    }
}
