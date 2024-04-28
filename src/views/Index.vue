<template>
    <div>
        index
        <router-link to="/LuckyPray">祈愿</router-link>
        <div class="button-box">
            
            <McButton>Text 正常状态</McButton>
            <McButton type="black">Text 正常状态</McButton>
            <McButton type="green">Text 正常状态</McButton>
            <McButton type="purple">Text 正常状态</McButton>
            <McButton type="red">Text 正常状态</McButton>

        </div>

    </div>
</template>

<script setup>
import McButton from "@/components/mcbutton/McButton.vue"
</script>

<style>
.button-box .button {
    margin: 2px;
}
</style>