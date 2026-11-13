<template>

    <!-- Loading Screen -->
    <div class="loader-overlay" :class="{ 'loader-hidden': !isLoading }">
        <div class="loader-content">
            <div class="loader-logo">
                <svg width="50" height="57" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                        fill="#c8a96e" />
                    <path
                        d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                        fill="#f5f0e8" />
                </svg>
            </div>
            <p class="loader-studio-name">NK Studio</p>
            <div class="loader-brush-track">
                <div class="loader-brush-fill"></div>
            </div>
            <p class="loader-tagline">Loading artwork...</p>
        </div>
    </div>

    <div class="navbar-container">
        <div class="card navbar-card">
            <Menubar :model="items">
                <template #start>
                    <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg"
                        class="h-2rem">
                        <path
                            d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
                            fill="var(--primary-color)" />
                        <path
                            d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
                            fill="var(--text-color)" />
                    </svg>
                </template>
                <template #item="{ item, props, hasSubmenu, root }">
                    <a v-ripple class="flex align-items-center" v-bind="props.action">
                        <span :class="item.icon" />
                        <span class="ml-2">{{ item.label }}</span>
                        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                        <span v-if="item.shortcut"
                            class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
                                item.shortcut }}</span>
                        <i v-if="hasSubmenu"
                            :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
                    </a>
                </template>
                <template #end>
                </template>
            </Menubar>
        </div>
    </div>

    <!-- Theme Editor Panel -->
    <div class="theme-editor-panel" :class="{ 'theme-panel-open': showThemePanel }">
        <button class="theme-toggle-btn" @click="showThemePanel = !showThemePanel">
            <i class="pi pi-palette"></i>
            <span>Theme</span>
        </button>

        <div v-if="showThemePanel" class="theme-content">
            <h3>Color Theme Editor (60-30-10)</h3>

            <div class="preset-buttons">
                <button v-for="preset in themePresets" :key="preset.name" @click="applyTheme(preset)"
                    class="preset-btn">
                    {{ preset.name }}
                </button>
            </div>

            <div class="color-inputs">
                <div class="color-input-group">
                    <label>Primary (60%)</label>
                    <div class="color-picker-group">
                        <input type="color" v-model="customTheme.primary" @input="updateTheme" class="color-input" />
                        <span class="color-value">{{ customTheme.primary }}</span>
                    </div>
                </div>
                <div class="color-input-group">
                    <label>Secondary (30%)</label>
                    <div class="color-picker-group">
                        <input type="color" v-model="customTheme.secondary" @input="updateTheme" class="color-input" />
                        <span class="color-value">{{ customTheme.secondary }}</span>
                    </div>
                </div>
                <div class="color-input-group">
                    <label>Accent (10%)</label>
                    <div class="color-picker-group">
                        <input type="color" v-model="customTheme.accent" @input="updateTheme" class="color-input" />
                        <span class="color-value">{{ customTheme.accent }}</span>
                    </div>
                </div>
            </div>

            <button @click="resetTheme" class="reset-btn">Reset to Default</button>
        </div>
    </div>

    <GlowStrip />

    <!-- Hero / Tag Section -->
    <div class="tag-section" id="home">
        <svg class="hero-bg" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="#3730a3" opacity="0.7"></circle>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)"></rect>
        </svg>

        <div class="hero-eyebrow">
            <span class="hero-eyebrow-line"></span>
            NK Studio
            <span class="hero-eyebrow-line"></span>
        </div>

        <h2 class="hero-headline">
            <span class="line">Vibrant art.</span>
            <span class="line">Expressive <span class="accent">characters.</span></span>
            <span class="line">Your vision, <span class="accent">illustrated.</span></span>
        </h2>

        <p class="hero-sub">Anime · Character Design · Custom Commissions</p>
    </div>

    <!-- Gallery Slideshow -->
    <GallerySlideshow />

    <!-- Intro Section -->
    <NKIntro />

    <!-- Masonry Grid -->
    <WorksGrid :works="works" @open-work="openWorkModal" />

    <!-- Work Modal Dialog -->
    <Dialog v-model:visible="showWorkModal" :modal="true" :showHeader="false"
        :breakpoints="{ '960px': '75vw', '320px': '90vw' }"
        :style="{ width: 'fit-content', maxWidth: '90vw', maxHeight: '90vh', padding: '0', margin: '0' }" :pt="{
            content: { style: 'padding: 0; margin: 0;' },
            root: { style: 'padding: 0; overflow: hidden;' }
        }" class="work-modal">

        <div v-if="selectedWork" class="modal-content">
            <button class="modal-close-btn" @click="showWorkModal = false">
                <i class="pi pi-times"></i>
            </button>
            <img :src="selectedWork.image" :alt="selectedWork.title" class="modal-image" />
            <div class="modal-info">
                <h3 class="modal-title">{{ selectedWork?.title }}</h3>
                <p class="modal-category">{{ selectedWork?.category }}</p>
            </div>
        </div>
    </Dialog>

    <!-- Commission Tiers Section -->
    <CommissionTiers @select-tier="selectTier" />

    <GlowStrip />

    <!-- Contact Form Section -->
    <div class="contact-section" id="contact">
        <div class="contact-container">
            <div class="contact-eyebrow">
                <span class="contact-eyebrow-line"></span>
                Let's work together
                <span class="contact-eyebrow-line"></span>
            </div>
            <h2 class="contact-title">Get In Touch</h2>
            <p class="contact-subtitle">Have a project in mind? Let's create something amazing together.</p>

            <form @submit.prevent="submitForm" class="contact-form">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="name" class="form-label">Name *</label>
                        <InputText id="name" v-model="contactForm.name" placeholder="Your Name" class="form-input"
                            required />
                    </div>
                    <div class="form-group">
                        <label for="email" class="form-label">Email *</label>
                        <InputText id="email" v-model="contactForm.email" type="email" placeholder="your@email.com"
                            class="form-input" required />
                    </div>
                    <div class="form-group">
                        <label for="subject" class="form-label">Subject *</label>
                        <InputText id="subject" v-model="contactForm.subject" placeholder="Project Subject"
                            class="form-input" required />
                    </div>
                    <div class="form-group">
                        <label for="phone" class="form-label">Phone</label>
                        <InputText id="phone" v-model="contactForm.phone" placeholder="Your Phone" class="form-input" />
                    </div>
                    <div class="form-group">
                        <label for="tier" class="form-label">Commission Tier</label>
                        <select id="tier" v-model="contactForm.tier" class="form-input form-select">
                            <option value="" disabled>Select a tier</option>
                            <option v-for="tier in tierOptions" :key="tier.name" :value="tier.name">
                                {{ tier.name }} — ${{ tier.price }}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="form-group full-width">
                    <label for="message" class="form-label">Message *</label>
                    <Textarea id="message" v-model="contactForm.message" placeholder="Tell us about your project..."
                        :autoResize="true" rows="6" class="form-textarea" required />
                </div>

                <div class="form-group full-width captcha-group">
                    <label class="form-label">Verification *</label>
                    <div class="captcha-box">
                        <span class="captcha-question">{{ captchaQuestion }}</span>
                        <InputText v-model="captchaAnswer" inputmode="numeric" placeholder="Enter answer"
                            class="form-input captcha-input" @input="captchaError = false" required />
                    </div>
                    <p v-if="captchaError" class="captcha-error">Please solve the captcha correctly.</p>
                </div>

                <Button label="Send Message" class="submit-button" type="submit" severity="primary" />
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>NK Studio</h3>
                    <p>Nathan K. | Illustration & Design</p>
                    <a href="mailto:nkuan20@gmail.com" class="footer-email">nkuan20@gmail.com</a>
                </div>

                <div class="footer-section footer-social">
                    <h4>Contact Me</h4>
                    <div class="social-links">
                        <a href="https://www.linkedin.com/in/nathan-kuan/" class="social-btn" title="LinkedIn"
                            aria-label="LinkedIn">
                            <i class="pi pi-linkedin"></i>
                        </a>
                        <a href="https://www.artstation.com/icecream0w0" class="social-btn" title="ArtStation"
                            aria-label="ArtStation">
                            <i class="pi pi-globe"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-bottom-left">
                    <p class="copyright">© 2025 Nathan K. All content copyright. All rights reserved.</p>
                    <p class="ai-disclaimer">No work may be used without permission or for the purpose of training AI.</p>
                </div>
                <div class="footer-bottom-right">
                    <p class="footer-credit-label">Website by</p>
                    <div class="footer-credit-block">
                        <span class="footer-credit-name">Yuri D.</span>
                        <span class="footer-credit-divider">·</span>
                        <a href="mailto:yuri@example.com" class="footer-credit-link">yuri@example.com</a>
                        <span class="footer-credit-divider">·</span>
                        <a href="https://yurid.dev" class="footer-credit-link">yurid.dev</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

</template>

<script setup>
import WorksGrid from './components/WorksGrid.vue'
import NKIntro from './components/NKIntro.vue'
import GallerySlideshow from './components/GallerySlideshow.vue'
import GlowStrip from './components/GlowStrip.vue'
import CommissionTiers from './components/CommissionTiers.vue'
import Menubar from 'primevue/menubar'
import Button from 'primevue/button'
import Badge from 'primevue/badge'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Dialog from 'primevue/dialog'

import { works } from './data/featuredWorks.js'
import { ref, onMounted } from 'vue'

// ── Modal ─────────────────────────────────────────────────────────────────────
const showWorkModal = ref(false)
const selectedWork = ref(null)

const openWorkModal = (work) => {
    selectedWork.value = work
    showWorkModal.value = true
}

// ── Theme editor ──────────────────────────────────────────────────────────────
const showThemePanel = ref(false)

const themePresets = [
    { name: 'Purple',  primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' },
    { name: 'Blue',    primary: '#3b82f6', secondary: '#93c5fd', accent: '#ec4899' },
    { name: 'Teal',    primary: '#14b8a6', secondary: '#7ee8de', accent: '#f97316' },
    { name: 'Rose',    primary: '#e11d48', secondary: '#fbcfe8', accent: '#0ea5e9' },
    { name: 'Emerald', primary: '#059669', secondary: '#a7f3d0', accent: '#f59e0b' },
    { name: 'Orange',  primary: '#ea580c', secondary: '#fed7aa', accent: '#06b6d4' },
]

const customTheme = ref({ primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' })

const lightenColor = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16)
    const amt = Math.round(2.55 * percent)
    const R = (num >> 16) + amt
    const G = (num >> 8 & 0x00FF) + amt
    const B = (num & 0x0000FF) + amt
    return '#' + (0x1000000
        + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000
        + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100
        + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1)
}

const updateTheme = () => {
    const root = document.documentElement
    root.style.setProperty('--primary-color', customTheme.value.primary)
    root.style.setProperty('--primary-700', lightenColor(customTheme.value.primary, -0.15))
    root.style.setProperty('--surface-highlight', customTheme.value.accent)
}

const applyTheme = (preset) => {
    customTheme.value = { primary: preset.primary, secondary: preset.secondary, accent: preset.accent }
    updateTheme()
}

const resetTheme = () => {
    customTheme.value = { primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' }
    updateTheme()
}

// ── Contact form ──────────────────────────────────────────────────────────────
const contactForm = ref({ name: '', email: '', subject: '', phone: '', tier: '', message: '' })
const captchaQuestion = ref('')
const captchaAnswer = ref('')
const captchaValue = ref(0)
const captchaError = ref(false)

// Kept in App.vue so the contact form dropdown stays in sync
const tierOptions = [
    { name: 'Starter',      price: 50  },
    { name: 'Professional', price: 150 },
    { name: 'Premium',      price: 300 },
]

const generateCaptcha = () => {
    const firstNumber = Math.floor(Math.random() * 9) + 1
    const secondNumber = Math.floor(Math.random() * 9) + 1
    captchaQuestion.value = `Solve: ${firstNumber} + ${secondNumber}`
    captchaValue.value = firstNumber + secondNumber
    captchaAnswer.value = ''
    captchaError.value = false
}

const selectTier = (tier) => {
    contactForm.value.tier = tier.name
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const submitForm = () => {
    if (Number(captchaAnswer.value) !== captchaValue.value) {
        captchaError.value = true
        generateCaptcha()
        return
    }

    console.log('Form submitted:', contactForm.value)
    contactForm.value = { name: '', email: '', subject: '', phone: '', tier: '', message: '' }
    generateCaptcha()
    alert("Thank you for your message! We'll get back to you soon.")
}

// ── Navbar ────────────────────────────────────────────────────────────────────
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

const items = ref([
    { label: 'Home',     icon: 'pi pi-home',    command: () => scrollToSection('home')     },
    { label: 'Works',    icon: 'pi pi-star',     command: () => scrollToSection('works')    },
    { label: 'Services', icon: 'pi pi-search',   command: () => scrollToSection('services') },
    { label: 'Contact',  icon: 'pi pi-envelope', command: () => scrollToSection('contact')  },
])

// ── Loader ────────────────────────────────────────────────────────────────────
const isLoading = ref(true)
onMounted(() => {
    generateCaptcha()
    setTimeout(() => { isLoading.value = false }, 2000)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

/* ============================================================
   THEME CONFIGURATION — 60 / 30 / 10 RULE
   ============================================================ */
:root {
    --60-primary:     #0A0840;
    --60-secondary:   #170C79;
    --60-tertiary:    #1E10A0;
    --30-primary:     #0A0840;
    --30-secondary:   #170C79;
    --30-border:      #C0C4E0;
    --30-border-dark: #170C79;
    --10-primary:     #56B6C6;
    --10-secondary:   #8ACBD0;
    --10-hover:       #3DA0B0;
    --text-bright:    #F0F2FA;
    --text-muted:     #A8D4DA;
    --text-faint:     #6B9CA8;
    --text-on-light:  #0A0840;
}

*, *::before, *::after { box-sizing: border-box; }
html, body { margin: 0; padding: 0; overflow-x: hidden; }
#app { margin: 0; padding: 0; overflow: hidden; }
* { font-family: 'Poppins', sans-serif; }
body, html { margin: 0; padding: 0; overflow-x: hidden; }
#app { margin: 0; padding: 0; }

/* ============================================================
   LOADER
   ============================================================ */
.loader-overlay {
    position: fixed; inset: 0;
    background: var(--60-primary);
    z-index: 9999;
    display: flex; align-items: center; justify-content: center;
    transition: opacity 0.6s ease, visibility 0.6s ease;
    opacity: 1; visibility: visible;
}
.loader-overlay.loader-hidden { opacity: 0; visibility: hidden; pointer-events: none; }
.loader-content { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.loader-logo { animation: loaderPulse 1.5s ease-in-out infinite; }

@keyframes loaderPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50%       { opacity: 0.6; transform: scale(0.95); }
}

.loader-studio-name {
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.25em;
    text-transform: uppercase; color: var(--text-bright); margin: 0;
}
.loader-brush-track { width: 160px; height: 2px; background: var(--60-secondary); border-radius: 2px; overflow: hidden; }
.loader-brush-fill {
    height: 100%; width: 0%; background: var(--10-primary); border-radius: 2px;
    animation: brushFill 1.8s ease forwards;
}
@keyframes brushFill { 0% { width: 0%; } 60% { width: 80%; } 100% { width: 100%; } }
.loader-tagline {
    font-size: 0.7rem; color: var(--text-faint); letter-spacing: 0.1em; margin: 0;
    animation: loaderBlink 1.2s ease-in-out infinite;
}
@keyframes loaderBlink { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar-container { position: sticky; top: 0; z-index: 1000; width: 100%; box-shadow: 0 1px 0 var(--30-border); }
.navbar-card { margin: 0 !important; border-radius: 0 !important; background: var(--60-primary) !important; }
.p-menubar { background: var(--60-primary) !important; border: none !important; border-radius: 0 !important; }
.p-menubar .p-menubar-item-link,
.p-menubar .p-menubar-item>.p-menubar-item-content { color: var(--text-bright) !important; letter-spacing: 0.05em; font-size: 0.85rem; text-transform: uppercase; }
.p-menubar .p-menubar-item-link:hover { background: rgba(255,255,255,0.05) !important; color: var(--10-primary) !important; }
.p-menubar-root-list { flex: 1; justify-content: center; }

.work-modal .p-dialog { border: none !important; border-radius: 4px; box-shadow: 0 24px 48px rgba(0,0,0,0.5); padding: 0 !important; }
.work-modal .p-dialog-content { padding: 0 !important; background: var(--60-primary); overflow: hidden; }
.work-modal .p-dialog>.p-dialog-content { padding: 0 !important; }

/* ============================================================
   THEME EDITOR PANEL
   ============================================================ */
.theme-editor-panel {
    position: fixed; right: 0; top: 60px; width: 350px; max-width: 90vw;
    background: var(--30-secondary); border-left: 1px solid var(--30-border);
    box-shadow: -4px 0 12px rgba(0,0,0,0.08); padding: 0; z-index: 99;
    height: calc(100vh - 60px); transform: translateX(100%); transition: transform 0.3s ease;
}
.theme-editor-panel.theme-panel-open { transform: translateX(0); }
.theme-toggle-btn {
    background: transparent; color: var(--text-bright); border: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center; gap: 0.5rem;
    font-size: 1.2rem; padding: 0.5rem 1rem; transition: all 0.3s ease;
    font-weight: 600; font-family: 'Poppins', sans-serif;
}
.theme-toggle-btn:hover { color: var(--10-primary); }
.theme-content { padding: 1.5rem; overflow-y: auto; max-height: calc(100vh - 180px); }
.theme-content h3 { margin: 0 0 1.5rem 0; font-size: 1rem; font-weight: 700; color: var(--60-primary); }
.preset-buttons { display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem; margin-bottom: 1.5rem; }
.preset-btn {
    padding: 0.6rem; border: 1px solid var(--30-border); border-radius: 6px;
    background: var(--30-secondary); color: var(--60-primary);
    font-family: 'Poppins', sans-serif; font-size: 0.85rem; cursor: pointer; transition: all 0.2s ease;
}
.preset-btn:hover { border-color: var(--10-primary); background: var(--30-primary); }
.color-inputs { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
.color-input-group { display: flex; flex-direction: column; gap: 0.5rem; }
.color-input-group label { font-size: 0.85rem; font-weight: 600; color: var(--60-primary); }
.color-picker-group { display: flex; gap: 0.5rem; align-items: center; }
.color-input { width: 50px; height: 40px; border: 1px solid var(--30-border); border-radius: 6px; cursor: pointer; background: transparent; }
.color-value { font-size: 0.85rem; font-family: monospace; color: var(--text-muted); }
.reset-btn {
    width: 100%; padding: 0.7rem; border: 1px solid var(--30-border); border-radius: 6px;
    background: var(--30-secondary); color: var(--60-primary);
    font-family: 'Poppins', sans-serif; font-weight: 600; cursor: pointer; transition: all 0.2s ease;
}
.reset-btn:hover { background: var(--30-primary); border-color: var(--10-primary); }

/* ============================================================
   HERO / TAG SECTION
   ============================================================ */
.tag-section {
    width: 100%; background: linear-gradient(135deg, var(--60-primary) 0%, #0f0860 100%);
    color: var(--text-bright); padding: 5rem 2rem 4rem; text-align: center;
    margin-bottom: 0; scroll-margin-top: 100px; position: relative; overflow: hidden;
}
.hero-bg { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0.55; pointer-events: none; z-index: 0; }
.hero-eyebrow, .hero-headline, .hero-sub { position: relative; z-index: 1; }
.hero-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 0.7rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--10-primary); margin-bottom: 1.5rem; opacity: 0;
    animation: heroFadeUp 0.6s ease 0.1s forwards;
}
.hero-eyebrow-line { display: inline-block; width: 32px; height: 1px; background: var(--10-primary); }
.hero-headline { margin: 0 auto 1.5rem; max-width: 700px; }
.hero-headline .line {
    display: block; font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 700;
    line-height: 1.15; color: #efe3ca; opacity: 0; transform: translateY(24px);
    font-family: 'Poppins', sans-serif;
}
.hero-headline .line:nth-child(1) { animation: heroFadeUp 0.65s ease 0.25s forwards; }
.hero-headline .line:nth-child(2) { animation: heroFadeUp 0.65s ease 0.40s forwards; }
.hero-headline .line:nth-child(3) { animation: heroFadeUp 0.65s ease 0.55s forwards; }
.hero-headline .accent { color: var(--10-primary); font-style: italic; position: relative; }
.hero-headline .accent::after {
    content: ''; position: absolute; bottom: 2px; left: 0; width: 0; height: 2px;
    background: var(--10-primary); animation: heroUnderline 0.5s ease 1.1s forwards;
}
.hero-sub {
    font-size: 0.9rem; font-weight: 300; color: #8acbd0; letter-spacing: 0.1em;
    margin: 0 auto; max-width: 400px; opacity: 0; animation: heroFadeUp 0.6s ease 0.75s forwards;
}
@keyframes heroFadeUp { to { opacity: 1; transform: translateY(0); } }
@keyframes heroUnderline { to { width: 100%; } }

/* ============================================================
   GALLERY
   ============================================================ */
.gallery-container { width: 100%; background: var(--60-primary); padding: 0; overflow: hidden; position: relative; }
.gallery-scroll-track {
    display: flex; gap: 6px; overflow-x: auto; scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; scrollbar-width: none; cursor: default; scroll-snap-type: x mandatory;
}
.gallery-scroll-track::-webkit-scrollbar { display: none; }
.gallery-scroll-item { flex: 0 0 420px; height: 500px; overflow: hidden; position: relative; transition: flex-basis 0.4s ease; cursor: pointer; scroll-snap-align: start; }
.gallery-scroll-item.active { flex: 0 0 640px; }
.gallery-scroll-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease, filter 0.4s ease; filter: brightness(0.6); display: block; }
.gallery-scroll-item.active img       { filter: brightness(1); }
.gallery-scroll-item:hover img        { transform: scale(1.04); filter: brightness(0.85); }
.gallery-scroll-item.active:hover img { filter: brightness(1); }
.gallery-btn {
    position: absolute; top: 50%; transform: translateY(-50%); z-index: 10;
    background: rgba(0,0,0,0.45); backdrop-filter: blur(6px);
    border: 1px solid rgba(255,255,255,0.1); color: var(--text-bright);
    width: 44px; height: 44px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 0.9rem; transition: background 0.2s ease, border-color 0.2s ease;
}
.gallery-btn:hover { border-color: var(--10-primary); color: var(--10-primary); }
.gallery-btn-left  { left: 1rem; }
.gallery-btn-right { right: 1rem; }

/* ============================================================
   INTRO SECTION
   ============================================================ */
.intro-section {
    width: 100%; background: var(--60-primary); color: var(--30-secondary);
    padding: 4rem 2rem; text-align: center; margin-bottom: 0;
    border-top: 1px solid var(--10-primary); border-bottom: 1px solid var(--10-primary);
}
.intro-content h1 { font-size: 2.5rem; margin: 0 0 1rem 0; font-weight: 600; color: var(--10-primary); letter-spacing: -0.01em; }
.intro-content h2 { font-size: 1rem; margin: 0 auto; max-width: 600px; line-height: 1.8; font-weight: 300; color: var(--text-bright); letter-spacing: 0.02em; }

/* ============================================================
   WORK MODAL
   ============================================================ */
.work-modal .p-dialog { border: none !important; border-radius: 4px; overflow: hidden; box-shadow: 0 24px 48px rgba(0,0,0,0.5); padding: 0 !important; }
.work-modal .p-dialog-content { padding: 0 !important; background: var(--60-primary); overflow: hidden; }
.work-modal .p-dialog > .p-dialog-content { padding: 0 !important; }
.modal-content { position: relative; display: flex; flex-direction: column; border-radius: 4px; width: fit-content; max-width: 90vw; max-height: 90vh; overflow: hidden; }
.modal-image { width: auto; height: auto; max-width: 90vw; max-height: calc(90vh - 60px); display: block; object-fit: contain; }
.modal-close-btn {
    position: absolute; top: 0.65rem; right: 0.65rem; z-index: 10;
    background: rgba(0,0,0,0.55); backdrop-filter: blur(4px); color: var(--text-bright);
    border: none; border-radius: 50%; width: 30px; height: 30px;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 0.7rem; transition: background 0.2s ease;
}
.modal-close-btn:hover { background: rgba(200,169,110,0.8); }
.modal-info { padding: 0.75rem 1rem; background: var(--60-primary); }
.modal-title { margin: 0; font-size: 0.95rem; font-weight: 600; color: var(--text-bright); }
.modal-category { margin: 0.2rem 0 0 0; font-size: 0.7rem; color: var(--10-primary); text-transform: uppercase; letter-spacing: 0.08em; }

/* ============================================================
   CONTACT SECTION
   ============================================================ */
.contact-section {
    width: 100%; padding: 5rem 2rem;
    background: linear-gradient(160deg, var(--60-primary) 0%, #0d0a55 60%, var(--60-secondary) 100%);
    margin: 0; scroll-margin-top: 100px; position: relative; overflow: hidden;
}
.contact-section::before {
    content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
    width: 700px; height: 350px;
    background: radial-gradient(ellipse at center top, rgba(86,182,198,0.13) 0%, transparent 70%);
    pointer-events: none;
}
.contact-container { max-width: 680px; margin: 0 auto; position: relative; z-index: 1; }
.contact-eyebrow {
    display: inline-flex; align-items: center; gap: 10px;
    font-size: 0.68rem; font-weight: 600; letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--10-secondary); margin-bottom: 0.75rem; width: 100%; justify-content: center;
}
.contact-eyebrow-line { display: inline-block; width: 28px; height: 1px; background: var(--10-secondary); opacity: 0.6; }
.contact-title { font-size: 2.2rem; font-weight: 700; text-align: center; margin: 0 0 0.25rem 0; color: var(--text-bright); letter-spacing: -0.02em; }
.contact-title::after { content: ''; display: block; width: 2.5em; height: 2px; background: linear-gradient(90deg, var(--10-primary), transparent); margin: 0.5rem auto 0; border-radius: 2px; }
.contact-subtitle { text-align: center; font-size: 0.9rem; color: var(--text-muted); margin: 0.5rem 0 2.5rem 0; font-weight: 300; letter-spacing: 0.03em; }
.contact-form {
    display: flex; flex-direction: column; gap: 1.5rem;
    background: rgba(255,255,255,0.04); border: 1px solid rgba(86,182,198,0.18);
    border-radius: 16px; padding: 2.5rem; backdrop-filter: blur(10px);
}
.form-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group.full-width { grid-column: 1 / -1; }
.form-label { font-weight: 600; font-size: 0.7rem; color: var(--10-secondary); text-transform: uppercase; letter-spacing: 0.1em; }
.captcha-group { margin-top: 0.25rem; }
.captcha-box { display: flex; flex-wrap: wrap; align-items: center; gap: 0.75rem; padding: 0.75rem 0 0; }
.captcha-question { color: var(--text-bright); font-weight: 600; letter-spacing: 0.03em; }
.captcha-input { max-width: 220px; }
.captcha-error { margin: 0.25rem 0 0; font-size: 0.8rem; color: #fda4af; }
.form-input {
    padding: 0.7rem 0; border: none; border-bottom: 1px solid rgba(86,182,198,0.3);
    border-radius: 0; background: transparent; color: var(--text-bright);
    font-family: 'Poppins', sans-serif; font-size: 0.95rem; transition: border-color 0.3s ease;
    width: 100%; box-sizing: border-box;
}
.form-input::placeholder { color: rgba(168,212,218,0.3); }
.form-input:focus { outline: none; border-bottom-color: var(--10-primary); }
.form-select {
    appearance: none; -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2356B6C6' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat; background-position: right 0.5rem center; padding-right: 2rem; cursor: pointer;
}
.form-select option { background: #0d0a55; color: var(--text-bright); }
.form-textarea {
    padding: 0.7rem 0; border: none; border-bottom: 1px solid rgba(86,182,198,0.3);
    border-radius: 0; background: transparent; color: var(--text-bright);
    font-family: 'Poppins', sans-serif; font-size: 0.95rem; resize: vertical;
    transition: border-color 0.3s ease; width: 100%; box-sizing: border-box;
}
.form-textarea::placeholder { color: rgba(168,212,218,0.3); }
.form-textarea:focus { outline: none; border-bottom-color: var(--10-primary); }
.submit-button {
    margin-top: 0.5rem; padding: 0.9rem 3rem; font-family: 'Poppins', sans-serif;
    font-weight: 600; border-radius: 8px; align-self: center;
    background: var(--10-primary) !important; color: #ffffff !important; border: none !important;
    letter-spacing: 0.1em; text-transform: uppercase; font-size: 0.82rem;
    transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease !important;
    animation: submitGlow 3s ease-in-out infinite;
}
@keyframes submitGlow {
    0%, 100% { box-shadow: 0 0 14px rgba(86,182,198,0.3); }
    50%       { box-shadow: 0 0 28px rgba(86,182,198,0.6); }
}
.submit-button:hover { background: var(--10-hover) !important; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(86,182,198,0.5) !important; animation: none; }

/* ============================================================
   FOOTER
   ============================================================ */
.footer { background: var(--60-primary); border-top: 1px solid var(--30-border-dark); padding: 2.5rem 0 1.5rem; }
.footer-container { max-width: 900px; margin: 0 auto; padding: 0 1.5rem; }
.footer-content { display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 2rem; margin-bottom: 1.5rem; }
.footer-section h3 { font-size: 0.9rem; font-weight: 600; color: var(--text-bright); margin-bottom: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
.footer-section p { font-size: 0.875rem; color: var(--text-muted); line-height: 1.8; margin: 0; }
.footer-email { display: inline-block; margin-top: 0.5rem; font-size: 0.875rem; color: var(--10-primary); text-decoration: none; transition: color 0.2s ease; }
.footer-email:hover { color: var(--10-hover); text-decoration: underline; }
.footer-social h4 { font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); margin-bottom: 0.75rem; }
.social-links { display: flex; gap: 8px; }
.social-btn { display: flex; align-items: center; justify-content: center; width: 34px; height: 34px; border-radius: 4px; border: 1px solid var(--30-border-dark); color: var(--text-muted); text-decoration: none; transition: background 0.2s, color 0.2s, border-color 0.2s; }
.social-btn:hover { background: var(--10-primary); border-color: var(--10-primary); color: #ffffff; }
.footer-bottom { border-top: 1px solid var(--30-border-dark); padding-top: 1.25rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem; }
.footer-bottom-left  { display: flex; flex-direction: column; gap: 4px; }
.footer-bottom-right { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; }
.footer-credit-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-faint); margin: 0; }
.footer-credit-block { display: flex; align-items: center; gap: 0.5rem; }
.footer-credit-name  { font-size: 0.8rem; font-weight: 600; color: var(--text-muted); letter-spacing: 0.03em; }
.footer-credit-divider { font-size: 0.75rem; color: var(--30-border-dark); }
.footer-credit-link { font-size: 0.75rem; color: var(--text-faint); text-decoration: none; transition: color 0.2s ease; }
.footer-credit-link:hover { color: var(--10-primary); }
.copyright, .ai-disclaimer { font-size: 0.75rem; color: var(--text-faint); margin: 0; letter-spacing: 0.02em; }

/* ============================================================
   WORK CARD TRANSITION
   ============================================================ */
.work-card-enter-active { transition: opacity 0.4s ease, transform 0.4s ease; }
.work-card-enter-from { opacity: 0; transform: translateY(20px) scale(0.97); }
.work-card-enter-to { opacity: 1; transform: translateY(0) scale(1); }

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 768px) {
    .theme-editor-panel { width: 100%; }
    .gallery-scroll-item        { flex: 0 0 280px; height: 340px; }
    .gallery-scroll-item.active { flex: 0 0 360px; }
    .contact-section { padding: 2.5rem 1rem; }
    .contact-title   { font-size: 1.5rem; }
    .contact-form    { padding: 1.5rem 1.25rem; }
    .form-grid       { grid-template-columns: 1fr; }
    .footer-bottom       { flex-direction: column; align-items: flex-start; }
    .footer-bottom-right { align-items: flex-start; }
}
</style>