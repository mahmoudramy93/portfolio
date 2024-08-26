import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../../../data/data.json";

const initialState = {
  posts: posts,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      state.posts = posts;
    },
    filterdPosts: (state, action) => {
      if (action.payload === "all") {
        state.posts = posts;
      } else {
        state.posts = posts.filter(
          (post) =>
            post.technology.toLowerCase() === action.payload.toLowerCase()
        );
      }
    },
    searchPosts: (state, action) => {
      const searchTerm = action.payload.toLowerCase();
      state.posts = posts.filter((post) => {
        return (
          post.technology.toLowerCase().includes(searchTerm) ||
          post.title.toLowerCase().includes(searchTerm) ||
          post.description.toLowerCase().includes(searchTerm)
        );
      });
    },
  },
});

export const { getPosts, filterdPosts, searchPosts } = postsSlice.actions;
export default postsSlice.reducer;
