<script setup>
import CardInfos from "../../../data/CardInfos.json";
</script>

<template>
  <div class="p-10 bg-gray-100">
    <h1 class="text-3xl font-bold text-gray-800 mb-8">Brand</h1>

    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
      <div
        v-for="CardInfo in CardInfos"
        :key="CardInfo.id"
        class="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4 flex flex-col items-center"
      >

        <div class="w-full text-left">
              <p class="text-4xl text-gray-500 mb-1 ">{{ CardInfo.icon}}</p>
          <p class="text-1xl text-black mb-1 font-semibold">{{ CardInfo.title }}</p>
          <p class="text-lm text-slate-600 mb-1 font-serif font-extrabold">{{ CardInfo.link }}</p>
          <p class="text-lm text-gray-400 mb-1 font-semibold">{{ CardInfo.linkText }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
