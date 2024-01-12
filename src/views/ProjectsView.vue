<template>
   <div class="projects mb-3">
    <div class="col">
     <div class="row w-75 mx-auto"  v-if="Projects" id="roow">
      <div class="card mt-3 pt-3 " style="width: 18rem;" v-for="projects in Projects" :key="projects"> 
        <img :src=" projects.image" class="card-img-top" loading="lazy" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{ projects.name }}</h5>
         <a :href= " projects.gitHub " class="btn btn-secondary mx-2">Github</a>
         <a :href= "projects.netlify "  class="btn btn-secondary">Netlify</a>
        </div>
       </div>
     </div>
     <div class="row" v-else>
      <Spinner />
     </div>
    </div>
  </div>
</template>

<script>
import Spinner from '../components/Spinner.vue'
    export default {
      components :{
        Spinner
      },
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
#roow{
  justify-content: space-between;
}
</style>