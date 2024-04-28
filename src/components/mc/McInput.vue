<template>
    <input class="mc-input" :value="initialValue" @input="updateValue" />
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
input{
    outline: 0;
    box-sizing: border-box;
    padding: 8px 10px;
    color: #ffffff;
    font-size: 14px;
    background-color: var(--mc-color-black);
    border: 1px solid var(--mc-color-green);
}
</style>