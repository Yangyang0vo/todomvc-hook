// @ts-nocheck
import React, { useContext, useEffect, useRef, useState } from 'react'
import { Context } from '../App'
export default function TodoItem({ item }) {
  const { delTodo, changeDone, changeName } = useContext(Context)
  const iptRef = useRef(null)
  const [current, setCurrent] = useState({
    id: '',
    name: ''
  })
  // current发生变化 获取焦点
  useEffect(() => {
    iptRef.current.focus()
  }, [current])
  const showEdit = ({ id, name }) => {
    setCurrent({
      id,
      name
    })
  }
  const onKeyUp = (e) => {
    if (e.keyCode === 27) {
      setCurrent({ id: '', name: '' })
    }
    if (e.keyCode === 13) {
      changeName(current.name, current.id)
      setCurrent({ id: '', name: '' })
    }
  }
  return (
    <div>
      {' '}
      <li className={[item.done ? 'completed' : '', item.id === current.id ? 'editing' : ''].join(' ')}>
        <div className="view">
          <input className="toggle" type="checkbox" checked={item.done} onChange={() => changeDone(item.id)} />
          <label
            onDoubleClick={() => {
              showEdit(item)
            }}
          >
            {item.name}
          </label>
          <button
            className="destroy"
            onClick={() => {
              delTodo(item.id)
            }}
          />
        </div>
        <input
          className="edit"
          value={current.name}
          ref={iptRef}
          onBlur={() => {
            setCurrent({ id: '', name: '' })
          }}
          onChange={(e) => {
            setCurrent({
              ...current,
              name: e.target.value
            })
          }}
          onKeyUp={onKeyUp}
        />
      </li>
    </div>
  )
}
