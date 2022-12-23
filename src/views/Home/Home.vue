<template>
    <div class="header_box" ref="headbox">
        <div class="header_icon" @click="gotoCategory"><van-icon name="wap-nav"  /></div>
        <div class="header_mid">
            <div class="mid_search">
                <span class="yx_logo">码路严选</span>
                <div class="arrow"></div>
                <span class="search_word" @click="gotoSearch" >
                    全心全意为学员服务
                </span>
            </div>
        </div>
        <div class="header_rig" @click="gotoUser">
            <van-icon name="user-o" />
        </div>
    </div>
    <div class="swiper">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="skyblue" :height = '300'>
            <van-swipe-item v-for="item in carousels" >
                <img :src="item.carouselUrl"  class="swiper_img" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="nav_grid">
        <van-grid :column-num="5" icon-size="60px">
            <van-grid-item  icon="cart" text="码路超市" icon-color = "#1baeae" />
            <van-grid-item  icon="manager" text="码路服饰" icon-color = "#1baeae"/>
            <van-grid-item  icon="cart-circle" text="全球购" icon-color = "#1baeae" />
            <van-grid-item  icon="shop" text="码路生鲜" icon-color = "#1baeae" />
            <van-grid-item  icon="logistics" text="码路到家" icon-color = "#1baeae" />
            <van-grid-item  icon="gold-coin-o" text="充值缴费" icon-color = "#1baeae" />
            <van-grid-item icon="paid" text="9.9元拼" icon-color="#1baeae" />
            <van-grid-item icon="cash-on-deliver" text="领券" icon-color="#1baeae" />
            <van-grid-item icon="after-sale" text="省钱" icon-color="#1baeae" />
            <van-grid-item icon="weapp-nav" text="全部" icon-color="#1baeae" />
        </van-grid>
    </div>
    <div class="cell">
        <h3 class="cell_title">新品上线</h3>
        <van-grid :column-num="2" icon-size="90px">
            <van-grid-item  v-for="item in newGoodses" @click="gotodetail(item.goodsId)">
                <van-image :src="item.goodsCoverImg" width ="3.2rem" />
                <span class="item_name">{{ item.goodsName }} </span>
                <span class="item_price">{{ addyuan(item.sellingPrice) }}</span>
            </van-grid-item>
        </van-grid>
    </div>
    <div class="cell">
        <h3 class="cell_title">热销商品</h3>
        <van-grid :column-num="2" icon-size="90px">
            <van-grid-item v-for="item in hotGoodses" @click="gotodetail(item.goodsId)">
                <van-image :src="item.goodsCoverImg" width="3.2rem" />
                <span class="item_name">{{ item.goodsName }} </span>
                <span class="item_price">{{ addyuan(item.sellingPrice) }}</span>
            </van-grid-item>
        </van-grid>
    </div>
    <div class="cell">
        <h3 class="cell_title">最新推荐</h3>
        <van-grid :column-num="2" icon-size="90px">
            <van-grid-item v-for="item in recommendGoodses" @click="gotodetail(item.goodsId)">
                <van-image :src="item.goodsCoverImg" width="3.2rem" />
                <span class="item_name">{{ item.goodsName }} </span>
                <span class="item_price">{{ addyuan(item.sellingPrice) }}</span>
            </van-grid-item>
        </van-grid>
    </div>
    <div class="footer"></div>
</template>

<script setup>
import "../../assets/fonts/iconfont.css";
import { indexinfo } from '@/api/index.js'
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
let router = useRouter();

let newGoodses = reactive([]);
let carousels = reactive([]);
let hotGoodses = reactive([]);
let recommendGoodses = reactive([]);
let headbox = ref();
indexinfo().then(res => {
    console.log(res);
    res.data.carousels.forEach((item, index) => {
        carousels.push(item)
    })
    res.data.newGoodses.forEach(item => {
        newGoodses.push(item)
    });
    res.data.hotGoodses.forEach(item => {
        hotGoodses.push(item)
    });
    res.data.recommendGoodses.forEach(item => {
        recommendGoodses.push(item)
    });
})

let addyuan = (price)=>{
    return '￥'+price
}
let showActive = () => {
    if (document.documentElement.scrollTop > 0) {
        headbox.value.classList.add('active')
    }
    else {
        headbox.value.classList.remove('active')
    }
}
window.addEventListener('scroll', showActive)
let gotoCategory = () => {
    router.replace({ path: '/category' })
}
let gotoUser = () => {
    router.replace({ path: '/user' })
}
let gotoSearch = () => {

}
let gotodetail = (id) => {
    console.log(id);
}
</script>

<style>
.header_box {
    position: fixed;
    width: 100%;
    height: 1.33333rem;
    display: flex;
    z-index: 200;
    top: 0;
    left: 0;
    align-items: center;
}

.active {
    background-color: #1baeae;
}

.header_icon {
    color: white;
    padding: 10px;
}

.header_mid {
    flex: 1;
    display: flex;
    align-items: center;
    flex: auto;
}

.mid_search {
    width: 100%;
    display: flex;
    height: .53333rem;
    line-height: .53333rem;
    padding: .13333rem 0;
    margin: 0 .4rem 0 .21333rem;
    color: #232326;
    background: hsla(0, 0%, 100%, .7);
    border-radius: .53333rem;

}

.yx_logo {
    padding: 0 .26667rem;
    color: #1baeae;
    font-size: .53333rem;
    font-weight: 700;
    border-right: .02667rem solid #666;
}

.search_word {
    margin-left: 0.75rem;
    font-size: .32rem;
    color: #666;
    line-height: .56rem;
}
.header_rig{
        display: flex;
            margin-right: .4rem;
            align-items: center;
            flex: none;
}
  .my-swipe .van-swipe-item {
      color: #fff;
      font-size: 20px;
      text-align: center;
  }

.swiper_img{
   height: 100%;
   width: 100%;
}
.van-grid-item__text{
    font-size:18px !important;
}
.item_name{
color: #222333;
text-align: center;
font-size: .37333rem;
padding: .26667rem 0 0;
}
.item_price{
    color: #1baeae;
    text-align: center;
    font-size: .43rem;
}
.cell_title{
    font-weight: 400;
    font-size: 0.43rem;
    color: #1baeae;
    background: #f9f9f9;
    height: 1.33333rem;
    line-height: 1.33333rem;
    text-align: center;
}
.footer{
    height: 100px;
    width: 100%;
}
</style>