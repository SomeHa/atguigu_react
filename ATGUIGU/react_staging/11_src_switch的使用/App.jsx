import React, { Component } from 'react'
import { Switch,Route } from 'react-router-dom'
import Home from './pages/Home' //Home是路由组件
import About from './pages/About'
import Header from './components/Header' //Header是普通组件
import MyNavLink from './components/MyNavLink'
import Test from './pages/Test'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<Header />
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/about" >About</MyNavLink>
							<MyNavLink to="/home" >Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* switch包裹後，同一个路由只会显示第一个组件 */}
								<Switch>
									{/* 注册路由 */}
									<Route path="/about" component={About} />
									<Route path="/home" component={Home} />
									<Route path="/home" component={Test} />
								</Switch>


							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
