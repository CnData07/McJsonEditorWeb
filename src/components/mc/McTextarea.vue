<!-- MyTextarea.vue -->
<template>
    <textarea class="mc-textarea" :value="initialValue" @input="updateValue"></textarea>
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);

const porps = defineProps({
    initialValue: String | Number
})

const input = (e) => {
    emit('update:modelValue', e.target.value);
}




</script>

<style lang="scss" scoped>
textarea{
    background-color: rgb(94,94,94);
    color: white;
    font-size: 14px;
    font-family: 'lifangti';
    padding: 8px;
    line-height: 1.2;
    border-bottom: 2px solid white;
}
</style>