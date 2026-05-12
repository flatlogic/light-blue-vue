# Changelog

## [4.0.0] - 12/05/2026

### Breaking Changes
- Migrated from Vue 2 to Vue 3.5+
- Migrated from Vuex to Pinia for state management
- Migrated from Vue CLI/Webpack to Vite 6
- Migrated from JavaScript to TypeScript (strict mode)
- All components converted from Options API to Composition API with `<script setup>`

### Added
- Full TypeScript support with strict type checking
- Pinia stores with composition-style syntax
- Vue composables for shared logic (`useAppConfig`, `useScreenHelper`, etc.)
- Custom directives (`v-safe-html`, `v-click-outside`)
- Vitest for unit testing
- ESLint 9 with flat config
- Type-safe routing with Vue Router 4

### Updated
- Vue 3.5+ with Composition API
- Vite 6 for development and builds
- Bootstrap Vue Next (Vue 3 compatible)
- Vue Router 4
- ApexCharts with vue3-apexcharts
- Highcharts with highcharts-vue 2.x
- ECharts with vue-echarts 7.x
- amCharts 5 for maps and charts
- FullCalendar 6 with @fullcalendar/vue3
- Google Maps with @fawmi/vue-google-maps
- Axios 1.x
- All dependencies updated to latest versions

### Removed
- Vue 2 and Vue 2 specific packages
- Vuex (replaced by Pinia)
- Vue CLI and Webpack configuration
- Mixins (replaced by composables)
- Options API components
- jQuery dependencies

### Fixed
- All TypeScript type errors resolved
- All ESLint errors resolved
- Calendar page viewType error
- Google Maps component naming
- Button text visibility in secondary buttons
- Chart library type compatibility
- Form validation compatibility

---

## [3.3.3] - 22/11/2024

- Fixed dev mode errors

## [3.3.2] [27/04/2023]

- Fix vuex errors
- Fix charts errors

### Updated
- Update dependency

## [3.3.1] [04/07/2022]

- Fix auth page style and several errors

## [3.3.0] [01/07/2022]

### Updated
- Update dependency
- Updated Bootstrap/Reactstrap
- Add theme switcher

## [3.2.3] [22/10/2021]

### Updated
- Add link to generator in sidebar

## [3.2.2] [12/04/2021] 

### Updated
- Update project for new backend
- Update support links

## [3.2.1]

- Fix icons animation
- Fix images naming
- Fix calendar buttons
- Fix 404 page

## [3.2.0]

- Updated documentation

## [3.1.9]

### Updated

- Update dependency

## [3.1.8]

### Fixed

- Fix popover text color;
- Fix modal buttons;
- Fix typography color;
- Fix colors in several charts;
- Fix input colors in forms elements

## [3.1.7]

### Updated

- Update dependency

### Fixed

- Much work has been done to improve and correct a lot of small bugs :)

## [3.1.6]

### Updated

- Update dependency

## [3.1.5]

### Fixed

- Update dependency
- Fix animate class
- Fix link to git repo

## [3.1.4]

### Fixed

- Fix invalid token validation

## [3.1.3]

### Fixed

- fixed issue with themes

## [3.1.2]

### Updated

- updated seed version
- updated documentation

## [3.1.1]

### Fixed

- Design fixes

## [3.1.0]

### Updated

- Added brand new design!

## [3.0.5]

### Fixed

- fix bugs

## [3.0.4]

### Updated

- added documentation menu
