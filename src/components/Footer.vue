<template>
    <div class="bg-dark pt-2">
      <div class="row" id="foot">
       <p class="lead "> Pinda Fortuin &copy;
       <span>{{ currYear }}</span></p>
      </div>
    </div>
</template>

<script>
    export default {
        name:"footerComp",
        data() {
            return {
                currYear:new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>
#foot{
    color:#b6b6b6 ;
}
</style>