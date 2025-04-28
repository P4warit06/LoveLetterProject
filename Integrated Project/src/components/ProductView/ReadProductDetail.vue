<script setup>
import { ref } from 'vue';
import products from "../../../data/products.json";

// Read ProductDetail
const getProductDetail = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
}

const randomProduct = ref(getProductDetail());

const randomizeProduct = () => {
    randomProduct.value = getProductDetail();
}
</script>

<template>
    <div class="p-4">
        <h1 class="text-2xl font-bold mb-4">Random Product Detail 🎲</h1>

        <div class="border p-4 rounded shadow mb-4">
            <p><strong>ID:</strong> {{ randomProduct.id }}</p>
            <p><strong>Name:</strong> {{ randomProduct.name }}</p>
            <p><strong>Price:</strong> ฿{{ randomProduct.price }}</p>
            <p><strong>Stock:</strong> {{ randomProduct.stock }}</p>
            <p><strong>Brand:</strong> {{ randomProduct.brand }}</p>
        </div>

        <button @click="randomizeProduct" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            🔁 Random Again
        </button>
    </div>
</template>

<style scoped>
</style>
