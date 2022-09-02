// @ts-nocheck
import { useRef } from 'react'

const TodoHeader = ({ addTodo }) => {
  const iptRef = useRef()
  const onKeyUp = (e) => {
    if (e.keyCode === 13) {
      addTodo(iptRef.current.value)
      iptRef.current.value = ''
    }
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus ref={iptRef} onKeyUp={onKeyUp} />
    </header>
  )
}

export default TodoHeader
