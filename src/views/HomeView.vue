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
  
</template>
