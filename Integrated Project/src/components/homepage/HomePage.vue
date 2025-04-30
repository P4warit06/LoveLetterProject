<script setup>
import Navbar from './Navbar.vue';
import MockUpPage from '@/assets/image/MockUpPage.png'
import ProductDetail from '../ProductView/ReadProductDetail.vue';
import ProductList from '../ProductView/ProductList.vue';
import BrandList from '../ProductView/BrandList.vue';
import MockUpSecond from '@/assets/image/MockUpSecond.png'
import ChooseUspage from './ChooseUspage.vue';

</script>
<template>
    <!-- คุมด้วย Background ก่อนจากนั้นค่อยตามด้วย Component แล้วข้อความ -->
    <div class="relative min-h-screen overflow-hidden">
        <img :src="MockUpPage" alt="Background" class="absolute inset-0 w-full h-full object-cover -z-10" />

        <Navbar />
        <div class="p-8">
            <h1 class="text-4xl font-bold text-black">Elegance in every touch...</h1>
        </div>
    </div>
    <ProductDetail/>    
    <ProductList/> 
    <BrandList/>
    <ChooseUspage/>
            



</template>

 
<style scoped>

</style>