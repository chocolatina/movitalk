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
        ></vue-slider>
      </div>
      <ul class="talk-list">
        <li v-for="talk in talks" class="talk-list__item">{{talk.content}}</li>
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
  import moment from 'moment'
  import vueSlider from 'vue-slider-component'
  export default {
    components: {
      vueSlider
    },
    data () {
      return {
        hour: 0,
        min: 0,
        sec: 0,
        timerOn: false,
        timerObj: null,
        cats: ['Norwegian Forest Cat','Maine Coon','Munchkin'],
        talks: {
          0: {
            time: '1',
            name: 'John',
            content: 'マーフ可愛いなぁ',
          },
          1: {
            time: '2',
            name: 'John',
            content: 'ドローン ゲットだぜ',
          },
          2: {
            time: '3',
            name: 'John',
            content: '捏造...',
          },
          3: {
            time: '4',
            name: 'John',
            content: 'MRIって大事だよね',
          },
          4: {
            time: '5',
            name: 'John',
            content: 'お父さん、後ろ、後ろ〜！',
          },
          5: {
            time: '6',
            name: 'John',
            content: 'このシーンか...',
          },
        },
        slider: {
          value: 1,
          height: 400,
          width: 4,
          direction: 'vertical',
          tooltipDir: "top",
          bgStyle: {
            'backgroundColor': '#000'
          }
        }
      }
    },
    computed: {
      formatTime: function() {
        let timeStrings = [
          this.hour.toString(),
          this.min.toString(),
          this.sec.toString()
        ].map(function(str) {
          if (str.length < 2) {
            return "0" + str
          } else {
            return str
          }
        })
        return timeStrings[0] + ":" + timeStrings[1] + ":" + timeStrings[2]
      }
    },
    methods: {
      count: function() {
        if (this.sec >= 59 && this.min <= 59 && this.hour <= 59) {
          this.min ++;
          this.sec = 0;
        } else if (this.sec >= 59 && this.min >= 59 && this.hour <= 59) {
          this.hour ++;
          this.min = 0;
          this.sec = 0;
        } else if(this.sec >= 59 && this.min >= 59 && this.hour >= 59) {
          this.complete();
        } else {
          this.sec ++;
        }
      },
      start: function() {
        let self = this;
        this.timerObj = setInterval(function() {self.count()}, 1000)
        this.timerOn = true
      },
      stop: function() {
        clearInterval(this.timerObj);
        this.timerOn = false
      },
      complete: function() {
        clearInterval(this.timerObj)
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
  position: relative;
  background: rgba(255,255,255,.1);
  border-radius: 6px;
  padding: .5em;
  font-size: 0.8rem;
  color: #dddddd;
  margin-bottom: 1em;
  width: 20em;
}
.talk-list__item:after {
  right: 590%;
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
