<template>
    <div class="container">
        <div class="page-header">
            <div class="row align-items-end" style="height: 41px;">
                <div class="row pe-0">
                    <div class="col-12">
                        <div class="page-pretitle"></div>
                        <div class="btn-list justify-content-between align-items-center w-100" style="height: 25px;">
                            <h2 class="page-title">이수내역</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hr-text"></div>
        <!-- 화면 시작-->
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" data-bs-toggle="tabs">
                    <li class="nav-item">
                        <a href="#tabs-all" :class="{ active: tabId === 'tabs-all' }" class="nav-link" @click="handleTabClick('tabs-all')" data-bs-toggle="tab">전체</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-1" :class="{ active: tabId === 'tabs-1' }" class="nav-link" @click="handleTabClick('tabs-1')" data-bs-toggle="tab">1학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-2" :class="{ active: tabId === 'tabs-2' }" class="nav-link" @click="handleTabClick('tabs-2')" data-bs-toggle="tab">2학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-3" :class="{ active: tabId === 'tabs-3' }" class="nav-link" @click="handleTabClick('tabs-3')" data-bs-toggle="tab">3학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-4" :class="{ active: tabId === 'tabs-4' }" class="nav-link" @click="handleTabClick('tabs-4')" data-bs-toggle="tab">4학년</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">학기</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">전체</a>
                            <a class="dropdown-item" href="#">1학기</a>
                            <a class="dropdown-item" href="#">2학기</a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="card-body">
                <div class="tab-content">
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-all' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>

                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 10%;">
                                        <col style="width: 20%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in dataList.all" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-1' }">
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 10%;">
                                        <col style="width: 20%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in dataList['1']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                    <tr v-for="item in dataList['2']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-2' }">
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 10%;">
                                        <col style="width: 20%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in dataList['3']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                    <tr v-for="item in dataList['4']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-3' }">
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 10%;">
                                        <col style="width: 20%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in dataList['5']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                    <tr v-for="item in dataList['6']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-4' }">
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 10%;">
                                        <col style="width: 20%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>이수학기</th>
                                        <th>수강인원</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in dataList['7']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                    <tr v-for="item in dataList['8']" :key="item.takeId">
                                        <td><input type="checkbox"></td>
                                        <td>{{ item.courseCode }}</td>
                                        <td>{{ item.courseName }}</td>
                                        <td>{{ item.categoryName }}</td>
                                        <td>{{ item.credit }}</td>
                                        <td>{{ item.takenLevel }}</td>
                                        <td>{{ item.people }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    
    data() {
        return {
            dataList: {
                'all': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
            },
            tabId: "tabs-all"
        }
    },
    methods: {
        handleTabClick(tabId) {
            this.tabId = tabId;
        },
        fetchData() {
            axios.get('/v1/courses/take', {
                params: {
                    memberId: 1 // 실제 사용자 ID로 변경
                }
            })
            .then(response => {
                const responseList = response.data.result.takenCourseDTOList; // 서버에서 받은 데이터에 맞게 변경
                console.log('받은 데이터:', responseList); // 받아온 데이터 로그
                if (Array.isArray(responseList)) {
                    this.dataList.all = responseList;
                    this.loadAllTabsData();
                } else {
                    console.error('받은 데이터가 배열이 아닙니다:', responseList);
                }
        console.log("here");
        this.dataList['1'].forEach((item, index) => {
            console.log(`Item ${index + 1}:`);
            console.log(`  courseId: ${item.courseId}`);
            console.log(`  hak: ${item.hak}`);
            console.log(`  name: ${item.name}`);
        });
            })
            .catch(error => {
                console.error('데이터 가져오기 실패:', error);
            });
        },
        loadAllTabsData() {
            this.dataList['1'] = this.filterDataByYear(1);
            this.dataList['2'] = this.filterDataByYear(2);
            this.dataList['3'] = this.filterDataByYear(3);
            this.dataList['4'] = this.filterDataByYear(4);
            this.dataList['5'] = this.filterDataByYear(5);
            this.dataList['6'] = this.filterDataByYear(6);
            this.dataList['7'] = this.filterDataByYear(7);
            this.dataList['8'] = this.filterDataByYear(8);
        },
        filterDataByYear(year) {
            return this.dataList.all.filter(item => item.takenLevel === year);
        }
    },
    mounted() {
        this.fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
    }
}
</script>
