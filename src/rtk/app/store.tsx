import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import projectsReducer from "../features/projects/projectsSlice";

export const store = configureStore({
  reducer: { posts: postsReducer, projects: projectsReducer },
});


