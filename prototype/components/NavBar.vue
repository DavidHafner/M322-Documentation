<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex">
      <NuxtLink to="/" class="btn btn-ghost text-xl">Logo</NuxtLink>
    </div>

    <div class="flex gap-2 grow w-0">
      <div class="breadcrumbs text-sm" aria-label="Breadcrumb">
        <ul>
          <li v-for="pathPart in pageStore.path" :key="pathPart.path">
            <NuxtLink v-if="!pathPart.current" :to="pathPart.path">
              {{ pathPart.name }}
            </NuxtLink>
            <span v-else>{{ pathPart.name }}</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- Language Dropdown -->
    <div class="relative inline-block text-left">
      <button
        @click="dropdownOpen = !dropdownOpen"
        class="btn btn-outline"
      >
        {{ selectedOption }}
        <svg
          class="w-4 h-4 ml-2 inline"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      <div
        v-if="dropdownOpen"
        class="absolute right-0 mt-2 w-28 bg-white border rounded shadow-lg z-50"
      >
        <ul>
          <li
            v-for="option in options"
            :key="option"
            @click="selectOption(option)"
            class="px-4 py-2 hover:bg-gray-100 cursor-pointer"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Menu Icon -->
    <MenuIcon class="z-50 ml-2" v-model:menu-open="menuOpen" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const pageStore = usePageStore();
const menuOpen = defineModel<boolean | undefined>("menu-open", {
  required: true,
});

// Dropdown state
const dropdownOpen = ref(false);
const options = ['EN', 'DE', 'IT', 'FR'];
const selectedOption = ref('DE');

function selectOption(option: string) {
  selectedOption.value = option;
  dropdownOpen.value = false;
}
</script>
