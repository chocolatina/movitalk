<template>
  <div class="talk-wrapper">
    <div class="movie">
      <h2 class="movie__title">
        <a class="movie__link" href="">インターステラー</a>
      </h2>
      <span @click="startTimer" v-if="!timerOn">Start</span>
      <span @click="stopTimer" v-if="timerOn">Stop</span>
    </div>
    <div class="talk">
      <ul class="talk-list">
        <li v-for="talk in talks" :key="talk.id" class="talk-list__item">
          <span v-show="isPast(talk.time)" class="talk-list__balloon">{{talk.content}}</span>
        </li>
      </ul>
      <div class="talk-slider">
        <vue-slider
          ref="slider"
          v-bind="slider"
          v-model="slider.value"
          :reverse="true"
          tooltipDir="right"
          tooltip="always"
          @drag-start="dragStart"
          @drag-end="dragEnd"
        >
        <div slot="dot" class="talk-slider__dot" @click="touchBalloon"></div>
        <div v-show="isBalloonTouched" class="talk-slider__tooltip" slot="tooltip" slot-scope="{ value }">
          {{ formatTime }}
        </div>
      </vue-slider>
      </div>
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
      movieSec: 10140,
      sec: 0,
      clockHour: 0,
      clockMin: 0,
      clockSec: 0,
      timerOn: false,
      timerObj: null,
      isBalloonTouched: false,
      talks: {
        0: {
          id: '0',
          time: '1',
          name: 'John',
          content: 'マーフ可愛いなぁ'
        },
        1: {
          id: '1',
          time: '200',
          name: 'John',
          content: 'ドローン ゲットだぜ'
        },
        2: {
          id: '2',
          time: '300',
          name: 'John',
          content: '捏造...'
        },
        3: {
          id: '3',
          time: '1400',
          name: 'John',
          content: 'MRIって大事だよね'
        },
        4: {
          id: '4',
          time: '5250',
          name: 'John',
          content: 'お父さん、後ろ、後ろ〜！'
        },
        5: {
          id: '5',
          time: '6060',
          name: 'John',
          content: 'このシーンか...'
        }
      },
      slider: {
        value: 0,
        height: 400,
        width: 4,
        direction: 'vertical',
        bgStyle: {
          'backgroundColor': '#000'
        },
        processStyle: {
          'backgroundColor': '#fff'
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
      } else {
        this.complete()
      }
    },
    startTimer () {
      let self = this
      this.timerObj = setInterval(function () { self.count() }, 1000)
      this.timerOn = true
    },
    stopTimer () {
      clearInterval(this.timerObj)
      this.timerOn = false
    },
    complete () {
      clearInterval(this.timerObj)
    },
    isPast (time) {
      return time < this.sec
    },
    dragStart() {
      this.isBalloonTouched = true
    },
    dragEnd() {
      //this.isBalloonTouched = false
      this.sec = Math.floor(this.slider.value * (this.movieSec / 100))
    },
    hideBalloon() {
      this.isBalloonTouched = false
    },
    touchBalloon() {
      this.isBalloonTouched = true
      setTimeout(this.hideBalloon, 1500)
    },
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
.talk-slider__tooltip {
  background: #000;
  border-radius: 1em;
  line-height: 1;
  padding: .5em;
  color: #fff;
}
.talk-slider__dot {
  background: #fff;
  width: 16px;
  height: 16px;
  border-radius: 8px;
}

</style>
