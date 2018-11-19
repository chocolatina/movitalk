<template>
  <div class="talk-wrapper">
    <div class="movie">
      <h2 class="movie__title">ショーシャンクの空に</h2>
      <span @click="stopTimer" v-if="timerOn" class="button button--secondary">一時停止する</span>
    </div>
    <div>
      <div class="talk__before-start" v-if="!timerOn">
        <p>お持ちのデバイスで再生が始まったら、<br>「再生する」を押してください。</p>
        <span @click="startTimer" class="button button--primary button--size-grande">再生する</span>
      </div>
      <div v-else>
        <p class="play-time">
          <span class="play-time__text">{{ formatTime }}</span>
        </p>
        <div class="talk">
          <ul class="talk-list">
            <li v-for="talk in talks" :key="talk.id" class="talk-list__item">
              <span v-show="isPast(talk.time)" class="talk-list__balloon">{{talk.text}}</span>
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
        <div class="write">
          <input type="text" v-model="comment" />
          <button @click="createTalk">送信</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueSlider from 'vue-slider-component'
import axios from 'axios'
export default {
  components: {
    vueSlider
  },
  data () {
    return {
      movieSec: 8640,
      sec: 0,
      clockHour: 0,
      clockMin: 0,
      clockSec: 0,
      timerOn: false,
      timerObj: null,
      isBalloonTouched: false,
      comment: '',
      slider: {
        value: 0,
        height: 400,
        width: 4,
        direction: 'vertical',
        bgStyle: {
          'backgroundColor': '#222'
        },
        processStyle: {
          'backgroundColor': '#111'
        }
      }
    }
  },
  mounted () {
    this.talkData()
  },
  computed: {
    formatTime () {
      let timeStrings = []
      timeStrings[0] = (this.sec % 60).toString()
      timeStrings[1] = (((this.sec % 3600) - timeStrings[0]) / 60).toString()
      timeStrings[2] = (((this.sec % 216000) - (timeStrings[1] * 60) - timeStrings[0]) / 3600).toString()
      if (timeStrings[0].length < 2) {
        timeStrings[0] = '0' + timeStrings[0]
      }
      if (timeStrings[1].length < 2) {
        timeStrings[1] = '0' + timeStrings[1]
      }
      return timeStrings[2] + ':' + timeStrings[1] + ':' + timeStrings[0]
    },
    talks () {
      return this.$store.getters.talk
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
    dragStart () {
      this.isBalloonTouched = true
    },
    dragEnd () {
      this.sec = Math.floor(this.slider.value * (this.movieSec / 100))
      setTimeout(this.hideBalloon, 1500)
    },
    hideBalloon () {
      this.isBalloonTouched = false
    },
    touchBalloon () {
      this.isBalloonTouched = true
      setTimeout(this.hideBalloon, 1500)
    },
    async emitSubmit () {
      this.$emit('submit', {comment: this.comment, sec: this.sec})
      this.comment = ''
    },
    talkData () {
      return this.$store.dispatch('getTalkAction')
    },
    createTalk: function() {
      axios.post('http://localhost:3000/talk/create',{
        talk: {
          film_id: '1',
          time: '1',
          user_id: '1',
          faved: '1',
          text: 'uuuuuuu'
        }
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
.movie {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8em ;
  border-bottom: 1px solid #333;
  position: fixed;
  top: 60px;
  width: 100%;
  box-sizing: border-box;
  background: #2a2a2a;
  z-index: 999;
}
.movie__title {
  color: #eee;
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: .5em 0;
}
.talk__before-start {
  background: #2a2a2a;
  height: 100vh;
  padding-top: 10em;
  text-align: center;
  margin-top: 60px;
}
.play-time {
  text-align: center;
  position: fixed;
  top: 120px;
  left: 50%;
  margin-left: -2.5em;
}
.play-time__text {
  display: inline-block;
  background: rgba(255,255,255,.05);
  font-size: 0.7rem;
  padding: .3em 1em;
  border-radius: 1.3em;
  line-height: 1;
}
.talk {
  margin-top: 180px;
}
.talk-list {
  margin: 15px 15px 0 60px;
}
.talk-list__item {
  margin-bottom: 1em;
}
.talk-list__balloon {
  display: block;
  position: relative;
  background: rgba(255,255,255,.05);
  border-radius: 4px;
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
  border-right-color: rgba(255,255,255,.05);
  border-width: 8px;
  margin-top: -8px;
}
.talk-slider {
  margin-left: 20px;
  position: fixed;
  top: 150px;
}
.talk-slider__tooltip {
  background: #000;
  border-radius: 1em;
  line-height: 1;
  padding: .5em;
  color: #fff;
}
.talk-slider__dot {
  background: #666;
  width: 16px;
  height: 16px;
  border-radius: 8px;
}
.write {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
