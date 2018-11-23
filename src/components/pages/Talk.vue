<template>
  <div class="talk-wrapper">
    <div class="movie-wrapper">
      <div class="movie" v-if="timerOn">
        <!--<h2 class="movie__title">ショーシャンクの空に</h2>-->
        <span @click="stopTimer" class="button button--secondary">一時停止する</span>
      </div>
      <!--<p v-if="!timerOn" class="movie-overview">{{ overview }}</p>-->
    </div>
    <div>
      <div class="talk__before-start" v-if="!timerOn">
        <p class="movie-thumb"><img :src='thumbURL' class="movie-thumb__image" /></p>
        <div class="movie-info">
          <div>
            <h1 class="movie-info__title">{{$route.params.id}}ショーシャンクの空に</h1>
            <p class="movie-info__comment-num">コメント：38</p>
          </div>
          <p><a href="https://eiga.com/rental/search/?name=ショーシャンクの空に&genre%5B%5D=all&site%5B%5D=all" class="movie-info__link">配信を検索</a></p>
        </div>
        <p class="movie-overview">{{ overview }}</p>
        <div class="movie-play">
          <p class="movie-play__description">お持ちのデバイスで再生が始まったら、<br>「一緒に観る」を押してください。</p>
          <span @click="startTimer" class="button button--primary button--size-grande">一緒に観る</span>
        </div>
      </div>
      <div v-else>
        <p class="play-time">
          <span class="play-time__text">{{ formatTime }}</span>
        </p>
        <div class="talk">
          <ul class="talk-list">
            <li v-for="talk in sortedTalks" :key="talk.id" class="talk-list__item">
              <span class="talk-list__balloon" :class="{'talk-list__balloon--shown': isPast(talk.time)}">{{talk.text}}</span>
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
  name: 'Talk',
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
      overview: '',
      thumbURL: '',
      //route_params_id: route.params.id,
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
    this.getMovieThumbnail()
    console.log(route)
    //console.log(route.params.id)
    //console.log(Number(route.params.id))
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
    },
    sortedTalks () {
      return this.talks.sort(function (a, b) {
        if (a.time < b.time) return -1
        if (a.time > b.time) return 1
        return 0
      })
    }
  },
  methods: {
    count () {
      if (this.sec < this.movieSec) {
        this.sec++
        // console.log(this.$refs.talkwrapper.clientHeight)
        // console.log(this.$el.querySelector(".talkwrapper").scrollTop)
        // this.$refs.talkwrapper.scrollTop = this.$refs.talkwrapper.clientHeight
        // this.scrollToEnd()
      } else {
        this.complete()
      }
    },
  	/* scrollToEnd () {
      var container = this.$el.querySelector('.talk-list')
      // console.log(container.clientHeight)
      //console.log(container)
      // window.scrollHeight = container.scrollHeight
      // container.scrollTo(0,container.clientHeight)
      //console.log(container.scrollTop)
      //console.log(container.scrollHeight)
    },*/
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
    talkData () {
      return this.$store.dispatch('getTalkAction')
    },
    getMovieThumbnail () {
      const that = this
      axios.get('https://api.themoviedb.org/3/movie/278?api_key=e78219babfc25468e5d1a08e84ac72ee&language=ja').then(function (response) {
        that.overview = response.data.overview
        that.thumbURL = 'https://image.tmdb.org/t/p/original/' + response.data.poster_path
        console.log(response.data.overview)
      }).catch(function (error) {
        console.log(error)
      })
    },
    createTalk: function () {
      const that = this
      //const movieId = route.params.id
      axios.post('http://localhost:3000/talk/create', {
        talk: {
          movie_id: '3',
          time: this.sec,
          user_id: '1',
          faved: '0',
          text: this.comment
        }
      }).then(function (response) {
        that.comment = ''
        that.talkData()
      }).catch(function (error) {
        console.log(error)
      })
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
.movie-overview {
  font-size: .9em;
}
.movie-thumb {
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0 0 20px;
}
.movie-thumb__image {
  position: absolute;
  left: 0;
  bottom: -200px;
  width: 100%;
}
.movie-thumb:after {
  display: block;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
  background: rgba(0,0,0,0.5);
  /*background: linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,100%));*/
}
.movie-info {
  padding: 0 15px 15px;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #444;
  margin-bottom: 15px;
}
.movie-info__title {
  font-size: 1rem;
  color: #fff;
}
.movie-info__comment-num {
  font-size: .8rem;
}
.movie-info__link {
  font-size: .9em;
}
.movie-overview {
  padding: 0 15px;
  font-size: .8em;
  line-height: 1.6;
  text-align: left;
  text-align: justify;
  text-justify: inter-ideograph;
  height: 6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
}
.movie-play__description {
  border-top: 1px solid #444;
  font-size: .8em;
  margin-top: 15px;
  margin-bottom: 1em;
  padding-top: 15px;
  color: #aaa;
  letter-spacing: .2em;
}
/*.movie-thumb:after {
  display: block;
  content: "";
  width: 100%;
  height: 50%;
  top: 0;
  position: absolute;
  left: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0),rgba(0,0,0,100%));
}*/
.talk__before-start {
  background: #2a2a2a;
  height: 100vh;
  text-align: center;
  margin-top: 50px;
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
.talk-wrapper {
}
.talk {
  margin-top: 180px;
  height: 100%;
}
.talk-list {
  margin: 15px 15px 0 60px;
  position: fixed;
  bottom: 0;
  max-height: 100%;
  width: 100%;
  overflow: scroll;
}
.talk-list__item {
  margin-bottom: 1em;
}
.talk-list__balloon {
  position: relative;
  background: rgba(255,255,255,.05);
  border-radius: 4px;
  padding: .5em;
  font-size: 0.8rem;
  color: #dddddd;
  width: 20em;
  display: none;
  /* visibility: hidden;
  overflow: hidden;
  height: 0; */
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
.talk-list__balloon--shown {
  /* visibility: visible;
  height: 3em; */
  display: block;
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
