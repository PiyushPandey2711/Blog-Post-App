// Action Types
export const ADD_BLOG_POST = "ADD_BLOG_POST";
export const EDIT_BLOG_POST = "EDIT_BLOG_POST";
export const DELETE_BLOG_POST = "DELETE_BLOG_POST";
export const LIKE_BLOG_POST = "LIKE_BLOG_POST";

// Action Creators
export const addBlogPost = (post) => ({
  type: ADD_BLOG_POST,
  payload: post,
});

export const editBlogPost = (post) => ({
  type: EDIT_BLOG_POST,
  payload: post,
});

export const deleteBlogPost = (postId) => ({
  type: DELETE_BLOG_POST,
  payload: postId,
});

export const likeBlogPost = (postId) => ({
  type: LIKE_BLOG_POST,
  payload: postId,
});
