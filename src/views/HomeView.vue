<template>
  <div class="home vh-100 mt-5">
    <div class="row">
        <img src="https://i.ibb.co/qFbQyGT/res.jpg" loading="lazy" alt="picture" class="mx-auto mb-5 rounded-circle" >
    </div>
    <div class="row">
        <h1 class="animate__animated animate__slideInLeft">Pinda Fortuin</h1>
        <h2 class="animate__animated animate__slideInRight ">aspiring web developer</h2>
    </div>
    <div class="row mt-2 mb-2 mx-auto">
      <li>
              <a target="_blank" href="https://www.linkedin.com/in/pinda-fortuin-0a4043180/" ><i id="icon"
                  class="bi bi-linkedin mx-2"></i></a>
              <a target="_blank" href="https://github.com/fortuinp"><i id="icon" class="bi bi-github"></i></a>


            </li>
    </div>

<Spinner/>

  </div>
</template>
<script>


// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Spinner  from '@/components/Spinner.vue';

export default {

  components:{
    Spinner
  },
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

<style scoped>
img[alt='picture']{
    width: 15rem;
    aspect-ratio: 1/1;
    justify-content: center;
   
  }
  h1{
    color: #B6B6B6;
    font-size: 3rem;
  }
  h2{
    /* color: #A5856C; */
    color: black;
    font-size: 1.5rem;
    font-weight: bolder;
   
  }

  #icon{
    font-size: 1.5rem;
     color: #A5856C;
    /* color: #692525; */
  }
</style>
