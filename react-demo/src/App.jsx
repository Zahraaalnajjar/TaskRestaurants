import React from 'react'
import TodoApp from './TodoApp'
import './Style.css'
import { Route, Routes } from 'react-router-dom'
import ReasturantName from './ReasturantName'

export const App = () => {
  return (
    <div>
    <Routes>
        <Route path='/ReasturantName' element={<ReasturantName/>}/>
        <Route path='/' element={<TodoApp/>}/>
    </Routes></div>
  )
}
export default App;
