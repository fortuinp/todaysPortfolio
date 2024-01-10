<template>
  
     <div class="resume ">
      <div class="row">
     <div class="col-4">
        <div class="row">
          <h2>Education</h2>
        </div>

        <div class="row">
        <div class="card" style="width: 18rem;" v-for="education in Education" :key="education"> 
        <img :src=" education.image" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">{{ education.name }}</h5>
        <h5 class="card-title">{{ education.year }}</h5>
         <p class="card-text">{{ education.description}}</p>
    
        </div>
       </div>
       </div>

    </div>

      <div class="col-4">
         <div class="row">
            <h2>Experience</h2>
         </div>

        <div class="row">
         <div class="card" style="width: 18rem;" v-for="experience in Experience" :key="experience"> 
          <div class="card-body">
            <h5 class="card-title">{{ experience.title}}</h5>
            <h5 class="card-title">{{ experience.year}}</h5>
            <p class="card-text">{{ experience.description}}</p>
           </div>
         </div>
      </div>
      </div>



      <div class="col-4">
        <div class="row">
          <h2>Skills</h2>
        </div>
        <div class="row">
          <div class="card" style="width: 18rem;" v-for="skills in Skills" :key="skills" > 
          <div class="card-body">
            <h5 class="card-title">{{skills.title}}</h5>
            <p class="card-text">{{ skills.experience}}</p>
        </div>
       </div>
      </div>
   </div>
  </div>
      </div>
    
     
   
</template>

<script>
    export default {
      computed:{
        Education(){
          return this.$store.state.education
        },
        Experience(){
          return this.$store.state.experience
        },
        Skills(){
          return this.$store.state.skills
        }, 

      },
      mounted(){
        this.$store.dispatch("getEducation")
        this.$store.dispatch("getExperience")
        this.$store.dispatch("getSkills")


      }
    }
</script>

<style scoped>

</style>