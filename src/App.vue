<template>
  <div id="app">
    <div>
      <div class="fixed">
        <div class="navbar__nav">
          <!--<a href="index.html" class="navbar__back">
            <span class="movie-list__icon" uk-icon="icon: chevron-left; ratio: 1.2;" />
          </a>-->
          <p></p>
          <h1><router-link :to="{ name: 'talks'}">ムビトーク</router-link></h1>
          <p></p>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>
<style>
html {
  background: #2a2a2a;
  color: #888;
}
body {
  margin: 0;
  font-feature-settings: "palt";
  letter-spacing: .05em;
}
a, a:hover {
  text-decoration: none;
}
a {
  color: #ffb100;
}
a:hover {
  color: #ef8100;
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
p {
  margin: 0;
}
p,div,ul,li,a,span {
  box-sizing: border-box;
}
.fixed {
  position: fixed;
  top: 0;
  background: #222;
  z-index: 999;
  width: 100%;
}
.navbar__nav {
  background: #000;
  color: #fff;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  height: 50px;
}

.navbar__nav h1{
  font-size: 1.1rem;
  text-align: center;
  font-weight: bold;
  line-height: 1.3;
}

.navbar__nav h1 a{
  padding: .8em;
  display: inline-block;
  color: #ffffff;
}

.button {
  border-radius: 1.5em;
  padding: .5em 2em;
  cursor: pointer;
  background: #333;
  color: #fff;
  font-weight: bold;
  font-size: .9em
}
.button--primary {
  border-radius: 1.5em;
  display: inline-flex;
  background: #ef8100;
  color: #fff;
  box-shadow: 0 .2em #e83000;
}
.button--secondary {
  border-radius: 1.5em;
  display: inline-flex;
  background: rgba(255,255,255,.1);
  color: #fff;
}
.button--size-tiny {
  font-size: .8em;
  font-weight: normal;
  padding: .5em 1em;
}
.button--size-large {
  font-size: 1em;
}
.button--size-grande {
  font-size: 1.1em;
}
</style>
