<template>
  <div>

    <h1>
      About
    </h1>


   <p v-for="ab in getAboutData()" :key="ab"> 
   {{  ab }}
      

   </p>
  </div>
</template>

<script>
  export default {
    methods:{
      getAboutData(){
        return this.$store.state.about
      }
      // Plugs it inside my view or whatever
    },
    // returns or gets the action function froom the store
    computed : {
      getABout(){
        return this.$store.dispatch('getAbout')
      }
    },

// returns the value from state the is being changed or updated in the mutation and actions
    mounted(){
      this.getAboutData
    }
  }
</script>

<style scoped>

</style>