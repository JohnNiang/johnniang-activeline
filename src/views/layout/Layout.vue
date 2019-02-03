<template>
  <div>
    <center>Johnniang's everything</center>
    <router-link :to="{name: 'activeline_events'}">Activeline event</router-link>
    <router-link :to="{name: 'deadline_events'}">Deadline event</router-link>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>
