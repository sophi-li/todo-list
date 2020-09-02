import React, { useState, useEffect } from 'react'

import styles from './AddTaskForm.module.css'

const AddTaskForm = ({ addTodo }) => {
  const [tasklist, setTasklist] = useState({
    id: null,
    task: '',
    notes: '',
    completed: '',
  })

  function handleInputChange(e) {
    const { name, value } = e.target
    setTasklist({ ...tasklist, [name]: value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!tasklist.task) return
    addTodo(tasklist)
    setTasklist({ id: null, task: '', notes: '', completed: '' })
  }

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <form>
          <label htmlFor="task">
            <input
              onChange={handleInputChange}
              name="task"
              value={tasklist.task}
              className={styles.taskInput}
              type="text"
              placeholder="What are you working on?"
            />
          </label>
          <label htmlFor="notes">
            <input
              onChange={handleInputChange}
              name="notes"
              value={tasklist.notes}
              className={styles.notesInput}
              type="text"
              placeholder="Notes..."
            />
          </label>
        </form>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.cancelBtn}>Cancel</button>
        <button onClick={handleSubmit} className={styles.saveBtn}>
          Save
        </button>
      </div>
    </div>
  )
}

export default AddTaskForm
