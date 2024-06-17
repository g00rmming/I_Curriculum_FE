<template>
    <div>
        <button type="button" class="w-100 btn " data-bs-toggle="modal" data-bs-target="#pwreset_modal">
            {{ btnLabel }}
        </button>

        <div class="modal" id="pwreset_modal" tabindex="-1">
            <div class="modal-dialog modal-m modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">비밀번호 변경</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label class="form-label">현재 비밀번호</label>
                            <input v-model="curPw" type="text" class="form-control" name="example-text-input"
                                placeholder="비밀번호를 입력해주세요">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">새로운 비밀번호</label>
                            <input v-model="newPw" type="text" class="form-control" name="example-text-input"
                                placeholder="비밀번호를 입력해주세요">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">새로운 비밀번호 확인</label>
                            <input v-model="newPwConfirm" type="text" class="form-control" name="example-text-input"
                                placeholder="비밀번호를 입력해주세요">
                        </div>
                    </div>
                    <!-- <div class="card-body p-5">
                        <div class="mb-2">
                            <div for="">현재 비밀번호</div>
                            <div class="input-group input-group-flat mb-2">
                                <input type="password" class="form-control ps-1" autocomplete="off">
                            </div>
                            <div for="">새로운 비밀번호</div>
                            <div class="input-group input-group-flat mb-2">
                                <input type="password" class="form-control ps-1" autocomplete="off">
                            </div>
                            <div for="">새로운 비밀번호 확인</div>
                            <div class="input-group input-group-flat">
                                <input type="password" class="form-control ps-1" autocomplete="off">
                            </div>
                        </div>

                    </div> -->
                    <div class="modal-footer">
                        <a class="btn" data-bs-dismiss="modal" aria-label="Close">
                            취소
                        </a>
                        <a @click="showAlert" class="btn btn-primary ms-auto" data-bs-dismiss="modal">
                            확인
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "password-reset",
    components: {

    },

    props: {
        btnLabel: String,
    },
    data() {
        return {
            selectedEmploy: {},
            newPw: "",
            newPwConfirm: "",
            curPw: "",
            userEmail: "",
            urlApi: ""
        };
    },
    mounted() { },
    methods: {
        async showAlert() {
            
            this.userEmail = this.$store.getters.userEmail;
            const userId = this.$store.getters.userId;
            // var checkPw = await this.checkPassword();
            var checkPw=true; //임시로 
            if (!checkPw) {
                this.$swal("현재 비밀번호를 확인해주세요.", '', 'warning')
                this.curPw = "";
            } else if ((this.newPw !== this.newPwConfirm) || this.newPw === "") {
                this.curPw = "";
                this.newPw = "";
                this.newPwConfirm = "";
                this.$swal("비밀번호를 확인해주세요", '', 'warning')
            } else { 
                this.$axios.post(`${this.urlApi}`,{},{
                        params: {
                            userId: userId,
                            password: this.newPw
                        }
                    }).then(()=>{
                    this.$swal("비밀번호가 변경되었습니다.", '', 'success')
                }).catch((err)=>{
                    console.log(err)
                })
            }
        },
        checkPassword() {
            return new Promise((resolve, reject) => {
                this.$axios.get() // 여기서 userpassword 확인
                    .then((res) => {
                        if (res.data[0].userPassword === this.curPw) {
                            resolve(true);
                        } else {
                            resolve(false);
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        reject(err);
                    })
            })

        },
    },
    watch: {},
};
</script>
  