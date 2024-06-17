<template>
    <div>
        <account-comp />
    </div>
</template>

<script>
import AccountComp from "@/components/account/AccountComp.vue"
export default {
    name: "my-account",
    components: {"account-comp":AccountComp},

    props: {},
    data() {
        return {};
    },
    mounted() {},
    methods: {},
    watch: {}

};

</script>

