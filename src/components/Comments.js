const Comments = ({ comments, setShow }) => {
  return (
    <div className='comments'>
      <div className='head'>
        <h2>Comments</h2>
        <button onClick={() => setShow(false)}>Hide</button>
      </div>

      <ul>
        {comments?.map((comment, idx) => (
          <li key={idx}>{comment.body}</li>
        ))}
      </ul>
    </div>
  )
}

export default Comments
