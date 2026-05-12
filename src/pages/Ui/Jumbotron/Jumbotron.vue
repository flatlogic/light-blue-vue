<template>
  <div>
    <!-- Fluid jumbotron -->
    <div class="jumbotron p-5 mb-4 rounded-3">
      <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">
          Fluid jumbotron
        </h1>
        <p class="col-md-8 fs-4">
          This is a modified jumbotron that occupies the entire horizontal space of its parent.
        </p>
      </div>
    </div>

    <b-row>
      <b-col
        xs="12"
        md="8"
      >
        <!-- Standard jumbotron -->
        <div class="jumbotron p-5 mb-4 rounded-3">
          <h1 class="display-4">
            Hello, world!
          </h1>
          <p class="lead">
            This is a simple hero unit, a simple Jumbotron-style
            component for calling extra attention to featured content or information.
          </p>
          <hr class="my-4" />
          <p>
            It uses utility classes for typography and spacing to space
            content out within the larger container.
          </p>
          <p class="lead">
            <b-button variant="primary">
              Learn More
            </b-button>
          </p>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
// Jumbotron page component
// Note: b-jumbotron was removed in Bootstrap 5 / Bootstrap Vue Next
// Jumbotrons are now created using utility classes
</script>

<style scoped lang="scss">
.jumbotron {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
