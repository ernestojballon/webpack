import { hot } from 'react-hot-loader'
import React from 'react'
import Note from './Note'

const App = ()=>{
  return (
    <div>
        <Note msg='hola!!!' />
        <Note msg='webpack !!!!' />
    </div>
  )
}
export default hot(module)(App);
