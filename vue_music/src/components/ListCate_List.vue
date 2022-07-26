<template lang="html">
  <div class="listcate">
    <VuePullRefresh :on-refresh="onRefresh">
    <div  tag="div" class="cate-item">
      <div class="item-content">
        <ul class="cate-hot">
          <router-link tag="li" :to="{name:'mvplay',params:{mvid:item.id,mvname:item.name,mvPicUrl:item.cover,author:item.artistName}}" v-for="(item,index) in listCateData" :key="index">
          <div class="cate-post">
            <img :src="item.cover">
          </div>
            <span class="col-rank" >{{ item.name}}</span>
            <span class="col-title"> {{ item.artistName}}</span>
          </router-link>
        </ul>
      </div>
    </div>
    </VuePullRefresh>
  </div>
</template>

<script>
import VuePullRefresh from "vue-pull-refresh";
export default {
  name:"listcatelist",
  data(){
    return{
      listCateData:[
        {name:''},
        {artistName:''}
      ],
      offset: 0,
    
      
    }
  },
  components:{
    VuePullRefresh
  },

  mounted(){
    const ListCateUrl = this.HOST + "/top/mv?limit=10&offset="+this.offset
    this.$axios.get(ListCateUrl)
      .then(res => {
        this.listCateData = res.data.data
        this.offset=this.offset+10
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods: {
    // 下拉的时候触发函数
    onRefresh: function () {
      var that = this;
      const moreListUrl =
        this.HOST +
       "/top/mv?limit=10&offset="+that.offset
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          that.$axios
            .get(moreListUrl)
            .then((res) => {
              console.log(res.data.data);
               res.data.hasMore ==false
                ? alert("不好意思，刷新到底了哦~")
                : that.offset += 10,
                that.listCateData = res.data.data;
              resolve();
            })
            .catch((error) => {
              console.log(error);
            });
        }, 777);
      });
    },
  },
}
</script>

<style lang="css" scoped>

.listcate{
  padding: 0 17px 20px;
  font-size: 16px;
  background: #fff;
}

.cate-item {
    border-bottom: 1px solid #eee;
    padding: 20px 0;
}

.item-content {
    display: flex;
}

.cate-post {
    position: relative;
    color: #fff;
    font-size: 18px;
    height: 96px;
    width: 96px;
}

.cate-post img {
    width: 100%;
    height: 100%;
}

.cate-item .cate-hot {
    flex: 1;
    margin-left: 14px;
    padding: 6px 0;
}

.cate-item .cate-hot li {
    padding: 6px 0;
    height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    color: #666;
    font: 15px 700;
}

.cate-item .cate-hot li .col-rank {
    color: #fa6644;
    font-family: Arial;
    font-weight: 700;
    font-style: italic;
    margin-left: 20px;
}
.cate-item .cate-hot li .col-title {
    line-height: 20px;
    color:black;
    text-indent: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    flex: 1;
    width: 140px;
    font-weight: 800;
    font-size: 18px;
    margin-left: 10px;
    font-style: italic;
}

</style>
