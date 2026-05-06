# Services Page Expansion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add two new services (Data & AI, Informatica IDMC) and replace the single SVG icon on each service card with a branded stats panel showing logo chips and real metrics.

**Architecture:** All content changes live in the three i18n files (`en.ts`, `nl.ts`, `fy.ts`). The visual card data (logos, metrics) is language-independent and lives in `ServicesPage.astro` as a `serviceCards` array indexed in parallel with `s.items`. The old `serviceIcons` string array is removed entirely and replaced with the richer structure.

**Tech Stack:** Astro 6, TypeScript i18n objects, Simple Icons CDN (`https://cdn.simpleicons.org`), inline CSS in `.astro` `<style>` block.

---

## File Map

| File | Change |
|---|---|
| `src/i18n/en.ts` | Add 2 items to `services.items[]` |
| `src/i18n/nl.ts` | Add 2 items to `services.items[]` (Dutch) |
| `src/i18n/fy.ts` | Add 2 items to `services.items[]` (Frisian) |
| `src/templates/ServicesPage.astro` | Replace `serviceIcons` array + template + CSS |

---

## Task 1: Add new services to English i18n

**Files:**
- Modify: `src/i18n/en.ts`

- [ ] **Step 1: Add the two new service objects**

In `src/i18n/en.ts`, find the closing of the `architecture` item inside `services.items` (around line 113) and add the two new items immediately after it, before the closing `],` of the array:

```ts
      { id: 'data-ai', tagline: 'Data-ready for the AI era', title: 'Data & AI',
        desc: "Helping organisations prepare their data foundations for AI adoption — covering data readiness assessments, AI governance frameworks, and hands-on guidance on trending AI capabilities including LLMs, Copilot integrations, and data pipelines for ML.",
        deliverables: [
          'AI data readiness assessment and gap analysis',
          'Data preparation pipelines for AI/ML workloads',
          'AI governance framework design and implementation',
          'LLM integration advisory (OpenAI, Azure Copilot)',
          'Data quality improvement for AI training data',
          'AI use case prioritisation and roadmap',
        ] },
      { id: 'informatica-idmc', tagline: 'MDM & Data Quality, end-to-end', title: 'Informatica IDMC',
        desc: 'Specialist Informatica IDMC implementations covering MDM 360 and Cloud Data Quality (CDQ). Engaged as both Project Manager and Solution Architect — from initial scoping and stakeholder alignment through to technical design, configuration, and go-live.',
        deliverables: [
          'Informatica IDMC MDM 360 implementation (PM & SA)',
          'Cloud Data Quality (CDQ) configuration and rollout',
          'Data model and hierarchy design in IDMC',
          'Integration design with source and target systems',
          'Project management: planning, governance, stakeholder reporting',
          'Solution architecture: technical design, platform configuration, performance tuning',
        ] },
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: exits with code 0, no TypeScript errors. If you see `Type 'readonly [...]' is not assignable`, check that the new items follow the exact same shape (`id`, `tagline`, `title`, `desc`, `deliverables: string[]`) as existing items.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/en.ts
git commit -m "feat: add Data & AI and Informatica IDMC services to English i18n"
```

---

## Task 2: Add new services to Dutch i18n

**Files:**
- Modify: `src/i18n/nl.ts`

- [ ] **Step 1: Add the two new service objects**

In `src/i18n/nl.ts`, find the closing of the `architecture` item inside `services.items` (around line 113) and add immediately after:

```ts
      { id: 'data-ai', tagline: 'Data klaar voor het AI-tijdperk', title: 'Data & AI',
        desc: 'Ik help organisaties hun data-fundamenten voor te bereiden op AI-adoptie — van data readiness-assessments en AI-governance-frameworks tot praktische begeleiding bij trending AI-mogelijkheden zoals LLMs, Copilot-integraties en datapipelines voor ML.',
        deliverables: [
          'AI data readiness-assessment en gap-analyse',
          'Data-preparatiepipelines voor AI/ML-workloads',
          'Ontwerp en implementatie van AI-governance-framework',
          'LLM-integratie-advies (OpenAI, Azure Copilot)',
          'Datakwaliteitsverbetering voor AI-trainingsdata',
          'AI use case-prioritering en roadmap',
        ] },
      { id: 'informatica-idmc', tagline: 'MDM & Datakwaliteit, end-to-end', title: 'Informatica IDMC',
        desc: 'Specialist Informatica IDMC-implementaties voor MDM 360 en Cloud Data Quality (CDQ). Ingezet als zowel Project Manager als Solution Architect — van initiële scoping en stakeholderafstemming tot technisch ontwerp, configuratie en go-live.',
        deliverables: [
          'Informatica IDMC MDM 360 implementatie (PM & SA)',
          'Cloud Data Quality (CDQ) configuratie en uitrol',
          'Datamodel en hiërarchie-ontwerp in IDMC',
          'Integratieontwerp met bron- en doelsystemen',
          'Projectmanagement: planning, governance, stakeholderrapportage',
          'Oplossingsarchitectuur: technisch ontwerp, platformconfiguratie, prestatieoptimalisatie',
        ] },
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/nl.ts
git commit -m "feat: add Data & AI and Informatica IDMC services to Dutch i18n"
```

---

## Task 3: Add new services to Frisian i18n

**Files:**
- Modify: `src/i18n/fy.ts`

- [ ] **Step 1: Add the two new service objects**

In `src/i18n/fy.ts`, find the closing of the `architecture` item inside `services.items` (around line 113) and add immediately after:

```ts
      { id: 'data-ai', tagline: 'Data klear foar it AI-tiidrek', title: 'Data & AI',
        desc: "Ik help organisaasjes har data-fundamenten klear te meitsjen foar AI-oanneming — fan data readiness-beoardielingen en AI-governance-ramt oant praktyske begelieding by trending AI-mooglikheden lykas LLMs, Copilot-yntegraasjes en datapipelines foar ML.",
        deliverables: [
          'AI data readiness-beoardieling en gap-analyse',
          'Data-preparaasjepipelines foar AI/ML-wurklasten',
          'Ûntwerp en ymplementaasje fan AI-governance-ramt',
          'LLM-yntegreaasje-advys (OpenAI, Azure Copilot)',
          'Datakwaliteitsferbetering foar AI-trainingsdata',
          'AI use case-prioritearring en roadmap',
        ] },
      { id: 'informatica-idmc', tagline: 'MDM & Datakwaliteit, end-to-end', title: 'Informatica IDMC',
        desc: "Spesjalist Informatica IDMC-ymplementaasjes foar MDM 360 en Cloud Data Quality (CDQ). Ynsetten as sawol Projektmanager as Solution Arsjitekt — fan earste scoping en stakeholder-ôfstemming oant technysk ûntwerp, konfiguraasje en go-live.",
        deliverables: [
          'Informatica IDMC MDM 360 ymplementaasje (PM & SA)',
          'Cloud Data Quality (CDQ) konfiguraasje en útrol',
          'Datamodel en hiërargy-ûntwerp yn IDMC',
          'Yntegraasjûntwerp mei boarne- en doelsystemen',
          'Projektbehear: planning, governance, stakeholderrapportearring',
          'Oplossingsarsjitektuer: technysk ûntwerp, platfoarmkonfiguraasje, prestaasje-optimalisaasje',
        ] },
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: exits with code 0.

- [ ] **Step 3: Commit**

```bash
git add src/i18n/fy.ts
git commit -m "feat: add Data & AI and Informatica IDMC services to Frisian i18n"
```

---

## Task 4: Replace service icons with branded stats cards in ServicesPage.astro

**Files:**
- Modify: `src/templates/ServicesPage.astro`

- [ ] **Step 1: Replace the `serviceIcons` array with `serviceCards`**

In `src/templates/ServicesPage.astro`, replace the entire `const serviceIcons = [...]` block (lines 10–15) with:

```ts
const serviceCards: Array<{
  logos: Array<{ src?: string; text?: string; color?: string; name: string }>;
  metrics: Array<{ val: string; label: string }>;
}> = [
  {
    logos: [
      { src: 'https://cdn.simpleicons.org/informatica/1B3A5C', name: 'Informatica' },
      { src: 'https://cdn.simpleicons.org/microsoftazure/0078d4', name: 'Azure' },
      { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', name: 'AWS' },
    ],
    metrics: [
      { val: '8+',   label: 'Years delivering DQ programmes' },
      { val: '100%', label: 'Client satisfaction rate' },
      { val: '15+',  label: 'Governance frameworks built' },
      { val: '5+',   label: 'Industries served' },
    ],
  },
  {
    logos: [
      { src: 'https://cdn.simpleicons.org/informatica/1B3A5C', name: 'Informatica' },
      { src: 'https://cdn.simpleicons.org/sap/0078d4', name: 'SAP MDG' },
      { text: 'R', color: '#7c3aed', name: 'Reltio' },
    ],
    metrics: [
      { val: '80%', label: 'Avg. reduction in data inconsistencies' },
      { val: '12',  label: 'Business units unified in one engagement' },
      { val: '6',   label: 'Countries covered in largest MDM rollout' },
      { val: '3',   label: 'MDM platforms hands-on certified' },
    ],
  },
  {
    logos: [
      { text: 'S', color: '#e85d1e', name: 'Stibo' },
      { src: 'https://cdn.simpleicons.org/akeneo/FF5621', name: 'Akeneo' },
      { src: 'https://cdn.simpleicons.org/shopify/96bf48', name: 'Shopify' },
    ],
    metrics: [
      { val: '3 days', label: 'Time-to-market (down from 3 weeks)' },
      { val: '40K+',   label: 'Products migrated in one project' },
      { val: '8',      label: 'Sales channels connected' },
      { val: '100%',   label: 'Client satisfaction rate' },
    ],
  },
  {
    logos: [
      { src: 'https://cdn.simpleicons.org/amazonaws/FF9900', name: 'AWS' },
      { src: 'https://cdn.simpleicons.org/microsoftazure/0078d4', name: 'Azure' },
      { src: 'https://cdn.simpleicons.org/apachekafka/231F20', name: 'Kafka' },
      { src: 'https://cdn.simpleicons.org/mulesoft/00A1DF', name: 'MuleSoft' },
    ],
    metrics: [
      { val: '15+', label: 'Architecture blueprints delivered' },
      { val: '3',   label: 'Cloud platforms (AWS, Azure, GCP)' },
      { val: '8+',  label: 'Years of architecture experience' },
      { val: '5+',  label: 'Industries covered' },
    ],
  },
  {
    logos: [
      { src: 'https://cdn.simpleicons.org/openai/000000', name: 'OpenAI' },
      { src: 'https://cdn.simpleicons.org/databricks/FF3621', name: 'Databricks' },
      { src: 'https://cdn.simpleicons.org/python/3776AB', name: 'Python' },
      { src: 'https://cdn.simpleicons.org/microsoftazure/0078d4', name: 'Copilot' },
    ],
    metrics: [
      { val: '8+',         label: 'Years of data foundation experience' },
      { val: 'AI-first',   label: 'Governance frameworks designed' },
      { val: '100%',       label: 'Data readiness focus before AI adoption' },
      { val: 'End-to-end', label: 'From data prep to AI deployment' },
    ],
  },
  {
    logos: [
      { src: 'https://cdn.simpleicons.org/informatica/FF4D00', name: 'IDMC' },
      { src: 'https://cdn.simpleicons.org/informatica/1B3A5C', name: 'MDM 360' },
      { src: 'https://cdn.simpleicons.org/informatica/2563eb', name: 'CDQ' },
    ],
    metrics: [
      { val: '8+',  label: 'Years hands-on with Informatica' },
      { val: '2',   label: 'Roles: Project Manager & Solution Architect' },
      { val: 'MDM', label: '& Data Quality specialist modules' },
      { val: '5+',  label: 'IDMC implementations delivered' },
    ],
  },
];
```

- [ ] **Step 2: Replace the card element in the template**

Find this line in the template section (around line 55):

```astro
          <div class="service-icon-large glass-card" aria-hidden="true" set:html={serviceIcons[idx]} />
```

Replace it with:

```astro
          <div class="service-stats-card glass-card" aria-hidden="true">
            <div class="logo-chips">
              {serviceCards[idx].logos.map(logo => (
                <div class="logo-chip">
                  {logo.src
                    ? <img src={logo.src} alt={logo.name} width="14" height="14" loading="lazy" />
                    : <span class="logo-text" style={`color:${logo.color}`}>{logo.text}</span>
                  }
                  <span>{logo.name}</span>
                </div>
              ))}
            </div>
            <div class="metrics-grid">
              {serviceCards[idx].metrics.map(m => (
                <div class="metric-tile">
                  <div class="metric-val">{m.val}</div>
                  <div class="metric-label">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
```

- [ ] **Step 3: Replace the CSS**

In the `<style>` block, replace:

```css
  .service-icon-large { display:flex; align-items:center; justify-content:center; aspect-ratio:1; max-width:280px; margin:0 auto; color:var(--accent-primary); background:var(--bg-surface); }
  .service-icon-large :global(svg) { width:80px; height:80px; opacity:0.75; }
```

With:

```css
  .service-stats-card { background:var(--bg-surface); border-radius:16px; padding:1.5rem; display:flex; flex-direction:column; gap:1rem; max-width:280px; margin:0 auto; }
  .logo-chips { display:flex; flex-wrap:wrap; gap:6px; }
  .logo-chip { display:flex; align-items:center; gap:5px; background:white; border:1px solid var(--border); border-radius:6px; padding:4px 10px; }
  .logo-chip img { width:14px; height:14px; object-fit:contain; }
  .logo-chip span { font-size:9px; color:var(--text-secondary); font-weight:500; }
  .logo-chip .logo-text { font-weight:700; }
  .metrics-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; }
  .metric-tile { background:white; border:1px solid var(--border); border-radius:8px; padding:10px 12px; }
  .metric-val { font-size:1.1rem; font-weight:800; color:var(--accent-primary); line-height:1; }
  .metric-label { font-size:0.65rem; color:var(--text-muted); margin-top:3px; line-height:1.3; }
```

Also update the `@media (max-width:900px)` block — replace `.service-icon-large { display:none; }` with:

```css
    .service-stats-card { display:none; }
```

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```

Expected: exits with code 0. If you see `serviceCards[idx] is possibly undefined`, it means `s.items` now has 6 items but `serviceCards` has fewer — count the entries in both arrays and confirm they match (6 each).

- [ ] **Step 5: Smoke-test in dev server**

```bash
npm run dev
```

Open `http://localhost:4321/services` and verify:
- All 6 service rows render
- Each card panel shows logo chips and a 2×2 metrics grid
- Rows alternate left/right correctly (content left, card right, then reversed)
- Open `http://localhost:4321/nl/services` and `http://localhost:4321/fy/services` — confirm new services appear in Dutch and Frisian

- [ ] **Step 6: Commit**

```bash
git add src/templates/ServicesPage.astro
git commit -m "feat: replace service icons with branded stats cards, add 6th service row"
```

---

## Task 5: Push and verify Render deploy

- [ ] **Step 1: Push all commits**

```bash
git push
```

- [ ] **Step 2: Monitor Render deploy**

In the Render dashboard, watch the deploy log for the new build triggered by the push. Expected build output ends with:

```
✓ Completed in X.Xs.
```

- [ ] **Step 3: Verify live site**

Open your Render URL and navigate to `/services`. Confirm:
- 6 service rows visible
- Logo chips load (Simple Icons CDN images appear — tiny brand logos)
- Metrics grid shows correct values per service
- Page renders correctly in all 3 language routes (`/`, `/nl/`, `/fy/`)
