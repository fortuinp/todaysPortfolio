<template>
  <div class="home vh-100">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>


// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  computed: {
    jobTitle(){
      return this.$store.state.jobTitle
    }
},
mounted(){
  this.$store.dispatch
}
}
</script>
