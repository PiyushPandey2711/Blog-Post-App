import {
    ADD_BLOG_POST,
    EDIT_BLOG_POST,
    DELETE_BLOG_POST,
    LIKE_BLOG_POST,
  } from "./blogActions";
  
  const initialState = {
    blogPosts: [],
  };
  
  const blogReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_BLOG_POST:
        return {
          ...state,
          blogPosts: [...state.blogPosts, action.payload],
        };
  
      case EDIT_BLOG_POST:
        const editedPosts = state.blogPosts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
        return {
          ...state,
          blogPosts: editedPosts,
        };
  
      case DELETE_BLOG_POST:
        const filteredPosts = state.blogPosts.filter(
          (post) => post.id !== action.payload
        );
        return {
          ...state,
          blogPosts: filteredPosts,
        };
  
      case LIKE_BLOG_POST:
        const likedPosts = state.blogPosts.map((post) => {
          if (post.id === action.payload) {
            return {
              ...post,
              likes: post.likes + 1,
            };
          }
          return post;
        });
        return {
          ...state,
          blogPosts: likedPosts,
        };
  
      default:
        return state;
    }
  };
  
  export default blogReducer;
  