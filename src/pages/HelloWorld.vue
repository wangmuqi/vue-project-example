<template>
  <div class="hello">
    <img src="@/assets/logo.png">
    <h1>{{ msg | capitalize }}</h1>
    <h2></h2>
    <div>count: {{ count }}</div>
    <Example/>
  </div>
</template>

<script>
import ExampleModel from '@/model/example'
import Example from '@/components/Example'

export default {
  name: 'HelloWorld',
  components: {
    Example
  },
  data () {
    return {
      msg: 'index'
    }
  },
  computed: {
    count () {
      return this.$store.state.example.count
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/scss/functions';

.hello {
  text-align: center;
}
h2 {
  width: unit(150px);
  height: 30px;
  margin: 0 auto;
  background-image: url('~@/assets/logo.png');
}
</style>
