const Posts = ({ posts, getComments, setShow }) => {
  const handleClick = (id) => {
    setShow(true)
    getComments(id)
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>userId</th>
          <th>Show</th>
        </tr>
      </thead>
      <tbody>
        {posts?.map((post, idx) => (
          <tr key={idx}>
            <td>{post.id}</td>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>{post.userId}</td>
            <td>
              <button onClick={() => handleClick(post.id)}>Comments</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Posts
