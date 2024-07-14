import { createSlice } from "@reduxjs/toolkit";
import { posts } from "../../../data/data.json";

const initialState = {
  posts: posts,
  filterPosts: [],
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state) => {
      return state.posts;
    },
    filterdPosts: (state, action) => {
      if (action.payload === "all") {
        state.filterPosts = state.posts;
      } else {
        state.filterPosts = state.posts.filter(
          (post) =>
            post.technology.toLowerCase() === action.payload.toLowerCase()
        );
      }
    },
  },
});

export const { getPosts, filterdPosts } = postsSlice.actions;
export default postsSlice.reducer;
