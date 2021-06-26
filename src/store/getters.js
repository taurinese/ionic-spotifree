export const user = (state) => {
  return state.user;
};

export const lastPosts = (state) => {
  return state.posts.slice(-5);
};

export const posts = (state) => {
  return state.posts;
};
