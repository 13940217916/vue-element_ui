<template>
  <div dir="body">
    <v-nav></v-nav>
    <v-header :head_tle="header_nav"></v-header>
    <h2 class="tle_txt">以下是form部分</h2>
    <v-body></v-body>
    <el-form>
      <el-form-item label="用户名" prop="username">
        <el-input placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input placeholder="请输入密码"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import Head from './test_child'
  import Body from './test_body'
  import Nav from './nav'
  export default {
    data(){
      return{
        header_nav:'表单数据'
      }
    },
    components:{
      'v-header':Head,
      'v-body':Body,
      'v-nav':Nav
    }
  }

</script>

<style scoped>
  .tle_txt{
    margin:20px;
  }

</style>
