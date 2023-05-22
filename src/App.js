import { useState, useEffect } from 'react'
import Posts from './components/Posts'
import Comments from './components/Comments'

function App() {
  const [posts, setPosts] = useState()
  const [comments, setComments] = useState()

  const [show, setShow] = useState(true)

  const getData = async () => {
    const response = await fetch('https://dummyjson.com/posts')
    const data = await response.json()
    //console.log(data.posts)

    setPosts(data.posts)
  }

  const getComments = async (postId) => {
    const response = await fetch(
      `https://dummyjson.com/posts/${postId}/comments`
    )
    const data = await response.json()

    setComments(data.comments)
    // console.log(comments)
  }

  useEffect(() => getData, [])
  // useEffect(() => getComments, [comments])

  return (
    <div className='App'>
      {show ? <Comments comments={comments} setShow={setShow} /> : ''}
      <Posts posts={posts} getComments={getComments} setShow={setShow} />
    </div>
  )
}

export default App
