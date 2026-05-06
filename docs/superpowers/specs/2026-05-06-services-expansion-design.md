# Services Page Expansion — Design Spec
Date: 2026-05-06

## Overview

Expand the services page from 4 to 6 services, add two new offerings, and visually enhance all service cards with brand logo chips and real metrics.

---

## 1. New Services

### Data & AI
- **ID**: `data-ai`
- **Tagline**: Data-ready for the AI era
- **Description**: Helps organisations prepare their data foundations for AI adoption — covering data readiness assessments, AI governance frameworks, and hands-on guidance on trending AI capabilities including LLMs, Copilot integrations, and data pipelines for ML.
- **Deliverables**:
  - AI data readiness assessment and gap analysis
  - Data preparation pipelines for AI/ML workloads
  - AI governance framework design and implementation
  - LLM integration advisory (OpenAI, Azure Copilot)
  - Data quality improvement for AI training data
  - AI use case prioritisation and roadmap
- **Logo chips**: OpenAI, Databricks, Python, Azure (Copilot)
- **Metrics**:
  - `8+` — Years of data foundation experience
  - `AI-first` — Governance frameworks designed
  - `100%` — Data readiness focus before AI adoption
  - `End-to-end` — From data prep to AI deployment

### Informatica IDMC
- **ID**: `informatica-idmc`
- **Tagline**: MDM & Data Quality, end-to-end
- **Description**: Specialist Informatica IDMC implementations covering MDM 360 and Cloud Data Quality (CDQ). Engaged as both Project Manager and Solution Architect — from initial scoping and stakeholder alignment through to technical design, configuration, and go-live.
- **Deliverables**:
  - Informatica IDMC MDM 360 implementation (PM & SA)
  - Cloud Data Quality (CDQ) configuration and rollout
  - Data model and hierarchy design in IDMC
  - Integration design with source and target systems
  - Project management: planning, governance, stakeholder reporting
  - Solution architecture: technical design, platform configuration, performance tuning
- **Logo chips**: Informatica IDMC, Informatica MDM 360, Informatica CDQ
- **Metrics**:
  - `8+` — Years hands-on with Informatica
  - `2` — Roles: Project Manager & Solution Architect
  - `MDM` — & Data Quality specialist modules
  - `5+` — IDMC implementations delivered

---

## 2. Visual Enhancement — All 6 Service Cards

### Current state
Each service row has a `service-icon-large` glass card on the right showing a single SVG icon (80×80px).

### New state
Replace with a `service-stats-card` component showing:

**Logo chips row** — horizontally arranged pills, each containing:
- A brand logo image from Simple Icons CDN (`https://cdn.simpleicons.org/{slug}/{hex-color}`)
- The brand name in small text

**Metrics grid** — 2×2 grid of metric tiles, each containing:
- A bold value (e.g. `8+`, `80%`, `3 days`)
- A short descriptor label beneath it

### Brand logos per service

| Service | Logos |
|---|---|
| Data Management & Quality | Informatica, Azure, AWS |
| Master Data Management | Informatica, SAP (MDG), Reltio (no Simple Icons slug — render as a styled `<span>` with letter "R" in brand purple `#7c3aed`) |
| Product Information Management | Stibo (no Simple Icons slug — render as a styled `<span>` with letter "S" in brand orange `#e85d1e`), Akeneo, Shopify |
| Solution Architecture | AWS, Azure, Apache Kafka, MuleSoft |
| Data & AI | OpenAI, Databricks, Python, Azure |
| Informatica IDMC | Informatica ×3 (IDMC, MDM 360, CDQ — different accent colours) |

### Metrics per service

| Service | Metric 1 | Metric 2 | Metric 3 | Metric 4 |
|---|---|---|---|---|
| Data Management & Quality | 8+ yrs | 100% satisfaction | 15+ frameworks | 5+ industries |
| MDM | 80% inconsistency reduction | 12 business units | 6 countries | 3 platforms |
| PIM | 3 days TTM | 40K+ products | 8 channels | 100% satisfaction |
| Solution Architecture | 15+ blueprints | 3 cloud platforms | 8+ yrs | 5+ industries |
| Data & AI | 8+ yrs | AI-first | 100% readiness focus | End-to-end |
| Informatica IDMC | 8+ yrs | 2 roles | MDM & DQ | 5+ implementations |

---

## 3. Implementation Approach

### ServicesPage.astro
- Remove the `serviceIcons` array of raw SVG strings
- Add a `serviceCards` array of objects: `{ logos: [...], metrics: [...] }`
- Replace `<div class="service-icon-large" set:html={serviceIcons[idx]} />` with a new `<div class="service-stats-card glass-card">` block rendering logos + metrics
- Add CSS for `.service-stats-card`, `.logo-chips`, `.logo-chip`, `.metrics-grid`, `.metric-tile`
- Logo images use `<img>` tags pointing to Simple Icons CDN — no local assets needed

### i18n (en.ts, nl.ts, fy.ts)
- Add two new items to `services.items[]` in all three language files
- New items follow the exact same shape: `{ id, tagline, title, desc, deliverables[] }`
- Dutch (nl) and Frisian (fy) translations follow existing tone and patterns

### No other files change
- Layout, routing, Header, Footer, contact form service dropdown — all unaffected (contact form service list is separate and not in scope)

---

## 4. Constraints

- No external font or icon library added — Simple Icons CDN only (already used via `<img>` tags, no npm package)
- Responsive: on mobile (`max-width: 900px`) the new `.service-stats-card` must be explicitly hidden with `display:none` in the same media query block as `.service-icon-large` — it does not inherit that rule automatically since it has a different class name
- All three i18n files must be updated; the visual card data lives in `ServicesPage.astro` (not i18n) since it is language-independent
- `serviceIcons` array is removed entirely — not kept alongside the new structure
