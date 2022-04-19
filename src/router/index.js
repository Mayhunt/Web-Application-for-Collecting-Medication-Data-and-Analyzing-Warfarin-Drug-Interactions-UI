import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/log-in',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/LogIn/index.vue'),
  },
  {
    path: '/allergic-pic',
    name: 'AllergicPic',
    component: () => import(/* webpackChunkName: "AllergicPic" */ '../views/AllergicPic/index.vue'),
  },
  {
    path: '/allergic-used',
    name: 'AllergicUsed',
    component: () => import(/* webpackChunkName: "AllergicUsed" */ '../views/AllergicUsed/index.vue'),
  },
  {
    path: '/drug-used',
    name: 'DrugUsed',
    component: () => import(/* webpackChunkName: "DrugUsed" */ '../views/DrugUsed/index.vue'),
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home/index.vue'),
  },
  {
    path: '/question',
    name: 'Question',
    component: () => import(/* webpackChunkName: "Question" */ '../views/Question/index.vue'),
  },
  {
    path: '/question2',
    name: 'Question2',
    component: () => import(/* webpackChunkName: "Question" */ '../views/Question2/index.vue'),
  },
  {
    path: '/register1',
    name: 'Register1',
    component: () => import(/* webpackChunkName: "Register1" */ '../views/Register1/index.vue'),
  },
  {
    path: '/register2',
    name: 'Register2',
    component: () => import(/* webpackChunkName: "Register2" */ '../views/Register2/index.vue'),
  },
  {
    path: '/register3',
    name: 'Register3',
    component: () => import(/* webpackChunkName: "Register3" */ '../views/Register3/index.vue'),
  },
  {
    path: '/save-allergic',
    name: 'SaveAllergic',
    component: () => import(/* webpackChunkName: "SaveAllergic" */ '../views/SaveAllergic/index.vue'),
  },
  {
    path: '/save-drug',
    name: 'SaveDrug',
    component: () => import(/* webpackChunkName: "SaveDrug" */ '../views/SaveDrug/index.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import(/* webpackChunkName: "Search" */ '../views/Search/index.vue'),
  },
  {
    path: '/for-test',
    name: 'ForTest',
    component: () => import(/* webpackChunkName: "ForTest" */ '../views/ForTest/index.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "ForTest" */ '../views/Profile/index.vue'),
  },
  {
    path: '/edit-allergic',
    name: 'EditAllergic',
    component: () => import(/* webpackChunkName: "ForTest" */ '../views/EditAllergic/index.vue'),
  },
  {
    path: '/edit-drugused',
    name: 'EditDrugUsed',
    component: () => import(/* webpackChunkName: "ForTest" */ '../views/EditDrugUsed/index.vue'),
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
