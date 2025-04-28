<script setup>
import products from "../../../data/products.json";

</script>
 
<template>
    <div class="p-10 bg-gray-100">
        <!-- Text -->
        <h1 class="text-3xl font-bold text-gray-800 mb-8">Mobile</h1>

        <div class="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-5 gap-6">
            <div v-for="product in products" :key="product.id"
                class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-17 flex flex-col items-center">
                <img :src="product.image" alt="Product" class="w-32 h-32 object-contain mb-9" />

                <div class="w-full text-left">
                    <p class="text-xs text-gray-500 mb-2">{{ product.brand }}</p>
                    <h2 class="text-sm font-semibold text-gray-800 leading-tight">{{ product.name }}</h2>
                    <p class="text-sm text-gray-900 font-bold mt-2">฿{{ product.price.toLocaleString() }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
 
<style scoped>

</style>