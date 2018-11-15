<template>
  <div id="app">
    <div>
      <div class="fixed">
        <div class="navbar__nav">
          <!--<a href="index.html" class="navbar__back">
            <span class="movie-list__icon" uk-icon="icon: chevron-left; ratio: 1.2;" />
          </a>-->
          <p></p>
          <h1><a href="index.html">ムビトーク</a></h1>
          <p></p>
        </div>
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  mounted () {
    axios.get("http://chocolatina.heteml.jp/movitalk/dummy.json")
      .then(function (response) {
        this.talks = response
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
html {
  background: #2a2a2a;
  color: #888;
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
