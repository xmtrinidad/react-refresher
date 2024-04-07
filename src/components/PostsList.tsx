
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from './PostsList.module.css';
import { useState, useEffect } from "react";
import Post from "./Post";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {

    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("http://localhost:8080/posts");
      const data = await response.json();
      setPosts(data.posts);
      setIsFetching(false);
    }

    fetchPosts();

  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    setPosts((existingPosts) => [...existingPosts, postData]);
  }

  return (
    <>
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onCancel={onStopPosting}
            onAddPost={addPostHandler} />
        </Modal>
      )}

      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {isFetching && <p>Loading Posts...</p>}
    </>
  )
}

export default PostList;