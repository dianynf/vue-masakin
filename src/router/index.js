import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home";
import Foods from "../views/Foods";
import axios from "axios";

Vue.use(VueRouter);

axios.defaults.baseURL = "http://localhost:3000/";

const routes = [
    { path: "/", component: Home },
    { path: "/foods", component: Foods },
    { path: "/food/:id", component: () => import("../views/FoodDetail.vue") }
];

const router = new VueRouter({
    routes,
    mode: "history"
});

export default router;
