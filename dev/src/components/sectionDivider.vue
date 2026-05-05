<template>
  <div class="section-divider" aria-hidden="true">
    <div class="line left" />
    <span class="ornament">✦</span>
    <div class="line right" />
  </div>
</template>

<style scoped>
.section-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 3rem 4rem;
  background: #e8eaf0; /* match your featured works bg exactly */
}

.line {
  flex: 1;
  height: 1px;
  max-width: 80px;
  background: linear-gradient(
    to var(--dir),
    transparent,
    rgba(80, 60, 140, 0.2)
  );
}

.line.left  { --dir: right; }
.line.right { --dir: left;  }

.ornament {
  font-size: 0.6rem;
  color: rgba(80, 60, 140, 0.3);
  letter-spacing: 0.6em;
  padding-left: 0.6em;
}
</style>