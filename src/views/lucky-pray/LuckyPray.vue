<template>
    <h2 style="font-weight: 400;">LuckyPray</h2>
    <div>
        <McTextarea :value="defData.CardPool"></McTextarea>
        <McButton type="default">复制</McButton>
        <McButton type="purple">导入配置</McButton>
        <McButton type="green">保存配置到缓存中</McButton>
    </div>
    
</template>

<script setup>
import McButton from "@/components/mc/McButton.vue"
import McTextarea from "@/components/mc/McTextarea.vue"
import CardPoolData from "@/assets/lucky-pray/v1.3.2/CardPool.json"
  
const defData = {  
    CardPool: JSON.stringify(CardPoolData,null,2)
}  
</script>


<style>

</style>