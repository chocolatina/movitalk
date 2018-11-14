<template>
  <div class="talk-wrapper">
    <div class="movie">
      <h2 class="movie__title">
        <a class="movie__link" href="">インターステラー</a>
      </h2>
      <a class="uk-button uk-button-default movie-list__stop" href="">一時停止する</a>
    </div>
    <div class="talk">
      <div class="talk-slider">
        <vue-slider
        ref="slider"
        v-bind="slider"
        v-model="slider.value"
        :reverse="true"
        tooltipDir="right"
        tooltip="always"
        ></vue-slider>
      </div>
      <ul class="talk-list">
        <li class="talk-list__item">マーフ可愛いなぁ</li>
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
        <li class="talk-list__item">ユリイカ！！！！！！！！！</li>
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
        slider: {
          value: 1,
          height: 400,
          width: 4,
          direction: 'vertical',
        },
      }
    }
  }
</script>

<style scoped>
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
