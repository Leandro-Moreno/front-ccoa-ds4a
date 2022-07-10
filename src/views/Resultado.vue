<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto flex flex-col">
      <div class="lg:w-4/6 mx-auto">
        <div class="rounded-lg h-64 overflow-hidden">
          <h1>Hemos analizados los 3'000.000 de caminos posibles</h1>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div class="flex flex-col items-center text-center justify-center">
              <h2 class="font-medium title-font mt-4 text-gray-900 text-lg">Hemos registrado tus datos</h2>
              <div class="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p class="text-base">Te contactaremos para que entre la camara de comercio y tu organización hagamos de tu empresa una empresa aún más prospera.</p>
            </div>
          </div>
          <div class="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
           <p class="text-4xl">
             Con los datos ingresados hemos realizado predicciones sobre la posibilidad de crecimiento de tu empresa.
             Hemos reconocido que en comparación con otras empresas de su sector, tu empresa podría crecer.

             Tiene un porcentaje de crecimiento del <span class="result">{{$route.params.result }}%</span>
           </p>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row mt-10">
          <div class="sm:w-full text-center sm:pr-8 sm:py-8">
            <h2 class="text-2xl">Acá tiene un mapa donde puede visualizar la ubicación de otras empresas de la CCOA</h2>
            <iframe class="w-full h-100 mapa" src="https://a2ab71bc.ds4a-mapa.pages.dev/"></iframe>
          </div>
        </div>
      </div>
    </div>
  </section>
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
<style>
h1{
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.1;
  color: #3d4852;
  margin-bottom: 1.5rem;
}
.result{
  color: #38a169;
}
.mapa{
  height: 70vh;
}
</style>