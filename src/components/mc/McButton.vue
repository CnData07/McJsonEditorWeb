<template>
    <button :class="[type, active ? 'active' : '']">
        <slot></slot>
        <div class="li"></div>
    </button>
</template>

<script setup>

defineProps({
    type: {
        type: String,
        default: "default"
    },
    active: {
        type: Boolean,
        default: false
    }
})
</script>
<style lang="scss" scoped>

button {
    white-space:nowrap;
    margin: 2px;
    /* box-sizing: border-box; */
    position: relative;
    font-family: 'McFont';
    height: 42px;
    vertical-align: top;
    line-height: 1.5;
    padding: 2px 16px 4px 16px;
    font-size: 14px;
    border-radius: 0;
    border: 1px solid transparent;
    margin: 0;
    outline: none;
    background-color: initial;

    /* 阴影 */
    &::before {
        position: absolute;
        box-sizing: border-box;
        z-index: 1;
        content: "";
        height: 3px;
        width: calc(100% - 4px);
        left: 2px;
        bottom: 2px;
        background-color: #0000005d;
    }

    /* 边框黑色 */
    &::after {
        position: absolute;
        box-sizing: border-box;
        z-index: -1;
        content: "";
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 2px black solid;
    }

    .li {
        &::before {
            box-sizing: border-box;
            position: absolute;
            content: "";
            height: calc(42px - 9px);
            z-index: 2;
            width: calc(100% - 4px);
            left: 2px;
            top: 2px;
            border: 1.5px solid #ffffff36;
        }
    }
}


.default::after {
    background-color: var(--mc-color-def);
}

.black::after {
    background-color: var(--mc-color-black);

}

.green::after {
    background-color: var(--mc-color-green);
}

.purple::after {
    background-color: var(--mc-color-purple);
}

.red::after {
    background-color: var(--mc-color-red);
}



.black,
.green,
.purple,
.red {
    color: white;
}


button {
    &:hover {
        &:disabled {
            opacity: 1;
        }

        &::after {
            border: 2px rgb(255, 255, 255) solid;
        }
    }

}

button:active,
.active {
    padding: 9px 16px 3px 16px;
    color: white;



    &::before {
        opacity: 0;
    }

    /* 边框黑色 */
    &::after {
        height: calc(100% - 4px);
        filter: brightness(75%);
    }

    &.default::after {
        background-color: var(--mc-color-green);
        filter: none;
    }

    .li {
        &::before {
            height: calc(42px - 10px);
            top: 6px;
        }

        &::after {
            content: "";
            position: absolute;
            bottom: 2px;
            left: 50%;
            width: 40px;
            height: 1.5px;
            background-color: #fff;
            transform: translateX(-50%);
        }
    }
}

button:disabled {
    padding: 8px 16px 6px 16px;
    cursor: not-allowed;
    color: #6c6c6c;

    &::after {
        background-color: rgb(198, 199, 203);
    }

    &::after {
        border: 2px rgb(96, 96, 96) solid;
    }

    .li {
        &::before {
            height: calc(100% - 4px);
            border: 1.5px solid #a7a7a7df;
        }
    }

    /* 阴影 */
    &::before {
        opacity: 0;
    }
}
</style>