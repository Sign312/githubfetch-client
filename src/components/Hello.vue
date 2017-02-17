<template>
  <div class="main-content">
    <ul class="list">
      <li class="item" v-for="item in list">
        <a :href="item.url" target="_blank" class="name">{{item.name}}</a>
        <p class="description">{{item.description}}</p>
        <p class="bottom">
          language:<span class="language">{{item.language}}</span>
          star:<span class="star">{{item.star}}</span>
        </p>
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
    background-color: #f8f8f8;
  }

  .list {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 70%;
    overflow: scroll;
  }

  .list .item {
    font-size: 14px;
    text-align: center;
    height: 120px;
    padding-top: 10px;
    border-bottom: 3px solid #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .list .item .description {
    font-size: 10px;
    padding: 0 10px;
  }

  .list .item .name {
    padding-top: 6px;
  }

  .list .item .language {
    margin-right: 28px;
  }

  .picker {
    height: 30%;
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 0;
    background-color: #fff;
    border-top: 2px solid #ddd;
    box-shadow: 0 -1px 1px 1px #bbb;
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
        if (language == 'C++') {
          language = 'Cpp'
        }
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
