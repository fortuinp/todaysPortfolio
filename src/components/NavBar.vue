<template>
    <nav class="navbar navbar-expand-lg "  id="nav">
  <div class="container-fluid " >
     <!-- <router-link to="/">
        <img  class="img-fluid"   src=" https://lh3.googleusercontent.com/u/0/drive-viewer/AEYmBYQv8gA1xGQs62nS35gf1elnxl63o02EhX-JrJQ5Kv0rinO5kwSSgq5bB5lY5V9RLuqq9HObG1NMUPDAvy1hbqn40792=w1960-h4244" alt="logo"> 
     </router-link> -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-centre mb-2 mb-lg-0 mx-auto">
        <li class="nav-item ">
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
      name : 'NavBarComp'
    }
</script>

<style scoped>

</style>