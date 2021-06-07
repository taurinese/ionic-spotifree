import { createRouter, createWebHistory } from "@ionic/vue-router";
import Home from "../views/Home.vue";
import Search from "../views/Search.vue";
import Library from "../views/Library.vue";
import Playlist from "../views/Playlist.vue";
import Account from "../views/Account.vue";
import News from "../views/News.vue";
import NewsSingle from "../views/NewsSingle.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
  {
    path: "/library",
    name: "Library",
    component: Library,
  },
  {
    path: "/playlist",
    name: "Playlist",
    component: Playlist,
  },
  {
    path: "/account",
    name: "Account",
    component: Account,
  },
  {
    path: "/news",
    name: News,
    component: News,
  },
  {
    path: "/news/:id",
    name: NewsSingle,
    component: NewsSingle,
  },
  {
    path: "/contact",
    name: Contact,
    component: Contact,
  },
  {
    path: "/login",
    name: Login,
    component: Login,
  },
  {
    path: "/register",
    name: Register,
    component: Register,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
