// @ts-nocheck

import TodoItem from './TodoItem'

const TodoList = ({ list, type, clearDone, selectedAll }) => {
  let showList = []
  if (type === 'active') {
    showList = list.filter((item) => !item.done)
  } else if (type === 'completed') {
    showList = list.filter((item) => item.done)
  } else {
    showList = list
  }

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox" checked={list.every((item) => item.done)} onChange={(e) => selectedAll(e.target.checked)} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {showList.map((item) => (
          <TodoItem item={item} key={item.id}></TodoItem>
        ))}
      </ul>
    </section>
  )
}

export default TodoList
