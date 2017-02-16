<template>
    <div class="main-content">
        <ul class="list">
            <li class="item" v-for="item in list">

            </li>
        </ul>
        <mt-picker class="picker" :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-content {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #f8f8f8;
    }

    .list {
        list-style: none;
        margin: 0;
        padding: 0;
        flex: 3;
        overflow: scroll;
    }

    .list .item {
        text-align: center;
        height: 60px;
        padding-top: 10px;
        border-bottom: 2px solid #fff;
    }

    .picker {
        overflow: hidden;
        flex: 1;
        background-color: #fff;
    }
</style>
<script>
    import {Indicator} from 'mint-ui'
    import api from '../api'
    export default {
        name: 'hello',
        data () {
            return {
                slots: [
                    {
                        values: [],
                        className: 'slot1',
                        textAlign: 'center'
                    }
                ],
                list: []
            }
        },
        methods: {
            onValuesChange(picker, values) {
                let language = values[0]
                Indicator.open('加载中...');
                api.getList(language).then(list => {
                    this.list = list
                    Indicator.close()
                })
            }
        },
        created: function () {
            api.getLanguages().then(languages => {
                this.slots[0].values = languages
            })
        }
    }
</script>
