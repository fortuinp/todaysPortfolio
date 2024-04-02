<template>
  <div class="about vh-100">
    <!-- <div class="row mb-4">
      <h2 class="mb-4" id="abttitle">About me</h2>
    </div>  -->
   

   <!-- <p v-for="ab in getAbout" :key="ab"> 
   {{  ab  }}
   </p> -->
   <div class="row mt-4">
      <div class="col-6 overlappa text-end mt-4" id="overlappa">
         <img src="https://i.ibb.co/qFbQyGT/res.jpg" id="aboutpic" loading="lazy" alt="about" >
         
      </div>
      <div class="col-6 para my-auto" id="para">
        <div class="row px-4 mt-4">
          <h2 class="mb-4" id="abttitle">About me</h2>
        <p class="">
          Hi, I am Pinda Fortuin an apiring full-stack developer web developer.
          I enjoy problem solving and i am passionate about creating captivate websites.</p>
        <p>My interest for web development came from my love of turning ideas into functional websites.
           I am enjoying every minute of what I am doing and can not wait to reach greater heights of this journey.</p>

      </div>
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
    width: 20rem;
    height:24rem;
 
    
   
  }
  #para{
    background-color:#A5856C  ;
    height: 28rem;
    width:20rem;
    margin-left: 0;
  }
  p{
    font-weight: bold;
    font-size: 1rem;
  }
  h2{
    /* color: #c56b6b; */
    color:linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%); ;
    font-weight: bolder;
    /* font-size: 3rem; */
  }
  .overlappa{
    padding-left: 35%;
    z-index: 1;
  }
  
</style>