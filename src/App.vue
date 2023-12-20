
<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/resume">Resume</router-link>|
    <router-link to="/testimonials">Testimonials</router-link>|
    <router-link to="/projects">Projects</router-link>|
    <router-link to="/contacts">Contacts</router-link>
  </nav> -->
 
  <main class="container-fluid">
    <NavBar/>
    <router-view/>
    <Footer />
  </main>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';


export default{
components:{
    NavBar,
    Footer,
    
}}

</script>


<style src="@/assets/css/style.css">
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
