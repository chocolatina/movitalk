<template>
  <div id="app">
    <div>
      <div class="sticky">
        <div class="navbar__nav">
          <!--<a href="index.html" class="navbar__back">
            <span class="movie-list__icon" uk-icon="icon: chevron-left; ratio: 1.2;" />
          </a>-->
          <p></p>
          <h1><a href="index.html">ムビトーク{{msg}}</a></h1>
          <p></p>
        </div>

        <div class="movie">
          <h2 class="movie__title">
            <a class="movie__link" href="">インターステラー</a>
          </h2>
          <a class="uk-button uk-button-default movie-list__stop" href="">一時停止する</a>
        </div>
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

    <router-view/>
  </div>
</template>

<script>

import vueSlider from 'vue-slider-component'
export default {
  name: 'App',
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

<style>
.hoge {
  margin-left:100px;
}
html {
  background: #2C2C2C;
}
body {
  margin: 0;
}
a, a:hover {
  color: #fff;
  text-decoration: none;
}
ul {
  list-style: none;
  padding: 0;
}
h1 {
  margin-bottom: 0;
  margin-top: 0;
}
li {
  display: block;
}
/* */
.uk-button {
  border-radius: 1.5em;
  display: inline-block;
  font-weight: bold;
}
.uk-button-default, .uk-button-primary {
  border: none;
}

.uk-button-default {
  background-color: rgba(255,255,255,.1);
  color: #fff;
}
.uk-button-default:hover,
.uk-button-default:focus {
  background-color: rgba(255,255,255,.1);
  color: #fff;
}
.uk-button-default:active,
.uk-button-default.uk-active {
  background-color: rgba(255,255,255,.1);
  color: #fff;
}

.uk-button-primary {
  color: #fff;
  background-color: #FF9500;
}
.uk-button-primary:hover,
.uk-button-primary:focus {
  background-color: #D96D00;
}
.uk-button-primary:active,
.uk-button-primary.uk-active {
  background-color: #D96D00;
  color: #fff;
}

/* */
.sticky {
  position: sticky;
  top: 0;
  background: #2c2c2c;
  z-index: 999;
}
.navbar__nav {
  background: #000;
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
}

.navbar__nav h1{
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
}

.navbar__nav h1 a{
  padding: 1em;
  display: inline-block;
}

.movie-list{
  margin-top: 0;
}
.movie-list__item{
  border-bottom: 1px solid #424242;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.movie-list__link{
  font-size: 1rem;
  padding: 1.2em 10px 1.2em 15px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 100%;
}
.movie-list__icon {
  color: #FF9500;
  font-size: 2em;
}
.movie-list__stop {
  white-space: nowrap;
  font-size: .9em;
  padding: .6em 20px;
  line-height: 1.1;
}
.movie {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .8em 10px .8em 15px;
  border-bottom: 1px solid #424242;
}
.movie__title {
  font-size: 1rem;
  font-weight: bold;
  margin: 0;
  padding: .4em 0;
}
.movie__link {
}
.watch {
  text-align: center;
  padding-top: 2em;
}
.talk {
  /*display: flex;
  justify-content: space-between;
  align-items: start;*/
}
.talk-slider {
  margin-left: 20px;
  position: fixed;
  top: 130px;
}
/*.talk-slider__bar {
  display: block;
  background: #000;
  height: 80vh;
  width: 5px;
  position: relative;
}
.talk-slider__ball {
  position: absolute;
  width: 18px;
  height: 18px;
  background: #fff;
  border-radius: 10px;
  left: -7px;
}*/
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
