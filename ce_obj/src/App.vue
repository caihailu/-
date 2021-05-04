<template>
  <div id="app">
    <router-link to="/"></router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  border: 0.01px;
}
body,
html {
  width: 100%;
  /* height: 100%; */
  background-color: #f4f9fa;
  font-size: 16px;
}
p {
  margin: 0;
}
</style>
