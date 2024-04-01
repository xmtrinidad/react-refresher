
import NewPost from "./NewPost";
import Modal from "./Modal";
import classes from './PostsList.module.css';
import { useState } from "react";
import Post from "./Post";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState<any[]>([]);

  function addPostHandler(postData) {
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
    </>
  )
}

export default PostList;