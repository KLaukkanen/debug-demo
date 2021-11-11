import React from 'react'
import ReactDOM from 'react-dom'
import ReactApp from './ReactApp'
console.log("App mounted")
const root = window.document.getElementById('react-root');
console.log(root)
ReactDOM.render(<ReactApp/>, root)