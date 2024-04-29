<template>
    <PrayHeader></PrayHeader>
    <div class="main-box">
        <div class="config-box">
            <div class="title">
                <span>插件基础配置 Config.json</span>
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
                <McTextarea :value="JSON.stringify(cfg, null, 2)"></McTextarea>
            </div>
            <div class="config">
                <ul>
                    <li>
                        <span>打开祈愿的物品</span>
                        <McInput v-model="cfg.guiItem.type" />
                    </li>
                    <li>
                        <span>SNBT库索引(可为空)</span>
                        <McInput v-model="cfg.guiItem.snbt" />
                    </li>
                    <li>
                        <span>祈愿音效</span>
                        <McInput v-model="cfg.praySound" />
                    </li>
                    <li>
                        <span>全服播报等级</span>
                        <McInput v-model="cfg.broadcastLevel" />
                    </li>
                </ul>
                <table>
                    <caption>
                        奖品等级设置
                    </caption>
                    <tr>
                        <th width="20px"></th>
                        <th width="100px">等级名</th>
                        <th width="40px">颜色</th>
                        <th width="180px">等级音效(无效)</th>
                        <th width="70px">概率权重</th>
                        <th>概率</th>
                    </tr>
                    <tr v-for="(listItem, index) in cfg.level" :key="index">
                        <td style="text-align: center">{{ listItem.index }}</td>
                        <td>
                            <McInput type="edit" v-model="listItem.name" />
                        </td>
                        <td>
                            <McInput type="edit" v-model="listItem.color" />
                        </td>
                        <td>
                            <McInput type="edit" v-model="listItem.sound" />
                        </td>
                        <td>
                            <McInput type="edit" v-model="listItem.probability" />
                        </td>
                        <td width="40px" style="text-align: center">{{ (listItem.probability /
                            totalProbability).toFixed(2) }}%</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="config-box">
            <div class="title">
                <span>奖池配置 CardPool.json</span>
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
                <McTextarea :value="JSON.stringify(pool, null, 2)"></McTextarea>
            </div>

            <div class="config">
                <div class="pool-select">
                    <!-- <McSelect>
                        <div :value="index" v-for="(item, index) in pool">
                            <McButton type="green">{{ item.name }}</McButton>
                        </div>
                    </McSelect> -->
                </div>


                <ul>
                    <li>
                        <span>奖池名称</span>
                        <McInput v-model="pool.name" />
                    </li>
                    <li>
                        <span>奖池图标</span>
                        <McInput v-model="cfg.guiItem.snbt" />
                    </li>
                    <li>
                        <span>奖池是否启用</span>
                        <McInput v-model="cfg.praySound" />
                    </li>
                    <li>
                        <span>截止日期</span>
                        <McInput v-model="cfg.broadcastLevel" />
                    </li>
                    <li>
                        <span>奖池描述</span>
                        <McInput v-model="cfg.broadcastLevel" />
                    </li>
                    <li>
                        <span>每日最大祈愿次数</span>
                        <McInput v-model="cfg.broadcastLevel" />
                    </li>
                    <li>
                        <span>每日祈愿次数重置时间</span>
                        <McInput v-model="cfg.broadcastLevel" />
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script setup>
import McButton from "@/components/mc/McButton.vue"
import McTextarea from "@/components/mc/McTextarea.vue"
import McSelect from "@/components/mc/McSelect.vue"
import McInput from "@/components/mc/McInput.vue"
import PrayHeader from "@/components/lucky-pray/PrayHeader.vue"

import ConfigData from "@/assets/lucky-pray/v1.3.2/Config.json"
import CardPoolData from "@/assets/lucky-pray/v1.3.2/CardPool.json"
import { ref, computed } from 'vue'

const cfg = ref(Object.assign({}, ConfigData));
const pool = ref(Object.assign({}, CardPoolData));
const totalProbability = computed(() => {
    return cfg.value.level.reduce((sum, item) => sum + Number(item.probability), 0);
})

</script>


<style lang="scss">
.main-box {
    width: min(120ch, 100% - 4rem);
    color: white;
    margin-inline: auto;
}

.config-box {
    display: grid;
    margin: 12px 0 48px;
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
        border-collapse: separate;
        border-spacing: 6px;

        caption {
            margin: 12px 0;
            text-align: left;
        }

        tr {
            th {
                text-align: left;
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

    .pool-select {
        white-space: nowrap;
        overflow: hidden;
    }
}
</style>