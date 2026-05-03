<template>
  <div class="contact-section" id="contact">
    <div class="contact-container">
      <h2 class="contact-title">Get In Touch</h2>
      <p class="contact-subtitle">Have a project in mind? Let's create something amazing together.</p>

      <form @submit.prevent="$emit('submit-form')" class="contact-form">
        <div class="form-grid">
          <div class="form-group">
            <label for="name" class="form-label">Name *</label>
            <InputText id="name" v-model="contactForm.name" placeholder="Your Name" class="form-input" required />
          </div>
          <div class="form-group">
            <label for="email" class="form-label">Email *</label>
            <InputText id="email" v-model="contactForm.email" type="email" placeholder="your@email.com" class="form-input" required />
          </div>
          <div class="form-group">
            <label for="subject" class="form-label">Subject *</label>
            <InputText id="subject" v-model="contactForm.subject" placeholder="Project Subject" class="form-input" required />
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
          <Textarea id="message" v-model="contactForm.message" placeholder="Tell us about your project..." :autoResize="true" rows="6" class="form-textarea" required />
        </div>

        <Button label="Send Message" class="submit-button" type="submit" severity="primary" />
      </form>
    </div>
  </div>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import Button from 'primevue/button';

const props = defineProps({
  contactForm: Object,
  commissionTiers: Array
});
const emit = defineEmits(['submit-form']);
</script>
