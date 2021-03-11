<template>
  <ul>
    <li v-for="(message) in messages" :key="message.id">
      <a href="#javascript:;">{{ message.title }}</a>
    </li>
  </ul>
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
    },2000);
  },
};
</script>
<style>
</style>