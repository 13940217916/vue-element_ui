<template>
  <v-nav></v-nav>
</template>

<script>
  import Nav from './views/nav'
   export default{
    components:{
      'v-nav':Nav
    },
	 data() {
			return {
               sysUserName:'',
               sysUserAvatar:''
			}
		},
		methods:{
      handleSelect(key, keyPath) {

      }
		}
   }
</script>
<style scoped>

</style>
