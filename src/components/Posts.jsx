import React, { useState } from "react";
import { usePostsStore } from "../store/Posts";

const Posts = () => {
  const { posts, addPost, editPosts , deletePost} = usePostsStore();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postId, setPostId] = useState(null);
  const [updated, setUpdated] = useState(false);
  // adding new post
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!title && !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
    };
    addPost(newPost);
    setTitle("");
    setDescription("");
  };

  // editing post
  const editPost = (id) => {
    const post = posts.filter((post) => post.id === id)[0];
    setTitle(post.title);
    setDescription(post.description);
    setPostId(id);
    setUpdated(true);
  };

  const handleEditPost = (e) => {
    e.preventDefault();
    if (!title && !description) return;

    const updatedPost = {
      id: postId,
      title,
      description,
    };
    editPosts(updatedPost.id, updatedPost);
    setUpdated(false);
    setTitle("");
    setDescription("");
  };
  const handleDeletePost = (postId) => {
    deletePost(postId)
  }
  return (
    <div className=" m-auto pb-5">
      <form
        action=""
        className="text-center d-flex flex-column gap-2 w-25 m-auto"
      >
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={updated ? handleEditPost : handleAddPost}>
          {updated ? "update post " : "add post"}
        </button>
      </form>
      <div className="d-flex flex-wrap">
        {posts.map((data) => (
          <>
            <div className="card p-5 mt-3 m-auto" key={data.id}>
              <h1> {data.title} </h1>
              <h6> {data.description} </h6>
              <div className="d-flex gap-4">
                <button
                  className="w-50"
                  onClick={() => {
                    editPost(data.id);
                  }}
                >
                  Edit
                </button>
                <button className="w-50"  onClick={() => {
                    handleDeletePost(data.id);
                  }}>Delete</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Posts;
