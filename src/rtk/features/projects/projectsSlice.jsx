import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../../data/data.json";

const initialState = {
  projects: [],
};
const projectsSlice = createSlice({
  name: "projects",
  initialState,

  reducers: {
    getProjects: (state) => {
      state.projects = projects;
    },
    filterProjects: (state, action) => {
      const techno = action.payload.toLowerCase();
      if (techno === "all") {
        state.projects = projects;
      } else {
        state.projects = projects.filter((project) =>
          project.technologies.some((tech) => tech.toLowerCase() === techno)
        );
      }
    },
  },
});

export const { getProjects, filterProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
