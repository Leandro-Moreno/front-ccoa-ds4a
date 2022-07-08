<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="max-w-2xl mb-4 text-4xl font-light tracking-tight leading-none md:text-5xl xl:text-6xl text-primary">
          Simulador de <span class="font-bold">Supervivencia</span> empresarial</h1>
        <p class="max-w-2xl mb-6 font-light text-primary lg:mb-8 md:text-lg lg:text-xl primary">Con esta herramienta podras valdiar tus estados finacnieros en comparación con otras organizaciones de su sector empresarial</p>
        <router-link to="/formulario"
           class="button-start inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-green-600 hover:bg-green-900 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Comenzar Ahora
        </router-link>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Vue3Lottie :animationData="CCOA" :height="auto" :width="auto"/>
      </div>
    </div>
  </section>
</template>
<script>
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import CCOA from '../anim.json'

export default {
  name: 'Hero',
  components: {
    Vue3Lottie
  },
  props: {},
  data() {
    return {
      CCOA,
    }
  },
  methods: {}
}
</script>
<style>
h1{
  font-color: theme('color.primary');
}
.highlight{
  font-weight: 600;
}
.button-start{
  background-color: theme('color.secondary');
  color: #fff;
}
</style>