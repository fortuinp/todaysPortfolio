<template>
  <div class="about vh-100">

    <h1>
      About
    </h1>


   <p v-for="ab in getAbout" :key="ab"> 
   {{  ab  }}
      

   </p>
  </div>
</template>

<script>
  export default {
    // methods:{
    //   getAboutData(){
    //     return this.$store.state.about
    //   }
      // Plugs it inside my view or whatever
    // },
    // returns or gets the action function froom the store
    computed : {
      getAbout(){
        return this.$store.state.about
      }
    },

// returns the value from state the is being changed or updated in the mutation and actions
    mounted(){
      this.$store.dispatch('getAbout')
    }
  }
</script>

<style scoped>

</style>