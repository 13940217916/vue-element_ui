<template>
    <div id="form_body">
      <el-row>
        <el-col :span="12">
          <el-form ref="form"  label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="active.name"></el-input>
            </el-form-item>
            <el-form-item label="请选择活动场地">
              <el-select placeholder="请选择" v-model="active.region">
                <el-option label="上海" value="shanghai"></el-option>
              </el-select>
            </el-form-item>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
    export default {
      name: "",
      data(){
          return{
            active:{
              name:'',
              region:''
            }
          }
      }
    }
</script>

<style scoped>

</style>
