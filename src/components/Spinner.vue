<template>
    <div>

        <div class="container">
        
            <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"SpinnerComp",

        data() {
            return {
               loading:true
            }
        }
    }
</script>

<style scoped>

</style>