<template>
    <PrayHeader></PrayHeader>
    <div class="main-box">
        <div class="config-box">
            <div class="title">
                <span>插件基础配置 Config.json</span>
            </div>
            <div class="config">
                <ul>
                    <li>
                        <span>打开祈愿的物品</span>
                        <McInput :value="ConfigData.guiItem.type" />
                    </li>
                    <li>
                        <span>SNBT库索引(可为空)</span>
                        <McInput :value="ConfigData.guiItem.snbt" />
                    </li>
                    <li>
                        <span>祈愿音效</span>
                        <McInput :value="ConfigData.praySound" />
                    </li>
                    <li>
                        <span>全服播报等级</span>
                        <McInput :value="ConfigData.broadcastLevel" />
                    </li>
                </ul>
            </div>
            <div class="jsonbutton">
                <span class="left">
                    <McButton type="green">保存配置到缓存中</McButton>
                </span>

                <span class="right">
                    <McButton type="purple">导入配置</McButton>
                    <McButton type="default">复制</McButton>
                </span>

            </div>
            <div class="json">
                <McTextarea :value="defData.config"></McTextarea>
            </div>


        </div>
    </div>
</template>

<script setup>
import McButton from "@/components/mc/McButton.vue"
import McTextarea from "@/components/mc/McTextarea.vue"
import McInput from "@/components/mc/McInput.vue"
import PrayHeader from "@/components/lucky-pray/PrayHeader.vue"

import ConfigData from "@/assets/lucky-pray/v1.3.2/Config.json"

const defData = {
    config: JSON.stringify(ConfigData, null, 2)
}  
</script>


<style lang="scss">
.main-box {
    width: min(120ch, 100% - 4rem);
    color: white;
    margin-inline: auto;
}

.config-box {
    display: grid;
    margin: 12px 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content min-content;
    gap: 12px 24px;
    grid-auto-flow: row;
    grid-template-areas:
        "title jsonbutton"
        "config json";

    .title {
        grid-area: title;
        color: white;
        display: flex;
        align-items: center;
        border-bottom: 1px solid var(--mc-color-def);
        span {
            font-size: 18px;
        }
    }

    .config {
        grid-area: config;
    }

    .jsonbutton {
        grid-area: jsonbutton;
        display: flex;
        justify-content: space-between;
    }

    .json {
        grid-area: json;
        padding: 1px;

        .mc-textarea {
            box-sizing: border-box;
            width: 100%;
            resize: none;
            height: 100%;

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }

    li {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 4px;
        margin: 6px 0;
        
        .mc-input{
            width: 300px;
        }
    }
}
</style>