<template>
    <div class="inline-block" >
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-9" width="24" height="24"
            viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
            stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
            <path d="M12 12h-3.5"></path>
            <path d="M12 7v5"></path>
        </svg>
        {{ currentTime }}

        <!-- <a @click="sendToParent"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock-hour-9"
                width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 12h-3.5"></path>
                <path d="M12 7v5"></path>
            </svg>
        </a> -->

    </div>
</template>
  
<script>
export default {
    name: 'RealTimeClock',
    data() {
        return {
            currentTime: this.getCurrentTime()
        };
    },
    methods: {
        getCurrentTime() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
            let hours = now.getHours();
            //const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');

            // 오전/오후 표시를 위한 로직 추가
            const ampm = hours >= 12 ? '오후' : '오전';
            hours %= 12;
            hours = hours || 12; // 0시는 12시로 표시


            return `${year}년 ${month}월 ${day}일 ${ampm} ${hours}:${minutes}:${seconds}`;
        },
        sendToParent() {
            // 'messageFromChild' 이벤트를 emit하여 부모 컴포넌트에 데이터를 보냅니다.
            this.$emit('messageFromChild', this.getCurrentTime());
        }
    },
    mounted() {
        this.updateInterval = setInterval(() => {
            this.currentTime = this.getCurrentTime();
        }, 1000); // 매 1초마다 업데이트합니다.
    },
    beforeUnmount() {
        clearInterval(this.updateInterval);
    }
};
</script>
  