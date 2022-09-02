// @ts-nocheck
const TodoFooter = ({ list, type, setType, clearDone }) => {
  const leftCount = list.filter((item) => !item.done).length
  const types = ['all', 'active', 'completed']
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{leftCount}</strong> item left
      </span>
      <ul className="filters">
        {types.map((item) => (
          <li key={item} onClick={() => setType(item)}>
            <a className={type === item ? 'selected' : ''} href="#/">
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="clear-completed" onClick={clearDone}>
        Clear completed
      </button>
    </footer>
  )
}

export default TodoFooter
