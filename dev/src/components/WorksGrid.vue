<template>
  <div class="works-glow-strip"></div>

  <div class="works-section" id="works">
    <div class="grid-background">
      <div class="works-heading">
        <p class="works-heading-thin">Portfolio</p>
        <h2 class="works-heading-bold">Featured Works</h2>
        <div class="works-heading-rule">
          <span class="works-rule-line"></span>
          <span class="works-rule-dot"></span>
          <span class="works-rule-line"></span>
        </div>
      </div>

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

<div class="works-glow-strip"></div>
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
/* ── Glow strip transition ── */
.works-glow-strip {
  height: 3px;
  background: linear-gradient(90deg, transparent 0%, #56B6C6 20%, #8ACBD0 50%, #56B6C6 80%, transparent 100%);
  position: relative;
}
.works-glow-strip::after {
  content: '';
  position: absolute;
  inset: 0;
  background: inherit;
  filter: blur(6px);
  opacity: 0.55;
}

/* ── Section ── */
.works-section {
  margin: 0;
  background: linear-gradient(160deg, #0d0952 0%, #170C79 100%);
  scroll-margin-top: 10px;
}

.grid-background {
  position: relative;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background: transparent;
}

/* ── Heading ── */
.works-heading {
  text-align: center;
  margin-bottom: 2rem;
}

.works-heading-thin {
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(138, 203, 208, 0.6);
  margin: 0 0 2px 0;
}

.works-heading-bold {
  font-size: 1.9rem;
  font-weight: 700;
  color: #EFE3CA;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
}

.works-heading-rule {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
}

.works-rule-line {
  flex: 1;
  max-width: 60px;
  height: 1px;
  background: rgba(239, 227, 202, 0.2);
}

.works-rule-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #56B6C6;
}

/* ── Grid ── */
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

/* ── Cards ── */
.masonry-item {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
  cursor: pointer;
  height: 480px;
  background: rgba(239, 227, 202, 0.06);
  border: 1px solid rgba(239, 227, 202, 0.15);
  transition: transform 0.35s ease, border-color 0.3s ease, background 0.3s ease;
}

/* parchment frosted sheen */
.masonry-item::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(239, 227, 202, 0.07) 0%, transparent 55%);
  pointer-events: none;
  z-index: 1;
}

/* teal bottom accent on hover */
.masonry-item::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, #56B6C6, #8ACBD0);
  z-index: 3;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s ease;
}

.masonry-item.wide {
  grid-column: span 2;
  height: 480px;
}

.masonry-item:hover {
  transform: translateY(-5px);
  border-color: rgba(239, 227, 202, 0.32);
  background: rgba(239, 227, 202, 0.1);
}

.masonry-item:hover::after {
  transform: scaleX(1);
}

/* ── Image ── */
.work-image-wrapper {
  width: 100%;
  height: 100%;
}

.work-image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  filter: brightness(0.8) saturate(0.85);
  transition: transform 0.5s ease, filter 0.4s ease;
}

.masonry-item:hover .work-image {
  transform: scale(1.03);
  filter: brightness(1) saturate(1.05);
}

/* ── Overlay ── */
.work-overlay {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(13, 9, 82, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.35s ease;
  padding: 1rem;
  text-align: center;
  pointer-events: none;
  z-index: 2;
}

.masonry-item:hover .work-overlay {
  opacity: 1;
}

.work-title {
  color: #EFE3CA;
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  letter-spacing: 0.02em;
}

.work-category {
  color: #56B6C6;
  font-size: 0.8rem;
  margin: 0;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  opacity: 0.85;
}

/* ── Load more ── */
.load-more-wrapper {
  display: flex;
  justify-content: center;
  padding: 2rem 0;
}

.load-more-gradient-wrap {
  padding: 1.5px;
  border-radius: 999px;
  background: linear-gradient(90deg, rgba(239,227,202,0.6), rgba(239,227,202,0.2));
  display: inline-block;
}

.load-more-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  letter-spacing: 0.08em;
  padding: 9px 28px;
  border-radius: 999px;
  border: none;
  background: #170C79;
  color: #EFE3CA;
  cursor: pointer;
  display: block;
  transition: background 0.2s ease, color 0.2s ease;
}

.load-more-btn:hover {
  background: transparent;
  color: #EFE3CA;
}

/* ── Responsive ── */
@media (max-width: 900px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
  .masonry-item        { height: 360px; }
  .masonry-item.wide   { grid-column: span 2; height: 360px; }
}

@media (max-width: 480px) {
  .masonry-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
  .masonry-item,
  .masonry-item.wide { grid-column: span 2; height: 280px; }
}
</style>