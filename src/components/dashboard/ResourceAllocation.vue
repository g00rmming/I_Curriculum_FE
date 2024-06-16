<template>
  <div class="row row-cards mt-0">
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">전공</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a class="btn-action" @click="openMajorModal"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>

        <apexchart type="donut" height="350" :options="chartOptions" :series="majorSeries"></apexchart>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">교양</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a href="#" class="btn-action" @click="openGeneralModal">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>
        <apexchart type="donut" height="350" :options="chartOptions" :series="generalSeries"></apexchart>
      </div>
    </div>
    <div class="col-lg-4 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">핵심 교양</h3>
          <div class="card-actions btn-actions">
            <span class="recommend-text">추천과목</span>
            <a href="#" class="btn-action"><!-- Download SVG icon from http://tabler-icons.io/i/refresh -->
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-book">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                <path d="M3 6l0 13" />
                <path d="M12 6l0 13" />
                <path d="M21 6l0 13" />
              </svg>
            </a>
          </div>
        </div>
        <apexchart type="donut" height="350" :options="chartOptions" :series="generalCoreSeries"></apexchart>
      </div>
    </div>
  </div>
  

 <!-- 성적 추이도를 나타내는 꺾은선 그래프 -->
 <div class="col-lg-12 col-md-12">
      <div class="border card">
        <div class="card-header">
          <h3 class="card-title">성적 추이도</h3>
        </div>
        <apexchart type="line" height="350" :options="lineChartOptions" :series="lineChartSeries"></apexchart>
      </div>
  </div>

  <RecommendComp :isVisible="modalMajorVisible" @close="modalMajorVisible = false" :RecommendDataList="majorList"> </RecommendComp>
  <RecommendComp :isVisible="modalGeneralVisible" @close="modalGeneralVisible = false" :RecommendDataList="generalList"> </RecommendComp>
</template>

<script>
import RecommendComp from "@/components/dashboard/RecommendComp.vue";
import VueApexCharts from "vue3-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
    RecommendComp: RecommendComp,
  },
  props: {
    majorList: [],  // 전공
    generalList: [], // 교양 
    generalCoreList: [], // 핵교
    totalTakenCredit: Number, // 전공 이수학점
    generalCoreTakenCredit:Number, //핵심교양 이수학점
    generalTakenCredit: Number, //일반교양 이수학점
  },
  data() {
    return {
      modalMajorVisible: false, // 전공 모달
      modalGeneralVisible: false, // 교양 모달
      // 차트 데이터
      majorSeries: [], // 전공
      generalSeries: [], //교양
      generalCoreSeries: [], //핵교
      lineChartSeries: [], // 성적 추이 그래프

      gradeData: [3.2, 3.5, 3.8, 4.0], // 예시 성적 데이터

      //차트 옵션
      chartOptions: {
        chart: {
          type: 'donut',
        },
        dataLabels: {
          enabled: true,
          formatter: function (val) {
            return val + "%"
          },
          style: {
            fontSize: '10px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 'bold',
            colors: ["#FFFFFF"]
          },

        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        labels: ['이수학점', '미이수학점'],
        colors: ["#00E396", "#F05650"],
        plotOptions: {
          pie: {
            donut: {
              size: '60%',
              labels: {
                show: true,
                name: {
                  show: true,
                },
                value: {
                  show: true,
                },
                total: {
                  show: true,
                  showAlways: false,
                  label: '전체학점',
                  fontWeight: 600,
                  color: '#373d3f',
                  formatter: function (w) {
                    return w.globals.seriesTotals.reduce((a, b) => {
                      return a + b
                    }, 0)
                  }
                }
              }
            }
          }
        }
      },
  lineChartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: '학년별 성적 추이도',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // alternating row colors
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['1학년', '2학년', '3학년', '4학년'],
        }
      }
    };
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      console.log('Major List:', this.majorList);
      console.log('Major List:', this.generalList);
      // console.log('General Core List:', this.generalCoreList);

      // console.log("전공 이수 학점: ",this.totalTakenCredit);
      // console.log("교양 이수 학점: ",this.generalTakenCredit);
      // console.log("핵심 교양 이수 학점: ",this.generalCoreTakenCredit);

      this.majorSeries = [this.totalTakenCredit,65 - this.totalTakenCredit];
      
      this.generalSeries = [this.generalCoreTakenCredit,65 - this.generalCoreTakenCredit];
      this.generalCoreSeries = [this.generalCoreTakenCredit]; // 핵심 교양 여러개 들으면 일교로 빠지는데 일단 얼마나 이수했는지만 나타내면 좋을것 같음
      
      this.lineChartSeries = [{
        name: "성적",
        data: this.gradeData
      }];
     
    },
    openMajorModal() {
      this.modalMajorVisible = true;
    },
    openGeneralModal() {
      this.modalGeneralVisible = true;
    },

  }
};
</script>

<style>
.card {
  margin: 1rem;
}

.card-body {
  padding: 1rem;
}

.recommend-text {

  font-size: 16px;

}
</style>