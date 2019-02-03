<template>
  <div>
    <h2>Activeline event</h2>
    <ul>
      <ol
        v-for="(event, index) in activelineEvents"
        :key="index"
      >
        <span>{{ event.name }}</span>
        <span>{{ event.avatar }}</span>
        <span>{{ event.description }}</span>
        <span>{{ event.startTime }}</span>
      </ol>
    </ul>
  </div>
</template>

<script>
import eventApi from "@/apis/event";

export default {
  name: "ActivelineEvent",
  data() {
    return {
      activelineEvents: []
    };
  },
  created() {
    this.loadActiveEvents();
  },
  methods: {
    loadActiveEvents() {
      eventApi.listActiveLineEvents().then(response => {
        this.$log.debug("Activeline events", response.data);
        this.activelineEvents = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
