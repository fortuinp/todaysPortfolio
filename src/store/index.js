import { createStore } from 'vuex'
const dataUrl= 'https://fortuinp.github.io/todayPortfolioData/data/'

export default createStore({
  state: {
    
    about:null,
    education:null,
    experience:null,
    skills:null,
    testimonials:null,
    projects:null,
  },
  getters: {
  },
  mutations: {

   
    setAbout(state,value){
      console.log(value);
      state.about=value
    },
    setEducation(state,value){
      state.education=value
    },
    setSkills(state,value){
      state.skills=value
    },
    setExperience(state,value){
      state.experience=value
    },
    setProjects(state,value){
      state.projects=value
    },
    setTestimonials(state,value){
      state.testimonials=value
    },
  },


  actions: {

    async getAbout(context){
      try{
      let aboutData= await fetch(dataUrl);
      let response= await aboutData.json();
      console.log(response.about);
      context.commit("setAbout", response.about);
    }
      catch(error){
        console.log(error);
      }
    },
    async getTestimonials(context){
      try{
      let testimonialsData= await fetch(dataUrl);
      let testresponse= await testimonialsData.json();
      console.log(testresponse.testimonials);
      context.commit("setTestimonials", testresponse.testimonials);
    }
    catch(error){
      console.log(error);
    }
    },
    async getProjects(context){
      try{
      let projectsData= await fetch(dataUrl);
      let proresponse= await projectsData.json();
      console.log(proresponse.testimonials);
      context.commit("setProjects", proresponse.projects);
    }
    catch(error){
      console.log(error);
    }
    },
    async getEducation(context){
      try{
      let educationData= await fetch(dataUrl);
      let proresponse= await educationData.json();
      console.log(proresponse.testimonials);
      context.commit("setEducation", proresponse.education);
    }
    catch(error){
      console.log(error);
    }
    },
    async getExperience(context){
      try{
      let experienceData= await fetch(dataUrl);
      let proresponse= await experienceData.json();
      console.log(proresponse.testimonials);
      context.commit("setExperience", proresponse.experience);
    }
    catch(error){
      console.log(error);
    }
    },
    

async getSkills(context){
  try{
      let skillsData= await fetch(dataUrl);
      let proresponse= await skillsData.json();
      console.log(proresponse.testimonials);
      context.commit("setSkills", proresponse.skills);
    }
    catch(error){
      console.log(error);
    }

  },
},
  modules: {},
});
