<template>
  <div>
    <div class="product-description">
      <div class="product-description-info product-description-block">
        <h3>PRODUCT DESCRIPTION</h3>
        <p class="dot-before">
          {{ data.description_1 }}
        </p>
        <p class="dot-before">
          {{ data.description_2 }}
        </p>
      </div>
      <div class="product-description-block">
        <h3>PRODUCT CODE</h3>
        <div>{{ data.code }}</div>
      </div>
      <div class="product-description-block">
        <h3>SHARE</h3>
        <div>
          Share photo with a tag <a href="#">#{{ data.hashtag }}</a>
          <div class="social-list">
            <div><i class="fa-brands fa-facebook-f" /></div>
            <div><i class="fa-brands fa-instagram" /></div>
            <div><i class="fa-brands fa-twitter" /></div>
          </div>
        </div>
      </div>
      <div class="product-description-block">
        <h3>TECHNOLOGY</h3>
        <ul>
          <li
            v-for="t in data.technology"
            :key="t"
            class="dot-before"
          >
            {{ t }}
          </li>
        </ul>
      </div>
      <div class="product-description-block">
        <h3>RATING & REVIEWS</h3>
        <div class="reviews">
          <Rating :rating="data.rating" />
          32 Reviews
          <a href="#">Read all</a>
        </div>
      </div>
    </div>
    <div class="product-description product-description-mobile">
      <BCard
        class="panel"
        no-body
      >
        <BCardHeader
          class="panel-header panel-first"
          role="button"
        >
          <button
            v-b-toggle="'accordion-0'"
            class="accordion-toggle"
          >
            PRODUCT DESCRIPTION
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </BCardHeader>
        <BCollapse id="accordion-0">
          <BCardBody>
            <p class="dot-before">
              {{ data.description_1 }}
            </p>
            <p class="dot-before">
              {{ data.description_2 }}
            </p>
          </BCardBody>
        </BCollapse>
      </BCard>
      <BCard
        class="panel"
        no-body
      >
        <BCardHeader
          class="panel-header"
          role="button"
        >
          <button
            v-b-toggle="'accordion-1'"
            class="accordion-toggle"
          >
            PRODUCT CODE
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </BCardHeader>
        <BCollapse id="accordion-1">
          <BCardBody>
            {{ data.code }}
          </BCardBody>
        </BCollapse>
      </BCard>
      <BCard
        class="panel"
        no-body
      >
        <BCardHeader
          class="panel-header"
          role="button"
        >
          <button
            v-b-toggle="'accordion-2'"
            class="accordion-toggle"
          >
            SHARE
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </BCardHeader>
        <BCollapse id="accordion-2">
          <BCardBody>
            Share photo with a tag <a href="#">#{{ data.hashtag }}</a>
            <div class="social-list">
              <div><i class="fa-brands fa-facebook-f" /></div>
              <div><i class="fa-brands fa-instagram" /></div>
              <div><i class="fa-brands fa-twitter" /></div>
            </div>
          </BCardBody>
        </BCollapse>
      </BCard>
      <BCard
        class="panel"
        no-body
      >
        <BCardHeader
          class="panel-header"
          role="button"
        >
          <button
            v-b-toggle="'accordion-3'"
            class="accordion-toggle"
          >
            TECHNOLOGY
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </BCardHeader>
        <BCollapse id="accordion-3">
          <BCardBody>
            <ul>
              <li
                v-for="t in data.technology"
                :key="t"
                class="dot-before"
              >
                {{ t }}
              </li>
            </ul>
          </BCardBody>
        </BCollapse>
      </BCard>
      <BCard
        class="panel"
        no-body
      >
        <BCardHeader
          class="panel-header"
          role="button"
        >
          <button
            v-b-toggle="'accordion-4'"
            class="accordion-toggle"
          >
            RATING & REVIEWS
            <i class="fa fa-angle-down fa-2x" />
          </button>
        </BCardHeader>
        <BCollapse id="accordion-4">
          <BCardBody>
            <div class="reviews">
              <Rating :rating="data.rating" />
              32 Reviews
              <a href="#">Read all</a>
            </div>
          </BCardBody>
        </BCollapse>
      </BCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import Rating from '../Rating/Rating.vue'

interface ProductData {
  description_1?: string
  description_2?: string
  code?: number
  hashtag?: string
  technology?: string[]
  rating?: number
}

withDefaults(defineProps<{
  data?: ProductData
}>(), {
  data: () => ({})
})
</script>

<style src="./Description.scss" lang="scss" />
