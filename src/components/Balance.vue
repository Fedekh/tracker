<script setup>
defineProps({
    total: {
        type: Number,
        required: true
    }
})
</script>


<template>
    <div class="container">
        <h4>Your Balance</h4>
        <h1>${{ total }}</h1>
    </div>
</template>



<style scoped></style>