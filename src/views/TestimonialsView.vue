<template>
    <div class="container vh-100">
     <div class="row">
      <div class="card" style="width: 18rem;" v-for="testimonials in Testimonials" :key="testimonials"> 
        <img :src=" testimonials.profile" class="card-img-top" alt="...">
       <div class="card-body">
        <h5 class="card-title">{{ testimonials.fullname }}</h5>
         <p class="card-text">{{ testimonials.quotes }}</p>
   
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

</style>