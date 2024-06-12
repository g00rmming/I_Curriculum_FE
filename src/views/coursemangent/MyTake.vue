<template>
    <div class="container">
        <div class="page-header">
            <div class="row align-items-end" style="height: 41px;">
                <div class="row pe-0">
                    <div class="col-12">
                        <div class="page-pretitle">take</div>
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
                            @click="handleTabClick('tabs-4')" data-bs-toggle="tab">4힉년</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true"
                            aria-expanded="false">학기</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">
                                전체
                            </a>
                            <a class="dropdown-item" href="#">
                                1학기
                            </a>
                            <a class="dropdown-item" href="#">
                                2학기
                            </a>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="card-body">
                <div class="tab-content">
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-all' }">
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <div>
                                <h4>{{ tabId }} tab</h4>

                            </div>
                            <a href="#" class="btn btn-pill" style="padding: 0.3rem;">
                                삭제
                            </a>


                        </div>
                        <div>
                            <div class="table-responsive">
                                <table class="table table-vcenter">
                                    <thead>
                                        <colgroup>
                                            <col style="width: 10;">
                                            <col style="width: 20;">
                                            <col style="width: 20;">
                                            <col style="width: 15;">
                                            <col style="width: 15;">
                                            <col style="width: 10;">
                                            <col style="width: 10;">
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
                                        <tr>
                                            <td>
                                                <input type="checkbox">
                                            </td>
                                            <td>Paweł Kuna</td>
                                            <td>
                                                UI Designer, Training
                                            </td>
                                            <td> 전필 </td>
                                            <td><a href="#" class="text-reset">paweluna@howstuffworks.com</a>
                                            </td>
                                            <td>
                                                User
                                            </td>
                                            <td>
                                                <a href="#">Edit</a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>


                        </div>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-1' }">
                        <GradeTab :tabId="tabId" :DataList="dataList"></GradeTab>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-2' }">
                        <GradeTab :tabId="tabId" :DataList="dataList"></GradeTab>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-3' }">
                        <GradeTab :tabId="tabId" :DataList="dataList"></GradeTab>
                    </div>
                    <div class="tab-pane" :class="{ active: tabId === 'tabs-4' }">
                        <GradeTab :tabId="tabId" :DataList="dataList"></GradeTab>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>

import GradeTab from './component/GradeTab.vue'

export default {
    components: {
        GradeTab: GradeTab,
    },
    data() {
        return {
            dataList: [  //  첫 전체 데이터 조회시 List에 담을 데이터
                {
                    hak: '1234', // 학수번호
                    name: '아아아', // 과목명
                    code: '전필', // 영역
                    myGrade: 3,
                    grade: 4.5, // 학점
                    year: 4, // 이수학기
                    people: 234, // 수강인원
                },
                {
                    hak: '12314',
                    name: '12334',
                    code: '전필',
                    grade: 2,
                    year: 7,
                    people: 234,
                },
                {
                    hak: '444444',
                    name: '444444',
                    code: '전필',
                    grade: 4,
                    year: 7,
                    people: 234,
                },
                {
                    hak: '11111',
                    name: '11111',
                    code: '전필',
                    grade: 3,
                    year: 1,
                    people: 7,
                },
                {
                    hak: '1234',
                    name: '아아아',
                    code: '전필',
                    grade: 3,
                    year: 8,
                    people: 8,
                }
            ],
            tabId: "tabs-all"
        }
    },
    methods: {
        handleTabClick(tabId) {
            // if (this.tabId !== tabId) {


            // }
            this.tabId = tabId;

        },
    },

}

</script>