<template>
  <div class="page" >
    <HeaderTow title="" msg="" v-if="navbarType == 'HeaderTow'" /> <!--유저 권한일떄 보이는 페이지-->
    <div class="page-wrapper" :style="{ width: '100%', margin: dynamicMargin}">
      <router-view />
    </div>
  </div>
</template>

<script lang="js">
import HeaderTow from "../layouts/header/HeaderTow.vue"


export default {
  name: 'app',
  components: {
    
    HeaderTow,
    
  },
  data() {
    return {
      title: '',
      userGroup: '',
      dynamicWidth: '100%',
      dynamicMargin: '',
      isnavbar: false,
      navbarType: "",
      springBootVueInfo: {
        groupId: "",
        artifactId: "",
        description: ""
      }
    }
  },
  created(){
    this.aaaa =  document.getElementById("pageBody");
    console.log(this.aaaa)
    this.userValidation(); 
  },
  mounted() {
    // this.searchItems();
    
    
  },
  methods: {
    updateUserDateStore: function () {
      
      // this.userGroup = this.$store.getters.userGroup; // todo :나중에 유저권한 가져올떄 필요함
      
        this.navbarType = 'HeaderTow'
        // let element = document.querySelector(".container");
        // element.style.maxWidth = "80%";
        // let body = document.body;
        // body.style.overflow = "";
        this.dynamicMargin= "0 auto"
        this.dynamicWidth = "100%"

      
      
      // this.$store.commit('initSession', payload);
      // this.$store.commit('LOGIN', payload.userInfo.userId);
    },
    userValidation: function () {
      this.updateUserDateStore(); 
      
      // const payload = localStorage.getItem('cmpUserData') ?? undefined;

      // console.log("@ 석찬 ::: ", payload);
      
      // if (payload) {
      //   // TODO 데이터 유효성 검사 - 석찬
      //   const item = JSON.parse(payload);
      //   console.log("@ seok ::: ", item);
      //   this.updateUserDateStore(item); 
      // } else {
      //   this.$swal('세션이 만료 되었습니다..', '다시로그인 바랍니다. ', 'info');
      //   this.$store.commit("deleteSession");
      //   this.$router.push("/signin");
      //   return false;
      // }
    },
  },

}
</script>
