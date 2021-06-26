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
