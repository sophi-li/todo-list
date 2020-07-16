import React, { useState, useEffect } from 'react'

import styles from './TodoCard.module.css'

const TodoCard = ({ tasklist, updateTodo, deleteTodo }) => {
  const [editFormisActive, setEditFormisActive] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({
    id: null,
    task: '',
    notes: '',
  })
  const [todo, setTodo] = useState(currentTodo)

  function handleEditClick(e) {
    e.preventDefault()
    setEditFormisActive(!editFormisActive)
    setCurrentTodo({
      id: tasklist.id,
      task: tasklist.task,
      notes: tasklist.notes,
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

  return (
    <div>
      {editFormisActive ? (
        <div>
          <div className={styles.editContainer}>
            <div className={styles.taskContainer}>
              <input
                className={styles.editTaskInput}
                name="task"
                value={todo.task}
                onChange={handleInputChange}
              ></input>
            </div>
            <input
              className={styles.editNotesInput}
              name="notes"
              value={todo.notes}
              onChange={handleInputChange}
            ></input>
          </div>
          <div className={styles.btnContainer}>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteTodo(tasklist.id)}
            >
              Delete
            </button>
            <div className={styles.cancelSaveBtnContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setEditFormisActive(false)}
              >
                Cancel
              </button>
              <button onClick={handleSaveEdits} className={styles.saveBtn}>
                Save
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.taskContainer}>
            <div className={styles.checkbox}>
              <label htmlFor="task">
                <input type="checkbox" id="task" name="task" />
              </label>
            </div>
            <div className={styles.task}>{tasklist.task}</div>
            <button onClick={handleEditClick} className={styles.editbtn}>
              edit
            </button>
          </div>
          {tasklist.notes ? (
            <div className={styles.notes}>{tasklist.notes}</div>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default TodoCard
