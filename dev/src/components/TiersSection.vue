<template>
  <div class="tiers-section" id="services">
    <h2 class="tiers-title">Commission Tiers</h2>
    <div class="tiers-grid">
      <div
        v-for="(tier, index) in commissionTiers"
        :key="index"
        class="tier-card"
        :class="{ featured: tier.featured }"
      >
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
</template>

<script setup>
import Button from 'primevue/button';

const props = defineProps({
  commissionTiers: Array
});
const emit = defineEmits(['select-tier']);

const selectTier = (tier) => emit('select-tier', tier);
</script>
