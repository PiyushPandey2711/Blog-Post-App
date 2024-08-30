import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogReducer";

// Load data from localStorage if it exists
const initialState = JSON.parse(localStorage.getItem("blogData")) || {
  blog: {
    blogPosts: [
      // Add more initial blog posts as needed
    ],
  },
};

const store = configureStore({
  reducer: {
    blog: blogReducer,
  },
  preloadedState: initialState,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("blogData", JSON.stringify(state));
});

export default store;
