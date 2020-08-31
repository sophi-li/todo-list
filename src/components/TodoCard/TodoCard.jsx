import React, { useState, useEffect } from 'react'

import './TodoCard.css'

const TodoCard = ({ tasklist, updateTodo, deleteTodo, completeTodo }) => {
  const [editFormisActive, setEditFormisActive] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({
    id: null,
    task: '',
    notes: '',
    completed: '',
  })
  const [todo, setTodo] = useState(currentTodo)

  function handleEditClick(e) {
    e.preventDefault()
    setEditFormisActive(!editFormisActive)
    setCurrentTodo({
      id: tasklist.id,
      task: tasklist.task,
      notes: tasklist.notes,
      completed: tasklist.completed,
    })
  }

  useEffect(() => {
    setTodo(currentTodo)
  }, [currentTodo])

  function handleInputChange(e) {
    const { name, value } = e.target
    setTodo({ ...todo, [name]: value })
  }

  function handleSaveEdits(e) {
    e.preventDefault()
    updateTodo(todo.id, todo)
    setEditFormisActive(false)
  }

  // function handleCheckboxClick(e) {
  //   completeTodo(tasklist.id)
  // }

  return (
    <div>
      {editFormisActive ? (
        <div>
          <div className="editContainer">
            <div className="taskContainer">
              <input
                className="editTaskInput"
                name="task"
                value={todo.task}
                onChange={handleInputChange}
              ></input>
            </div>
            <input
              className="editNotesInput"
              name="notes"
              value={todo.notes}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className="btnContainer">
            <button
              className="deleteBtn"
              onClick={() => deleteTodo(tasklist.id)}
            >
              Delete
            </button>
            <div className="cancelSaveBtnContainer">
              <button
                className="cancelBtn"
                onClick={() => setEditFormisActive(false)}
              >
                Cancel
              </button>
              <button onClick={handleSaveEdits} className="saveBtn">
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            `parentContainer`
            // ${tasklist.completeTodo === true ? 'completedTask' : null}`
          }
        >
          {/* <div> */}
          <div className="taskContainer">
            <div className="checkbox">
              <label htmlFor="task">
                {/* <input
                  type="checkbox"
                  id="task"
                  name="task"
                  onClick={handleCheckboxClick}
                /> */}
              </label>
            </div>
            <div className="task">{tasklist.task}</div>
            <button onClick={handleEditClick} className="editbtn">
              edit
            </button>
          </div>
          {tasklist.notes ? (
            <div className="notes">{tasklist.notes}</div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default TodoCard
