// @ts-nocheck
import TodoHeader from './components/TodoHeader'
import TodoMain from './components/TodoMain'
import TodoFooter from './components/TodoFooter'
import './styles/base.css'
import './styles/index.css'
import React, { useState, useEffect } from 'react'
export const Context = React.createContext()
// const todos = [
//   { id: 1, name: '学习hooks', done: false },
//   { id: 2, name: '学习redux', done: false },
//   { id: 3, name: '学习react', done: true }
// ]
function useTodos() {
  const [list, setList] = useState(() => {
    // useState 支持两种写法  写初始值 或者写一个函数 需要return一个值
    return JSON.parse(localStorage.getItem('todos')) || []
  })
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(list))
  }, [list])
  // 添加任务
  const addTodo = (name) => {
    if (name.trim() === '') return
    setList([{ id: Date.now(), name, done: false }, ...list])
  }
  // 删除任务
  const delTodo = (id) => {
    setList(list.filter((item) => item.id !== id))
  }
  // 修改任务的状态
  const changeDone = (id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done
          }
        } else {
          return item
        }
      })
    )
  }
  // 修改任务的名字
  const changeName = (name, id) => {
    setList(
      list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            name
          }
        } else {
          return item
        }
      })
    )
  }
  // 全选
  const selectedAll = (check) => {
    setList(
      list.map((item) => {
        return { ...item, done: check }
      })
    )
  }
  // 清空已完成
  const clearDone = () => {
    setList(list.filter((item) => !item.done))
  }
  return {
    list,
    addTodo,
    delTodo,
    changeDone,
    changeName,
    selectedAll,
    clearDone
  }
}
const App = () => {
  const { list, addTodo, delTodo, changeDone, changeName, selectedAll, clearDone } = useTodos()
  // 定义类型 all  active completed
  const [type, setType] = useState('all')

  return (
    <Context.Provider value={{ delTodo, changeDone, changeName, selectedAll }}>
      <section className="todoapp">
        <TodoHeader addTodo={addTodo} />
        <TodoMain list={list} type={type} selectedAll={selectedAll} />
        <TodoFooter list={list} type={type} setType={setType} clearDone={clearDone} />
      </section>
    </Context.Provider>
  )
}

export default App
