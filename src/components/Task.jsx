import React from 'react'

function Task({ task, deleteTask, markedTask }) {
  return (
    <li>
      <span onClick={() => markedTask(task.id)} style={{ textDecoration: task.completed ? 'line-through' : 'none'}}>{task.text}</span>
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  )
}

export default Task