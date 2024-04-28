<template>
    <div class="tools">
        <router-link to="/LuckyPray">
            <McButton type="green">LuckyPray - 祈愿工具</McButton>
        </router-link>
        <router-link to="/LuckyPray">
            <McButton type="green">LuckyPray - 祈愿工具</McButton>
        </router-link>
        <router-link to="/LuckyPray">
            <McButton type="green">LuckyPray - 祈愿工具</McButton>
        </router-link>
        <router-link to="/LuckyPray">
            <McButton type="green">LuckyPray - 祈愿工具</McButton>
        </router-link>
        <router-link to="/LuckyPray">
            <McButton type="green">LuckyPray - 祈愿工具</McButton>
        </router-link>
    </div>
</template>

<script setup>
import McButton from "@/components/mc/McButton.vue"
</script>

<style lang="scss">
.tools {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>