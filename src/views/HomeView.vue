<script setup lang="ts">
import { ref } from 'vue'

const activePosts = ref('recent')
</script>

<template>
  <main class="text-gray-900 text-sm px-12 container mx-auto flex space-x-4">
    <div class="w-2/3 relative h-[500px]">
      <div
        class="absolute inset-0 rounded-xl bg-cover bg-center bg-no-repeat hero-image"
      ></div>
      <div
        class="relative z-10 pb-8 px-8 flex flex-col items-start justify-end h-full"
      >
        <span
          class="bg-linear-right text-xs mb-3 text-white px-4 py-2 rounded-full"
          >Inspiration</span
        >
        <h1 class="text-white text-4xl font-bold">
          Geleceğin Trendlerini Takip Et,<br />
          Innovasyonu Yakala
        </h1>
      </div>
      <div class="absolute rounded-xl inset-0 bg-blue-900 opacity-50"></div>
    </div>
    <div class="w-1/3 rounded-lg border border-gray-300 p-4">
      <ul class="flex space-x-4 border-b border-gray-300 pb-3" role="tablist">
        <li>
          <button
            @click="() => (activePosts = 'popular')"
            type="button"
            :class="{
              'bg-linear-right border-white text-white':
                activePosts == 'popular',
              'border border-solid text-gray-300 border-gray-300 focus:outline-none':
                activePosts == 'recent',
            }"
            class="px-5 py-2 rounded-full"
          >
            Popular
          </button>
        </li>
        <li>
          <button
            @click="() => (activePosts = 'recent')"
            type="button"
            :class="{
              'bg-linear-right border-white text-white':
                activePosts == 'recent',
              ' border border-solid text-gray-300 border-gray-300 focus:outline-none':
                activePosts == 'popular',
            }"
            class="px-5 py-2 rounded-full"
          >
            Recent
          </button>
        </li>
      </ul>
      <div class="mt-4">
        <!--Popular Posts-->
        <div v-show="activePosts == 'popular'">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                3 Easy Ways To Make Your iPhone Faster
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                An Incredibly Easy Method That Works For All
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                An Incredibly Easy Method That Works For All
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                An Incredibly Easy Method That Works For All
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
        </div>

        <!--Popular Posts-->
        <div v-show="activePosts == 'recent'">
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                3 Easy Ways To Make Your iPhone Faster
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                Recent Yazılım öğrenmeden projenin önemi
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                Recent Yazılım öğrenmeden projenin önemi
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
          <div class="flex items-center space-x-4 mb-6">
            <div class="w-16 h-16 rounded-full overflow-hidden">
              <img class="card-placeholder-image object-cover w-full h-full" />
            </div>
            <div>
              <h6 class="text-md text-brand-dark font-bold">
                Recent Yazılım öğrenmeden projenin önemi
              </h6>
              <span class="text-xs text-gray-500">29 March 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <div class="container mx-auto px-12 my-5 flex justify-between gap-5">
    <div class="w-2/3 h-auto border border-gray-300 p-5 rounded-lg flex">
      <!--Single Post Card-->
      <div class="sm:w-1/2 px-4 mb-6">
        <div class="post bg-white rounded-lg overflow-hidden">
          <div class="relative">
            <a
              class="absolute top-2 left-2 text-white bg-linear-right px-3 py-1 rounded-lg text-sm"
            >
              Lifestyle
            </a>
            <span
              class="absolute bottom-2 bg-linear-right rounded-full w-12 h-12 flex items-center -my-8 justify-center right-2 text-white text-lg"
            >
              <i class="fas fa-image"></i>
            </span>
            <a>
              <div class="inner">
                <img
                  alt="post-title"
                  class="w-full h-48 object-cover editor-image"
                />
              </div>
            </a>
          </div>

          <ul
            class="flex items-center space-x-3 mt-4 px-4 text-sm text-gray-600"
          >
            <li class="flex items-center space-x-2">
              <img class="w-8 h-8 rounded-full author-image" alt="author" />
              <a href="#" class="font-medium text-gray-800">Katen Doe</a>
            </li>
            <li>•</li>
            <li>29 March 2021</li>
          </ul>

          <h5 class="text-lg font-semibold px-4 mt-3 mb-2">
            <a href="#" class="text-brand-dark hover:text-brand-primary">
              15 Unheard Ways To Achieve Greater Walker
            </a>
          </h5>

          <p class="px-4 pb-4 text-gray-600">
            A wonderful serenity has taken possession of my entire soul, like
            these sweet mornings of spring which I enjoy
          </p>
        </div>
      </div>
      <!--Single Post Card END-->
      <!--Post Card List-->
      <div class="sm:w-1/2 px-4 mb-6">
        <div class="flex gap-5 flex items-center justify-center mb-5">
          <img
            class="editor-image w-32 h-24 bg-cover bg-no-repeat bg-center rounded-lg"
          />
          <div class="h-full">
            <h6 class="text-brand-dark font-bold">
              10 Ways To Immediately Start Selling Furniture
            </h6>
            <span class="text-gray-400 font-light">29 Mart 2024</span>
          </div>
        </div>
        <div class="flex gap-5 flex items-center justify-center mb-5">
          <img
            class="editor-image w-32 h-24 bg-cover bg-no-repeat bg-center rounded-lg"
          />
          <div class="h-full">
            <h6 class="text-brand-dark font-bold">
              10 Ways To Immediately Start Selling Furniture
            </h6>
            <span class="text-gray-400 font-light">29 Mart 2024</span>
          </div>
        </div>
        <div class="flex gap-5 flex items-center justify-center mb-5">
          <img
            class="editor-image w-32 h-24 bg-cover bg-no-repeat bg-center rounded-lg"
          />
          <div class="h-full">
            <h6 class="text-brand-dark font-bold">
              10 Ways To Immediately Start Selling Furniture
            </h6>
            <span class="text-gray-400 font-light">29 Mart 2024</span>
          </div>
        </div>
        <div class="flex gap-5 flex items-center justify-center mb-5">
          <img
            class="editor-image w-32 h-24 bg-cover bg-no-repeat bg-center rounded-lg"
          />
          <div class="h-full">
            <h6 class="text-brand-dark font-bold">
              10 Ways To Immediately Start Selling Furniture
            </h6>
            <span class="text-gray-400 font-light">29 Mart 2024</span>
          </div>
        </div>
      </div>
      <!--/ Post Card List -->
    </div>
    <div
      class="relative h-min space-x-4 gap-8 w-1/3 border border-gray-300 p-5 rounded-lg flex-col flex items-center justify-evenly"
    >
      <div
        class="absolute inset-0 bg-contain bg-center bg-no-repeat katen-map"
      ></div>
      <!--Katen Card-->
      <img class="mt-5" src="@/assets/images/logo.svg" />
      <span class="text-sm text-gray-400"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Est voluptates
        eius iste neque ea ipsum aliquid rem, debitis mollitia quas fugiat
        consectetur suscipit qui praesentium.</span
      >
      <ul class="flex space-x-3 text-brand-dark mb-5">
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-facebook-f"></i></a>
        </li>
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-twitter"></i></a>
        </li>
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-instagram"></i></a>
        </li>
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-pinterest"></i></a>
        </li>
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-medium"></i></a>
        </li>
        <li class="hover:text-brand-primary">
          <a href="#"><i class="fab fa-youtube"></i></a>
        </li>
      </ul>
      <!--/Katen Card-->
    </div>
  </div>
</template>
