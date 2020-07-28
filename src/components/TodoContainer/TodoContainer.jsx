import React, { useState } from 'react'

import TodoCard from '../TodoCard'
import AddTaskForm from '../AddTaskForm'

import styles from './TodoContainer.module.css'

const TodoContainer = () => {
  const [addTaskFormisActive, setAddTaskFormisActive] = useState(false)

  const [tasklist, setTaskList] = useState([
    { id: 1, task: 'tomatimer', notes: 'noteeee' },
    { id: 2, task: 'task list', notes: 'noteeee' },
  ])

  function handleAddTask(e) {
    e.preventDefault()
    setAddTaskFormisActive(true)
  }

  function addTodo(text) {
    text.id = tasklist.length + 1
    const newTodos = [...tasklist, text]
    setTaskList(newTodos)
    setAddTaskFormisActive(false)
  }

  function deleteTodo(id) {
    setTaskList(tasklist.filter((todo) => todo.id !== id))
  }

  function updateTodo(id, updatedTodo) {
    setTaskList(tasklist.map((elem) => (elem.id === id ? updatedTodo : elem)))
  }

  return (
    <div>
      <div className={styles.container}>
        <h2 className={styles.taskListTitle}>Task List</h2>

        {tasklist.map((element) => (
          <TodoCard
            key={element.id}
            tasklist={element}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}

        {addTaskFormisActive && <AddTaskForm addTodo={addTodo} />}

        <button onClick={handleAddTask} className={styles.addBtn}>
          + Add task
        </button>
      </div>
    </div>
  )
}

export default TodoContainer
