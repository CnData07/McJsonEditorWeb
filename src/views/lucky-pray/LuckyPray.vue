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
                            totalProbability * 100).toFixed(2) }}%</td>

                    </tr>
                </table>
            </div>
        </div>
        <div class="config-box cardpool-json">
            <div class="title">
                <span>奖池配置 CardPool.json</span>
                <div class="pool-select">
                    <select v-model="poolSelectData">
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
                <McTextarea :value="formattedPoolList" @update:modelValue="handleTextareaUpdate"></McTextarea>
            </div>

            <div class="config">

                <span class="subtitle">基础设置</span>
                <ul>
                    <li>
                        <span>奖池名称</span>
                        <McInput v-model="poolList[poolSelectData].name" />
                    </li>
                    <li>
                        <span>奖池图标</span>
                        <McInput v-model="poolList[poolSelectData].icon" />
                    </li>
                    <li>
                        <span>奖池是否启用</span>
                        <McInput v-model="poolList[poolSelectData].enabled" />
                    </li>
                    <li>
                        <span>截止日期</span>
                        <McInput v-model="poolList[poolSelectData].diedLine" />
                    </li>
                    <li>
                        <span>奖池描述</span>
                        <McInput v-model="poolList[poolSelectData].discription" />
                    </li>
                    <li>
                        <span>每日最大祈愿次数</span>
                        <McInput v-model="poolList[poolSelectData].maxPrayCountPerday" />
                    </li>
                    <li>
                        <span>每日祈愿次数重置时间</span>
                        <span>
                            <McInput style="width:50px" v-model="poolList[poolSelectData].timeOfResetPerday[0]" />
                            时
                            <McInput style="width:50px" v-model="poolList[poolSelectData].timeOfResetPerday[1]" />
                            分
                        </span>

                    </li>
                </ul>
                <table>
                    <caption>
                        抽奖连抽模式
                    </caption>
                    <tr>
                        <th width="30px"></th>
                        <th width="100px">抽奖名称</th>
                        <th width="100px">抽奖次数</th>
                        <th>操作</th>
                    </tr>
                    <tr v-for="(val, key, index) in poolList[poolSelectData].prayMode" :key="key">
                        <td style="text-align: center">
                            {{ index + 1 }}
                        </td>
                        <td>
                            {{ key }}
                        </td>
                        <td>
                            <McInput type="edit" v-model="poolList[poolSelectData].prayMode[key]" />
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>
                <span class="subtitle">祈愿消耗物品</span>
                <ul>
                    <li>
                        <span>物品图标</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.icon" />
                    </li>
                    <li>
                        <span>代币类型</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.mode" />
                    </li>
                    <li>
                        <span>物品名称</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.name" />
                    </li>
                    <li>
                        <span>标准类型</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.type" />
                    </li>
                    <li>
                        <span>物品数量</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.count" />
                    </li>
                    <li>
                        <span>特殊值</span>
                        <McInput v-model="poolList[poolSelectData].prayItem.aux" />
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

const cfg = ref(Object.assign({}, ConfigData))
const poolList = ref({ ...CardPoolData })
const poolSelectData = ref(Object.keys(poolList.value)[0])
const totalProbability = computed(() => {
    return cfg.value.level.reduce((sum, item) => sum + Number(item.probability), 0)
})
const formattedPoolList = computed(() => {
    return JSON.stringify(poolList.value, null, 2)
})
function handleTextareaUpdate(newValue) {
    try {
        // 尝试将新值解析回原始数据结构  
        const parsedValue = JSON.parse(newValue)
        // 在这里，你可能需要执行一些验证和逻辑来确保 parsedValue 符合 poolList 的结构  
        // 如果解析和验证成功，则更新 poolList  
        poolList.value = parsedValue
    } catch (error) {
        // 处理解析错误，比如显示错误消息给用户  
        console.error('无法解析 textarea 中的内容:', error)
    }
}

</script>


<style lang="scss">
.main-box {
    width: var(--main-width);
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

    .subtitle {
        display: block;
        box-sizing: border-box;
        padding: 12px 0;
        text-align: left;
        font-weight: 700;
        white-space: nowrap;
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
            padding-left: 1.75ch;
            box-sizing: border-box;
            gap: 4px;
            white-space: nowrap;

            span {
                line-height: 0;
            }

            &:hover {
                background-color: #ffffff09;
            }

            .mc-input {
                width: 300px;
            }
        }
    }



    table {
        width: 100%;
        border-collapse: separate;
        border-spacing: 0;

        caption {
            margin: 12px 0;
            text-align: left;
            font-weight: 700;
        }

        tr {
            th {
                padding: 3px;
                text-align: left;
                font-weight: 400;
                color: var(--mc-color-def);
            }

            td {
                padding: 3px;
                font-size: 14px;

                .mc-input {
                    width: 100%;
                }
            }

            &:hover {
                background-color: #ffffff09;
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
            padding: 5px 10px 6px;
            font-size: 14px;
            border-radius: 0;
            border: 1px solid var(--mc-color-green);
            margin: 0;
            color: white;
            outline: none;
            background-color: var(--mc-color-black);
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