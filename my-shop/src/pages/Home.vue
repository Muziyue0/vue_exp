<template> 
  <van-search 
 shape="round" 
v-model="value"
 placeholder="请输入搜索关键词"
 @search="onSearch" 
 @cancel="onCancel" 
  > 
  </van-search>
  <!-- 轮播图组件 -->
  <HomeSwiper></HomeSwiper>
  <!--功能列表组件-->
  <home-grid></home-grid>
  <!--商品信息展示区-->
  <home-product></home-product>
  <!--每周上新-->
  <home-new></home-new>
  <!--人气推荐-->
  <home-top></home-top>

</template> 
<script setup> 
import { ref } from 'vue' 
import { showToast } from 'vant' 
import HomeSwiper from './HomeSwiper.vue'
import HomeGrid from '../components/HomeGrid.vue'
import HomeProduct from '../components/HomeProduct.vue'
import HomeNew from '../components/HomeNew.vue'
import HomeTop from '../components/HomeTop.vue'
const value = ref('') 
const onSearch = val=> showToast(val) 
const onCancel = () => showToast('取消')
 </script>