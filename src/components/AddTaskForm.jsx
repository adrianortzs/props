import React, { useState } from 'react'

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskText.trim()) {
      addTask(taskText)
      setTaskText('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskText} 
        onChange={(e) => setTaskText(e.target.value)} 
        placeholder="Introduce una tarea" 
      />
      <button type="submit">Añadir</button>
    </form>
  )
}

export default AddTaskForm