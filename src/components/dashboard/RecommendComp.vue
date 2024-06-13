<template>
    <div v-if="isVisible" class="modal-overlay" @click="close">
        <div class="modal-dialog custom-modal-size" role="document" @click.stop>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ RecommendDataList.major }} 수강순위</h5>
                    <button type="button" class="btn-close" @click="close" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="table-responsive">
                        <table class="table table-vcenter">
                            <thead>
                                <th>기준</th>
                                <th>학수번호</th>
                                <th>이름</th>
                                <th>학점</th>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in RecommendDataList.DataList" :key="index">
                                    <td>{{ index+1 }}</td>
                                    <td>{{ item.hak ? item.hak : 0 }}</td>
                                    <td>{{ item.name ? item.name : 0 }}</td>
                                    <td>{{ item.grade ? item.grade : 0 }}</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="goUntake">과목조회하기</button>
                </div>
            </div>
        </div>

    </div>





</template>

<script>

export default {
    name: "recommendModal",
    props: {
        RecommendDataList: {},
        isVisible: Boolean,
    },
    methods: {
        close() {
            this.$emit("close");
        },
        goUntake(){
            this.$router.push('/untake');
        }
    },
    mounted() {
        console.log(this.RecommendDataList, "seok1");
    },

}

</script>

<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1050; /* Bootstrap 모달의 기본 z-index보다 높게 설정 */
}

.modal-content {
    background: white;
    padding: 20px;
    border-radius: 5px;
    max-width: 90%; /* 모달의 최대 너비를 90%로 설정 */
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
}

.custom-modal-size {
    width: 80%;
    /* 여기서 원하는 크기로 설정 */
    max-width: 80%;
    /* 필요시 max-width도 조정 */
    margin: auto;
}



</style>