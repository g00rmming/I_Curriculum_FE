<template>
  <div class="page page-center">
    <div class="container-tight py-4">
      <div class="text-center mt-4 mb-4">
        <h2>
          <!-- 화이트 로고 -->
          <img src="@/assets/image.png" width="200px" />
          <!-- 블루 로고 -->
        </h2>
      </div>
      <div class="card card-md">
        <div class="card-body">
          <form action="./" method="get" autocomplete="off" novalidate>
            <div class="mb-3">
              <label class="form-label">아이디(ID)</label>
              <input v-model="memberInfo.clientId" type="email" class="form-control" placeholder="your ID"
                autocomplete="off" />
                <a @click="isExisted()" class="btn  btn-pill btn-primary" role="button">중복체크</a>
            </div>
            <div class="mb-3">
              <label class="form-label">닉네임</label>
              <input v-model="memberInfo.nickname" type="email" class="form-control" placeholder="nickname"
                autocomplete="off" />
            </div>
            <div class="mb-2">
              <label class="form-label">
                비밀번호(Password)
                <!-- <span class="form-label-description text-primary">
                    <router-link to="/forgotpassword" tabindex="-1" style="color: rgba(var(--tblr-link-color-rgb),var(--tblr-link-opacity,1))"> 비밀번호 찾기</router-link>
                  </span> -->
              </label>
              <div class="input-group input-group-flat">
                <input v-model="memberInfo.password" type="password" class="form-control" placeholder="Your password"
                  autocomplete="off" />
                <span class="input-group-text">
                  <a href="#" class="link-secondary" title="Show password"
                    data-bs-toggle="tooltip"><!-- Download SVG icon from http://tabler-icons.io/i/eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                      <path
                        d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
            <br>

            <div class="mb-3">
              <label class="form-label">학과</label>
              <input v-model="memberInfo.department_name" type="email" class="form-control" placeholder="학과를 입려하시오."
                autocomplete="off" />
            </div>

            <div class="mb-3">
              <label class="form-label">입학년도</label>
              <select v-model="memberInfo.joinYear" class="form-select">
                                            <option value="2018">2018</option>
                                            <option value="2019">2019</option>
                                            <option value="2020">2020</option>
                                            <option value="2021">2021</option>
                                            <option value="2022">2022</option>
                                            <option value="2023">2023</option>
                                            <option value="2024">2024</option>
                                          
                                        </select>
            </div>

            <div class="mb-3">
              <label class="form-label">현재 학기</label>
              <select v-model="memberInfo.compeleteTerm" class="form-select">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                          
                                        </select>
            </div>

            <div class="form-footer mb-2 text-center">
              <a @click="createMember()" class="btn  btn-pill btn-primary" role="button">회원가입</a>
            </div>
          </form>
        </div>

      </div>

    </div>
  </div>
</template>


<script>
import router from '@/router'





export default {
  inject: ['$axios'],
  data() {
    return {
      apiurl: '/v1/members',
      memberInfo: { //이메일 비밀번호 닉네임 입학년도 완료학기 소속과이름
        clientId: '',
        password: '',
        nickname: '',
        department_name: '',
        joinYear: 0,
        compeleteTerm: 0,
        checkClick: false,
        checkDuplicate: false,
        deptNameList: [],
      }
    };

  },
  mounted(){
    this.fetchData();
  },
  methods: {
     fetchData(){
      const department =  this.$axios.get('/api/v1/departments-names');
      console.log('yeon',department);
    },
    createMember() {
      this.$swal({
        title: "회원가입 하시겠습니까?",
        type: "warning",
        icon: "question",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "예",
        cancelButtonText: "아니오",
        closeOnConfirm: true,
        closeOnCancel: true
      }).then((result) => {
        if (result.isConfirmed) {
          if(this.checkClick && !this.checkDuplicate){
            if(this.memberInfo.clientId == '' ||this.memberInfo.password== '' ||this.memberInfo.nickname =='' || this.memberInfo.department_name == '' || this.memberInfo.joinYear == '' || this.compeleteTerm == ''){
              this.$swal('빈칸 없이 모든 항목을 입력/선택 해주세요.', '', 'warning'); //입력란에 빈칸 있을 시 다시 입력 받게 함
            }else{
               this.$axios.post(`${this.apiurl}/join`, {
            clientId: this.memberInfo.clientId,
            password: this.memberInfo.password,
            nickname: this.memberInfo.nickname,
            department_name: this.memberInfo.department_name,
            joinYear: this.memberInfo.joinYear,
            compeleteTerm: this.compeleteTerm,
          }).then((res) => {
            console.log(res);
            if (res) {
              this.$swal('완료 되었습니다.', '', 'success')
              router.push('/signin')
            } else {
              alert('실패')
            }
          }).catch((err) => {
            console.log(err);
          })
            }
            
          }else
          {
            if(!this.checkClick){
              this.$swal('중복 체크를 해주세요.', '', 'warning') // 중복체크 안했을 시 join 요청 하지 않음.
            }
           
          }
          
        }else{
          this.$swal('회원가입을 취소 하셨습니다.', '', 'warning') 
        }
      })
    },
     async isExisted() {
      // 아이디 중복 체크 메서드. 중복체크 클릭 버튼과 중복인지 아닌지를 bool 값으로 지정.
      if(this.memberInfo.clientId == ''){
        this.$swal('아이디를 입력해 주세요.', '', 'warning')
      }else{
        this.checkClick = true
          const res=  await this.$axios.get('/v1/members/isExistId', {
          params: { clientId : this.memberInfo.clientId }
        });
        this.checkDuplicate = res.data.result;
      
        if(this.checkDuplicate){
          this.$swal('이미 존재하는 아이디( ID or Email) 입니다.', '', 'warning')
          this.checkClick =false;
        }else{
          this.$swal('사용 가능한 아이디( ID or Email ) 입니다.', '', 'success')
        }
      }
    },
  }
}
</script>