import { useState } from 'react'
import './App.css'
import PostList from './components/PostsList'
import MainHeader from './components/MainHeader'

function App() {

  const [modalIsVisble, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }

  function hideModalHandler() {
    setModalIsVisible(false);
  }


  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostList isPosting={modalIsVisble} onStopPosting={hideModalHandler} />
      </main>
    </>
  )
}

export default App
