import axios from "axios";
import router from "../router";

export const login = ({ commit }, form) => {
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/auth/login`,
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
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const register = ({ commit }, form) => {
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/auth/register`,
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
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const getPosts = ({ commit }) => {
  axios({
    method: "get",
    url: `${process.env.VUE_APP_API_URL}/api/posts`,
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
      const toast = document.createElement("ion-toast");
      toast.message = "Erreur lors de la r??cup??ration des posts";
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const getPost = ({ commit }, id) => {
  axios({
    method: "get",
    url: `${process.env.VUE_APP_API_URL}/api/posts/` + id,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      commit("post", response.data[0]);
      console.log(response);
      // commit("posts", response.data);
    })
    .catch((error) => {
      commit("errors", error);
      console.log(error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const searchPosts = ({ commit }, search) => {
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/posts/search`,
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
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const contact = ({ commit }, form) => {
  console.log(form);
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/contact`,
    headers: {
      Accept: "application/json",
      // "Content-Type": "application/json",
    },
    data: {
      email: form.email,
      name: form.name,
      subject: form.subject,
      body: form.body,
    },
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      commit("errors", error);
      console.log(error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const changeName = ({ getters, commit }, name) => {
  console.log(getters.token + " : " + name);
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/profile/name`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getters.token}`,
    },
    data: {
      name: name,
    },
    mode: "cors",
  })
    .then((response) => {
      commit("changeName", response.data.name);
      const toast = document.createElement("ion-toast");
      toast.message = "Le nom a ??t?? modifi??";
      toast.color = "success";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.name[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const changeUsername = ({ getters, commit }, username) => {
  console.log(getters.token + " : " + username);
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/profile/username`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getters.token}`,
    },
    data: {
      username: username,
    },
    mode: "cors",
  })
    .then((response) => {
      commit("changeUsername", response.data.username);
      const toast = document.createElement("ion-toast");
      toast.message = "Le pseudo a ??t?? modifi??";
      toast.color = "success";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.username[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const changeEmail = ({ getters, commit }, email) => {
  console.log(getters.token + " : " + email);
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/profile/email`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getters.token}`,
    },
    data: {
      email: email,
    },
    mode: "cors",
  })
    .then((response) => {
      commit("changeEmail", response.data.email);
      const toast = document.createElement("ion-toast");
      toast.message = "L'email a ??t?? modifi??";
      toast.color = "success";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.email[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const changePassword = ({ getters, commit }, passwords) => {
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/profile/password`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getters.token}`,
    },
    data: {
      currentPassword: passwords.current,
      newPassword: passwords.new,
      confirmPassword: passwords.confirm,
    },
    mode: "cors",
  })
    .then((response) => {
      console.log(response.data);
      const toast = document.createElement("ion-toast");
      toast.message = "Le mot de passe a ??t?? modifi??";
      toast.color = "success";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.password[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const changeAvatar = ({ getters, commit }, avatar) => {
  console.log(avatar);
  let formData = new FormData();
  formData.append("avatar", avatar);
  console.log(formData.get("avatar"));
  axios({
    method: "post",
    url: `${process.env.VUE_APP_API_URL}/api/profile/avatar`,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${getters.token}`,
      "Content-Type":
        "multipart/form-data; charset=utf-8; boundary=" +
        Math.random()
          .toString()
          .substr(2),
    },
    data: {
      avatar: formData.get("avatar"),
    },
    mode: "cors",
  })
    .then((response) => {
      console.log(response);
      // commit("changeEmail", response.data.email);
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};

export const getPlans = ({ commit }) => {
  axios({
    method: "get",
    url: `${process.env.VUE_APP_API_URL}/api/plans`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    mode: "cors",
  })
    .then((response) => {
      commit("plans", response.data);
      console.log(response);
      // commit("changeEmail", response.data.email);
    })
    .catch((error) => {
      commit("errors", error);
      const toast = document.createElement("ion-toast");
      toast.message = error.response.data.errors.message[0];
      toast.color = "danger";
      toast.duration = 4000;

      document.body.appendChild(toast);
      toast.present();
    });
};
