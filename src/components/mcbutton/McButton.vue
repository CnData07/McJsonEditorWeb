<template>
    <button :class="type">
        <slot></slot>
        <div class="sw"></div>
        <div class="li"></div>
    </button>
</template>

<script setup>
defineProps({
    type: {
        type: String,
        default: "default"
    },
    active:{
        type:Boolean
    }
})

if(active){
    
}
</script>

<style>
:root {
    --mc-color-def: #c6c7c9;
    --mc-color-black: #464749;
    --mc-color-green: #398020;
    --mc-color-purple: #6e41dc;
    --mc-color-red: #bd3333;
}

button {
    margin: 2px;
    box-sizing: border-box;
    position: relative;
    font-family: 'McFont';
    height: 42px;
    vertical-align: top;
    line-height: 1.5;
    padding: 2px 16px 4px 16px;
    font-size: 14px;
    border-radius: 0;
    border: 2px black solid;
    outline: none;
}

.sw {
    box-sizing: border-box;
    position: absolute;
    height: 3.5px;
    width: 100%;
    right: 0;
    bottom: 0;
    background-color: #0000005d;
}

.li {
    box-sizing: border-box;
    position: absolute;
    height: calc(42px - 7.5px);
    width: 100%;
    right: 0;
    top: 0;
    border: 1.5px solid #ffffff36;
}


.default {
    background-color: var(--mc-color-def);
}

.black {
    background-color: var(--mc-color-black);
    color: white;
}

.green {
    background-color: var(--mc-color-green);
    color: white;
}

.purple {
    background-color: var(--mc-color-purple);
    color: white;
}

.red {
    background-color: var(--mc-color-red);
    color: white;
}


button:hover {
    opacity: 0.8;
}

</style>