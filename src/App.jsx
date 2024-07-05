import './App.css'
import { useState } from 'react'
import Task from './components/Task'
import AddTaskForm from './components/AddTaskForm'

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Hacer la compra', completed: false },
    { id: 2, text: 'Llamar al médico', completed: true },
    { id: 3, text: 'Hacer ejercicio', completed: false }
  ])

  function addTask (text) {
    const newTask = {id: tasks.length + 1, text: text, completed: false}
    setTasks([...tasks, newTask])
  }

  function deleteTask (taskId) {
    setTasks(tasks.filter(task => task.id !== taskId))
  }
  function markedTask (taskId) {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }
  return (
    <>
    <h1>TAREAS</h1>
    <AddTaskForm addTask={addTask} />
    <ul>{tasks.map(task => (
          <Task 
            key={task.id} 
            task={task} 
            deleteTask={deleteTask} 
            markedTask={markedTask} 
          />))}
    </ul></>
  )
}

export default App
