<script setup lang="ts">
// Static progress list - no reactive state needed
</script>

<template>
  <BListGroup class="listGroup thin-scroll">
    <BListGroupItem class="listGroupItem">
      <span class="text-muted float-end">60%</span>
      <h6 class="m-0 mb-1 text-gray">
        <strong>Urgent:</strong>
        &nbsp;Rails 4.1.0 upgrade
      </h6>
      <BProgress
        class="m-0"
        variant="primary"
        :value="60"
      />
      <span class="help-block">3 notes added by James 2h ago...</span>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="text-muted float-end">83%</span>
      <h6 class="m-0 mb-1 text-gray">
        <strong>Primary:</strong>
        &nbsp;Sing Web App
      </h6>
      <BProgress
        class="progress-sm m-0"
        variant="success"
        :value="83"
      />
      <span class="help-block">verifying stable probability status</span>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="text-muted float-end">44%</span>
      <h6 class="m-0 mb-1">
        <span
          v-b-tooltip.hover
          class="circle bg-gray-dark text-warning"
          title="2 issues require your attention"
        >
          <i class="fa fa-question" />
        </span>
        &nbsp;
        Finish The Road to Hell Song
      </h6>
      <BProgress
        class="progress-sm m-0"
        variant="dark"
        :value="44"
      />
      <span class="help-block">last update: 2h ago</span>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="text-muted float-end">86%</span>
      <h6 class="m-0 mb-1 deemphasize text-gray">
        Complete project planning
      </h6>
      <BProgress
        class="progress-xs m-0"
        variant="danger"
        :value="86"
      />
      <span class="help-block">no, no way this is not working...</span>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="text-muted float-end">100%</span>
      <h6 class="m-0 mb-1 deemphasize text-gray">
        <strong>Completed:</strong>
        &nbsp;Instruct newbies on coding standards
      </h6>
      <BProgress
        class="progress-xs m-0"
        variant="primary"
        :value="100"
      />
      <span class="help-block">last update: April 22, 2014 2:36 pm</span>
    </BListGroupItem>
  </BListGroup>
</template>
