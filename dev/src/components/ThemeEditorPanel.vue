<template>
  <div class="theme-editor-panel" :class="{ 'theme-panel-open': showThemePanel }">
    <button class="theme-toggle-btn" @click="$emit('toggle')">
      <i class="pi pi-palette"></i>
      <span>Theme</span>
    </button>

    <div v-if="showThemePanel" class="theme-content">
      <h3>Color Theme Editor (60-30-10)</h3>

      <div class="preset-buttons">
        <button
          v-for="preset in themePresets"
          :key="preset.name"
          @click="applyTheme(preset)"
          class="preset-btn"
        >
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

      <button @click="$emit('reset-theme')" class="reset-btn">Reset to Default</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  showThemePanel: Boolean,
  themePresets: Array,
  customTheme: Object
});

const emit = defineEmits(['toggle', 'apply-theme', 'update-theme', 'reset-theme']);

const applyTheme = (preset) => emit('apply-theme', preset);
const updateTheme = () => emit('update-theme');
</script>
