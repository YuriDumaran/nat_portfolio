<template>
  <div class="works-section" id="works">
    <h2 class="works-title">Featured Works</h2>
    <div class="masonry-grid">
      <div
        v-for="(work, index) in works"
        :key="index"
        class="masonry-item"
        :class="work.className"
        @click="openWork(work)"
      >
        <div class="work-image-wrapper">
          <img :src="work.image" :alt="work.title" class="work-image" />
          <div class="work-overlay">
            <h3 class="work-title">{{ work.title }}</h3>
            <p class="work-category">{{ work.category }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  works: Array
});
const emit = defineEmits(['open-work']);

const openWork = (work) => emit('open-work', work);
</script>
