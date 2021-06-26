import axios from "axios";
import router from "../router";

export const login = ({ commit }, form) => {
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/api/auth/login",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: form.email,
      password: form.password,
    },
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
      commit("token", response.data.token);
      const user = {
        email: response.data.email,
        name: response.data.name,
        username: response.data.username,
        avatar: response.data.avatar,
        isAdmin: response.data.isAdmin,
        subscription: response.data.subscription,
      };
      commit("user", user);
      router.push({ name: "Home" });
    })
    .catch((error) => {
      commit("errors", error);
      console.log(error);
    });
};

export const register = ({ commit }, form) => {
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/api/auth/register",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      email: form.email,
      password: form.password,
      name: form.name,
      username: form.username,
    },
  })
    .then((response) => {
      console.log(response);
      commit("token", response.data.token);
      const user = {
        email: response.data.email,
        name: response.data.name,
        username: response.data.username,
        avatar: response.data.avatar,
        isAdmin: response.data.isAdmin,
        subscription: response.data.subscription,
      };
      commit("user", user);
      router.push({ name: "Home" });
    })
    .catch((error) => {
      commit("errors", error);
      console.log(error);
    });
};

export const getPosts = ({ commit }) => {
  axios({
    method: "get",
    url: "http://127.0.0.1:8000/api/posts",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      console.log(response);
      commit("posts", response.data);
    })
    .catch((error) => {
      commit("errors", error);
      console.log(error);
    });
};

export const searchPosts = ({ commit }, search) => {
  axios({
    method: "post",
    url: "http://127.0.0.1:8000/api/posts/search",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    data: {
      search: search,
    },
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
      commit("search", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
