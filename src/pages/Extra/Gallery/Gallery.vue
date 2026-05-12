<template>
  <div class="gallery-page">
    <h1 class="page-title">
      Gallery - <span class="fw-semi-bold">Sortable Pictures</span>
    </h1>
    <div class="d-flex justify-content-between align-items-center">
      <BButtonGroup class="mb-lg">
        <BButton
          variant="secondary"
          :class="{ active: activeCategory === null }"
          @click="changeCategory(null)"
        >
          All
        </BButton>
        <BButton
          variant="secondary"
          :class="{ active: activeCategory === 'nature' }"
          @click="changeCategory('nature')"
        >
          Nature
        </BButton>
        <BButton
          variant="secondary"
          :class="{ active: activeCategory === 'people' }"
          @click="changeCategory('people')"
        >
          People
        </BButton>
        <BButton
          variant="secondary"
          :class="{ active: activeCategory === 'space' }"
          @click="changeCategory('space')"
        >
          Space
        </BButton>
      </BButtonGroup>
      <BButtonGroup class="mb-lg">
        <BButton
          variant="secondary"
          :class="{ active: desc === false }"
          @click="desc = false"
        >
          <i class="fa fa-sort-numeric-asc" />
        </BButton>
        <BButton
          variant="secondary"
          :class="{ active: desc }"
          @click="desc = true"
        >
          <i class="fa fa-sort-numeric-desc" />
        </BButton>
      </BButtonGroup>
    </div>

    <VueEasyLightbox
      :visible="lightboxVisible"
      :imgs="lightboxImages"
      :index="lightboxIndex"
      @hide="lightboxVisible = false"
    />

    <transition-group
      name="flip-list"
      class="gallery"
      tag="ul"
    >
      <li
        v-for="(image, imageIndex) in getImages()"
        :key="image.id"
        class="picture card"
        @click="showLightbox(imageIndex)"
      >
        <div class="img-wrapper">
          <img
            class="figure-img width-200"
            :src="image.src"
            :alt="image.name ? image.name : 'picture'"
          />
        </div>
        <div class="description">
          <h6 class="mt-0 mb-xs">
            {{ image.name }}
          </h6>
          <ul class="post-links">
            <li><a href="#">{{ image.date }}</a></li>
            <li>
              <a href="#"><span class="text-danger">
                <i :class="`fa ${image.like ? 'fa-heart' : 'fa-heart-o'}`" /> Like
              </span></a>
            </li>
            <li><a href="#">Details</a></li>
          </ul>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import VueEasyLightbox from 'vue-easy-lightbox'

// Import images
import img1 from '@/assets/pictures/1.jpg'
import img2 from '@/assets/pictures/2.jpg'
import img3 from '@/assets/pictures/3.jpg'
import img4 from '@/assets/pictures/4.jpg'
import img5 from '@/assets/pictures/5.jpg'
import img6 from '@/assets/pictures/6.jpg'
import img7 from '@/assets/pictures/7.jpg'
import img8 from '@/assets/pictures/8.jpg'
import img9 from '@/assets/pictures/9.jpg'
import img10 from '@/assets/pictures/10.jpg'
import img11 from '@/assets/pictures/11.jpg'
import img13 from '@/assets/pictures/13.jpg'

interface GalleryImage {
  id: number
  name: string
  groups: string[]
  src: string
  date: string
  like?: boolean
}

const activeCategory = ref<string | null>(null)
const desc = ref<boolean | null>(null)
const lightboxVisible = ref(false)
const lightboxIndex = ref(0)

const images = ref<GalleryImage[]>([
  {
    id: 0,
    name: 'Mountains',
    groups: ['nature'],
    src: img1,
    date: '10 mins',
  },
  {
    id: 1,
    name: 'Empire State Pigeon',
    groups: ['people'],
    src: img2,
    date: '1 hour',
    like: true,
  },
  {
    id: 2,
    name: 'Big Lake',
    groups: ['nature'],
    src: img3,
    date: '2 mins',
    like: true,
  },
  {
    id: 3,
    name: 'Forest',
    groups: ['nature'],
    src: img4,
    date: '2 mins',
    like: true,
  },
  {
    id: 4,
    name: 'Smile',
    groups: ['people'],
    src: img5,
    date: '2 mins',
  },
  {
    id: 5,
    name: 'Smile',
    groups: ['people'],
    src: img6,
    date: '1 hour',
    like: true,
  },
  {
    id: 6,
    name: 'Fog',
    groups: ['nature'],
    src: img7,
    date: '2 mins',
    like: true,
  },
  {
    id: 7,
    name: 'Beach',
    groups: ['people'],
    src: img8,
    date: '2 mins',
  },
  {
    id: 8,
    name: 'Pause',
    groups: ['people'],
    src: img9,
    date: '3 hour',
    like: true,
  },
  {
    id: 9,
    name: 'Space',
    groups: ['space'],
    src: img10,
    date: '3 hour',
    like: true,
  },
  {
    id: 10,
    name: 'Shuttle',
    groups: ['space'],
    src: img11,
    date: '35 mins',
    like: true,
  },
  {
    id: 11,
    name: 'Sky',
    groups: ['space'],
    src: img13,
    date: '2 mins',
  },
])

const lightboxImages = computed(() => getImages().map(img => img.src))

function changeCategory(category: string | null) {
  activeCategory.value = category
}

function getImages() {
  const imgs = images.value.slice()
  imgs.sort((a, b) => {
    if (desc.value !== null) {
      if (a.name < b.name) {
        return desc.value ? 1 : -1
      } else if (a.name > b.name) {
        return desc.value ? -1 : 1
      } else {
        return 0
      }
    }
    return 0
  })

  if (activeCategory.value) {
    return imgs.filter(img => img.groups.indexOf(activeCategory.value!) !== -1)
  }

  return imgs
}

function showLightbox(index: number) {
  lightboxIndex.value = index
  lightboxVisible.value = true
}
</script>

<style src="./Gallery.scss" lang="scss" scoped />
