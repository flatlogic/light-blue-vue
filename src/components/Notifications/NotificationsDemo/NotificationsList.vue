<script setup lang="ts">
// Static notifications list - no reactive state needed
</script>

<template>
  <BListGroup class="listGroup thin-scroll">
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a3.jpg"
          alt="woman"
        />
      </span>
      <p class="m-0 overflow-hidden">
        1 new user just signed up! Check out
        <a href="#">Monica Smith</a>'s account.
        <time class="help-block m-0">2 mins ago</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa-solid fa-angles-up" />
      </span>
      <p class="m-0 overflow-hidden">
        2.1.0-pre-alpha just released.
        <time class="help-block m-0">5h ago</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa-solid fa-bolt" />
      </span>
      <p class="m-0 overflow-hidden">
        Server load limited.
        <time class="help-block m-0">7h ago</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <img
          class="rounded-circle"
          src="../../../assets/people/a5.jpg"
          alt="man"
        />
      </span>
      <p class="m-0 overflow-hidden">
        User <a href="#">Jeff</a> registered
        <span class="button-group">
          <BButton
            size="sm"
            variant="success"
          >Allow</BButton>
          <BButton
            size="sm"
            variant="danger"
          >Deny</BButton>
        </span>
        <time class="help-block m-0">12:18 AM</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <i class="fa-solid fa-shield" />
      </span>
      <p class="m-0 overflow-hidden">
        Instructions for changing your Envato Account password. Please
        check your account <a href="#">security page</a>.
        <time class="help-block m-0">12:18 AM</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="rounded bg-primary">
          <i class="fa-brands fa-facebook-f text-white" />
        </span>
      </span>
      <p class="m-0 overflow-hidden">
        New <strong>76</strong> facebook likes received.
        <time class="help-block m-0">15 Apr 2014</time>
      </p>
    </BListGroupItem>
    <BListGroupItem class="listGroupItem">
      <span class="notificationIcon thumb-sm">
        <span class="circle circle-lg bg-gray-dark">
          <i class="fa-regular fa-circle text-white" />
        </span>
      </span>
      <p class="m-0 overflow-hidden">
        Dark matter detected.
        <time class="help-block m-0">15 Apr 2014</time>
      </p>
    </BListGroupItem>
  </BListGroup>
</template>

<style src="./ListGroup.scss" lang="scss" />
