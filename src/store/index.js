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

    async fetchJobtitle(context){
      let res=await fetch (dataUrl)
      let {jobTitle}= await res.json()
      context.commit('setJobtitle',jobTitle)
    }
  },
  modules: {
  }
})
