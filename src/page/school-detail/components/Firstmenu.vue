<template>
  <div class="first-menu">
    <div class="brief item">
      <h2>学校介绍</h2>
      <p :class="['article', {presMes: birefshow}]">{{dataList.cn_notes}}</p>
      <div v-show="birefshow" class="showmore" @click="showmorefun(1)">展开</div>
    </div>
    <div class="item special">
      <h2>学校特色</h2>
      <ul class="dotul">
        <li v-for="(item, index) of dataList.tags" :key="index">{{item.tag}}</li>
      </ul>
    </div>
    <div class="item advantage">
      <h2>学校优势</h2>
      <div class="article" v-for="(item, index) of dataList.cn_advantages" :key="index">
        <span class="iconfont icon-order"></span>
        <p>{{item}}</p>
      </div>
    </div>
    <div class="item iconsbox">
      <ul>
        <li class="liItem" v-for="(item, index) of dataList.attribution" :key="index">
          <div class="l-val">{{item.value}}</div>
          <p class="l-field">{{item.field}}</p>
        </li>
      </ul>
    </div>
    <div class="item subject">
      <h2>学术情况</h2>
      <ul class="sub-ul">
        <li v-show="dataList.sat" class="subli"><span class="iconfont icon-sat"></span><p>SAT均值:{{dataList.sat}}</p></li>
        <li v-show="isEsl" class="subli"><span class="iconfont icon-esl"></span><p>ESL课程:{{isEsl}}</p></li>
        <li v-show="honor" class="subli"><span class="iconfont icon-honor"></span><p>Honor课程:{{honor}} 门</p></li>
      </ul>
    </div>
    <div class="item apply">
      <h2>申请相关</h2>
      <div class="aitem">
        <div class="a-left">在线申请</div>
        <div class="a-right">{{online_a}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">申请要求</div>
        <div class="a-right">{{dataList.requirements}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">面试类型</div>
        <div class="a-right">{{dataList.interview_type}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">申请费用</div>
        <div class="a-right">${{dataList.application_fee}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">学费</div>
        <div class="a-right">${{dataList.tuition}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">监护人服务及管理费</div>
        <div class="a-right">${{dataList.custody_fee}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">保险费</div>
        <div class="a-right">${{dataList.insurance_fee}}</div>
      </div>
      <div class="aitem">
        <div class="a-left">总费用</div>
        <div class="a-right">${{dataList.total_fee}}</div>
      </div>
    </div>
    <div class="item course" v-for="(items, index) of ccoures" :key="index">
      <h2>{{items.title}} {{items.totals}}</h2>
      <ul class="course-ul">
        <li v-for="(list, ids) of items.courses" :key="ids" class="scourseli">{{list.tag}}</li>
      </ul>
    </div>
    <div class="item university">
      <div class="top">
        <div><span class="iconfont icon-zonghe"></span>大学综合录取走向</div>
        <div class="rank">排名</div>
      </div>
      <div :class="{maxHeight: university1show}">
        <div class="un-item" v-for="(item, index) of university1" :key="index">
          <div class="unname-item">
            <h3>{{item.cn_name}}</h3>
            <p>{{item.en_name}}</p>
          </div>
          <div class="rank-item">{{item.rank}}</div>
        </div>
      </div>
      <div v-show="university1show" class="showmore" @click="showmorefun(2)">展开</div>
    </div>
    <div class="item university">
      <div class="top">
        <div><span class="iconfont icon-sort"></span>大学文理录取走向</div>
        <div class="rank">排名</div>
      </div>
      <div :class="{maxHeight: university2show}">
        <div class="un-item" v-for="(item, index) of university2" :key="index">
          <div class="unname-item">
            <h3>{{item.cn_name}}</h3>
            <p>{{item.en_name}}</p>
          </div>
          <div class="rank-item">{{item.rank}}</div>
        </div>
      </div>
      <div v-show="university2show" class="showmore" @click="showmorefun(3)">展开</div>
    </div>
    <div class="item photo">
      <h2>学校照片</h2>
      <div class="photo-wrapper">
        <div class="photo-item" @click="handleGllary" v-for="item of photos" :key="item.id">
          <div class="p-img"><img :src="item.path+'?x-oss-process=image/resize,m_fill,w_335,h_200'" alt=""></div>
          <p class="p-title">{{item.title}}</p>
        </div>
      </div>
    </div>
    <common-gallary :photoslist="photos" v-show="gallaryshow" @close="handleGllary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'FirstMenu',
  props: {
    dataList: Object
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      birefshow: true,
      university1show: true,
      university2show: true,
      gallaryshow: false
    }
  },
  methods: {
    showmorefun (res) {
      if (res === 1) {
        this.birefshow = false
      } else if (res === 2) {
        this.university1show = false
      } else {
        this.university2show = false
      }
    },
    handleGllary () {
      this.gallaryshow = !this.gallaryshow
    }
  },
  computed: {
    isEsl () {
      return this.dataList.esl === 1 ? '有' : false
    },
    showhonor () {
      if (!this.dataList.courses_honor) {
        return this.dataList.courses_honor === 0
      }
      return false
    },
    honor () {
      if (!this.dataList.courses_honor) {
        return 0
      } else {
        const honor = this.dataList.courses_honor
        const arr = honor.split(',')
        return arr.length
      }
    },
    online_a () {
      // 在线申请
      return this.dataList.online_application === 1 ? '支持' : '不支持'
    },
    ccoures () {
      let arrcoured = []
      if (this.dataList) {
        const data = this.dataList
        for (let o in data) {
          if (/^course_./.test(o) && data[o].totals !== 0) {
            arrcoured.push(data[o])
          }
        }
        return arrcoured
      }
    },
    university1 () {
      let univer1 = []
      const univerval = this.dataList.university
      if (univerval) {
        univer1 = univerval.type_1
        return univer1
      }
    },
    university2 () {
      let univer2 = []
      const univerval = this.dataList.university
      if (univerval) {
        univer2 = univerval.type_2
        return univer2
      }
    },
    photos () {
      const photoObjs = this.dataList.photos
      if (photoObjs) {
        return photoObjs
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/commonsty.styl'
@import '~styles/samecolor.styl'
.maxHeight
  max-height: 3.2rem
  overflow: hidden
.presMes
  max-height: 1.2rem
  overflow: hidden
.first-menu
  .item
    background-color: #fff
    margin-bottom: 0.24rem
    padding:0.2rem 0.24rem
    position: relative
    h2
    .top
      font-size: 0.34rem
      font-weight: bold
      padding: 0.3rem 0
    .article
      font-size: .28rem;
      color: #333;
      line-height: .4rem;
      overflow: hidden;
      margin-bottom: 0.24rem
    .showmore
      width: 100%
      height: .5rem
      line-height: .5rem
      position: absolute
      left: 0
      color: $maincolor
      font-size: .28rem
      text-align: center
      box-shadow: -0.05rem -0.15rem 0.2rem #fff
      bottom: 0rem
      background-color: #fff
  .dotul
    clearfloat()
    li
      float: left
      color: #fff
      padding: 0.2rem
      margin-bottom: 0.2rem
      background-color: #ff9800
      border-radius: 0.2rem
      margin-right: 0.2rem
      &:nth-child(6n+1)
        background: linear-gradient(top right,#ff99cc,#ff9933)
      &:nth-child(6n+2)
        background: linear-gradient(45deg,#ff99ff,#6699cc)
      &:nth-child(6n+3)
        background: linear-gradient(top left,#99ff66,#9966ff)
      &:nth-child(6n+4)
        background: linear-gradient(bottom left,#FF6633,#FFCC33)
      &:nth-child(6n+5)
        background: linear-gradient(135deg,#cc00ff,#ff6666)
      &:nth-child(6n+6)
        background: linear-gradient(120deg,#FF0033,#FFFF66)
  .advantage
    .article
      display: flex
      .icon-order
        color: $maincolor
        margin-right: 0.1rem
        font-size: 0.26rem
  .iconsbox
    ul
      clearfloat()
      .liItem
        width: 25%
        float: left
        margin-bottom: 0.2rem
        text-align: center
        .l-val
          width: 1rem
          height: 1rem
          border-radius: 100%;
          line-height: 1rem
          text-align: center
          margin: 0.16rem auto
          background-color: $maincolor
          color: #fff
        .l-field
          ellipsis()
  .subject
    .sub-ul
      width: 100%
      display: flex
      align-item: center
      .subli
        display: inline-block
        width: 33.33%
        font-size: 0.24rem
        text-align: center
        overflow: hidden
        color: #FF9966
        .iconfont
          font-size: 0.8rem
        p
          margin-top: 0.08rem
          ellipsis()
  .aitem
    display: flex
    line-height: 0.4rem
    margin-bottom: 0.14rem
    font-size: 0.24rem
    .a-left
      color: $morecolor
      width: 3rem
  .course-ul
    display: flex
    flex-wrap: wrap
    .scourseli
      width: 33%
      display: inline-block
      ellipsis()
      color: $morecolor
      margin-bottom: 0.2rem
  .university
    .top
    .un-item
      display: flex
      justify-content: space-between
      align-items: center
    .un-item
      margin-bottom: 0.24rem
      h3
        margin-bottom: 0.1rem
        font-size: 0.3rem
      p
        font-size: 0.24rem
        color: #999
      .rank-item
        color: #eaeaea
        font-size: 0.48rem
    .top
      span
        color: #ff9900
        margin-right: 0.05rem
      .rank
        color: #999
        font-size: 0.3rem
  .photo
    overflow: hidden
    .photo-wrapper
      width: 100%
      overflow: auto
      white-space: nowrap;
      .photo-item
        display: inline-block
        width: 3.35rem
        height: 2rem
        position: relative
        padding-right: 0.12rem
        .p-img
          overflow: hidden
          width: 100%
          height: 100%
          box-sizing: border-box
          border-radius: 0.2rem
          img
            width: 100%
        .p-title
          position: absolute
          color: #fff
          bottom: 0.2rem
          left: 0.3rem
</style>
