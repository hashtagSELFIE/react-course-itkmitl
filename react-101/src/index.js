import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App'
import ListMenu from './components/ListMenu'
import * as serviceWorker from './serviceWorker'

const menuItems = [{ title: 'Facebook', link: 'https://facebook.com' }, { title: 'Twitter', link: 'https://twitter.com' }, { title: 'Google', link: 'https://google.com' }]

ReactDOM.render(<ListMenu items={menuItems} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
