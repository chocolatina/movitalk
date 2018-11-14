<template>
  <div class="top">
    <ul class="movie-list">
      <li class="movie-list__item">
        <a class="movie-list__link" href="/#/talk">
          <span>インターステラー</span>
          <span class="movie-list__icon" uk-icon="icon: chevron-right; ratio: 1.2" />
        </a>
      </li>
      <li class="movie-list__item">
        <a class="movie-list__link" href="">
          <span>インターステラー</span>
          <span class="movie-list__icon" uk-icon="icon: chevron-right; ratio: 1.2" />
        </a>
      </li>
      <li class="movie-list__item">
        <a class="movie-list__link" href="">
          <span>インターステラー</span>
          <span class="movie-list__icon" uk-icon="icon: chevron-right; ratio: 1.2" />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      msg: 'hoihoi'
    }
  }
}
</script>

<style scoped>
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
</style>
