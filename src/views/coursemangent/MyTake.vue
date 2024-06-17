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
                        <a href="#tabs-all" :class="{ active: tabId === 'tabs-all' }" class="nav-link"
                            @click="handleTabClick('tabs-all')" data-bs-toggle="tab">전체</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-1" :class="{ active: tabId === 'tabs-1' }" class="nav-link"
                            @click="handleTabClick('tabs-1')" data-bs-toggle="tab">1학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-2" :class="{ active: tabId === 'tabs-2' }" class="nav-link"
                            @click="handleTabClick('tabs-2')" data-bs-toggle="tab">2학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-3" :class="{ active: tabId === 'tabs-3' }" class="nav-link"
                            @click="handleTabClick('tabs-3')" data-bs-toggle="tab">3학년</a>
                    </li>
                    <li class="nav-item">
                        <a href="#tabs-4" :class="{ active: tabId === 'tabs-4' }" class="nav-link"
                            @click="handleTabClick('tabs-4')" data-bs-toggle="tab">4학년</a>
                    </li>
                    <!-- <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">{{ semesterLabel }}</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#" @click="handleSemesterClick(null)">전체</a>
                            <a class="dropdown-item" href="#" @click="handleSemesterClick(1)">1학기</a>
                            <a class="dropdown-item" href="#" @click="handleSemesterClick(2)">2학기</a>
                        </div>
                    </li> -->
                </ul>
            </div>
<!--데이터를 불러오는중이면 로딩바-->
<div v-if="onLoading" class="progress progress-sm">
                    <div class="progress-bar progress-bar-indeterminate bg-red"></div>
                </div>
            <div v-else class="card-body">
                <div class="tab-content">
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-all' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;" @click="confirmDelete">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 5%;">
                                        <col style="width: 15%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 5%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>성적</th>
                                        <th>이수학년</th>
                                        <th>수강인원</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="filteredDataList.all.length">
                                        <tr v-for="item in filteredDataList.all" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr>
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-1' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;" @click="confirmDelete">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 5%;">
                                        <col style="width: 15%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 5%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>성적</th>
                                        <th>이수학년</th>
                                        <th>수강인원</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="filteredDataList['1'].length">
                                        <tr v-for="item in filteredDataList['1']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr>
                                        <!-- <tr v-for="item in filteredDataList['2']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr> -->
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-2' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;" @click="confirmDelete">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 5%;">
                                        <col style="width: 15%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 5%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>성적</th>
                                        <th>이수학년</th>
                                        <th>수강인원</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="filteredDataList['2'].length">
                                        <tr v-for="item in filteredDataList['2']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr>
                                        <!-- <tr v-for="item in filteredDataList['4']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr> -->
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-3' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;" @click="confirmDelete">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 5%;">
                                        <col style="width: 15%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 5%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>성적</th>
                                        <th>이수학년</th>
                                        <th>수강인원</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="filteredDataList['3'].length">
                                        <tr v-for="item in filteredDataList['3']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr>
                                        <!-- <tr v-for="item in filteredDataList['6']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr> -->
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-4' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;" @click="confirmDelete">
                                삭제
                            </a>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-vcenter">
                                <thead>
                                    <colgroup>
                                        <col style="width: 5%;">
                                        <col style="width: 15%;">
                                        <col style="width: 20%;">
                                        <col style="width: 15%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 10%;">
                                        <col style="width: 5%;">
                                    </colgroup>
                                    <tr>
                                        <th>선택</th>
                                        <th>학수번호</th>
                                        <th>과목명</th>
                                        <th>영역</th>
                                        <th>학점</th>
                                        <th>성적</th>
                                        <th>이수학년</th>
                                        <th>수강인원</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template v-if="filteredDataList['4'].length">
                                        <tr v-for="item in filteredDataList['4']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr>
                                        <!-- <tr v-for="item in filteredDataList['8']" :key="item.takeId">
                                            <td><input type="checkbox" v-model="selectedItems" :value="item.takeId"></td>
                                            <td>{{ item.courseCode }}</td>
                                            <td>{{ item.courseName }}</td>
                                            <td>{{ item.categoryName }}</td>
                                            <td>{{ item.grade }}</td>
                                            <td>{{ item.credit }}</td>
                                            <td>{{ item.takenLevel }}</td>
                                            <td>{{ item.people }}</td>
                                            <button @click="toggleModal(item)" class="btn btn-pill" style="padding: 0.3rem;">수정</button>
                                        </tr> -->
                                    </template>
                                    <template v-else>
                                        <tr>
                                            <td colspan="7" class="text-center">조회된 데이터가 없습니다.</td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TakeBuket ref="updateModalComponent" :modalType="modalType" :courseData="courseData" :updateItem="confirmUpdate">
        </TakeBuket>
    </div>
</template>

<script>
import TakeBuket from './component/TakeBuket.vue'
export default {
    inject: ['$axios'],
    components: {
        TakeBuket: TakeBuket,
    },
    data() {
        return {
            onLoading:false,
            courseData: {},
            dataList: {
                'all': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': [],
            },
            filteredDataList: {
                'all': [],
                '1': [],
                '2': [],
                '3': [],
                '4': [],
                '5': [],
                '6': [],
                '7': [],
                '8': [],
            },
            selectedItems: [], // 추가된 부분
            tabId: "tabs-all",
            semester: null,
            semesterLabel: "학기", // Add this line
        }
    },
    methods: {
        handleTabClick(tabId) {
            this.tabId = tabId;
            this.semester = null;
            this.semesterLabel = "학기"; // Reset the semester label when switching tabs
            this.updateFilteredDataList();
            this.handleSemesterClick(null);
        },
        handleSemesterClick(semester) {
            this.semester = semester;
            this.semesterLabel = semester === null ? "전체" : `${semester}학기`; // Update the semester label
            this.updateFilteredDataList();
        },
        updateFilteredDataList() {
            const year = this.tabId === 'tabs-all' ? null : this.tabId.split('-')[1];
            if (year === null) {
                this.filteredDataList = { ...this.dataList };
            } else {
                const yearGroup = parseInt(year) * 2;
                if (this.semester === null) {
                    this.filteredDataList[yearGroup - 1] = this.dataList[yearGroup - 1];
                    this.filteredDataList[yearGroup] = this.dataList[yearGroup];
                } else {
                    this.filteredDataList[yearGroup - 1] = this.semester === 1 ? this.dataList[yearGroup - 1] : [];
                    this.filteredDataList[yearGroup] = this.semester === 2 ? this.dataList[yearGroup] : [];
                }
            }
        },
        updateItem(takeId, item) {
            if (!item.code || !item.grade || !item.myYear) {
                this.$swal("영역, 학점, 이수학기를 모두 입력하세요.", '', "warning");
                return;
            }


            this.onLoading = true;
            const userId = localStorage.getItem('memberId');
            const updateTakenCourseDTO = {
                takenTerm: Number(item.myYear), // 이수학년
                grade: String(item.myGrade), // 성적 (문자열로 변환)
                category: String(item.categoryName)
            };
            const bindingResult = {};
            this.$axios.patch(`/v1/courses/take/${takeId}`, updateTakenCourseDTO, bindingResult, {
                params: {
                    memberId: userId // 실제 사용자 ID로 변경
                }
            })
                .then(response => {
                    console.log('응답 받음:', response.data);
                    this.$refs.updateModalComponent.closeModal();
                    this.$swal("수정완료", '', 'success')
                    .then(() => {
                        this.fetchData();
                    })
                })
                .catch(error => {
                    console.error('오류 발생2:', error);
                    this.$swal("수정에 실패했습니다.", '', "error");
                })
                .finally(() => {
                    this.onLoading = false;
                });
        },
        toggleModal(item) { // 장바구니 모달 여는 함수
            this.courseData = {
                    hak: item.courseCode, // 학수번호
                    courseId: item.courseId,
                    name: item.courseName, // 과목명
                    code: item.categoryName, // 영역
                    grade: item.credit, // 학점
                    year: item.level, // 이수학년
                    people: item.takenNumber // 수강인원
                };
            this.modalType = item.takeId;
            this.$refs.updateModalComponent.clickModal();
        },
        fetchData() {
            this.onLoading = true;
            const userId = localStorage.getItem('memberId');
            
            this.$axios.get('/v1/courses/take', {
                params: {
                    memberId: userId // 실제 사용자 ID로 변경
                }
            })
                .then(response => {
                    const responseList = response.data.result.takenCourseDTOList; // 서버에서 받은 데이터에 맞게 변경
                    if (Array.isArray(responseList)) {
                        this.dataList.all = responseList;
                        this.loadAllTabsData();
                        this.updateFilteredDataList();
                    } else {
                        console.error('받은 데이터가 배열이 아닙니다:', responseList);
                    }
                })
                .catch(error => {
                    console.error('데이터 가져오기 실패:', error);
                })
                .finally(() => {
                    this.onLoading = false;
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
            this.updateFilteredDataList();
        },
        filterDataByYear(year) {
            return this.dataList.all.filter(item => item.takenLevel === year);
        },
        confirmDelete() {
            if (this.selectedItems.length === 0) {
                alert('삭제할 항목을 선택하세요.');
                return;
            }
            if (confirm("정말 삭제하시겠습니까?")) {
                this.deleteSelectedItems();
            }
        },
        confirmUpdate(takeId, item) {
            if (confirm("정말 수정하시겠습니까?")) {
                this.updateItem(takeId, item);
            }
        },
        deleteSelectedItems() {
            if (this.selectedItems.length === 0) {
                alert('삭제할 항목을 선택하세요.');
                return;
            }
            const promises = this.selectedItems.map(takeId => {
                return this.$axios.delete(`/v1/courses/take/${takeId}`);
            });

            Promise.all(promises)
                .then(() => {
                    alert('삭제 성공');
                    this.fetchData();
                    this.selectedItems = []; // 선택 항목 초기화
                })
                .catch(error => {
                    console.error('삭제 실패:', error);
                    alert('삭제 실패');
                });
        }
    },
    mounted() {
        this.fetchData(); // 컴포넌트가 마운트될 때 데이터 가져오기
        this.handleSemesterClick(null);
    }
}
</script>