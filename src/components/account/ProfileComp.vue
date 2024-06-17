<template>
    <div>
      <div class="card-body">
        <div class="page-pretitle">Profile</div>
        <h2 class="mb-4">기본 정보</h2>
        
        <!-- <h3 class="card-title mt-4">Business Profile</h3> -->
        <div class="row g-3 mt-2">
          <div class="col-md">
            <div class="form-label">이름</div>
            <input type="text" class="form-control"   disabled="" />
          </div>
          <div class="col-md">
            <div class="form-label">학과</div>
            <input type="text" class="form-control" disabled="" />
          </div>
          <div class="col-md">
            <div class="form-label">학년</div>
            <input type="text" class="form-control"   disabled="" />
          </div>
          <div class="col-md">
            <div class="form-label">학번</div>
            <input type="text" class="form-control"  disabled="" />
          </div>
          
        </div>
       
        
        <div style="margin: 30px; align-items: center;">
          <div class="col-auto" style="margin-left: 40%; margin-right: 40%;">
            <PwResetAccount btnLabel="비밀번호 변경하기" />
          </div>
           
        </div>  
        
        
      </div>
      <div class="card-footer bg-transparent mt-auto d-none">
        <div class="btn-list justify-content-end">
          <a href="#" class="btn"> 취소 </a>
          <a href="#" class="btn btn-primary"> 저장 </a>
        </div>
      </div>
    </div>
  </template>
    
  <script>

  import PwResetAccount from '@/components/user/pwResetAccount';

  export default {
    name: "profile-comp",
    props: {},
    components: {
      PwResetAccount   //todo
    },
    data() {
      return {
        
        employees: [],
        mode: {
          userId: 0,
          tableName: "",
          type: "",
          image: "",
        },
      };
    },
    mounted() {
    
    },
    methods: {
      logout() {
        this.$store.commit("deleteSession");
        this.$router.push("/signin");
      },
     
    },
    watch: {
    },
  };
  </script>
    
  <style></style>
    