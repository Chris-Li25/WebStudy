<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{
          message.title
        }}</router-link>
        <button class="btn btn-primary btn-xs" @click="pushPage(message.id)">push</button>
        <button class="btn btn-primary btn-xs" @click="replacePage(message.id)">replace</button>
      </li>
    </ul>
    <!-- <button class="btn btn-primary btn-xs" @click="$router.back()">回退</button> -->
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    //模拟ajax请求从后台获取数据
    setTimeout(() => {
      const messages = [
        {
          id: 1,
          title: "message01",
        },
        {
          id: 2,
          title: "message02",
        },
        {
          id: 3,
          title: "message03",
        },
        {
          id: 4,
          title: "message04",
        },
      ];
      this.messages = messages;
    }, 1000);
  },
  methods: {
    pushPage(id){
      this.$router.push(`/home/message/detail/${id}`)
    },
    replacePage(id){
      this.$router.replace(`/home/message/detail/${id}`)
    }
  },
};
</script>
<style>
</style>