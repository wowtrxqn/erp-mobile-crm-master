<template>
  <div>
    <text @click="logout">
      退出登陆
    </text>
  </div>
</template>

<script>
module.exports = {
    data: () =>({

    }),
    methods:{
    	logout(){
    		this.$router.setHomePage('/pages/App.js');
    	}
    }
}
</script>
<style>

</style>