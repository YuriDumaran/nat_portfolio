<template>
  <section class="hero">

    <svg class="hero-bg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#170C79"></circle>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)"></rect>
    </svg>

    <div class="hero-left">
      <p class="hero-eyebrow">Independent Artist · Est. 2020</p>
      <h1 class="hero-title">NK Studio</h1>
      <p class="hero-subtitle">Nathan K.</p>

      <!-- Availability Indicator -->
      <div class="availability-badge">
        <span class="availability-dot"></span> <span>Open for Work</span>
      </div>

      <!-- add open for commissions -->
      <div class="availability-badge">
        <span class="availability-dot"></span> <span>Open for Commissions</span>
      </div>

      <div class="hero-divider">
        <span class="hero-divider-line"></span>
        <span class="hero-divider-dot dot-teal"></span>
        <span class="hero-divider-dot dot-indigo"></span>
        <span class="hero-divider-line"></span>
      </div>
      <p class="hero-bio">
        Anime and cartoon-inspired artwork with vibrant colors, expressive
        characters, and stylized visuals — tailored for personal and
        commercial projects.
      </p>
      <ul class="hero-tags">
        <li v-for="tag in tags" :key="tag" class="hero-tag">{{ tag }}</li>
      </ul>
    </div>

    <div class="hero-right">
      <div class="artwork-frame">
        <!-- Swap placeholder with your image:
             <img src="/your-image.png" alt="Featured artwork" class="artwork-img" />
        -->
        <div class="artwork-placeholder">
          <div class="artwork-placeholder-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="#56B6C6" stroke-width="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <path d="M21 15l-5-5L5 21"></path>
            </svg>
          </div>
          <p>Your artwork here</p>
        </div>
        <div class="artwork-badge">
          <p class="artwork-badge-label">Featured</p>
          <p class="artwork-badge-title">{{ featuredTitle }}</p>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup>
const tags = ["Character Design", "Anime Art", "Commissions", "Commercial"];
const featuredTitle = "Original Character · 2024";

</script>



<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=DM+Sans:wght@300;400&display=swap");

/* ── Availability Badge ── */
.availability-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1.5rem;
  padding: 6px 14px;
  border-radius: 999px;
  margin-right: 10px;

  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  letter-spacing: 0.05em;

  background: rgba(86, 182, 198, 0.12);
  border: 1px solid #56B6C6;
  color: #56B6C6;

  opacity: 0;
  animation: fadeUp 0.6s ease forwards 0.4s;
}

/* animated status dot */
.availability-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #56B6C6;
  position: relative;
}

.availability-dot::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: #56B6C6;
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0%   { transform: scale(1); opacity: 0.8; }
  70%  { transform: scale(2.2); opacity: 0; }
  100% { opacity: 0; }
}

/* ── Layout ── */
.hero {
  background: #0A0840;
  border-radius: 0;
  padding: 5rem 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  min-height: 560px;
  position: relative;
  overflow: hidden;
}

/* ── Dot background ── */
.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  pointer-events: none;
}

/* ── Background glows ── */
.hero::before {
  content: '';
  position: absolute;
  top: -60px;
  right: 180px;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(86, 182, 198, 0.12) 0%, transparent 70%);
  pointer-events: none;
}

.hero::after {
  content: '';
  position: absolute;
  bottom: -60px;
  left: 80px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(23, 12, 121, 0.5) 0%, transparent 70%);
  pointer-events: none;
}

/* ── Left column ── */
.hero-left {
  position: relative;
  z-index: 1;
  max-width: 460px;
  margin: 0 auto;
}

.hero-eyebrow {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: #56B6C6;
  margin: 0 0 1.25rem;
  opacity: 0;
  animation: fadeUp 0.6s ease forwards 0.1s;
}

.hero-title {
  font-family: "Playfair Display", serif;
  font-size: clamp(3.5rem, 5vw, 5rem);
  font-weight: 900;
  line-height: 1.05;
  margin: 0 0 0.25rem;
  background: linear-gradient(135deg,
      #e85d8a 0%,
      #f4a261 40%,
      #a855f7 80%,
      #e85d8a 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  opacity: 0;
  animation:
    shimmer 5s ease infinite,
    fadeUp 0.7s ease forwards 0.25s;
}

.hero-subtitle {
  font-family: "Playfair Display", serif;
  font-size: clamp(1.3rem, 2.5vw, 1.7rem);
  font-weight: 700;
  font-style: italic;
  color: #1E10A0;
  margin: 0 0 1.5rem;
  opacity: 0;
  animation: fadeUp 0.6s ease forwards 0.35s;
}

/* ── Divider ── */
.hero-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 0 0 1.5rem;
  opacity: 0;
  animation: fadeUp 0.6s ease forwards 0.45s;
}

.hero-divider-line {
  display: block;
  width: 36px;
  height: 1px;
  background: #170C79;
}

.hero-divider-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
}

.dot-teal {
  background: #56B6C6;
}

.dot-indigo {
  background: #170C79;
}

/* ── Bio ── */
.hero-bio {
  font-family: "DM Sans", sans-serif;
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.75;
  color: #A8D4DA;
  max-width: 400px;
  margin: 0 0 2rem;
  opacity: 0;
  animation: fadeUp 0.7s ease forwards 0.55s;
}

/* ── Tags ── */
.hero-tags {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  opacity: 0;
  animation: fadeUp 0.7s ease forwards 0.65s;
}

.hero-tag {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  letter-spacing: 0.05em;
  padding: 6px 16px;
  border-radius: 999px;
  border: 1px solid #170C79;
  color: #6B9CA8;
  cursor: default;
  transition: border-color 0.2s ease, color 0.2s ease;
}

.hero-tag:hover {
  border-color: #56B6C6;
  color: #56B6C6;
}

/* ── Right column ── */
.hero-right {
  position: relative;
  z-index: 1;
  max-width: 360px;
  margin: 0 auto;
  width: 100%;
  opacity: 0;
  animation: fadeUp 0.8s ease forwards 0.3s;
}

.artwork-frame {
  border-radius: 16px;
  overflow: hidden;
  aspect-ratio: 3 / 4;
  background: #0d0b35;
  border: 1px solid #1E10A0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.artwork-frame::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
      rgba(86, 182, 198, 0.06) 0%,
      rgba(30, 16, 160, 0.12) 100%);
  pointer-events: none;
}

/* When using a real image */
.artwork-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* Placeholder */
.artwork-placeholder {
  text-align: center;
  position: relative;
  z-index: 1;
}

.artwork-placeholder-icon {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #1E10A0;
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.artwork-placeholder-icon svg {
  width: 24px;
  height: 24px;
  opacity: 0.7;
}

.artwork-placeholder p {
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  color: #6B9CA8;
  margin: 0;
}

/* ── Badge ── */
.artwork-badge {
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background: rgba(10, 8, 64, 0.88);
  border: 1px solid #1E10A0;
  border-radius: 10px;
  padding: 10px 14px;
  backdrop-filter: blur(8px);
  z-index: 2;
}

.artwork-badge-label {
  font-family: "DM Sans", sans-serif;
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #6B9CA8;
  margin: 0 0 2px;
}

.artwork-badge-title {
  font-family: "DM Sans", sans-serif;
  font-size: 13px;
  color: #F0F2FA;
  margin: 0;
}

/* ── Responsive ── */
@media (max-width: 768px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 3rem 2rem;
    text-align: center;
  }

  .hero-left {
    max-width: 100%;
  }

  .hero-divider,
  .hero-tags {
    justify-content: center;
  }

  .hero-right {
    max-width: 280px;
  }
}

/* ── Animations ── */
@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shimmer {

  0%,
  100% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }
}
</style>

