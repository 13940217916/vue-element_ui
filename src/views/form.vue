<template>
  <div id="form_main">
    <v-header :head_nav="head_nav"></v-header>
    <v-body></v-body>
  </div>
</template>

<script>
  import Header from '../components/form/form_header'
  import Body from '../components/form/form_body'
    export default {
      name: "form_main",
      data(){
        return{
          head_nav:'Form数据'
        }
      },
      components:{
        'v-header':Header,
        'v-body': Body
      }
    }
</script>

<style scoped>

</style>
