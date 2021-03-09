<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
      <Add :addComment="addComment" />
      <List :comments="comments" :deleteComment="deleteComment" />
    </div>
  </div>
</template>

<script>
import Add from "./components/Add";
import List from "./components/List";

export default {
  data() {
    return {
      comments: [
        {
          name: "Chris",
          content: "Vue is Good",
        },
        {
          name: "Steve",
          content: "Vue so Easy",
        },
        {
          name: "Fitz",
          content: "Vue is difficult",
        },
      ],
    };
  },
  components: {
    Add,
    List,
  },
  methods: {
    addComment(comment) {
      this.comments.unshift(comment);
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
};
</script>

<style>
.logo {
  width: 100px;
  height: 100px;
}
</style>
