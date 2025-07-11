<template>
  <div class="grid grid-row-4 gap-4">
   <div class="mx-1 mt-1">
    <Header/>
   </div>
   <!-- <div class="px-2">
     <DashboardPage v-if="true"/>
     <ProductPage v-else/>
     <DashboardPage/>
   </div> -->
   <RouterView/>
  </div>
</template>

<script>

//OPTIONS API
import Header from './components/Header/Header.vue';
export default {
  components:{
    Header,
  }
}

</script>