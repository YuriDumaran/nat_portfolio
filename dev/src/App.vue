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
    <!-- Hero / Tag Section -->
    <div class="tag-section" id="home">
    <svg class="hero-bg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="2" fill="#170C79"></circle>
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
    <div class="gallery-container">
        <button class="gallery-btn gallery-btn-left" @click="scrollGallery('left')">
            <i class="pi pi-chevron-left"></i>
        </button>
        <div class="gallery-scroll-track" ref="galleryTrack">
            <div v-for="(item, index) in galleryItems" :key="index" class="gallery-scroll-item"
                :class="{ active: activeIndex === index }" @click="handleGalleryClick(index)">
                <img :src="item.src" :alt="item.alt" />
            </div>
        </div>
        <button class="gallery-btn gallery-btn-right" @click="scrollGallery('right')">
            <i class="pi pi-chevron-right"></i>
        </button>
    </div>

    <!-- Intro Section -->
    <NKIntro />

    <!-- masonry grid -->
    <WorksGrid :works="works" @open-work="openWorkModal" />

    <!-- Work Modal Dialog -->
    <Dialog v-model:visible="showWorkModal" :modal="true" :showHeader="false"
        :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
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
    <div class="tiers-section" id="services">
        <h2 class="tiers-title">Commission Tiers</h2>
        <div class="tiers-grid">
            <div v-for="(tier, index) in commissionTiers" :key="index" class="tier-card"
                :class="{ featured: tier.featured }">
                <span v-if="tier.featured" class="tier-badge">Most popular</span>
                <p class="tier-name">{{ tier.name }}</p>
                <div class="tier-price">
                    <span class="currency">$</span>
                    <span class="amount">{{ tier.price }}</span>
                </div>
                <hr class="tier-divider" />
                <p class="tier-desc">{{ tier.description }}</p>
                <Button label="Select Tier" class="tier-button w-full" @click="selectTier(tier)" />
            </div>
        </div>
    </div>

    <!-- Contact Form Section -->
    <div class="contact-section" id="contact">
        <div class="contact-container">
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
                            <option v-for="tier in commissionTiers" :key="tier.name" :value="tier.name">
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

                <Button label="Send Message" class="submit-button" type="submit" severity="primary" />
            </form>
        </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Icecream Studio</h3>
                    <p>Nathan K. | Illustration & Design</p>
                    <a href="mailto:nathan@icecreamstudio.com" class="footer-email">nathan@icecreamstudio.com</a>
                </div>

                <div class="footer-section footer-social">
                    <h4>Follow Us</h4>
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
                    <p class="ai-disclaimer">No work may be used without permission or for the purpose of training AI.
                    </p>
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
import WorksGrid from './components/WorksGrid.vue';
import SectionDivider from './components/sectionDivider.vue';
import NKIntro from './components/NKIntro.vue';
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import Badge from 'primevue/badge';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Dialog from 'primevue/dialog';

import { ref, onMounted } from "vue";

const activeIndex = ref(2);
const showWorkModal = ref(false);
const selectedWork = ref(null);
const showThemePanel = ref(false);

const openWorkModal = (work) => {
    selectedWork.value = work;
    showWorkModal.value = true;
};

const themePresets = [
    { name: 'Purple', primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' },
    { name: 'Blue', primary: '#3b82f6', secondary: '#93c5fd', accent: '#ec4899' },
    { name: 'Teal', primary: '#14b8a6', secondary: '#7ee8de', accent: '#f97316' },
    { name: 'Rose', primary: '#e11d48', secondary: '#fbcfe8', accent: '#0ea5e9' },
    { name: 'Emerald', primary: '#059669', secondary: '#a7f3d0', accent: '#f59e0b' },
    { name: 'Orange', primary: '#ea580c', secondary: '#fed7aa', accent: '#06b6d4' }
];

const customTheme = ref({ primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' });

const lightenColor = (color, percent) => {
    const num = parseInt(color.replace('#', ''), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
};

const updateTheme = () => {
    const root = document.documentElement;
    root.style.setProperty('--primary-color', customTheme.value.primary);
    root.style.setProperty('--primary-700', lightenColor(customTheme.value.primary, -0.15));
    root.style.setProperty('--surface-highlight', customTheme.value.accent);
};

const applyTheme = (preset) => {
    customTheme.value = { primary: preset.primary, secondary: preset.secondary, accent: preset.accent };
    updateTheme();
};

const resetTheme = () => {
    customTheme.value = { primary: '#9333ea', secondary: '#a78bfa', accent: '#f59e0b' };
    updateTheme();
};

const contactForm = ref({ name: '', email: '', subject: '', phone: '', tier: '', message: '' });

const selectTier = (tier) => {
    contactForm.value.tier = tier.name;
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const submitForm = () => {
    console.log('Form submitted:', contactForm.value);
    contactForm.value = { name: '', email: '', subject: '', phone: '', tier: '', message: '' };
    alert('Thank you for your message! We\'ll get back to you soon.');
};

const commissionTiers = ref([
    { name: 'Starter', price: 50, description: 'Simple character illustration or portrait. Includes basic pose and background.', featured: false },
    { name: 'Professional', price: 150, description: 'Full-body character design with custom pose, detailed background, and color variations.', featured: true },
    { name: 'Premium', price: 300, description: 'Complex multi-character composition, custom environment, multiple revisions, and hi-res deliverables.', featured: false }
]);

const works = ref([
    // Row 1: [1] [wide=2] [1]
    { title: 'Zani - Pose Study', category: 'Character', image: '/img/Zani/Zani-3.png', className: '' },
    { title: 'Aztec - Color Variations', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Color Var.png', className: 'wide' },
    { title: 'Illustration 2', category: 'Illustration', image: '/img/illustration/Illustration_2.2.png', className: '' },

    // Row 2: [1] [1] [wide=2]
    { title: 'Olivia - Final Render', category: 'Illustration', image: '/img/Olivia/Olivia-7.png', className: '' },
    { title: 'Illustration 19', category: 'Illustration', image: '/img/illustration/Illustration_19.4.png', className: '' },
    { title: 'Aztec - Facial Expressions', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_FacialExp.png', className: 'wide' },


    // Row 3: [1] [wide=2] [1]
    { title: 'Olivia - Pose Variation', category: 'Animation', image: '/img/Olivia/Olivia-4.png', className: '' },
    { title: 'Aztec - Color Variations', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Color Var.png', className: 'wide' },
    { title: 'Zani - Expression', category: 'Illustration', image: '/img/Zani/Zani-2.png', className: '' },

    // Row 4: [1] [1] [wide=2]
    { title: 'Aztec - Turnarounds', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_TurnArounds.png', className: 'wide' },
    { title: 'Olivia - Dynamic Pose', category: 'Fantasy', image: '/img/Olivia/Olivia-5.png', className: '' },
    { title: 'Olivia - Character Design', category: 'Illustration', image: '/img/Olivia/Olivia-1.png', className: '' },


    // Row 5: [1] [wide=2] [1]
    { title: 'Olivia - Detail Study', category: 'Illustration', image: '/img/Olivia/Olivia-6.png', className: '' },
    { title: 'Esther - Final', category: 'Illustration', image: '/img/illustration/Esther_Final__2.png', className: 'wide' },
    { title: 'Olivia - Full Body', category: 'Character', image: '/img/Olivia/Olivia-3.png', className: '' },

    // Row 6: [1] [1] [wide=2]
    { title: 'Zani - Detail', category: 'Character', image: '/img/Zani/Zani-4.png', className: '' },
    { title: 'Zani - Final', category: 'Illustration', image: '/img/Zani/Zani-5.png', className: '' },
    { title: 'Illustration Render', category: 'Illustration', image: '/img/illustration/Illustration70_Render6.png', className: 'wide' },

    // Row 7: [1] [wide=2] [1]
    { title: 'Gold Material Study', category: 'Material Study', image: '/img/Material Study_Armor/gold.png', className: '' },
    { title: 'Aztec - Staff Design', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Staff Design.png', className: 'wide' },
    { title: 'Gold Variant 2', category: 'Material Study', image: '/img/Material Study_Armor/gold2.png', className: '' },

    // Row 8: [1] [1] [wide=2]
    { title: 'Aztec - Pose Sheet', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Pose.png', className: 'wide' },
    { title: 'Metal Study', category: 'Material Study', image: '/img/Material Study_Armor/metal2.png', className: '' },
    { title: 'Wood Study', category: 'Material Study', image: '/img/Material Study_Armor/wood.png', className: '' },


    // Row 9: [1] [wide=2] [1]
    { title: 'Illustration 14', category: 'Illustration', image: '/img/illustration/Illustration_14.4.png', className: '' },
    { title: 'Aztec - Final Render', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Render.png', className: 'wide' },
    { title: 'Zani - Character Design', category: 'Concept Art', image: '/img/Zani/Zani.png', className: '' },

    // Remaining singles
    { title: 'Olivia - Expression Study', category: 'Digital Art', image: '/img/Olivia/Olivia-2.png', className: '' },
    { title: 'Illustration 4', category: 'Illustration', image: '/img/illustration/Illustration_4.2.png', className: '' },
    { title: 'Illustration 6', category: 'Illustration', image: '/img/illustration/Illustration_6.17.png', className: '' },
    { title: 'Illustration 80', category: 'Illustration', image: '/img/illustration/Illustration80-Render7.png', className: '' },
    { title: 'Umbrall Valentines', category: 'Illustration', image: '/img/illustration/Umbrall_valentines.png', className: '' },
    { title: 'Gold Variant 3', category: 'Material Study', image: '/img/Material Study_Armor/gold3.png', className: '' },
    { title: 'Metal Variant 3', category: 'Material Study', image: '/img/Material Study_Armor/metal3.png', className: '' },
    { title: 'Wood Variant 2', category: 'Material Study', image: '/img/Material Study_Armor/wood2.png', className: '' },
    { title: 'Aztec - Items', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Items.png', className: '' },
    { title: 'Aztec - Staff Colors', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_Staff Color Var.png', className: '' },
    { title: 'Aztec - Expression Study', category: 'Game Assets', image: '/img/Aztec_Game_Assets/Final_Template_AztecTheme_FacialExpStudy.png', className: '' },
]);


const galleryItems = ref([
    { src: '/img/illustration/Illustration_4.2.png', alt: 'Illustration' },
    { src: '/img/illustration/Illustration70_Render6.png', alt: 'Illustration Render' },
    { src: '/img/illustration/Esther_Final__2.png', alt: 'Esther' },
    { src: '/img/Olivia/Olivia-7.png', alt: 'Olivia Final Render' },
    { src: '/img/illustration/Illustration_14.4.png', alt: 'Illustration 14' },
    { src: '/img/illustration/Umbrall_valentines.png', alt: 'Umbrall Valentines' },
]);
const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const items = ref([
    { label: 'Home', icon: 'pi pi-home', command: () => scrollToSection('home') },
    { label: 'Works', icon: 'pi pi-star', command: () => scrollToSection('works') },
    { label: 'Services', icon: 'pi pi-search', command: () => scrollToSection('services') },
    { label: 'Contact', icon: 'pi pi-envelope', command: () => scrollToSection('contact') }
]);

const isLoading = ref(true);

onMounted(() => {
    // your existing onMounted code ...

    setTimeout(() => {
        isLoading.value = false;
    }, 2000);
});


const galleryTrack = ref(null);

const scrollGallery = (direction) => {
    const track = galleryTrack.value;
    if (!track) return;
    track.scrollBy({
        left: direction === 'left' ? -500 : 500,
        behavior: 'smooth'
    });
};

const handleGalleryClick = (index) => {
    activeIndex.value = index;
};


</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');




/* ============================================================
   🎨 THEME CONFIGURATION — 60 / 30 / 10 RULE
   Change only this block to restyle the entire site.

   60% → Dominant  — backgrounds, large surfaces
   30% → Secondary — cards, panels, sections
   10% → Accent    — buttons, highlights, links, gold details
   ============================================================ */
:root {

    /* ☕ Original Warm Gold — ACTIVE */
    /* --60-primary:     #1c1a17;
    --60-secondary:   #2e2b26;
    --30-primary:     #eee8dc;
    --30-secondary:   #f5f0e8;
    --30-border:      #d4cfc6;
    --30-border-dark: #2e2b26;
    --10-primary:     #c8a96e;
    --10-hover:       #b08d50;
    --text-bright:    #f5f0e8;
    --text-muted:     #9e9890;
    --text-faint:     #6b6660;
    --text-on-light:  #1c1a17; */

    /*  Midnight Ink */
    /* --60-primary:     #0f0e17;
    --60-secondary:   #1a1925;
    --30-primary:     #e8e4f0;
    --30-secondary:   #f2f0f8;
    --30-border:      #cdc8e0;
    --30-border-dark: #1a1925;
    --10-primary:     #7c3aed;
    --10-hover:       #6d28d9;
    --text-bright:    #f2f0f8;
    --text-muted:     #9d97b8;
    --text-faint:     #6b6480;
    --text-on-light:  #0f0e17; */

    /*  Sakura */
    /* --60-primary:     #1a1118;
    --60-secondary:   #261820;
    --30-primary:     #f5e6ef;
    --30-secondary:   #fdf0f7;
    --30-border:      #e8c8d8;
    --30-border-dark: #261820;
    --10-primary:     #e8669a;
    --10-hover:       #d44d84;
    --text-bright:    #fdf0f7;
    --text-muted:     #b89aa8;
    --text-faint:     #7a6070;
    --text-on-light:  #1a1118; */

    /*  Deep Ocean */
    /* --60-primary:     #0a1628;
    --60-secondary:   #0f2040;
    --30-primary:     #dde8f5;
    --30-secondary:   #eef3fb;
    --30-border:      #b8cfe8;
    --30-border-dark: #0f2040;
    --10-primary:     #38bdf8;
    --10-hover:       #0ea5e9;
    --text-bright:    #eef3fb;
    --text-muted:     #8aaac8;
    --text-faint:     #506880;
    --text-on-light:  #0a1628; */

    /*  Autumn Studio */
    /* --60-primary:     #1c1208;
    --60-secondary:   #2e1f0e;
    --30-primary:     #f0e6d0;
    --30-secondary:   #faf3e6;
    --30-border:      #d4c4a0;
    --30-border-dark: #2e1f0e;
    --10-primary:     #e85d04;
    --10-hover:       #c94f00;
    --text-bright:    #faf3e6;
    --text-muted:     #b8a080;
    --text-faint:     #7a6848;
    --text-on-light:  #1c1208; */

    /*  Monochrome */
    /* --60-primary:     #0a0a0a;
    --60-secondary:   #141414;
    --30-primary:     #e8e8e8;
    --30-secondary:   #f5f5f5;
    --30-border:      #d0d0d0;
    --30-border-dark: #141414;
    --10-primary:     #ffffff;
    --10-hover:       #cccccc;
    --text-bright:    #f5f5f5;
    --text-muted:     #999999;
    --text-faint:     #666666;
    --text-on-light:  #0a0a0a; */

    /*  Forest Witch */
    /* --60-primary:     #0d1a12;
    --60-secondary:   #162b1e;
    --30-primary:     #ddeee4;
    --30-secondary:   #eef7f1;
    --30-border:      #b8d8c4;
    --30-border-dark: #162b1e;
    --10-primary:     #4ade80;
    --10-hover:       #22c55e;
    --text-bright:    #eef7f1;
    --text-muted:     #80a890;
    --text-faint:     #507060;
    --text-on-light:  #0d1a12; */

    /*  Crimson Noir */
    /* --60-primary:     #120a0a;
    --60-secondary:   #1e0f0f;
    --30-primary:     #f0e0e0;
    --30-secondary:   #faf0f0;
    --30-border:      #dcc0c0;
    --30-border-dark: #1e0f0f;
    --10-primary:     #dc2626;
    --10-hover:       #b91c1c;
    --text-bright:    #faf0f0;
    --text-muted:     #b89898;
    --text-faint:     #7a5858;
    --text-on-light:  #120a0a; */

    /* Sunset Gradient */
    /* --60-primary:     #1a0a14;
    --60-secondary:   #2a1020;
    --30-primary:     #f5e8f0;
    --30-secondary:   #fdf2f8;
    --30-border:      #e0c8d8;
    --30-border-dark: #2a1020;
    --10-primary:     #f97316;
    --10-hover:       #ea6c0a;
    --text-bright:    #fdf2f8;
    --text-muted:     #c0909a;
    --text-faint:     #886070;
    --text-on-light:  #1a0a14; */

    /*  Arctic */
    /* --60-primary:     #0a1218;
    --60-secondary:   #101e28;
    --30-primary:     #e0eff8;
    --30-secondary:   #f0f8ff;
    --30-border:      #b8d8ee;
    --30-border-dark: #101e28;
    --10-primary:     #67e8f9;
    --10-hover:       #22d3ee;
    --text-bright:    #f0f8ff;
    --text-muted:     #80a8c0;
    --text-faint:     #507080;
    --text-on-light:  #0a1218; */

    /*  Grape */
    /* --60-primary:     #110d1a;
    --60-secondary:   #1c1528;
    --30-primary:     #ece6f5;
    --30-secondary:   #f5f0fd;
    --30-border:      #d0c0e8;
    --30-border-dark: #1c1528;
    --10-primary:     #a855f7;
    --10-hover:       #9333ea;
    --text-bright:    #f5f0fd;
    --text-muted:     #a890c8;
    --text-faint:     #706090;
    --text-on-light:  #110d1a; */

    /*  Sunflower */
    /* --60-primary:     #18140a;
    --60-secondary:   #261e0e;
    --30-primary:     #f5f0d8;
    --30-secondary:   #fdfaee;
    --30-border:      #e0d8a8;
    --30-border-dark: #261e0e;
    --10-primary:     #eab308;
    --10-hover:       #ca9a07;
    --text-bright:    #fdfaee;
    --text-muted:     #b0a060;
    --text-faint:     #786840;
    --text-on-light:  #18140a; */

    /*  Kyoto Night */
    /* --60-primary:     #12080a;
    --60-secondary:   #1e1010;
    --30-primary:     #f5e8d8;
    --30-secondary:   #fdf5ec;
    --30-border:      #e0c8a8;
    --30-border-dark: #1e1010;
    --10-primary:     #f43f5e;
    --10-hover:       #e11d48;
    --text-bright:    #fdf5ec;
    --text-muted:     #c09878;
    --text-faint:     #886858;
    --text-on-light:  #12080a; */

    /* Cyberpunk */
    /* --60-primary:     #080c14;
    --60-secondary:   #0e1420;
    --30-primary:     #d8e8f8;
    --30-secondary:   #eef4fc;
    --30-border:      #a8c8e8;
    --30-border-dark: #0e1420;
    --10-primary:     #f0e040;
    --10-hover:       #d8c820;
    --text-bright:    #eef4fc;
    --text-muted:     #7898b8;
    --text-faint:     #486888;
    --text-on-light:  #080c14; */

    /*  Matcha */
    /* --60-primary:     #0e1610;
    --60-secondary:   #162018;
    --30-primary:     #e2eed8;
    --30-secondary:   #f2f8ec;
    --30-border:      #c0d8a8;
    --30-border-dark: #162018;
    --10-primary:     #84cc16;
    --10-hover:       #65a30d;
    --text-bright:    #f2f8ec;
    --text-muted:     #88a870;
    --text-faint:     #587848;
    --text-on-light:  #0e1610; */

    /*  Tropical */
    /* --60-primary:     #0a1614;
    --60-secondary:   #102020;
    --30-primary:     #d8f5ee;
    --30-secondary:   #edfdf8;
    --30-border:      #a8e0d0;
    --30-border-dark: #102020;
    --10-primary:     #10b981;
    --10-hover:       #059669;
    --text-bright:    #edfdf8;
    --text-muted:     #70b098;
    --text-faint:     #407860;
    --text-on-light:  #0a1614; */

    /*  Frost */
    /* --60-primary:     #0d1117;
--60-secondary:   #161b22;
--30-primary:     #dce8f5;
--30-secondary:   #eef4fb;
--30-border:      #b0cce0;
--30-border-dark: #161b22;
--10-primary:     #58a6ff;
--10-hover:       #388bfd;
--text-bright:    #eef4fb;
--text-muted:     #7898b8;
--text-faint:     #486080;
--text-on-light:  #0d1117; */

    /*  Coral Reef */
    /* --60-primary:     #140c0a;
--60-secondary:   #201410;
--30-primary:     #fce8e0;
--30-secondary:   #fef4f0;
--30-border:      #e8c8b8;
--30-border-dark: #201410;
--10-primary:     #ff6b6b;
--10-hover:       #ee5a5a;
--text-bright:    #fef4f0;
--text-muted:     #c09080;
--text-faint:     #886858;
--text-on-light:  #140c0a; */

    /* Blueberry */
    /* --60-primary:     #0a0d1a;
--60-secondary:   #12162a;
--30-primary:     #e0e4f8;
--30-secondary:   #f0f2fd;
--30-border:      #b8c0e8;
--30-border-dark: #12162a;
--10-primary:     #4f6ef7;
--10-hover:       #3a57e8;
--text-bright:    #f0f2fd;
--text-muted:     #8898d0;
--text-faint:     #5868a0;
--text-on-light:  #0a0d1a; */

    /*  Palm Beach */
    /* --60-primary:     #081410;
--60-secondary:   #0e2018;
--30-primary:     #d8f0e4;
--30-secondary:   #ecfaf2;
--30-border:      #a8d8c0;
--30-border-dark: #0e2018;
--10-primary:     #f59e0b;
--10-hover:       #d97706;
--text-bright:    #ecfaf2;
--text-muted:     #70a888;
--text-faint:     #407858;
--text-on-light:  #081410; */

    /*  Candlelight */
    /* --60-primary:     #14100a;
--60-secondary:   #201a10;
--30-primary:     #f8f0dc;
--30-secondary:   #fdfaee;
--30-border:      #e8d8a8;
--30-border-dark: #201a10;
--10-primary:     #f59e0b;
--10-hover:       #d97706;
--text-bright:    #fdfaee;
--text-muted:     #b8a060;
--text-faint:     #887040;
--text-on-light:  #14100a; */

    /*  Soap */
    /* --60-primary:     #10101a;
--60-secondary:   #18182a;
--30-primary:     #e8e8f8;
--30-secondary:   #f4f4fd;
--30-border:      #c8c8e8;
--30-border-dark: #18182a;
--10-primary:     #c084fc;
--10-hover:       #a855f7;
--text-bright:    #f4f4fd;
--text-muted:     #a0a0c8;
--text-faint:     #707098;
--text-on-light:  #10101a; */

    /*  Cherry */
    /* --60-primary:     #130810;
--60-secondary:   #200e18;
--30-primary:     #fce8f0;
--30-secondary:   #fef4f8;
--30-border:      #e8b8d0;
--30-border-dark: #200e18;
--10-primary:     #be123c;
--10-hover:       #9f1239;
--text-bright:    #fef4f8;
--text-muted:     #c07890;
--text-faint:     #885060;
--text-on-light:  #130810; */

    /*  Wheat Field */
    /* --60-primary:     #16120a;
--60-secondary:   #241c10;
--30-primary:     #f5eed8;
--30-secondary:   #fdfaee;
--30-border:      #e0d0a0;
--30-border-dark: #241c10;
--10-primary:     #92400e;
--10-hover:       #78350f;
--text-bright:    #fdfaee;
--text-muted:     #a89060;
--text-faint:     #786040;
--text-on-light:  #16120a; */

    /* Eclipse */
    /* --60-primary:     #080808;
--60-secondary:   #121212;
--30-primary:     #e8e0d8;
--30-secondary:   #f5f0e8;
--30-border:      #c8c0b0;
--30-border-dark: #121212;
--10-primary:     #fbbf24;
--10-hover:       #f59e0b;
--text-bright:    #f5f0e8;
--text-muted:     #a09880;
--text-faint:     #706850;
--text-on-light:  #080808; */

    /*  Edo */
    /* --60-primary:     #100c14;
--60-secondary:   #1a1420;
--30-primary:     #f0e8f8;
--30-secondary:   #f8f4fd;
--30-border:      #d8c8e8;
--30-border-dark: #1a1420;
--10-primary:     #e879f9;
--10-hover:       #d946ef;
--text-bright:    #f8f4fd;
--text-muted:     #b890c8;
--text-faint:     #886898;
--text-on-light:  #100c14; */

    /* Indigo Parchment */
    --60-primary: #0A0840;
    --60-secondary: #170C79;
    --60-tertiary: #1E10A0;
    --30-primary: #E8EAF5;
    --30-secondary: #F0F2FA;
    --30-border: #C0C4E0;
    --30-border-dark: #170C79;
    --10-primary: #56B6C6;
    --10-secondary: #8ACBD0;
    --10-hover: #3DA0B0;
    --text-bright: #F0F2FA;
    --text-muted: #A8D4DA;
    --text-faint: #6B9CA8;
    --text-on-light: #0A0840;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

#app {
    margin: 0;
    padding: 0;
    overflow: hidden;
}

/* ============================================================
   BASE
   ============================================================ */
* {
    font-family: 'Poppins', sans-serif;
}

:global(body),
:global(html) {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

:global(#app) {
    margin: 0;
    padding: 0;
}

/* ============================================================
   LOADER
   ============================================================ */
.loader-overlay {
    position: fixed;
    inset: 0;
    background: var(--60-primary);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.6s ease, visibility 0.6s ease;
    opacity: 1;
    visibility: visible;
}

.loader-overlay.loader-hidden {
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
}

.loader-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}

.loader-logo {
    animation: loaderPulse 1.5s ease-in-out infinite;
}

@keyframes loaderPulse {

    0%,
    100% {
        opacity: 1;
        transform: scale(1);
    }

    50% {
        opacity: 0.6;
        transform: scale(0.95);
    }
}

.loader-studio-name {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: var(--text-bright);
    margin: 0;
}

.loader-brush-track {
    width: 160px;
    height: 2px;
    background: var(--60-secondary);
    border-radius: 2px;
    overflow: hidden;
}

.loader-brush-fill {
    height: 100%;
    width: 0%;
    background: var(--10-primary);
    border-radius: 2px;
    animation: brushFill 1.8s ease forwards;
}

@keyframes brushFill {
    0% {
        width: 0%;
    }

    60% {
        width: 80%;
    }

    100% {
        width: 100%;
    }
}

.loader-tagline {
    font-size: 0.7rem;
    color: var(--text-faint);
    letter-spacing: 0.1em;
    margin: 0;
    animation: loaderBlink 1.2s ease-in-out infinite;
}

@keyframes loaderBlink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0.3;
    }
}

/* ============================================================
   NAVBAR
   ============================================================ */
.navbar-container {
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 1px 0 var(--30-border);
}

.navbar-card {
    margin: 0 !important;
    border-radius: 0 !important;
    background: var(--60-primary) !important;
}

/* Replace all :deep(.p-menubar) with */
.p-menubar {
    background: var(--60-primary) !important;
    border: none !important;
    border-radius: 0 !important;
}

.p-menubar .p-menubar-item-link,
.p-menubar .p-menubar-item>.p-menubar-item-content {
    color: var(--text-bright) !important;
    letter-spacing: 0.05em;
    font-size: 0.85rem;
    text-transform: uppercase;
}

.p-menubar .p-menubar-item-link:hover {
    background: rgba(255, 255, 255, 0.05) !important;
    color: var(--10-primary) !important;
}

.p-menubar-root-list {
    flex: 1;
    justify-content: center;
}

/* Tier button */
.tier-button.p-button {
    background: transparent !important;
    color: var(--10-primary) !important;
    border: 1px solid var(--10-primary) !important;
    transition: background 0.2s ease, color 0.2s ease !important;
}

.tier-button.p-button:hover {
    background: var(--10-primary) !important;
    color: #ffffff !important;
}

/* Work modal */
.work-modal .p-dialog {
    border: none !important;
    border-radius: 4px;

    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
    padding: 0 !important;
}

.work-modal .p-dialog-content {
    padding: 0 !important;
    background: var(--60-primary);
    overflow: hidden;
}

.work-modal .p-dialog>.p-dialog-content {
    padding: 0 !important;
}

/* ============================================================
   THEME EDITOR PANEL
   ============================================================ */
.theme-editor-panel {
    position: fixed;
    right: 0;
    top: 60px;
    width: 350px;
    max-width: 90vw;
    background: var(--30-secondary);
    border-left: 1px solid var(--30-border);
    box-shadow: -4px 0 12px rgba(0, 0, 0, 0.08);
    padding: 0;
    z-index: 99;
    height: calc(100vh - 60px);
    transform: translateX(100%);
    transition: transform 0.3s ease
}

.theme-editor-panel.theme-panel-open {
    transform: translateX(0);
}

.theme-toggle-btn {
    background: transparent;
    color: var(--text-bright);
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 1.2rem;
    padding: 0.5rem 1rem;
    transition: all 0.3s ease;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}

.theme-toggle-btn:hover {
    color: var(--10-primary);
}

.theme-content {
    padding: 1.5rem;
    overflow-y: auto;
    max-height: calc(100vh - 180px);
}

.theme-content h3 {
    margin: 0 0 1.5rem 0;
    font-size: 1rem;
    font-weight: 700;
    color: var(--60-primary);
}

.preset-buttons {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
}

.preset-btn {
    padding: 0.6rem;
    border: 1px solid var(--30-border);
    border-radius: 6px;
    background: var(--30-secondary);
    color: var(--60-primary);
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s ease;
}

.preset-btn:hover {
    border-color: var(--10-primary);
    background: var(--30-primary);
}

.color-inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
}

.color-input-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.color-input-group label {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--60-primary);
}

.color-picker-group {
    display: flex;
    gap: 0.5rem;
    align-items: center;
}

.color-input {
    width: 50px;
    height: 40px;
    border: 1px solid var(--30-border);
    border-radius: 6px;
    cursor: pointer;
    background: transparent;
}

.color-value {
    font-size: 0.85rem;
    font-family: monospace;
    color: var(--text-muted);
}

.reset-btn {
    width: 100%;
    padding: 0.7rem;
    border: 1px solid var(--30-border);
    border-radius: 6px;
    background: var(--30-secondary);
    color: var(--60-primary);
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
}

.reset-btn:hover {
    background: var(--30-primary);
    border-color: var(--10-primary);
}



/* ============================================================
   HERO / TAG SECTION
   ============================================================ */
.tag-section {
    width: 100%;
    background: linear-gradient(135deg, var(--60-primary) 0%, #0f0860 100%);
    color: var(--text-bright);
    padding: 5rem 2rem 4rem;
    text-align: center;
    margin-bottom: 0;
    scroll-margin-top: 100px;
    position: relative;
    overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  pointer-events: none;
}

.hero-brush {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--10-primary);
    margin-bottom: 1.5rem;
    position: relative;
    opacity: 0;
    animation: heroFadeUp 0.6s ease 0.1s forwards;
}

.hero-eyebrow-line {
    display: inline-block;
    width: 32px;
    height: 1px;
    background: var(--10-primary);
}

.hero-headline {
    margin: 0 auto 1.5rem;
    max-width: 700px;
    position: relative;
}

.hero-headline .line {
    display: block;
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 700;
    line-height: 1.15;
    color: #efe3ca;
    opacity: 0;
    transform: translateY(24px);
    font-family: 'Poppins', sans-serif;
}

.hero-headline .line:nth-child(1) {
    animation: heroFadeUp 0.65s ease 0.25s forwards;
}

.hero-headline .line:nth-child(2) {
    animation: heroFadeUp 0.65s ease 0.40s forwards;
}

.hero-headline .line:nth-child(3) {
    animation: heroFadeUp 0.65s ease 0.55s forwards;
}

.hero-headline .accent {
    color: var(--10-primary);
    font-style: italic;
    position: relative;
}

.hero-headline .accent::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--10-primary);
    animation: heroUnderline 0.5s ease 1.1s forwards;
}

.hero-sub {
    font-size: 0.9rem;
    font-weight: 300;
    color: #8acbd0;
    letter-spacing: 0.1em;
    margin: 0 auto;
    max-width: 400px;
    position: relative;
    opacity: 0;
    animation: heroFadeUp 0.6s ease 0.75s forwards;
}

@keyframes heroFadeUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes heroUnderline {
    to {
        width: 100%;
    }
}

/* ============================================================
   GALLERY
   ============================================================ */
.gallery-container {
    width: 100%;
    background: var(--60-primary);
    padding: 0;
    overflow: hidden;
}

.gallery-scroll-track {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    cursor: grab;
}

.gallery-scroll-track::-webkit-scrollbar {
    display: none;
}

.gallery-scroll-track:active {
    cursor: grabbing;
}

.gallery-scroll-item {
    flex: 0 0 420px;
    height: 500px;
    overflow: hidden;
    position: relative;
    transition: flex-basis 0.4s ease;
    cursor: pointer;
}

.gallery-scroll-item.active {
    flex: 0 0 640px;
}

.gallery-scroll-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease, filter 0.4s ease;
    filter: brightness(0.6);
    display: block;
}

.gallery-scroll-item.active img {
    filter: brightness(1);
}

.gallery-scroll-item:hover img {
    transform: scale(1.04);
    filter: brightness(0.85);
}

.gallery-scroll-item.active:hover img {
    filter: brightness(1);
}



/* ============================================================
   INTRO SECTION
   ============================================================ */
.intro-section {
    width: 100%;
    background: var(--60-primary);
    color: var(--30-secondary);
    padding: 4rem 2rem;
    text-align: center;
    margin-bottom: 0;
    border-top: 1px solid var(--10-primary);
    border-bottom: 1px solid var(--10-primary);
}

.intro-content h1 {
    font-size: 2.5rem;
    margin: 0 0 1rem 0;
    font-weight: 600;
    color: var(--10-primary);
    letter-spacing: -0.01em;
}

.intro-content h2 {
    font-size: 1rem;
    margin: 0 auto;
    max-width: 600px;
    line-height: 1.8;
    font-weight: 300;
    color: var(--text-bright);
    letter-spacing: 0.02em;
}

/* ============================================================
   WORKS SECTION
   ============================================================ */
.works-section {
    width: 100%;
    padding: 4rem 2rem;
    margin: 0;
    background: var(--30-primary);
    scroll-margin-top: 100px;
}

.works-title {
    font-family: "Playfair Display", serif;
    font-size: 2rem;
    font-weight: 700;
    color: inherit;
    margin: 0 auto;
    display: block;
    text-align: center;
    position: relative;
    padding-bottom: 6px;
    margin: 0 0 3rem 0;
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




/* ============================================================
   WORK MODAL
   ============================================================ */
.work-modal :deep(.p-dialog) {
    border: none !important;
    border-radius: 4px;
    overflow: hidden;
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.5);
    padding: 0 !important;
}

.work-modal :deep(.p-dialog-content) {
    padding: 0 !important;
    background: var(--60-primary);
    overflow: hidden;
}

.work-modal :deep(.p-dialog > .p-dialog-content) {
    padding: 0 !important;
}

.modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: fit-content;
    max-width: 90vw;
    max-height: 90vh;
    overflow: hidden;
    /* clip everything inside */
}

.modal-image {
    width: auto;
    height: auto;
    max-width: 90vw;
    max-height: calc(90vh - 60px);
    /* reserve space for info bar */
    display: block;
    object-fit: contain;
}

.modal-close-btn {
    position: absolute;
    top: 0.65rem;
    right: 0.65rem;
    z-index: 10;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    color: var(--text-bright);
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.7rem;
    transition: background 0.2s ease;
}

.modal-close-btn:hover {
    background: rgba(200, 169, 110, 0.8);
}

.modal-info {
    padding: 0.75rem 1rem;
    background: var(--60-primary);
}

.modal-title {
    margin: 0;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--text-bright);
}

.modal-category {
    margin: 0.2rem 0 0 0;
    font-size: 0.7rem;
    color: var(--10-primary);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

/* ============================================================
   TIERS SECTION
   ============================================================ */
.tiers-section {
    width: 100%;
    padding: 4rem 2rem;
    margin: 0;
    background: var(--30-secondary);
    border-top: 1px solid var(--30-border);
    border-bottom: 1px solid var(--30-border);
    scroll-margin-top: 100px;
}

.tiers-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    font-weight: 600;
    color: var(--60-primary);
    letter-spacing: -0.01em;
}

.tiers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.tier-card {
    border: 1px solid var(--30-border);
    border-radius: 4px;
    padding: 2rem;
    background: var(--30-primary);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.tier-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
    border-color: var(--10-primary);
}

.tier-card.featured {
    border: 2px solid var(--10-primary);
    background: #ffffff;
    box-shadow: 0 8px 24px rgba(200, 169, 110, 0.2);
}

.tier-card.featured:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 32px rgba(200, 169, 110, 0.25);
}

.tier-badge {
    position: absolute;
    top: -12px;
    right: 20px;
    background: var(--10-primary);
    color: #ffffff;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    letter-spacing: 0.04em;
}

.tier-name {
    font-size: 1.3rem;
    font-weight: 600;
    text-align: center;
    margin: 0;
    color: var(--60-primary);
    letter-spacing: 0.02em;
    text-transform: uppercase;
}

.tier-price {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    font-size: 2.5rem;
    font-weight: 700;
}

.currency {
    font-size: 1.5rem;
    color: var(--text-muted);
}

.amount {
    color: var(--10-primary);
}

.tier-divider {
    border: none;
    height: 1px;
    background: var(--30-border);
    margin: 0.5rem 0;
}

.tier-desc {
    font-size: 0.9rem;
    line-height: 1.7;
    color: var(--text-muted);
    margin: 0;
    text-align: left;
    flex: 1;
}

.tier-button {
    margin-top: auto;
    padding: 0.75rem 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.85rem;
}

:deep(.tier-button.p-button) {
    background: transparent !important;
    color: var(--10-primary) !important;
    border: 1px solid var(--10-primary) !important;
    transition: background 0.2s ease, color 0.2s ease !important;
}

:deep(.tier-button.p-button:hover) {
    background: var(--10-primary) !important;
    color: #ffffff !important;
}

/* ============================================================
   CONTACT SECTION
   ============================================================ */
.contact-section {
    width: 100%;
    padding: 4rem 2rem;
    background: var(--60-secondary);
    margin: 0;
    scroll-margin-top: 100px;
}

.contact-container {
    max-width: 700px;
    margin: 0 auto;
}

.contact-title {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    margin: 0 0 0.5rem 0;
    color: var(--text-bright);
    letter-spacing: -0.01em;
}

.contact-subtitle {
    text-align: center;
    font-size: 0.95rem;
    color: var(--text-muted);
    margin: 0 0 2rem 0;
    font-weight: 300;
    letter-spacing: 0.02em;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.form-group.full-width {
    grid-column: 1 / -1;
}

.form-label {
    font-weight: 500;
    font-size: 0.8rem;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.form-input {
    padding: 0.75rem 1rem;
    border: none;
    border-bottom: 1px solid var(--30-border-dark);
    border-radius: 0;
    background: transparent;
    color: var(--text-bright);
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.form-input::placeholder {
    color: var(--text-faint);
}

.form-input:focus {
    outline: none;
    border-bottom-color: var(--10-primary);
    box-shadow: none;
}

.form-select {
    appearance: none;
    -webkit-appearance: none;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23c8a96e' d='M6 8L1 3h10z'/%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    padding-right: 2.5rem;
    cursor: pointer;
}

.form-select option {
    background: var(--60-secondary);
    color: var(--text-bright);
}

.form-textarea {
    padding: 0.75rem 1rem;
    border: none;
    border-bottom: 1px solid var(--30-border-dark);
    border-radius: 0;
    background: transparent;
    color: var(--text-bright);
    font-family: 'Poppins', sans-serif;
    font-size: 0.95rem;
    resize: vertical;
    transition: all 0.3s ease;
    width: 100%;
    box-sizing: border-box;
}

.form-textarea::placeholder {
    color: var(--text-faint);
}

.form-textarea:focus {
    outline: none;
    border-bottom-color: var(--10-primary);
    box-shadow: none;
}

.submit-button {
    margin-top: 1rem;
    padding: 0.9rem 3rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    border-radius: 4px;
    align-self: center;
    background: var(--10-primary) !important;
    color: #ffffff !important;
    border: none !important;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    font-size: 0.85rem;
    transition: background 0.3s ease !important;
}

.submit-button:hover {
    background: var(--10-hover) !important;
}




/* ============================================================
   FOOTER
   ============================================================ */
.footer {
    background: var(--60-primary);
    border-top: 1px solid var(--30-border-dark);
    padding: 2.5rem 0 1.5rem;
}

.footer-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 2rem;
    margin-bottom: 1.5rem;
}

.footer-section h3 {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text-bright);
    margin-bottom: 0.75rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

.footer-section address {
    font-style: normal;
}

.footer-section p,
.footer-section address p {
    font-size: 0.875rem;
    color: var(--text-muted);
    line-height: 1.8;
    margin: 0;
}

.footer-email {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.875rem;
    color: var(--10-primary);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-email:hover {
    color: var(--10-hover);
    text-decoration: underline;
}

.footer-social h4 {
    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-muted);
    margin-bottom: 0.75rem;
}

.social-links {
    display: flex;
    gap: 8px;
}

.social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    border-radius: 4px;
    border: 1px solid var(--30-border-dark);
    color: var(--text-muted);
    text-decoration: none;
    transition: background 0.2s, color 0.2s, border-color 0.2s;
}

.social-btn:hover {
    background: var(--10-primary);
    border-color: var(--10-primary);
    color: #ffffff;
}

.footer-bottom {
    border-top: 1px solid var(--30-border-dark);
    padding-top: 1.25rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-bottom-left {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.footer-bottom-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 4px;
}

.footer-credit-label {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-faint);
    margin: 0;
}

.footer-credit-block {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.footer-credit-name {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.03em;
}

.footer-credit-divider {
    font-size: 0.75rem;
    color: var(--30-border-dark);
}

.footer-credit-link {
    font-size: 0.75rem;
    color: var(--text-faint);
    text-decoration: none;
    transition: color 0.2s ease;
}

.footer-credit-link:hover {
    color: var(--10-primary);
}

.copyright,
.ai-disclaimer {
    font-size: 0.75rem;
    color: var(--text-faint);
    margin: 0;
    letter-spacing: 0.02em;
}

@media (max-width: 768px) {

    /* Theme */
    .theme-editor-panel {
        width: 100%;
    }

    /* Gallery */
    .gallery-scroll-item {
        flex: 0 0 280px;
        height: 340px;
    }

    .gallery-scroll-item.active {
        flex: 0 0 360px;
    }

    /* Works */
    .works-title {
        font-size: 1.5rem;
    }

    /* Contact */
    .contact-section {
        padding: 2rem 1rem;
    }

    .contact-title {
        font-size: 1.5rem;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    /* Footer */
    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-bottom-right {
        align-items: flex-start;
    }
}

/* ============================================================
   RESPONSIVE
   ============================================================ */



.gallery-container {
    width: 100%;
    background: var(--60-primary);
    padding: 0;
    overflow: hidden;
    position: relative;
}

.gallery-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    color: var(--text-bright);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s ease, border-color 0.2s ease;
}

.gallery-btn:hover {
    background: rgba(var(--10-primary), 0.6);
    border-color: var(--10-primary);
    color: var(--10-primary);
}

.gallery-btn-left {
    left: 1rem;
}

.gallery-btn-right {
    right: 1rem;
}

.gallery-scroll-track {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    cursor: default;
    /* remove grab cursor */
    scroll-snap-type: x mandatory;
}

.gallery-scroll-item {
    flex: 0 0 420px;
    height: 500px;
    overflow: hidden;
    position: relative;
    transition: flex-basis 0.4s ease;
    cursor: pointer;
    scroll-snap-align: start;
}

/* ============================================================
   WORK CARD TRANSITION
   ============================================================ */
.work-card-enter-active {
    transition: opacity 0.4s ease, transform 0.4s ease;
}

.work-card-enter-from {
    opacity: 0;
    transform: translateY(20px) scale(0.97);
}

.work-card-enter-to {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>