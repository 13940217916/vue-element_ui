<template>
        <el-row>
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">home</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">form</a></el-breadcrumb-item>
            <el-breadcrumb-item>{{ head_tle }}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-row>
</template>
<script>
    export default {
      name: "",
      props: ["head_tle"]
    }
</script>

<style scoped>

</style>
