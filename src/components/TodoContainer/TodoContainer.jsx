import React, { useState } from 'react'

import TodoCard from '../TodoCard'
import AddTaskForm from '../AddTaskForm'

import './TodoContainer.css'

const TodoContainer = () => {
  const [addTaskFormisActive, setAddTaskFormisActive] = useState(false)

  // let testTasks = [
  //   { id: 1, task: 'tomatimer', notes: 'noteeee' },
  //   { id: 2, task: 'task list', notes: 'noteeee' },
  // ]

  const [tasklist, setTaskList] = useState([])

  function handleAddTask(e) {
    e.preventDefault()
    setAddTaskFormisActive(true)
  }

  function addTodo(text) {
    text.id = tasklist.length + 1
    text.completed = false
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

  // function completeTodo(id) {
  //   tasklist.map((elem) =>
  //     elem.id === id ? (elem.completed = !elem.completed) : elem
  //   )
  //   setTaskList(tasklist)
  // }

  return (
    <div>
      <div className="container">
        <h2 className="taskListTitle">Task List</h2>

        {tasklist.map((element) => (
          <div
            key={element.id}
            // className={`${element.completed === true ? 'completedTask' : null}`}
          >
            <TodoCard
              key={element.id}
              tasklist={element}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              // completeTodo={completeTodo}
            />
          </div>
        ))}

        {addTaskFormisActive && <AddTaskForm addTodo={addTodo} />}

        <button onClick={handleAddTask} className="addBtn">
          + Add task
        </button>
      </div>
    </div>
  )
}

export default TodoContainer
