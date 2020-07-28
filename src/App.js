import React from 'react'

import Header from './components/Header'
import TodoContainer from './components/TodoContainer'
import TimerCard from './components/TimerCard'
import Footer from './components/Footer'
import Layout from './components/Layout'

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
      <Layout>
        <Header />
        <TimerCard />
        <TodoContainer />
        <Footer />
      </Layout>
    </div>
  )
}

export default App
