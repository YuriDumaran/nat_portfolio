<template>
  <div class="works-section" id="works">
    <div class="grid-background">
      <h2 class="works-title">Featured Works</h2>
      <div class="masonry-grid">
        <div
          v-for="(work, index) in visibleWorks"
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

    <div class="load-more-wrapper">
      <div v-if="hasMore" class="load-more-gradient-wrap">
        <button @click="loadMore" class="load-more-btn">Load More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
  works: Array
});
const emit = defineEmits(['open-work']);

const visibleCount = ref(6);
const visibleWorks = computed(() => (props.works || []).slice(0, visibleCount.value));
const hasMore = computed(() => (props.works || []).length > visibleCount.value);

const loadMore = () => {
  visibleCount.value += 3;
};

const openWork = (work) => emit('open-work', work);
</script>

<style scoped>
.works-section {
  margin: 0;
  /* FIX: same base color as hero so there's no gap between sections */
  background: linear-gradient(135deg, #0A0840 0%, #0f0860 100%);
}

.grid-background {
  position: relative;
  width: 100%;
  /* FIX: padding-top ensures dots show right from the top edge, no blank strip */
  padding-top: 3rem;
  padding-bottom: 1rem;
  /* FIX: match the hero gradient so the seam is invisible */
  background: linear-gradient(135deg, #0A0840 0%, #0f0860 100%);
}

.works-section-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  /* FIX: raised opacity to match hero dot visibility */
  opacity: 0.55;
  pointer-events: none;
  z-index: 0;
}

.works-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-bright);
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  /* Matching underline accent from App.vue works-title style */
  padding-bottom: 6px;
}

.works-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2.2em;
  height: 2px;
  background: linear-gradient(90deg, #e85d8a, #a855f7);
  border-radius: 2px;
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 1rem;
}

.masonry-item {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  cursor: pointer;
  border: 1px solid var(--30-border);
  height: 480px;
}

.masonry-item.wide {
  grid-column: span 2;
  height: 480px;
}

.masonry-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.12);
  border-color: var(--10-primary);
}

.work-image-wrapper {
  width: 100%;
  height: 100%;
}

.work-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.masonry-item:hover .work-image {
  transform: scale(1.03);
}

.work-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(28, 26, 23, 0.82);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  padding: 1rem;
  text-align: center;
  pointer-events: none;
}

.masonry-item:hover .work-overlay {
  opacity: 1;
}

.work-title {
  color: var(--text-bright);
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  letter-spacing: 0.02em;
}

.work-category {
  color: var(--10-primary);
  font-size: 0.8rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.load-more-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.load-more-gradient-wrap {
  padding: 2px;
  border-radius: 999px;
  background: linear-gradient(90deg, #e85d8a, #a855f7);
  display: inline-block;
}

.load-more-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  padding: 9px 28px;
  border-radius: 999px;
  border: none;
  background: #0A0840;
  color: #fff;
  cursor: pointer;
  display: block;
  transition: background 0.2s, color 0.2s;
}

.load-more-btn:hover {
  background: transparent;
  color: #fff;
}

@media (max-width: 900px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .masonry-item {
    height: 360px;
  }

  .masonry-item.wide {
    grid-column: span 2;
    height: 360px;
  }
}

@media (max-width: 480px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }

  .masonry-item,
  .masonry-item.wide {
    grid-column: span 2;
    height: 280px;
  }
}
</style>