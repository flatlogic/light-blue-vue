<template>
  <div>
    <h1 class="page-title">
      Cards - <span class="fw-semi-bold">Examples</span>
    </h1>
    <p>
      A card is a flexible and extensible content container.
      It includes options for headers and footers,
      a wide variety of content, contextual background colors,
      and powerful display options. If you're
      familiar with Bootstrap 3, cards replace its old panels,
      wells, and thumbnails. Similar functionality
      to those components is available as modifier classes for cards.
    </p>
    <BRow>
      <BCol>
        <BCard
          class="border-0 mb-xlg background-cover text-white"
          :style="{ backgroundImage: `url(${lifestyle})` }"
        >
          <span>13 Mar</span>
          <h3 class="mt-lg">
            Lifestyle brand
          </h3>
          <p class="w-75">
            A lifestyle brand is a company that markets its products or services to embody the
            interests, attitudes, and opinions of a group or a culture. Lifestyle brands
            seek to inspire, guide, and motivate people, with the goal of their products
            contributing to the definition of the consumer&apos;s way of life.
          </p>
          <BButton
            class="btn-rounded-f mt-lg"
            variant="danger"
          >
            Full Article
          </BButton>
        </BCard>
      </BCol>
    </BRow>
    <BRow>
      <BCol
        xs="12"
        sm="6"
        md="4"
      >
        <BCard
          title="Isometric design"
          :img-src="isometric"
          img-alt="Image"
          img-top
          class="border-0 mb-xlg"
        >
          <p class="card-text">
            Isometric projection is a method for visually representing three-dimensional in two
            dimensions in technical and engineering drawings.
          </p>
          <div class="w-100 text-center">
            <BButton
              class="btn-rounded-f"
              variant="primary"
            >
              Full Article
            </BButton>
          </div>
        </BCard>
      </BCol>
      <BCol
        xs="12"
        sm="6"
        md="4"
      >
        <BCard class="mb-xlg border-0">
          <a
            href="#"
            class="fw-semi-bold text-success"
          >Avg Rating</a>
          <a
            href="#"
            class="fw-semi-bold text-muted ms-2"
          >All Time</a>
          <hr />
          <div class="d-flex justify-content-between mb-lg">
            <div class="text-warning">
              <i class="la la-star me-1" />
              <i class="la la-star me-1" />
              <i class="la la-star me-1" />
              <i class="la la-star me-1" />
              <i class="la la-star" />
            </div>
            <span class="text-muted"><small>342 REVIEWS</small></span>
          </div>
          <div class="mb-lg">
            <h3 class="text-success mb-0">
              69%
            </h3>
            of customers recomend this product
          </div>
          <BButton
            class="btn-rounded-f"
            variant="success"
          >
            Write a Review
          </BButton>
        </BCard>
        <BCard
          class="mb-xlg border-0"
          :style="{ position: 'relative' }"
          :img-src="mountains"
          title="Weekly Inspiration"
        >
          <BBadge
            class="mt-lg fw-thin rounded-0"
            variant="success"
            :style="{ position: 'absolute', top: 0, left: 0 }"
          >
            New
          </BBadge>
          <hr />
          <p>
            There are at least 109 mountains on Earts with elevations greeter than 7,200 meters
          </p>
          <BButton
            class="border-0"
            variant="secondary"
          >
            Read More
          </BButton>
        </BCard>
      </BCol>
      <BCol
        xs="12"
        sm="6"
        md="4"
      >
        <BCard
          class="border-0"
          :img-src="rns"
        >
          <small>Technology</small><br />
          <h4 class="mb mt-xs">
            React Native Starter
          </h4>
          <hr />
          <div class="w-100 d-flex justify-content-between align-items-center">
            <span class="text-muted fw-semi-bold">from $49.95</span>
            <BButton variant="info">
              Read more
            </BButton>
          </div>
        </BCard>
      </BCol>
    </BRow>
  </div>
</template>

<script setup lang="ts">
import isometric from '@/assets/cards/isometric.jpg'
import lifestyle from '@/assets/cards/lifestyle.jpg'
import mountains from '@/assets/cards/mountains.jpeg'
import rns from '@/assets/cards/rns.png'
</script>
