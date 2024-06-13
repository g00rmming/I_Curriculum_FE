<template>
    <div>
        <div v-if="!showData" v-on:click="toggleJSON()">
            <div style="display: flex; justify-content: start; padding-left: 150px;">
                <button class="fs-5 fw-bold btn btn-sm">
                    view JSON
                    <!-- <SvgIcon iconId="json" height="15" width="15" /> -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-code" width="24" height="24"
                        viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                        stroke-linejoin="round" style="width: 16px; height: 16px;">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M7 8l-4 4l4 4"></path>
                        <path d="M17 8l4 4l-4 4"></path>
                        <path d="M14 4l-4 16"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div v-else>
            <div style="display: flex; justify-content: start;  padding-left: 150px;">
                <button class="btn btn-sm" v-on:click="toggleJSON()">
                    <span class="fw-bold">
                        hide
                    </span>
                </button>
            </div>
            <pre style="margin: 10px auto 0px;">
                {{ data }}
            </pre>
        </div>
    </div>
</template>
  
<script lang="js">
//import SvgIcon from '@/components/share/icons/SvgIcon.vue';

export default {
    name: "app",
    components: {
        //SvgIcon,
    },
    props: {
        data: Object,
    },
    data() {
        return {
            showData: false,
        };
    },
    methods: {
        toggleJSON: function () {
            console.log("1");
            this.showData = !this.showData;
        },

    }
}
</script>
  