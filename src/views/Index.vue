<template>
    <div>
        index
        <router-link to="/LuckyPray">祈愿</router-link>
        <div class="button-box">
            <div>
                <McButton>Text 正常状态</McButton>
                <McButton type="black">Text 正常状态</McButton>
                <McButton type="green">Text 正常状态</McButton>
                <McButton type="purple">Text 正常状态</McButton>
                <McButton type="red">Text 正常状态</McButton>
            </div>
            <div>
                <McButton type="default" disabled>Text 失效</McButton>
                <McButton type="black" disabled>Text 失效</McButton>
                <McButton type="green" disabled>Text 失效</McButton>
                <McButton type="purple" disabled>Text 失效</McButton>
                <McButton type="red" disabled>Text 失效</McButton>
            </div>
            <div>
                <McButton active>Text 正常状态</McButton>
                <McButton type="black" active>Text 正常状态</McButton>
                <McButton type="green" active>Text 正常状态</McButton>
                <McButton type="purple" active>Text 正常状态</McButton>
                <McButton type="red" active>Text 正常状态</McButton>
            </div>
        </div>
    </div>
</template>

<script setup>
import McButton from "@/components/mcbutton/McButton.vue"
</script>

<style>
.button-box .button {
    margin: 20px;
}

.button-box {
    gap: 6px;
    display: flex;
    flex-flow: row;
}

.button-box>div {
    gap: 6px;
    display: flex;
    flex-flow: column;
}
</style>