import { createStore } from 'vuex'
const dataUrl= 'https://fortuinp.github.io/todayPortfolioData/data/'
export default createStore({
  state: {
    jobTitle:null,
    about:null,
    education:null,
    skills:null,
    testimonials:null,
    projects:null,
  },
  getters: {
  },
  mutations: {

    setJobTitle(state,value){
      state.jobTitle=value
    },
    setAbout(state,value){
      state.about=value
    },
    setEducation(state,value){
      state.education=value
    },
    setSkills(state,value){
      state.skills=value
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
      let aboutData= await fetch(dataUrl);
      let response= await aboutData.json();
      console.log('Func');
      console.log(response.about);
      context.commit("setAbout",response.about);
    }
  },
  modules: {
  }
})
