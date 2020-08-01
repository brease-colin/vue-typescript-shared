<template>
  <div class="hello">
    <h1>Local: {{ msg }}</h1>
    <header1>zzz</header1>
    <header2>zzz</header2>
    <header3>zzz</header3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import useLogging1 from '@s1/use/logging1';
import useLogging2 from '@s2/use/logging2';
import useLogging3 from '@s3/use/logging3';
import Header1 from '@s1/components/Header1.vue';
import Header2 from '@s2/components/Header2.vue';
import Header3 from '@s3/components/Header3.vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: {
    Header1,
    Header2,
    Header3,
  },
  setup()
  {
    useLogging1();
    useLogging2();
    useLogging3();
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
