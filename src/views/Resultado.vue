<template>
  <h1>{{$route.params.result }}</h1>
</template>
<script>
export default {
  name: 'Resultado',
  components: {
  },
  methods: {
    callId: function() {
      console.log(this.$route.params.result)
    }
  },
  //run mounted after the component is mounted
  mounted() {
    this.callId()
  },


}
</script>