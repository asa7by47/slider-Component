import React from 'react'
import { usePostsStore } from '../store/Posts';

const PostsCount = () => {
    const { posts} = usePostsStore();

  return (
    <h1 className='text-center'> {posts.length} </h1>
  )
}

export default PostsCount