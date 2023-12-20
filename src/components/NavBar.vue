<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
     <router-link to="/">
        <img  class="img-fluid"   src=" https://drive.google.com/uc?id=1dvu4nh3hUh_dFn3p8ncnWPQhxurvSzLT" alt="logo"> 
     </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <RouterLink class="nav-link active" to="/">
              Home
          </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/about">
              About
          </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/projects">
              Projects
          </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/resume">
              Resume
          </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/testimonials">
              Testimonials
          </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink class="nav-link active" to="/contacts">
              Contacts
          </RouterLink>
        </li>

      </ul>
  
    </div>
  </div>
</nav>
</template>

<script>
    export default {
        data(){
            return
        }
    }
</script>

<style scoped>

</style>