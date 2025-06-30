import React, { useState } from 'react'

const TodoApp = () => {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleAdd = () => {
    if (task.trim() === '') return

    const updated = [...tasks, task].sort()
    setTasks(updated)
    setTask('')
  }

  const handleDelete = (index) => {
    const updated = [...tasks]
    updated.splice(index, 1)
    setTasks(updated)
  }

  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>
            {t}
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoApp
