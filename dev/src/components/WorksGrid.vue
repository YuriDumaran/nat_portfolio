<template>
  <div class="works-glow-strip"></div>

  <div class="works-section" id="works">
    <div class="grid-background">
      <div class="works-heading">
        <span class="works-ghost">WORKS</span>
        <p class="works-eyebrow">Portfolio</p>
        <h2 class="works-title">Featured <em>Works</em></h2>
        <div class="works-dots">
          <span class="works-dot"></span>
          <span class="works-dot active"></span>
          <span class="works-dot"></span>
        </div>
      </div>

      <div class="masonry-grid">
        <div v-for="(work, index) in visibleWorks" :key="index" class="masonry-item" :class="work.className"
          @click="openWork(work)">
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
      <button v-if="hasMore" @click="loadMore" class="load-more-btn">
        <span class="load-more-dot"></span>
        Load More
        <span class="load-more-dot"></span>
      </button>
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
  scroll-margin-top: 100px;
}

.grid-background {
  position: relative;
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 1rem;
  background: transparent;
}

/* ── Heading ── */
.works-heading {
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  padding: 0.5rem 0;
}

.works-ghost {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4.5rem;
  font-weight: 900;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1px rgba(86, 182, 198, 0.15);
  white-space: nowrap;
  pointer-events: none;
  line-height: 1;
  margin-top: 8px;
  user-select: none;
}

.works-eyebrow {
  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: rgba(138, 203, 208, 0.7);
  margin: 0 0 4px 0;
  position: relative;
}

.works-title {
  font-size: 2.2rem;
  font-weight: 800;
  color: #EFE3CA;
  letter-spacing: -0.02em;
  line-height: 1;
  margin: 0;
  position: relative;
}

.works-title em {
  color: #56B6C6;
  font-style: normal;
}

.works-dots {
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-top: 10px;
  position: relative;
}

.works-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: rgba(86, 182, 198, 0.3);
}

.works-dot.active {
  background: #56B6C6;
  box-shadow: 0 0 6px rgba(86, 182, 198, 0.8);
  width: 20px;
  border-radius: 2px;
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
  bottom: 0;
  left: 0;
  right: 0;
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  background: linear-gradient(160deg, #0d0952 0%, #170C79 100%);
}

.load-more-btn {
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  padding: 10px 32px;
  border-radius: 999px;
  cursor: pointer;
  background: transparent;
  border: 1.5px solid rgba(239, 227, 202, 0.5);
  color: #EFE3CA;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: border-color 0.25s ease, box-shadow 0.25s ease, color 0.25s ease;
}

.load-more-btn:hover {
  border-color: rgba(239, 227, 202, 0.85);
  color: #ffffff;
  box-shadow: 0 0 14px rgba(239, 227, 202, 0.12);
}

.load-more-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #56B6C6;
  box-shadow: 0 0 6px rgba(86, 182, 198, 0.8);
  flex-shrink: 0;
}

/* ── Responsive ── */
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
