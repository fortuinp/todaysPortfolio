<template>
  
     <div class="resume ">
      <div class="row mb-4 pb-4 " id="resume">
     <div class="col ">
        <div class="row">
          <h2 id="title">Education</h2>
        </div>

        <div class="row my-auto">
        <div class="card mb-2 mx-auto" id="educard" style="width: 18rem;" v-for="education in Education" :key="education"> 
        <img :src=" education.image" class="card-img-top mx-auto" loading="lazy" alt="photo">
        <div class="card-body">
        <h5 class="card-title">{{ education.place }}</h5>
        <h5 class="card-title">{{ education.year }}</h5>
         <p class="card-text">{{ education.description}}</p>
    
        </div>
       </div>
       </div>

    </div>

      <div class="col">
         <div class="row">
            <h2 id="title">Experience</h2>
         </div>

        <div class="row ">
         <div class="card mb-2 mx-auto" id="expcard" style="width: 18rem;" v-for="experience in Experience" :key="experience"> 
          <div class="card-body">
            <h5 class="card-title">{{ experience.title}}</h5>
            <h5 id="year" class="card-title">{{ experience.year}}</h5>
            <p id="exp" class="card-text">{{ experience.description}}</p>
           </div>
         </div>
      </div>
      </div>



      <div class="col">
        <div class="row mb-2">
          <h2 id="title"  class="text-center">Skills</h2>
        </div>
        <div class="row">
          <div class="card mx-auto mb-1 " id="skillscard" style="width: 18rem;" v-for="skills in Skills" :key="skills" > 
            <img :src=" skills.html" class="card-img-top mx-auto  mb-1 mt-2" loading="lazy" alt="photo">
            <img :src=" skills.css" class="card-img-top mx-auto  mb-1 mt-2" loading="lazy" alt="photo">
            <img :src=" skills.js" class="card-img-top mx-auto mb-1 mt-2" loading="lazy" alt="photo">
            <img :src=" skills.boot" class="card-img-top mx-auto  mb-1 mt-2" loading="lazy" alt="photo">
            <img :src=" skills.vue" class="card-img-top mx-auto  mb-1 mt-2" loading="lazy" alt="photo">
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
#title{
  color:#A5856C ;
  font-weight: bolder;
}
.card-title{
  font-weight: bolder;
}
img[alt='photo']{
    width: 5rem;
    aspect-ratio: 1/1;
  }
  .card-text{
    font-weight:500;
  }
  #exp{
    font-size: smaller;
    font-weight: 450;
  }
  #expcard{
    background-color: transparent;
    color: #b6b6b6;
  }
#skillscard{
  background-color: #b6b6b6;
}
#educard{
  background-color: #b6b6b6;
}


  #year{
    font-size: medium;
  }
</style>