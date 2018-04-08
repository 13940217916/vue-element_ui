<template>
  <div id="form_header">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">{{ head_nav }}</a></el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
    export default {
      name: "",
      props:['head_nav']
    }
</script>

<style scoped>

</style>
