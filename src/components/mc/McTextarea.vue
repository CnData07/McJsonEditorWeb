<template>  
    <textarea class="mc-textarea" :value="value" @input="updateValue"></textarea>  
</template>  
  
<script setup>  
import { defineProps, defineEmits } from 'vue';  
  
const emit = defineEmits(['update:modelValue']);  
  
const props = defineProps({  
    value: [String, Number] // 注意这里将 prop 名称改为 value  
});  
  
const updateValue = (e) => {  
    emit('update:modelValue', e.target.value); // 当 textarea 的值变化时，通知父组件  
};  

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