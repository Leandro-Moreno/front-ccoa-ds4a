<template>
  <iframe class="w-full aspect-[4/3] md:aspect-square" title="ORIENTE PBI MYSQL" src="https://app.powerbi.com/view?r=eyJrIjoiMjc4MTYxZTItNzE0Ni00Y2U2LWFhOTMtNDFkZjM2M2Y5NmMxIiwidCI6ImZhYmQwNDdjLWZmNDgtNDkyYS04YmJiLThmOThiOWZiOWNjYSIsImMiOjR9&pageName=ReportSection" frameborder="0" allowFullScreen="true"></iframe>
</template>
<script>
export default {
  name: 'EDA',
  components: {
  },
  methods: {
  },
  //run mounted after the component is mounted
  mounted() {
    this.callId()
  },


}
</script>