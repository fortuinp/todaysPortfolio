<template>
   <div class="projects vh-100">
     <div class="row">
      <div class="card" style="width: 18rem;" v-for="projects in Projects" :key="projects"> 
        <img :src=" projects.image" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{ projects.name }}</h5>
         <p class="card-text">{{ projects.description}}</p>
         <a :href= " projects.gitHub " class="btn btn-primary">Github</a>
         <a :href= "projects.netlify "  class="btn btn-primary">Netlify</a>
        </div>
       </div>
     </div>
    </div>
</template>

<script>
    export default {
      computed:{
        Projects(){
          return this.$store.state.projects
        }
      },
      mounted(){
        this.$store.dispatch("getProjects")
      }

    }
</script>

<style scoped>

</style>