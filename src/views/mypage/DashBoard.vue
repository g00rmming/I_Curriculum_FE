<template>
  <div class="container">
    <div v-if="onLoading">
      <div class="container container-slim py-4">
        <div class="text-center">
          <div class="text-muted mb-3">마이 페이지</div>
          <div class="progress progress-sm">
            <div class="progress-bar progress-bar-indeterminate"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="page-header">
        <div class="row align-items-end" style="height: 41px;">
          <div class="row pe-0">
            <div class="col-12">
              <div class="page-pretitle">DashBoard</div>
              <div class="btn-list justify-content-between align-items-center w-100" style="height: 25px;">
                <h2 class="page-title">마이페이지</h2>
                <!-- <div v-if="adminMode" class="btn-list justify-content-center align-items-center">
                    <div class="form-check form-switch">
                      <input class="form-check-input cursor-pointer" type="checkbox" v-model="adminMyPage" role="switch" checked>
                      <span class="form-check-label form-check-label-on">내 것만보기</span>
                      <span class="form-check-label form-check-label-off">전체 보기</span>
                    </div>
                  </div> -->

              </div>
            </div>

          </div>

        </div>
      </div>
      <div class="hr-text"></div>
      <!-- 대시보드 영역 시작-->
      <div class="page-body mt-3" id="pageBody">
        <div class="row row-cards">
          <!-- 전체 이수학점 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-calculator me-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 3m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 7m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z"></path>
                    <path d="M8 14l0 .01"></path>
                    <path d="M12 14l0 .01"></path>
                    <path d="M16 14l0 .01"></path>
                    <path d="M8 17l0 .01"></path>
                    <path d="M12 17l0 .01"></path>
                    <path d="M16 17l0 .01"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전체 이수학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.totalTakenCredit }} / 130
                </div>

              </div>
            </div>
          </div>
          <!-- 전공 이수학점 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-gray">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-cash-banknote me-2">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                    <path d="M3 6m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                    <path d="M18 12l.01 0"></path>
                    <path d="M6 12l.01 0"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전공 이수학점</h3>
                <div class="h1 my-1 me-2">
                  {{ memberData.majorTakenCredit }} / 65
                </div>

              </div>

            </div>
          </div>
          <!-- 전체 성적 -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2"
                    stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"
                    class="icon icon-tabler icon-tabler-coins">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M9 14c0 1.657 2.686 3 6 3s6 -1.343 6 -3s-2.686 -3 -6 -3s-6 1.343 -6 3z"></path>
                    <path d="M9 14v4c0 1.656 2.686 3 6 3s6 -1.344 6 -3v-4"></path>
                    <path
                      d="M3 6c0 1.072 1.144 2.062 3 2.598s4.144 .536 6 0c1.856 -.536 3 -1.526 3 -2.598c0 -1.072 -1.144 -2.062 -3 -2.598s-4.144 -.536 -6 0c-1.856 .536 -3 1.526 -3 2.598z">
                    </path>
                    <path d="M3 6v10c0 .888 .772 1.45 2 2"></path>
                    <path d="M3 11c0 .888 .772 1.45 2 2"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전체 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.totalGrade }} /<span>(4.5)</span>
                </div>
                <div class="me-auto">
                  <span v-if="memberData.previousTotalGrade === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    성적 정보 없음
                  </span>
                  <span v-else-if="memberData.totalGradeIncrese > 0"
                    class="text-green d-inline-flex align-items-center lh-1">
                    {{memberData.totalGradeIncrese}}%증가
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                  <span v-else-if="memberData.totalGradeIncrese == 0.00"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    변함 없음
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </span>
                  <span v-else class="text-red d-inline-flex align-items-center lh-1">
                    {{ memberData.totalGradeIncrese }}%감소
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7l6 6l4 -4l8 8"></path>
                      <path d="M21 10l0 7l-7 0"></path>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>
          <!-- 전공 학점  -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-pink">
                  <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-zoom-money" width="24"
                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                    <path d="M21 21l-6 -6"></path>
                    <path d="M12 7h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5"></path>
                    <path d="M10 13v1m0 -8v1"></path>
                  </svg>
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전공 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.majorGrade }}/(4.5)</div>
                <div class="me-auto">
                  <span v-if="memberData.previousMajorGrade === 0"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    성적 정보 없음
                  </span>
                  <span v-else-if="memberData.MajorGradeIncrese > 0"
                    class="text-green d-inline-flex align-items-center lh-1">
                    {{memberData.totalGradeIncrese}}%증가
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M3 17l6 -6l4 4l8 -8" />
                      <path d="M14 7l7 0l0 7" />
                    </svg>
                  </span>
                  <span v-else-if="memberData.MajorGradeIncrese == 0.00"
                    class="text-yellow d-inline-flex align-items-center lh-1">
                    변함 없음
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon ms-1" width="24" height="24" viewBox="0 0 24 24"
                      stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M5 12l14 0"></path>
                    </svg>
                  </span>
                  <span v-else class="text-red d-inline-flex align-items-center lh-1">
                    {{ memberData.MajorGradeIncrese }}%감소
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trending-down"
                      width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M3 7l6 6l4 -4l8 8"></path>
                      <path d="M21 10l0 7l-7 0"></path>
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
      <!--  영역 끝-->
      <ResourceAllocation :majorList="majorList" 
      :generalList="generalList" 
      :generalCoreList="generalCoreList" 
      :majorSeries="majorSeries" 
      :generalSeries="generalSeries" 
      :generalCoreSeries="generalCoreSeries" 
      :totalTakenCredit="memberData.totalTakenCredit"
      :majorTakenCredit="memberData.majorTakenCredit"
      :generalCoreTakenCredit="memberData.generalCoreTakenCredit"
      :majorEssentialTakenCredit="memberData.majorEssentialTakenCredit"
      :generalEssentialTakenCredit="memberData.generalEssentialTakenCredit"
      :one="memberData.one"
      :two="memberData.two"
      :three="memberData.three"
      :four="memberData.four"
      :five="memberData.five"
      :six="memberData.six"
      :creative="memberData.creative"
      :standardCredit="memberData.standardCredit"
      >
    </ResourceAllocation>
    <div>
    <button v-if="buttonVisible" @click="handleClick" class="btn btn-primary mb-3">AI에게 수강과목을 바탕으로 진로 추천받기</button>
    <div v-if="loading">
      <h1>Loading<span class="animated-dots"></span></h1>
    </div>
    <div v-if="promptResponse && !loading" class="col-12">
      <div class="card card-md">
        <div class="card-stamp card-stamp-lg">
          <div class="card-stamp-icon bg-primary">
            <!-- 아이콘 또는 이미지 추가 -->
            <i class="fas fa-robot"></i>
          </div>
        </div>
        <div class="card-body">
          <div class="row align-items-center">
            <div class="col-10">
              <h3 class="page-title">응답 결과</h3>
              <p></p>
              <div class="markdown">
                <p ref="responseText" v-html="promptResponse"></p>
              </div>
              <div class="mt-3">
                <!-- 추가 정보 -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import ResourceAllocation from '@/components/dashboard/ResourceAllocation.vue';

export default {
  inject: ['$axios'],
  components: {
    ResourceAllocation,
  },
  props: {},
  data() {
    return {
      onLoading: true,
      value1: "",
      value2: "",
      memberData: {},
      majorList:{},  // 전공
      generalList:{}, // 교양 
      generalCoreList:{}, // 핵교
      buttonVisible: true,
      subjects : [],
      promptResponse:"",
      prompt : ""
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    // todo : 데이터 불러오기 가능
    fetchData() {
      this.onLoading = true;
      const userId=localStorage.getItem('memberId');
      this.$axios.get('/v1/dashboard', {
        params: {
          memberId: userId,  
        }
      }).then((res) => {
        console.log(res.data.result);
        const result = res.data.result;
        this.memberData = {
          totalTakenCredit: result.totalTakenCredit || 0, // 전체 이수학점
          majorTakenCredit: result.majorTakenCredit || 0, // 전공 이수학점

          majorGrade: result.majorGrade ? parseFloat(result.majorGrade).toFixed(2) : 0.00, // 전공 학점
          previousMajorGrade: result.previousMajorGrade? parseFloat(result.previousMajorGrade).toFixed(2) : 0.00, // 전학기까지 전공 학점성적 

          totalGrade: result.totalGrade ? parseFloat(result.totalGrade).toFixed(2) : 0.00, // 총 학점 
          previousTotalGrade: result.previousTotalGrade? parseFloat(result.previousTotalGrade).toFixed(2) : 0.00, // 전학기총 학점 성적

         
          generalCoreTakenCredit: result.generalCoreDTO.totalCredit || 0, // 핵심교양 이수학점
          generalEssentialTakenCredit: result.takenGeneralDTO.takenEssentialCredit|| 0, // 교양 필수 학점
          majorEssentialTakenCredit: result.takenMajorDTO.takenEssentialCredit|| 0, //전공 필수 학점

          one: result.generalCoreDTO.takeOne,
          two: result.generalCoreDTO.takeTwo,
          three: result.generalCoreDTO.takeThree,
          four: result.generalCoreDTO.takeFour,
          five: result.generalCoreDTO.takeFive,
          six: result.generalCoreDTO.takeSix,
          creative: result.generalCoreDTO.takeCreative,
          standardCredit : result.generalCoreDTO.standardCredit,

          totalGradeIncrese : this.calculatePercentageIncrease(result.previousTotalGrade,result.totalGrade),
          MajorGradeIncrese : this.calculatePercentageIncrease(result.previousMajorGrade,result.majorGrade),



        }
        console.log("seok",this.memberData.MajorGradeIncrese);
        //추천 전공
        this.majorList = {
          major: "전공",
          DataList: result.takenMajorDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };
          // 추천 교양 
          this.generalList = {
          major: "교양",
          DataList: result.takenGeneralDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };

          //추천 핵심 교양
          this.generalCoreList = {
          major: "핵교",
          DataList: result.generalCoreDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };
        
        this.onLoading = false;
      }).catch((err) => {
        console.log(err);
      })
    },
    calculatePercentageIncrease(initialValue, finalValue) {
      // 증가율 계산
      const increase = finalValue - initialValue;
      const percentageIncrease = (increase / initialValue) * 100;

      // 결과 반환
      return percentageIncrease.toFixed(2);
    },
    fetchData2() {
      const userId = localStorage.getItem('memberId');
      this.$axios.get('/v1/courses/take', {
        params: {
          memberId: userId // 실제 사용자 ID로 변경
        }})
        .then(response => {
          const responseList = response.data.result.takenCourseDTOList; // 서버에서 받은 데이터에 맞게 변경
          console.log('받은 데이터:', responseList); // 받아온 데이터 로그
          if (Array.isArray(responseList)) {
            this.subjects = responseList;
            this.generatePrompt();
            this.prompt = "내가" + this.prompt + "를 들었는데 이 과목들을 기반으로 내 진로에 대해 다른 말은 하지 말고 1.??? 2.??? 3.??? 4??? 이런 형식으로 추천해서 보여줘. ";
            this.askToAi();
            console.log("dong", this.prompt);
            this.subjects.forEach((item, index) => {
              console.log(`Item ${index + 1}:`);
              console.log(`  courseId: ${item.courseId}`);
              console.log(`  name: ${item.courseName}`);
            });
          } else {
            console.error('받은 데이터가 배열이 아닙니다:', responseList);
          }})
          .catch(error => {
            console.error('데이터 가져오기 실패:', error);
            this.$swal("로그인을 해주세요.", '', "error");
          });
        },
        generatePrompt() {
          this.prompt = this.subjects
          .filter(subject => subject.categoryName === "전공필수" || subject.categoryName === "전공선택")
          .map(subject => subject.courseName)
          .join(', ');
        },
        askToAi() {
          // 생성한 프롬프트 데이터를 payload로 준비
          const payload = {
            prompt: this.prompt
          };
          // API 요청 보내기
          this.$axios.post('/api', payload)
          .then(response => {
            // 응답 데이터를 처리하고, output 값을 promptResponse에 저장
            this.promptResponse = response.data.output;
            console.log('응답 받음:', this.promptResponse);
            this.loading = false;
          })
          .catch(error => {
            // 오류 처리
            console.error('오류 발생:', error);
            this.loading = false;
          });
        },
        handleClick() {
          this.loading = true;
          this.fetchData2();
          this.buttonVisible = false; // 버튼을 클릭하면 사라지게 설정
        },
      
        },

      watch: {},
      };
</script>

<style scoped>
.page-link {
  min-width: 0 !important;
}

.date-picker-cost {
  justify-content: end;
}

.cost-card-header {
  justify-content: end;
}

.cost-btn-group {
  padding-right: 0.5rem !important;
  justify-content: end;
  box-shadow: none;
}


@media (max-width: 767px) {
  .date-picker-cost {
    margin-top: 0.5rem;
    justify-content: start;
    width: 100%;
  }

  .date-picker-cost .el-date-editor {
    width: 100%;
    display: flex;
  }

  .cost-card-header {
    flex-wrap: wrap;
    justify-content: start;
  }

  .date-picker-cost {
    margin-top: 10px;
  }

  .cost-btn-group {
    padding-right: 0 !important;
    justify-content: start;
    margin-top: 10px;
    flex-wrap: wrap;
  }

}

@media (max-width: 1199px) {
  .cost-card-header {
    flex-wrap: wrap;
  }

  .date-picker-cost {
    margin-top: 10px;
  }

  .cost-btn-group {
    padding-right: 0 !important;
  }
}

.el-date-editor>.el-date-editor>.el-range-separator {
  line-height: 16px !important;
}

.el-input__icon {
  line-height: 16px !important;
}
.markdown p {
  font-size: 1.1em;
  white-space: pre-wrap; /* 줄바꿈을 위한 스타일 */
  margin: 0; /* 텍스트 주변의 여백을 제거 */
  justify-content: end;
}

</style>