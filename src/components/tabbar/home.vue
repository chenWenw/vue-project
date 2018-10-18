<template>
  <div>
  <!--轮播图 -->
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in imageList" :key="index">
      <img :src="item.img">
    </mt-swipe-item>  
  </mt-swipe>
  <!--六宫格布局 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <router-link to="/home/newslist">
            <img src="../../assets/images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../assets/images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
</ul> 

  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
export default {
  data() {
    return {
      imageList: []
    };
  },
  created() {
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("http://027xin.com:8899/api/getlunbo").then(result => {
        if (result.body.status === 0) {
            this.imageList = result.body.message;
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .mint-swipe{
    height:200px;

  }
  .mint-swipe-items-wrap img{
    width:100%;
    height:100%;
  }

  .mui-grid-view.mui-grid-9 {
    background-color:#fff;
  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border:0;
  }
  .mui-table-view li img{
    width:60px;
    height:60px;
  }
  .mui-table-view .mui-table-view-cell .mui-media-body{
    font-size:13px;
  }
</style>
