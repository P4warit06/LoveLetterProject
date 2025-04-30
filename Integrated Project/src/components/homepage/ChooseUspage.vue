<script setup>
import MockUpSecond from '@/assets/image/MockUpSecond.png'
import { getAllData } from '@/libs/apiData';
import { ref , onMounted } from "vue"; 
const VITE_APP_URL= import.meta.env.VITE_APP_URL ; 


let products = ref([]);
onMounted(async () => { 
  products.value = await getAllData(
   VITE_APP_URL + "/api/products"
  ); 
console.log(products.value);

})
</script>

<template>
  <div class="relative flex items-center justify-center">

    <<img :src="MockUpSecond" class="w-full h-auto" style="opacity: 0.5;"> 

    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div class="text-4xl font-bold text-black">
        Why Choose Us
      </div>
    </div>
  </div>


  <div v-for="product of products">
    <p>
      Id : {{ product.id }}
    </p>


  </div>




</template>

<style scoped>

</style>
