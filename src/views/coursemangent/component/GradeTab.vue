<template>
    <div>
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

</template>

<script>
export default {
    props: {
        tabId: String,
        DataList: Array,
    },
    mounted(){
        console.log(this.DataList)
    },  
    methods: {
        clickTab(){

        }
    },
    watch:{
        
    }
}
</script>