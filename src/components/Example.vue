<template>
  <div class="example-component">
    <div>Example Component</div>
    <div>count: {{ count }}</div>
    <div>
      <button v-on:click="addCount">add</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Example',
  computed: {
    count () {
      return this.$store.state.example.count
    }
  },
  methods: {
    addCount () {
      this.$store.dispatch('example/increment')
    }
  }
}
</script>

<style scoped lang="scss">
@import '~@/scss/functions';

.example-component {
  width: unit(150px);
  margin: 0 auto;
  padding: 10px;
  border: 1px dashed #ccc;
}
</style>
