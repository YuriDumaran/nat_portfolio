import { createApp } from 'vue'
import App from './App.vue'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'
import 'primeicons/primeicons.css'

document.body.style.backgroundColor = '#f5f0e8'

const KonseptAura = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#fdf8f0',
            100: '#f5e9d0',
            200: '#ead5aa',
            300: '#dbbe84',
            400: '#c8a96e',
            500: '#b08d50',
            600: '#8a6d3a',
            700: '#654f28',
            800: '#3f3118',
            900: '#1f180a',
            950: '#0f0c05'
        },
        colorScheme: {
            light: {
                primary: {
                    color: '#c8a96e',
                    inverseColor: '#ffffff',
                    hoverColor: '#dbbe84',
                    activeColor: '#b08d50'
                },
                highlight: {
                    background: '#eee8dc',
                    focusBackground: '#d4cfc6',
                    color: '#1c1a17',
                    focusColor: '#1c1a17'
                },
                surface: {
                    0:   '#ffffff',
                    50:  '#f5f0e8',
                    100: '#eee8dc',
                    200: '#e4ddd1',
                    300: '#d4cfc6',
                    400: '#b0aba3',
                    500: '#8c8880',
                    600: '#6b6660',
                    700: '#4a4740',
                    800: '#2e2b26',
                    900: '#1c1a17',
                    950: '#0e0d0b'
                }
            },
            dark: {
                primary: {
                    color: '#c8a96e',
                    inverseColor: '#1c1a17',
                    hoverColor: '#dbbe84',
                    activeColor: '#b08d50'
                },
                highlight: {
                    background: 'rgba(200, 169, 110, 0.2)',
                    focusBackground: 'rgba(200, 169, 110, 0.3)',
                    color: '#f5f0e8',
                    focusColor: '#ffffff'
                },
                surface: {
                    0:   '#ffffff',
                    50:  '#f5f0e8',
                    100: '#eee8dc',
                    200: '#e4ddd1',
                    300: '#d4cfc6',
                    400: '#b0aba3',
                    500: '#8c8880',
                    600: '#6b6660',
                    700: '#4a4740',
                    800: '#2e2b26',
                    900: '#1c1a17',
                    950: '#0e0d0b'
                }
            }
        }
    }
})

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: KonseptAura,
        options: {
            prefix: 'p',
            darkModeSelector: 'false',
            cssLayer: false
        }
    }
})

app.mount('#app')