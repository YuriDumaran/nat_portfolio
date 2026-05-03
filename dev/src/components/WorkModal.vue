<template>
  <Dialog
    :visible="visible"
    :modal="true"
    :showHeader="false"
    :breakpoints="{ '960px': '75vw', '640px': '90vw' }"
    :style="{ width: '60vw', padding: '0', margin: '0' }"
    :pt="{
      content: { style: 'padding: 0; margin: 0;' },
      root: { style: 'padding: 0; overflow: hidden;' }
    }"
    class="work-modal"
    @update:visible="$emit('update:visible', $event)"
  >
    <div v-if="selectedWork" class="modal-content">
      <button class="modal-close-btn" @click="$emit('update:visible', false)">
        <i class="pi pi-times"></i>
      </button>
      <img :src="selectedWork.image" :alt="selectedWork.title" class="modal-image" />
      <div class="modal-info">
        <h3 class="modal-title">{{ selectedWork.title }}</h3>
        <p class="modal-category">{{ selectedWork.category }}</p>
      </div>
    </div>
  </Dialog>
</template>

<script setup>
import Dialog from 'primevue/dialog';

const props = defineProps({
  visible: Boolean,
  selectedWork: Object
});
const emit = defineEmits(['update:visible']);
</script>
