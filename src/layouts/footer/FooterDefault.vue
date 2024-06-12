<template>
  <div>
    <footer class="footer footer-transparent">
      <div class="container">
        <div class="row text-center align-items-center flex-row-reverse">
          <div class="col-lg-auto ml-lg-auto">
            <ul class="list-inline list-inline-dots mb-0">
              <li class="list-inline-item">
                <router-link to="/privacypolicy">개인정보보호정책</router-link>
              </li>
               <li class="list-inline-item">
                <router-link to="/termsofservice">이용약관</router-link>
              </li>
              <li class="list-inline-item">
                <a href="#" class="link-secondary">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="col-12 col-lg-auto mt-3 mt-lg-0">
            Copyright © 2020
            <a href="." class="link-secondary">{{title}}</a>.
            All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="js">
export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      title: '',
      msg: '',
    }
  },
  methods: {
  
  },
}
</script>