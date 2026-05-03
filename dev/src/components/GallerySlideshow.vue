<template>
  <div class="gallery-container">
    <button class="gallery-btn gallery-btn-left" @click="scrollGallery('left')">
      <i class="pi pi-chevron-left"></i>
    </button>
    <div class="gallery-scroll-track" ref="galleryTrack">
      <div
        v-for="(item, index) in galleryItems"
        :key="index"
        class="gallery-scroll-item"
        :class="{ active: activeIndex === index }"
        @click="selectItem(index)"
      >
        <img :src="item.src" :alt="item.alt" />
      </div>
    </div>
    <button class="gallery-btn gallery-btn-right" @click="scrollGallery('right')">
      <i class="pi pi-chevron-right"></i>
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  galleryItems: Array,
  activeIndex: Number
});

const emit = defineEmits(['select']);
const galleryTrack = ref(null);

const scrollGallery = (direction) => {
  const track = galleryTrack.value;
  if (!track) return;

  track.scrollBy({
    left: direction === 'left' ? -500 : 500,
    behavior: 'smooth'
  });
};

const selectItem = (index) => emit('select', index);
</script>
