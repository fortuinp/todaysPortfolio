<template>
    <div class="testmonials mb-3 ">
      
      <div class="col">
     <div class="row w-75 mx-auto">
      <div class="card mt-3 pt-3 mx-auto" style="width: 18rem;" v-for="testimonials in Testimonials" :key="testimonials"> 
        <img :src=" testimonials.profile" loading="lazy" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{ testimonials.fullname }}</h5>
         <p class="card-text">{{ testimonials.quotes }}</p>
   
        </div>
       </div>
     </div>
    </div>
    </div>
</template>

<script>
    export default {
      computed:{
        Testimonials(){
          return this.$store.state.testimonials
        }
      },
      mounted(){
        this.$store.dispatch("getTestimonials")
      }

    }
</script>

<style scoped>
.card-title{
  font-weight: bolder;
}
.card-img-top{
  height: 12rem;
  width:12rem;
  aspect-ratio: 1/1;
}
.card{
  background-color: darkgrey;
}
</style>