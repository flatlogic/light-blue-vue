<template>
  <div class="dashboard-page">
    <h1 class="page-title">Analytics <small>Company Performance</small></h1>
    <b-row>
      <b-col xs="12">
        <Widget title="Dashboard Example" close>
        </Widget>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Widget from '@/components/Widget/Widget';

export default {
  name: 'Dashboard',
  components: {
    Widget
  }
};
</script>
