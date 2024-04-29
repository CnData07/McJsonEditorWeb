<!-- MyTextarea.vue -->
<template>
    <textarea class="mc-textarea" :value="initialValue" @input="input"></textarea>
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
textarea {
    background-color: rgb(94, 94, 94);
    outline: none;
    color: white;
    font-size: 12px;
    padding: 8px;
    line-height: 1.2;
    border: 2px solid var(--mc-color-black);

    &::-webkit-scrollbar {
        cursor: pointer;
        width: 8px;
        background-color: inherit;
    }

    &::-webkit-scrollbar-track {
        cursor: pointer;
        border-radius: 8px;
        background-color: inherit;
    }

    &::-webkit-scrollbar-thumb {
        cursor: pointer;
        border-radius: 0;
        // height: 20%;
        background-color: var(--mc-color-green);
    }

}
</style>