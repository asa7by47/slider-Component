// for creating store
import { create } from "zustand";
// i can use any name instead of ( usePostsStore )
export const usePostsStore = create((set) => ({
  // Data
  posts: [
    { id: 1, title: "Post 1", description: "Post description" },
    { id: 2, title: "Post 2", description: "Post description" },
  ],
  // Adding Post
  addPost: (newPost) => {
    set((state) => {
      return { posts: [...state.posts, newPost] };
    });
  },

  // update posts
  editPosts: (id, updatePost) => {
    set((state) => {
      const updatedPosts = state.posts.map((post) => {
        if (post.id === id) {
          return { ...post, ...updatePost };
        }
        return post;
      });
      return { posts: updatedPosts };
    });
  },

  // delete posts
  deletePost: (id) => {
    set((state) => {
      const updatedPosts = state.posts.filter((post) => post.id !== id);
      return { posts: updatedPosts };
    });
  },
}));
