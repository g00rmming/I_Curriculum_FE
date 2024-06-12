<template>
  <div class="page page-center">
    <SignInComp title="title" v-if="displayed"></SignInComp>
    <div v-else>

      <div class="empty">
        <div class="empty-img">
          <img src="@/assets/etech-logo.png" height="30px" v-if="theme === 'dark'" />
          <!-- 블루 로고 -->
          <img src="@/assets/etech-logo-blue.png" height="30px" v-if="theme === 'light'" />
        </div>
        <p class="empty-title">{{ title }}</p>
        <p class="empty-subtitle text-secondary">
          {{ msg }}
        </p>
        <div class="card-body">
          <ul class="steps steps-counter steps-vertical">
            <li class="step-item" v-for="message in messages" :key="message">{{ message }}</li>
          </ul>
        </div>
        <div class="empty-action">
          <a href="/auth/check" class="btn btn-primary">
            <!-- Download SVG icon from http://tabler-icons.io/i/arrow-left -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            다시시도
          </a>
          <a href="/auth/logout" class="btn btn-primary">
            <!-- Download SVG icon from http://tabler-icons.io/i/arrow-left -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
              stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M5 12l6 6" />
              <path d="M5 12l6 -6" />
            </svg>
            로그아웃
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import SignInComp from "../../components/user/SignInComp.vue";

export default {
  name: "app",
  components: {
    SignInComp,
  },
  data() {
    return {
      title: "",
      msg: "",
      messages: [],
      displayed: true,
      headers: {
        CMP_REGION_ENDPOINT: "",
      },
      theme: "light",
      loginInfo: {
        email: "",
        password: "",
      },
      RegionClient: [],
      userInfo: [],
      userClient: [],
      checkInfo: [],
      zones: [],
      zone: {},
      project: {},
      projects: [],
      projectService: [],
      deployments: [],
      resources: [],
      catalogs: [],
      endpoint: "",
      endpoints: "",
      payload: [],
    };
  },
  created() {

  },
  mounted() {

  },
  watch: {

  },
  methods: {

  },
};
</script>
<style scoped>
.empty-img img {
  height: 30px !important;

}
</style>