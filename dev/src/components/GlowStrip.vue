<template>
  <div class="works-glow-strip"></div>

</template>

<script setup>
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

</style>