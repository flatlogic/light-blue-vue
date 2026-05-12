<template>
  <div>
    <h1 class="page-title">
      Google <span class="fw-semi-bold">Maps</span>
    </h1>
    <b-row>
      <b-col cols="12">
        <Widget
          title="<h5>Vue Google Maps <small class='text-muted'>Default and customized</small></h5>"
          custom-header
          close
          collapse
        >
          <GMapMap
            :center="{ lat: -37.813179, lng: 144.950259 }"
            :zoom="12"
            class="mapContainer"
            :options="options"
          >
            <GMapMarker
              :position="{ lat: -37.813179, lng: 144.950259 }"
            />
          </GMapMap>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Widget from '@/components/Widget/Widget.vue'

declare const google: {
  maps: {
    MapTypeControlStyle: {
      DEFAULT: number
    }
  }
}

interface MapOptions {
  mapTypeControl?: boolean
  mapTypeControlOptions?: {
    style?: number
  }
}

const options = ref<MapOptions>({})

onMounted(() => {
  // Options will be applied once the map loads
  // The Google Maps API is loaded by @fawmi/vue-google-maps
  if (typeof google !== 'undefined' && google.maps) {
    options.value = {
      mapTypeControl: true,
      mapTypeControlOptions: {
        style: google.maps.MapTypeControlStyle.DEFAULT
      }
    }
  }
})
</script>

<style src="./Google.scss" lang="scss" scoped />
