<template>
  <div class="productCard">
    <div class="productCardPhoto" :style="{ backgroundImage: `url(${product.img})` }"
         @click="$router.push('/app/ecommerce/product/' + product.id)">
      <div
        v-if="label"
        :class="{label: true, 'bg-danger': label === 'Sale',
          'bg-primary': label !== 'Sale'}">
        {{label}}
      </div>
      <b-button class="star" variant="default" @click="toggleFavourite()">
        <i v-if="favourite" class="la la-star"></i>
        <i v-else class="la la-star-o"></i>
      </b-button>
    </div>
    <div class="productCardDataWrapper">
      <div class="productsCardTitle">{{product.title}}</div>
      <div class="productsCardDescription">{{product.description}}</div>
    </div>
    <div class="productsCardPrice">
      <span v-if="!product.discount">${{product.price}}</span>
      <div v-else class="sale">
        <span class="old">${{product.price}}</span>
        {{product.discount}}% off
        <span class="new"> ${{newPrice}}</span>
      </div>
      <Rating v-if="product.rating" :rating="product.rating" size="sm"></Rating>
    </div>
  </div>
</template>

<script>
  import Rating from '../../../ProductPage/components/Rating/Rating';
  export default {
    name: 'ProductCard',
    components: {Rating},
    props: ['product'],
    data() {
      return {
        favourite: this.product.favourite,
      };
    },
    methods: {
      toggleFavourite() {
        this.favourite = !this.favourite;
      },
    },
    computed: {
      newPrice() {
        return this.product.discount ?
          this.product.price - (this.product.price * this.product.discount / 100) :
          this.product.price;
      },
      label() {
        return this.product.discount ?
          "Sale" :
          this.product.createdAt === this.product.updatedAt ?
            "New" :
            null
      }
    }
  };
</script>

<style src="./ProductCard.scss" lang="scss" scoped />
