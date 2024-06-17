<template>
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">이수체계도</h3>
      </div>
      <div class="card-body">
        <p v-if="loading" class="text-secondary">Loading...</p>
        <p v-if="error" class="text-danger">Error loading data</p>
        <div v-if="url">
          <img v-if="isImage(url)" :src="url" alt="Curriculum Diagram" class="img-fluid"/>
          <embed v-else-if="isPDF(url)" :src="url" type="application/pdf" width="100%" height="600px"/>
          <p v-else class="text-secondary">
            <a :href="url" target="_blank">{{ url }}</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    inject: ['$axios'],
    data() {
      return {
        url: null, // API에서 가져온 URL을 저장할 데이터 속성
        loading: false,
        error: null,
      };
    },
    mounted() {
      this.fetchUrl(); // 컴포넌트가 마운트될 때 API 호출
    },
    methods: {
      fetchUrl() {
        this.loading = true;
        const userId = localStorage.getItem('memberId');
        this.$axios.get('/v1/curriculum/diagram', {
          params: {
            memberId: userId // 실제 사용자 ID를 사용
          }
        })
        .then(response => {
          this.url = response.data.result.url; // 응답에서 URL 추출
          this.loading = false;
        })
        .catch(error => {
          console.error('Error fetching URL:', error);
          this.error = 'Failed to load data';
          this.loading = false;
        });
      },
      isImage(url) {
        return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
      },
      isPDF(url) {
        return url.match(/\.(pdf)$/) != null;
      }
    }
  }
  </script>
  
  <style>
  .card-body {
    padding: 20px; /* 필요에 따라 패딩 조정 */
  }
  .img-fluid {
    max-width: 100%;
    height: auto;
  }
  .text-danger {
    color: red;
  }
  </style>
  