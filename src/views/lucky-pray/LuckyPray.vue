<template>
    <PrayHeader></PrayHeader>
    <div class="main-box">
        <div class="config-box config-json">
            <div class="title">
                <span>插件基础配置 Config.json</span>
            </div>

            <div class="jsonbutton">
                <span class="left">
                    
                    <McButton type="purple">导入配置</McButton>
                </span>

                <span class="right">
                    <McButton type="green">保存配置到缓存中</McButton>
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
        <div class="config-box cardpool-json">
            <div class="title">
                <span>奖池配置 CardPool.json</span>
                <div class="pool-select">
                    <select @change="poolSelectData($event.target.value)">
                        <option v-for="(value, key) in poolList" :key="key" :value="key">
                            <span>{{ key }}</span>
                        </option>
                    </select>
                </div>
            </div>
            <div class="jsonbutton">
                <span class="left">
                    <McButton type="purple">导入配置</McButton>

                </span>

                <span class="right">
                    <McButton type="green">保存配置到缓存中</McButton>
                    <McButton type="default">复制</McButton>
                </span>

            </div>
            <div class="json">
                <McTextarea :value="JSON.stringify(poolList, null, 2)"></McTextarea>
            </div>

            <div class="config">
                <ul>
                    <li>
                        <span>奖池名称</span>
                        <McInput v-model="pool.name" />
                    </li>
                    <li>
                        <span>奖池图标</span>
                        <McInput v-model="pool.icon" />
                    </li>
                    <li>
                        <span>奖池是否启用</span>
                        <McInput v-model="pool.enabled" />
                    </li>
                    <li>
                        <span>截止日期</span>
                        <McInput v-model="pool.diedLine" />
                    </li>
                    <li>
                        <span>奖池描述</span>
                        <McInput v-model="pool.discription" />
                    </li>
                    <li>
                        <span>每日最大祈愿次数</span>
                        <McInput v-model="pool.maxPrayCountPerday" />
                    </li>
                    <li>
                        <span>每日祈愿次数重置时间</span>
                        <span>
                            <McInput style="width:50px" v-model="pool.timeOfResetPerday[0]" />
                            时
                            <McInput style="width:50px" v-model="pool.timeOfResetPerday[1]" />
                            分
                        </span>

                    </li>
                    <li>
                        <span>抽奖图标</span>
                        <McInput v-model="pool.prayItem.icon" />
                    </li>
                    <li>
                        <span>代币类型</span>
                        <McInput v-model="pool.prayItem.mode" />
                    </li>
                    <li>
                        <span>物品名称</span>
                        <McInput v-model="pool.prayItem.name" />
                    </li>
                    <li>
                        <span>标准类型</span>
                        <McInput v-model="pool.prayItem.type" />
                    </li>
                    <li>
                        <span>物品数量</span>
                        <McInput v-model="pool.prayItem.count" />
                    </li>
                    <li>
                        <span>特殊值</span>
                        <McInput v-model="pool.prayItem.aux" />
                    </li>
                </ul>

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
import CardPoolData from "@/assets/lucky-pray/v1.3.2/CardPool.json"
import { ref, computed } from 'vue'

const cfg = ref(Object.assign({}, ConfigData));
const poolList = ref({ ...CardPoolData });
const pool = ref({ ...poolList.value[Object.keys(poolList.value)[0]] }); // 这个地方的做法对吗，它是键值对
const totalProbability = computed(() => {
    return cfg.value.level.reduce((sum, item) => sum + Number(item.probability), 0);
})

const poolSelectData = (selectedPoolKey) => {
    if (selectedPoolKey in poolList.value) {
        pool.value = { ...poolList.value[selectedPoolKey] }; // 浅拷贝选中的卡池数据  
    } else {
        console.error(`Pool name ${selectedPoolKey} is not found in CardPoolData.`);
    }
};

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
        "jsonbutton title"
        "json config";

    .title {
        grid-area: title;
        color: white;
        display: flex;
        justify-content: space-between;
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
        select {
            outline: none;
            white-space: nowrap;
            margin: 2px;
            position: relative;
            height: 38px;
            line-height: 1.5;
            padding: 2px 16px 4px 16px;
            font-size: 14px;
            border-radius: 0;
            border: 2px solid var(--mc-color-black);
            margin: 0;
            color: white;
            outline: none;
            background-color: var(--mc-color-green);
        }
    }
}

.config-json {
    ul {
        li {
            span:first-child {
                width: 180px;
            }
        }
    }
}

.cardpool-json {
    ul {
        li {
            span:first-child {
                width: 180px;
            }
        }
    }
}
</style>