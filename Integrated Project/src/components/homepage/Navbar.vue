<script setup></script>

<template>
  <header class="bg-gray-100 p-4">
    <div class="flex items-center justify-between w-full px-8">
      <!-- Left Section: Search Bar -->
      <div
        class="flex items-center border-1 border-black rounded-full px-4 py-2 w-[500px] h-10 ml-[20px] bg-white"
      >
        <!-- Menu Icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <input
          type="text"
          placeholder="Search"
          class="outline-none flex-1 text-gray-600 bg-transparent"
        />

        <!-- Search Icon -->
        <svg
          class="h-[18px] opacity-100"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2.5"
            fill="none"
            stroke="#000000"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </div>

      <!-- Center Section: Menu Links -->
      <nav class="flex space-x-10 ml-[220px] flex-1">
        <a href="#" class="text-black font-[SF Pro Display] hover:text-gray-500"
          >Home</a
        >
        <a
          href="#"
          class="text-gray-800 font-[SF Pro Display] hover:text-gray-500"
          >Product</a
        >
        <a
          href="#"
          class="text-gray-800 font-[SF Pro Display] hover:text-gray-500"
          >About</a
        >
        <a
          href="#"
          class="text-gray-800 font-[SF Pro Display] hover:text-gray-500"
          >Services</a
        >
        <a
          href="#"
          class="text-gray-800 font-[SF Pro Display] hover:text-gray-500"
          >Blog</a
        >
      </nav>

      <!-- Right Section: Buttons -->
      <div class="flex items-center space-x-2 flex-shrink-0">
        <button
          class="bg-gray-200 px-3 py-2 rounded-md text-black font-medium hover:bg-gray-300"
        >
          FAQ
        </button>
        <button class="bg-gray-200 p-2 rounded-md hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-2 14H6c-.55 0-1-.45-1-1V7h14v10c0 .55-.45 1-1 1z"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
