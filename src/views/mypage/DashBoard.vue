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
                  <!-- ... -->
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
                  <!-- ... -->
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
                  <!-- ... -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전체 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.totalGrade }} /<span>4.5</span>
                </div>
                <div class="me-auto">
                  <!-- ... -->
                </div>
              </div>
            </div>
          </div>
          <!-- 전공 학점  -->
          <div class="col-md-6 col-lg-3">
            <div class="card border">
              <div class="card-stamp">
                <div class="card-stamp-icon bg-pink">
                  <!-- ... -->
                </div>
              </div>
              <div class="card-body">
                <h3 class="card-title ">전공 학점</h3>
                <div class="h1 my-1 me-2">{{ memberData.majorGrade }}/4.5</div>
                <div class="me-auto">
                  <!-- ... -->
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
        <input v-model="userInput" type="text" placeholder="희망 직종을 입력하세요. ex) 백엔드 개발자" class="form-control mb-3" />
        <button v-if="buttonVisible" @click="handleClick" class="btn btn-primary mb-3">AI에게 과목 추천받기</button>
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
      takeList : [],
      promptResponse:"",
      prompt : "",
      takeString : "",
      unTakeString : "",
      unTakeList : [],
      userInput: ""
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.onLoading = true;
      const userId = localStorage.getItem('memberId');
      
      try {
        const dashboardResponse = await this.$axios.get('/api/v1/dashboard', {
          params: { memberId: userId }
        });

        const dashboardResult = dashboardResponse.data.result;
        this.memberData = {
          totalTakenCredit: dashboardResult.totalTakenCredit || 0,
          majorTakenCredit: dashboardResult.majorTakenCredit || 0,
          majorGrade: dashboardResult.majorGrade ? parseFloat(dashboardResult.majorGrade).toFixed(2) : 0.00,
          previousMajorGrade: dashboardResult.previousMajorGrade ? parseFloat(dashboardResult.previousMajorGrade).toFixed(2) : 0.00,
          totalGrade: dashboardResult.totalGrade ? parseFloat(dashboardResult.totalGrade).toFixed(2) : 0.00,
          previousTotalGrade: dashboardResult.previousTotalGrade ? parseFloat(dashboardResult.previousTotalGrade).toFixed(2) : 0.00,
          generalCoreTakenCredit: dashboardResult.generalCoreDTO.totalCredit || 0,
          generalEssentialTakenCredit: dashboardResult.takenGeneralDTO.takenEssentialCredit || 0,
          majorEssentialTakenCredit: dashboardResult.takenMajorDTO.takenEssentialCredit || 0,
          one: dashboardResult.generalCoreDTO.takeOne,
          two: dashboardResult.generalCoreDTO.takeTwo,
          three: dashboardResult.generalCoreDTO.takeThree,
          four: dashboardResult.generalCoreDTO.takeFour,
          five: dashboardResult.generalCoreDTO.takeFive,
          six: dashboardResult.generalCoreDTO.takeSix,
          creative: dashboardResult.generalCoreDTO.takeCreative,
          standardCredit: dashboardResult.generalCoreDTO.standardCredit,
          totalGradeIncrese: this.calculatePercentageIncrease(dashboardResult.previousTotalGrade, dashboardResult.totalGrade),
          MajorGradeIncrese: this.calculatePercentageIncrease(dashboardResult.previousMajorGrade, dashboardResult.majorGrade)
        };

        this.majorList = {
          major: "전공",
          DataList: dashboardResult.takenMajorDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };

        this.generalList = {
          major: "교양",
          DataList: dashboardResult.takenGeneralDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };

        this.generalCoreList = {
          major: "핵교",
          DataList: dashboardResult.generalCoreDTO.untakenTop5CourseDTOList.map(course => ({
            hak: course.courseCode,
            name: course.courseName,
            grade: course.credit
          }))
        };

        const takenCoursesResponse = await this.$axios.get('/api/v1/courses/take', {
          params: { memberId: userId }
        });
        
        const takenCoursesResult = takenCoursesResponse.data.result.takenCourseDTOList;
        if (Array.isArray(takenCoursesResult)) {
          this.takeList = takenCoursesResult;
        } else {
          console.error('받은 데이터가 배열이 아닙니다:', takenCoursesResult);
        }

        const untakenCoursesResponse = await this.$axios.get('/api/v1/courses/untake', {
          params: { memberId: userId }
        });

        const untakenCoursesResult = untakenCoursesResponse.data.result.untakenCourseDTOList;
        this.unTakeList = untakenCoursesResult.map(item => ({
          hak: item.courseCode,
          courseId: item.courseId,
          name: item.courseName,
          code: item.categoryName,
          grade: item.credit,
          year: item.level,
          people: item.takenNumber
        }));
        
      } catch (error) {
        console.error('데이터 가져오기 실패:', error);
      } finally {
        this.onLoading = false;
      }
    },

    generateTakeString() {
      this.takeString = this.takeList
        .filter(subject => subject.categoryName === "전공필수" || subject.categoryName === "전공선택")
        .map(subject => subject.courseName)
        .join(', ');
    },

    generateUnTakeString() {
      this.unTakeString = this.unTakeList
        .map(item => item.name)
        .join(', ');
    },

    askToAi() {
      const payload = {
        prompt: this.prompt
      };

      this.$axios.post('/api', payload)
        .then(response => {
          this.promptResponse = response.data.output;
          console.log('응답 받음:', this.promptResponse);
          this.loading = false;
        })
        .catch(error => {
          console.error('오류 발생:', error);
          this.loading = false;
        });
    },

    handleClick() {
      if (!this.userInput.trim()) {
        this.$swal("희망 직종을 입력하세요.", '', "warning");
        return;
      }
      this.loading = true;
      this.generateTakeString();
      this.generateUnTakeString();
      this.prompt = `내가 ${this.userInput}이/가 되고싶은데 현재 수강한 과목들은 {${this.takeString}}이고 미수강 과목들은 {${this.unTakeString}|인데 어떤 과목을 들으면 좋을까? 수강과목들을 제외한 미수강 과목들에서 과목명 그대로 5개만 추천해줘.`;
      this.askToAi();
    },

    calculatePercentageIncrease(initialValue, finalValue) {
      const increase = finalValue - initialValue;
      const percentageIncrease = (increase / initialValue) * 100;
      return percentageIncrease.toFixed(2);
    }
  }
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
  text-align: left; /* 왼쪽 정렬 추가 */
}

</style>