<template>
  <div>
    <mt-button type='primary' @click.native="handleClick" style="width:100%">Test</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
  methods: {
    handleClick(){
      Toast('提示消息')
    }
  },
}
</script>
<style>
  
</style>