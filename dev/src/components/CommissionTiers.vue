<template>
    <div class="tiers-section" id="services">

        <!-- Heading -->
        <div class="tiers-heading">
            <span class="tiers-ghost">TIERS</span>
            <p class="tiers-eyebrow">
                <span class="tiers-eyebrow-line"></span>
                Pricing
                <span class="tiers-eyebrow-line"></span>
            </p>
            <h2 class="tiers-title">Commission <em>Tiers</em></h2>
            <div class="tiers-dots">
                <span class="tiers-dot"></span>
                <span class="tiers-dot active"></span>
                <span class="tiers-dot"></span>
            </div>
        </div>

        <!-- Cards -->
        <div class="tiers-grid" style="padding-top: 24px;">
            <div v-for="(tier, index) in commissionTiers" :key="index" class="tier-card"
                :class="{ featured: tier.featured }">
                <div class="price-bubble">
                    <span class="currency">$</span>{{ tier.price }}
                </div>
                <span v-if="tier.featured" class="tier-badge">Most Popular</span>
                <p class="tier-name">{{ tier.name }}</p>
                <div class="tier-divider"></div>
                <ul class="tier-features">
                    <li v-for="(feature, fi) in tier.features" :key="fi" class="tier-feature">
                        {{ feature }}
                    </li>
                </ul>
                <Button label="Select Tier" class="tier-button w-full" @click="$emit('select-tier', tier)" />
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button'

defineEmits(['select-tier'])

const commissionTiers = [
    {
        name: 'Starter',
        price: 50,
        featured: false,
        features: [
            'Simple character illustration',
            'Basic pose & background',
            '1 revision included',
            'Standard resolution',
        ]
    },
    {
        name: 'Professional',
        price: 150,
        featured: true,
        features: [
            'Full-body character design',
            'Custom pose & background',
            'Color variations included',
            '3 revisions included',
            'High resolution delivery',
        ]
    },
    {
        name: 'Premium',
        price: 300,
        featured: false,
        features: [
            'Multi-character composition',
            'Custom environment design',
            'Hi-res deliverables',
            'Unlimited revisions',
            'Commercial usage rights',
        ]
    },
]
</script>

<style scoped>
/* ── Section ── */
.tiers-section {
    width: 100%;
    padding: 5rem 2rem 4rem;
    margin: 0;
    background: linear-gradient(160deg, #eef2ff 0%, #e8f4f8 50%, #f0f4ff 100%);
    position: relative;
    overflow: hidden;
    scroll-margin-top: 100px;
    border-top: 2px solid #56B6C6;
    border-bottom: 2px solid #56B6C6;
    outline: 4px solid rgba(86, 182, 198, 0.2);
    outline-offset: -4px;
    box-shadow:
        0 -6px 24px rgba(86, 182, 198, 0.18),
        0 6px 24px rgba(86, 182, 198, 0.18),
        inset 0 0 40px rgba(86, 182, 198, 0.05);
}

/* inset ring */
.tiers-section::after {
    content: '';
    position: absolute;
    inset: 8px;
    border: 1px solid rgba(86, 182, 198, 0.15);
    pointer-events: none;
    z-index: 0;
}

.tiers-section::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 800px; height: 500px;
    background: radial-gradient(ellipse at center, rgba(86,182,198,0.1) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
}

/* ── Heading ── */
.tiers-heading {
    text-align: center;
    position: relative;
    padding: 0.5rem 0;
    margin-bottom: 0.5rem;
    z-index: 1;
}

.tiers-ghost {
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    font-size: 5rem;
    font-weight: 900;
    letter-spacing: -0.04em;
    color: transparent;
    -webkit-text-stroke: 1px rgba(23, 12, 121, 0.07);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    line-height: 1;
}

.tiers-eyebrow {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: #56B6C6;
    margin: 0 0 6px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
}

.tiers-eyebrow-line {
    display: inline-block;
    width: 20px; height: 1px;
    background: #56B6C6;
    opacity: 0.5;
}

.tiers-title {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.02em;
    line-height: 1;
    margin: 0;
    color: #170C79;
    position: relative;
}

.tiers-title em {
    color: #56B6C6;
    font-style: normal;
}

.tiers-dots {
    display: flex;
    justify-content: center;
    gap: 5px;
    margin-top: 10px;
    position: relative;
}

.tiers-dot {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(23, 12, 121, 0.15);
}

.tiers-dot.active {
    width: 20px;
    border-radius: 2px;
    background: #56B6C6;
    box-shadow: 0 0 6px rgba(86, 182, 198, 0.6);
}

/* ── Grid ── */
.tiers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

/* ── Cards ── */
.tier-card {
    border-radius: 12px;
    padding: 1.5rem 1.25rem 1.25rem;
    background: #ffffff;
    border: 1px solid rgba(86, 182, 198, 0.2);
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    position: relative;
    overflow: visible;
    box-shadow: 0 4px 16px rgba(86, 182, 198, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tier-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(86, 182, 198, 0.18);
}

.tier-card.featured {
    border: 2px solid #56B6C6;
    box-shadow: 0 8px 32px rgba(86, 182, 198, 0.22);
}

.tier-card.featured:hover {
    transform: translateY(-7px);
    box-shadow: 0 16px 40px rgba(86, 182, 198, 0.3);
}

/* ── Price bubble ── */
.price-bubble {
    position: absolute;
    top: -22px;
    left: 50%;
    transform: translateX(-50%);
    width: 56px; height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, #170C79, #1E10A0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 800;
    color: #EFE3CA;
    box-shadow: 0 4px 14px rgba(23, 12, 121, 0.3);
    border: 2px solid #ffffff;
    letter-spacing: -0.02em;
}

.tier-card.featured .price-bubble {
    background: linear-gradient(135deg, #56B6C6, #3DA0B0);
    box-shadow: 0 4px 16px rgba(86, 182, 198, 0.45);
    width: 62px; height: 62px;
    font-size: 1.05rem;
    top: -26px;
}

.currency {
    font-size: 0.65rem;
    font-weight: 600;
    margin-top: -6px;
    margin-right: 1px;
    opacity: 0.8;
}

/* ── Badge ── */
.tier-badge {
    position: absolute;
    top: -10px;
    right: 16px;
    background: linear-gradient(90deg, #56B6C6, #8ACBD0);
    color: #ffffff;
    padding: 0.25rem 0.85rem;
    border-radius: 20px;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    box-shadow: 0 2px 10px rgba(86, 182, 198, 0.4);
}

/* ── Name ── */
.tier-name {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #170C79;
    text-align: center;
    margin: 1.25rem 0 0;
}

.tier-card.featured .tier-name {
    margin-top: 1.5rem;
}

/* ── Divider ── */
.tier-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(86, 182, 198, 0.3), transparent);
    margin: 0;
}

/* ── Features ── */
.tier-features {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
}

.tier-feature {
    font-size: 0.82rem;
    color: #4a5568;
    line-height: 1.5;
    display: flex;
    align-items: flex-start;
    gap: 8px;
}

.tier-feature::before {
    content: '✦';
    color: rgba(23, 12, 121, 0.25);
    font-size: 0.6rem;
    flex-shrink: 0;
    margin-top: 3px;
}

.tier-card.featured .tier-feature::before {
    color: #56B6C6;
}

/* ── Button ── */
.tier-button {
    margin-top: 0.5rem;
    padding: 0.75rem 1.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    border-radius: 8px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    font-size: 0.82rem;
}

:deep(.tier-button.p-button) {
    background: transparent !important;
    color: #56B6C6 !important;
    border: 1.5px solid rgba(86, 182, 198, 0.4) !important;
    transition: all 0.25s ease !important;
}

:deep(.tier-button.p-button:hover) {
    background: #56B6C6 !important;
    color: #ffffff !important;
    box-shadow: 0 4px 14px rgba(86, 182, 198, 0.4) !important;
    border-color: #56B6C6 !important;
}

:deep(.featured .tier-button.p-button) {
    background: #56B6C6 !important;
    color: #ffffff !important;
    border-color: transparent !important;
    box-shadow: 0 4px 14px rgba(86, 182, 198, 0.35) !important;
}

:deep(.featured .tier-button.p-button:hover) {
    background: #3DA0B0 !important;
    box-shadow: 0 6px 20px rgba(86, 182, 198, 0.5) !important;
}

/* ── Responsive ── */
@media (max-width: 768px) {
    .tiers-grid { grid-template-columns: 1fr; max-width: 400px; }
    .tiers-section { padding: 4rem 1.25rem 3rem; }
}
</style>