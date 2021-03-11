<template>
  <div>
    <h2>Home</h2>
    <ul class="">
        <li>
          <router-link to="/home/news">News</router-link>
          <router-link to="/home/message">Message</router-link>
        </li>
        <div>
          <router-view></router-view>
        </div>
      </ul>
  </div>
</template>
<script>
export default {};
</script>
<style>
</style>