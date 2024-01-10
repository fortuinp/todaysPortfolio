<template>
  <div class="about vh-100">

   

   <!-- <p v-for="ab in getAbout" :key="ab"> 
   {{  ab  }}
   </p> -->
   <div class="row mt-4 mx-0">
      <div class="col-6 text-end mt-4">
         <img src="https://drive.google.com/uc?id=1_ZQ3B_RSboy2RQZnBF0cIlyZDV-6x09A" alt="about" >
      </div>
      <div class="para" id="para">
        <p>
          Hi, I am Pinda Fortuin an apiring full-stack developer web developer.I enjoy problem solving and i am passionate about creating captivate websites.
       My interest for web development came from my love of turning ideas into functional websites.I am enjoying every minute of what I am doing and can not wait to reach greater heights of this journey.

        </p>
      </div>
   </div>


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
img[alt='about']{
    width: 18rem;
    height:24rem;
    aspect-ratio: 1/1;
    
   
  }
  #para{
    background-color: #A5856C;
    height: 28rem;
    width:20rem;
  }
</style>