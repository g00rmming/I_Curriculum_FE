import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/index';

function guardMyroute(to, from, next) {
  console.log(store, "asddddddddddddddddddd");
  var isAuthenticated = false;
  if (localStorage.getItem("isAuthenticated")) isAuthenticated = true;
  else isAuthenticated = false;
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next("/signin"); // go to '/signin';
  }
}


const userRoutes = [
  {
    path: '/',
    name: 'SignIn',
    component: () => import("../views/user/SignInPage.vue"),
  },
  {
    path: '/signin',
    name: 'SignInpage',
    component: () => import("../views/user/SignInPage.vue"),
  },
  {
    path: '/createMember',
    name: 'createMemberpage',
    component: () => import("../views/user/createMember.vue"),
  },
  

]

const defaultRoutes = [

  
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/mypage/DashBoard.vue'),
    beforeEnter: guardMyroute
  }
  ,
  {
    path: '/myaccount',
    name: 'my-account',
    component: () => import('../views/myaccount/Myaccount.vue'),
    beforeEnter: guardMyroute
  },
  {
    path: '/untake',
    name: 'untake',
    component: () => import('../views/coursemangent/UnTake.vue'),
    beforeEnter: guardMyroute
  },
  {
    path: "/Mytake",
    name: 'Mytake',
    component: () => import('../views/coursemangent/MyTake.vue'),
    beforeEnter: guardMyroute
  }
]





const routes = [
  {
    path: "/",
    name: "user",
    component: () => import("../layouts/UserLayout.vue"),
    children: userRoutes,
  },
  {
    path: "/default",
    name: "default",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: defaultRoutes,
  },




];



const router = createRouter({
  history: createWebHistory('/'), //나중에 변경해야함
  routes,

})

export default router
