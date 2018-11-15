<template>
  <div class="talk-wrapper">
    <div class="movie">
      <h2 class="movie__title">
        <a class="movie__link" href="">インターステラー{{ formatTime }}</a>
      </h2>
      <button v-on:click="start" v-if="!timerOn">Start</button>
      <button v-on:click="stop" v-if="timerOn">Stop</button>
    </div>
    <div class="talk">
      <div class="talk-slider">
        <vue-slider class="hogheoge"
        ref="slider"
        v-bind="slider"
        v-model="slider.value"
        :reverse="true"
        tooltipDir="right"
        tooltip="always"
        >
        <div class="diy-tooltip" slot="tooltip" slot-scope="{ value }">
          {{ formatTime }}
        </div>
        <!--https://www.npmjs.com/package/vue-slider-component-->
      </vue-slider>
      </div>
      <ul class="talk-list">
        <li v-for="talk in talks" :key="talk.id" class="talk-list__item">
          <span v-show="isPast(talk.time)" class="talk-list__balloon">{{talk.content}}</span>
        </li>
        <!--<li class="talk-list__item">マーフ可愛いなぁ</li>
        <li class="talk-list__item">ドローン ゲットだぜ</li>
        <li class="talk-list__item">捏造...</li>
        <li class="talk-list__item">MRIって大事だよね</li>
        <li class="talk-list__item">お父さん、後ろ、後ろ〜！</li>
        <li class="talk-list__item">このシーンか...</li>
        <li class="talk-list__item">マーフ、このトラックにお父さん乗ってるって期待しちゃうよね</li>
        <li class="talk-list__item">ワームホールが球ってなるほどな〜</li>
        <li class="talk-list__item">ワームホールの中怖すぎ</li>
        <li class="talk-list__item">この映画は時たまぞっとするほど怖い</li>
        <li class="talk-list__item">ああ〜〜怖い怖い怖い</li>
        <li class="talk-list__item">この時間の流れ、絶望してしまうな</li>
        <li class="talk-list__item">1時間が7年...!!!!!</li>
        <li class="talk-list__item">23年、本当に途方も無い</li>
        <li class="talk-list__item">泣いちゃうよ、こんなのは</li>
        <li class="talk-list__item">泣いちゃうよ、こんなのは</li>
        <li class="talk-list__item">教授〜〜〜</li>
        <li class="talk-list__item">ダメな方のオデッセイ始まった</li>
        <li class="talk-list__item">23年も待ったのに、ロミリー可哀想すぎる</li>
        <li class="talk-list__item">ガルガンチュア果てしなく大きいな</li>
        <li class="talk-list__item">ユリイカ！！！！！！！！！</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
export default {
  components: {
    vueSlider
  },
  data () {
    return {
      movieSec: 5400,
      sec: 0,
      clockHour: 0,
      clockMin: 0,
      clockSec: 0,
      timerOn: false,
      timerObj: null,
      cats: ['Norwegian Forest Cat', 'Maine Coon', 'Munchkin'],
      talks: {
        0: {
          id: '0',
          time: '1',
          name: 'John',
          content: 'マーフ可愛いなぁ'
        },
        1: {
          id: '1',
          time: '2',
          name: 'John',
          content: 'ドローン ゲットだぜ'
        },
        2: {
          id: '2',
          time: '3',
          name: 'John',
          content: '捏造...'
        },
        3: {
          id: '3',
          time: '4',
          name: 'John',
          content: 'MRIって大事だよね'
        },
        4: {
          id: '4',
          time: '5',
          name: 'John',
          content: 'お父さん、後ろ、後ろ〜！'
        },
        5: {
          id: '5',
          time: '6',
          name: 'John',
          content: 'このシーンか...'
        }
      },
      slider: {
        value: 0,
        height: 400,
        width: 4,
        direction: 'vertical',
        tooltipDir: 'top',
        bgStyle: {
          'backgroundColor': '#000'
        }
      }
    }
  },
  computed: {

    formatTime () {
      let timeStrings = []

      timeStrings[0] = (this.sec % 60).toString()
      timeStrings[1] = (((this.sec % 3600) - timeStrings[0]) / 60).toString()
      timeStrings[2] = (((this.sec % 216000) - (timeStrings[1]*60) - timeStrings[0]) / 3600).toString()
      if(timeStrings[0].length < 2) {
        timeStrings[0] = '0' + timeStrings[0]
      }
      if(timeStrings[1].length < 2) {
        timeStrings[1] = '0' + timeStrings[1]
      }
      return timeStrings[2] + ':' + timeStrings[1] + ':' + timeStrings[0]
    }
  },
  methods: {
    count () {
      if (this.sec < this.movieSec) {
        this.sec++
        //this.slider.value = this.sec/2
      } else {
        this.complete()
      }
    },
    start () {
      let self = this
      this.timerObj = setInterval(function () { self.count() }, 1000)
      this.timerOn = true
    },
    stop () {
      clearInterval(this.timerObj)
      this.timerOn = false
    },
    complete () {
      clearInterval(this.timerObj)
    },
    isPast (time) {
      return time < this.sec
    }
  }
}
</script>

<style scoped>
.movie {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8em 59px .8em 15px;
  border-bottom: 1px solid #424242;
}
.movie__title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: .4em 0;
}
.movie__stop {
  background: rgba(255,255,255,.1);
  border-radius: 1.5em;
  padding: .5em 1em;
  font-size: .8em;
}
.talk-slider {
  margin-left: 20px;
  position: fixed;
  top: 130px;
}
.talk-list {
  margin: 15px 15px 0 50px;
}
.talk-list__item {
  margin-bottom: 1em;
}
.talk-list__balloon {
  display: block;
  position: relative;
  background: rgba(255,255,255,.1);
  border-radius: 6px;
  padding: .5em;
  font-size: 0.8rem;
  color: #dddddd;
  width: 20em;
}
.talk-list__balloon:after {
  right: 100%;
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(255,255,255,.0);
  border-right-color: rgba(255,255,255,.1);
  border-width: 8px;
  margin-top: -8px;
}

</style>
