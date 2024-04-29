<template>
    <input :class="tClass" :value="modelValue" @input="input" :placeholder="placeholder" :disabled="disabled" />
</template>

<script setup>
import { computed } from 'vue';

const emit = defineEmits(['update:modelValue']);

const porps = defineProps({
    modelValue: String | Number,
    placeholder: String,
    disabled: Boolean,
    type: String
})

const tClass = computed(() => {
    return [
        "mc-input",
        { "edit": porps.type === "edit" }
    ]
})

const input = (e) => {
    emit('update:modelValue', e.target.value);
}

</script>

<style lang="scss" scoped>
.edit {
    padding: 4px 8px;
    border-radius: 4px;
    background-color: #0a0a0a36;
    border: 1px solid rgba(0, 0, 0, 0);
}

input:hover {
    transition: background-color 0.3s;
    background-color: var(--mc-color-black);
}

input.edit:focus {
    padding: 4px 8px;
    background-color: var(--mc-color-black);
    border: 1px solid var(--mc-color-green);
    border-radius: 0;
}

input {
    outline: 0;
    box-sizing: border-box;
    padding: 5px 10px 6px;
    line-height: 1.5;
    color: #ffffff;
    font-size: 14px;
    background-color: var(--mc-color-black);
    border: 1px solid var(--mc-color-green);
}
</style>