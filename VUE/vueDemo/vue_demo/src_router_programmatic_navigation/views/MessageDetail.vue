<template>
  <ul>
    <li>id:{{ messageDetail.id }}</li>
    <li>title:{{ messageDetail.title }}</li>
    <li>content:{{ messageDetail.content }}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      messageDetail: {},
    };
  },
  mounted() {
    //模拟ajax请求从后台获取数据
    setTimeout(() => {
      const allMessagesDetail = [
        {
          id: 1,
          title: "message01",
          content: "message01---content......",
        },
        {
          id: 2,
          title: "message02",
          content: "message02---content......",
        },
        {
          id: 3,
          title: "message03",
          content: "message03---content......",
        },
        {
          id: 4,
          title: "message04",
          content: "message04---content......",
        },
      ];
      this.allMessagesDetail = allMessagesDetail;
      this.id = this.$route.params.id - 0;
      this.messageDetail = allMessagesDetail.find(
        (detail) => detail.id === this.id
      );
    }, 1000);
  },
  watch: {
    $route: function (value) {
      this.id = value.params.id - 0;
      this.messageDetail = this.allMessagesDetail.find(
        (detail) => detail.id === this.id
      );
    },
  },
};
</script>
<style>
</style>