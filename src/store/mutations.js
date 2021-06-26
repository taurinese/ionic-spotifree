export const token = (state, token) => {
  state.token = token;
};

export const user = (state, data) => {
  state.user = data;
};

export const errors = (state, errors) => {
  state.errors = errors;
};

export const posts = (state, data) => {
  state.posts = data;
};

export const search = (state, data) => {
  state.searchPosts = data;
};

export const post = (state, data) => {
  state.post = data;
};

export const changeName = (state, data) => {
  state.user.name = data;
};
