<template>
  <div class="container mx-auto">
    <h1>Hello World</h1>
    <testcomp/>
  </div>
</template>

<script>
import testcomp from '@/components/testcomp';

export default {
  head: {
    title: 'Welcome',
    meta: [{ hid: 'description', name: 'description', content: 'Welcome' }]
  },
  components: {testcomp},

  data: () => ({})
};
</script>
