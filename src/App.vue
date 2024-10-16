<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="text-gray-900 text-sm container mx-auto">
    <nav
      class="bg-white-900 text-brand-light px-12 py-8 flex items-center justify-between"
    >
      <div>
        <img src="@/assets/images/logo.svg" />
      </div>
      <div class="flex items-center space-x-4">
        <RouterLink
          class="px-4 py-2 rounded-full bg-linear-right text-white"
          to="/"
          >Anasayfa</RouterLink
        >
        <RouterLink class="px-4 py-2 hover:text-brand-primary" to="/kategoriler"
          >Kategoriler</RouterLink
        >
        <RouterLink class="px-4 py-2 hover:text-brand-primary" to="/hakkimizda"
          >Hakkımızda</RouterLink
        >
      </div>
      <div class="flex items-center justify-center space-x-4">
        <ul class="flex space-x-3 text-brand-dark">
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
        <div class="flex space-x-2">
          <a class="btn" href="#"><i class="fas fa-search"></i></a>
          <a class="btn" href="#"><i class="fas fa-bars"></i></a>
        </div>
      </div>
    </nav>
  </header>
  <RouterView />
</template>
