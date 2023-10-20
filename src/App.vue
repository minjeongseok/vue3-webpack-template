<template>
    <h1>{{ message }}</h1>
    <Hello />
</template>

<script>
import Hello from "~/components/Hello";

export default {
    components: {
        Hello,
    },
    data() {
        return {
            message: "App.vue message: Hello Vue3 !",
        };
    },
};
</script>
