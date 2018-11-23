<template>
  <div class="top">
    <ul class="movie-list">
      <li class="movie-list__item" v-for="movie in movies" :key="movie.id">
        <router-link :to="{ name: 'talk', params: { id: movie.movie_id }}" class="movie-list__link">
          <span>{{movie.title}}</span>
          <span class="movie-list__icon" uk-icon="icon: chevron-right; ratio: 1.2" />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Talks',
  data () {
    return {
      msg: 'hoihoi',
      movies: [
        {
          title: "ショーシャンクの空に",
          movie_id: "1000"
        },
        {
          title: "インターステラー",
          movie_id: "1001"
        },
        {
          title: "ララランド",
          movie_id: "1002"
        }
      ]
    }
  }
}
</script>

<style scoped>
.movie-list{
  margin-top: 50px;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #ffffff;
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
