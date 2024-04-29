<template>
    <div class="header">
        <div>
            <h2 class="title">LuckyPray</h2>
            <div class="link">
                <span class="is">编辑抽奖</span>
                <span>模拟抽奖</span>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>
<style lang="scss">
.header {
    width: 100%;
    background-color: var(--mc-color-black);

    div {
        width: var(--main-width);
        margin-inline: auto;
        height: 48px;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;

        .title {
            font-family: 'mcfont';
            flex: 1;
            color: white;
            font-weight: 400;
        }

        .link {
            display: flex;
            justify-content: end;
            align-items: center;
            height: 100%;

            span {
                width: 96px;
                position: relative;
                color: rgb(224, 224, 224);
                font-family: 'lifangti';
                font-size: 18px;
                padding: 0 16px;
                height: 100%;
                align-content: center;
                cursor: pointer;
                text-align: center;
            }

            .is {
                color: white;
                font-size: 19px;
            }

            .is::after {
                content: "";
                position: absolute;
                height: 5px;
                width: 32px;
                background-color: var(--mc-color-green);
                bottom: 0;
                left: 50%;

                transform: translateX(-50%);
            }

            span:hover {
                color: white;
            }
        }
    }
}
</style>