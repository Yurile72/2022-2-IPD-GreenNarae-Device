import { createWebHistory, createRouter } from "vue-router";
import ErrorPage from "../views/ErrorPage.vue"
import Home from "../views/Home.vue"
import Confirm from "../views/Confirm.vue"
import Select from "../views/Select.vue"
import PressPhone from "../views/PressPhone.vue"
import QRScan from "../views/QRScan.vue"
import Retry from "../views/Retry.vue"
import Complete from "../views/Complete.vue"

const routes = [
    { path : "/", name : "Home", component : Home },
    { path : "/Select", name : "Select", component : Select },
    { path : "/PressPhone", name : "PressPhone", component : PressPhone },
    { path : "/QRScan", name : "QRScan", component : QRScan },
    { path : "/Confirm", name : "Confirm", component : Confirm, props: true },
    { path : "/Retry", name : "Retry", component : Retry },
    { path : "/Complete", name : "Complete", component : Complete },
    { path : "/:catchAll(.*)", name : "ErrorPage", component : ErrorPage},
]

const router = createRouter({
    history : createWebHistory(),
    routes : routes
});

export default router;