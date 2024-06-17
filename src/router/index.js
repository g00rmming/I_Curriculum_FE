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
  },
  {
    path: '/CurriculumDiagram',
    name: 'CurriculumDiagramPage',
    component: () => import('../views/mypage/CurriculumDiagram.vue'),
    beforeEnter: guardMyroute
  }
  ,
  {
    path: '/CurriculumTable',
    name: 'CurriculumTablePage',
    component: () => import('../views/mypage/CurriculumTable.vue'),
    beforeEnter: guardMyroute
  }
  ,
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



// import httpApi from '@/utils/http';



// //token 재발급
// async function refreshToken(){
//   try{
//       const token = await httpApi.post('/login',{
//         username:this.$store.getters.memberId,
//         password:this.$store.getters.password
//       });
//       // VueCookies.set('token', token.headers.data.token, '60*10' );
//       return token;
//   }catch(err){
//       return err;
//   }
// }

// // 모든 라우터들이 실행될때 토큰이 유효한지 확인하고 유효하지 않다면 토근을 재발급 또는 로그아웃 함수를 실행한다.
// router.beforeEach( async(to, from, next) => {

//   if(VueCookies.get('token')===null && VueCookies.get('refresh_token') !== null){
//     await refreshToken();
//   }

//   if (to.matched.some(record => record.meta.unauthorized) || VueCookies.get('token')){
//     return next();
//   }

//     alert('로그인 해주세요');
//     return next('/login');
// })





export default router
