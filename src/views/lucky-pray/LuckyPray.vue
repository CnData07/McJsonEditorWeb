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
                <table>
                    <caption>
                        奖品等级设置
                    </caption>
                    <tr>
                        <th></th>
                        <th>等级名</th>
                        <th>等级颜色</th>
                        <th>等级音效(无效)</th>
                        <th>概率权重</th>
                        <th>概率</th>
                    </tr>
                    <tr v-for="(listItem, index) in ConfigData.level" :key="index">
                        <td>{{ listItem.index }}</td>
                        <td>{{ listItem.name }}</td>
                        <td>{{ listItem.color }}</td>
                        <td>{{ listItem.sound }}</td>
                        <td>{{ listItem.probability }}</td>
                        <td>{{ (100 * listItem.probability / Object.values(ConfigData.level).map(a => a.probability).reduce((a, b) => a + b)).toFixed(2) }}%
                        </td>
                        <td></td>
                    </tr>
                </table>
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
        }
    }

    ul {
        padding: 1px 0;
        display: flex;
        flex-flow: column;
        gap: 6px;

        li {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 4px;
            white-space: nowrap;

            .mc-input {
                width: 300px;
            }
        }
    }

    table {
        width: 100%;

        caption {
            margin: 12px 0;
            text-align: left;
        }

        th {
            font-weight: 400;
            color: var(--mc-color-def);
        }

        td {
            font-size: 14px;
            .mc-input {
                width: 100%;
            }
        }
    }
}
</style>