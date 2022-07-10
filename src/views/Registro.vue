<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div class="mr-auto place-self-center lg:col-span-7">
        <h1 class="text-4xl leading-normal text-green-600 font-black">Comenzar</h1>
        <form class="w-fit"
              @submit.prevent="postModel">
          <input type="text" name="name" placeholder="Nombre" v-model="name"
                 class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none">
          <input type="email" name="email" placeholder="Email" v-model="email"
                 class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none">

          <input type="text" name="nit" placeholder="NIT" v-model="nit"
                 class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none">
          <select name="LCIIU"
                  v-model="LCIIU"
                  class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none">
            <option value="" disabled>Seleccione una opción</option>
            <option v-for="(ciuu, index) in letra" :key="index" :value="ciuu.letra">{{ ciuu.desc }}</option>
          </select>
          <div class="grid grid-cols-2">
            <input type="text" name="directions" placeholder="Dirección"
                   class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 placeholder-green-600 focus:caret-green-700 caret-green-700 bg-gray-100  rounded-lg appearance-none focus:outline-none focus:shadow-outline dark:focus:border-gray-600">
            <input type="text" name="city" placeholder="Ciudad"
                   class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none focus:shadow-outline dark:focus:border-gray-600">
          </div>
          <div class="grid grid-cols-2">
            <select name="desc_organizacion"
                    v-model="desc_organizacion"
                    class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none focus:shadow-outline dark:focus:border-gray-600">
              <option value="" disabled>Seleccione una opción</option>
              <option value="Establecimiento de Comercio">Establecimiento de Comercio</option>
              <option value="Sociedad por Acciones Simplificada">Sociedad por Acciones Simplificada</option>
              <option value="Sociedad Civil">Sociedad Civil</option>
              <option value="Sociedad Limitada">Sociedad Limitada</option>
              <option value="Sociedad Anónima">Sociedad Anónima</option>
              <option value="Empresa Asociativa de Trabajo">Empresa Asociativa de Trabajo</option>
              <option value="Sociedad Comandita Simple">Sociedad Comandita Simple</option>
              <option value="Empresa Unipersonal">Empresa Unipersonal</option>
              <option value="Sociedad Comandita por Acciones">Sociedad Comandita por Acciones</option>
              <option value="Sociedad Extranjera">Sociedad Extranjera</option>
            </select>
            <select name="tamano_empresa"
                    v-model="tamano_empresa"
                    class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none focus:shadow-outline dark:focus:border-gray-600">
              <option value="" disabled>Seleccione una opción</option>
              <option value="Microempresa">Microempresa</option>
              <option value="Pequeña">Pequeña</option>
              <option value="Mediana">Mediana</option>
              <option value="Grande">Grande</option>
            </select>
          </div>
          <div class="grid grid-cols-2">
            <select name="anio_creacion"
                    v-model="anio_creacion"
                    class="w-full px-3 py-2 mb-2 text-sm leading-tight placeholder-green-600 text-gray-700 bg-gray-100  rounded-lg appearance-none focus:outline-none focus:shadow-outline dark:focus:border-gray-600">

              <option value="" disabled>Seleccione una opción</option>
              <option v-for="(year, index) in years_list" :key="index" :value="year">{{ year }}</option>
            </select>
            <div>
              <div class="inline-flex items-center">
                <input type="checkbox" name="importa" id="importa"
                       class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                       value="">
                <label for="importa" class="ml-2 text-sm">Importa</label>
              </div>
              <div class="inline-flex items-center">
                <input type="checkbox" name="exporta" id="exporta"
                       class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                       value="">
                <label for="exporta" class="ml-2 text-sm">Exporta</label>
              </div>


            </div>
          </div>
          <input type="number"
                 class="w-full px-3 py-2 mb-4-gray-300 placeholder-green-600 text-green-500 bg-gray-100 rounded-lg"
                 placeholder="Ingrese el numero de activos" v-model="activos">
          <input type="number" class="w-full px-3 py-2 mb-4 bg-gray-100 placeholder-green-600 rounded-lg"
                 placeholder="Ingrese el numero de pasivos" v-model="pasivos">
          <input type="number" class="w-full px-3 py-2 mb-4 bg-gray-100 placeholder-green-600 rounded-lg"
                 placeholder="Ingrese los ingresos operacionales del ultimo año" v-model="ingresosoperacionales">
          //add numero de empleados input cant be less than 0
          <input type="number" class="w-full px-3 py-2 mb-4 bg-gray-100 placeholder-green-600 rounded-lg"
                 placeholder="Ingrese el numero de empleados" v-model="empleados">
          <div class="inline-flex items-center">
            <input type="checkbox" name="estado" id="estado"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                   value="">
            <label for="estado" class="ml-2 text-sm">¿Contrata con el estado?</label>
          </div>
          <div class="inline-flex items-center">
            <input type="checkbox" name="actividadesccoa" id="actividadesccoa"
                   class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                   value="">
            <label for="actividadesccoa" class="ml-2 text-sm">¿Realiza actividades con la Cámara (formaciones,
              consultoría, otras)?</label>
          </div>
          <button type="submit"
                  class="inline-block px-20 py-2.5 bg-green-500 text-white font-medium text-md leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out">
            Analizar
          </button>
        </form>
      </div>
      <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Vue3Lottie :animationData="CCOA" height="auto" width="auto"/>
      </div>
    </div>
  </section>
</template>
<script>
import {Vue3Lottie} from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'
import CCOA from '../components/anim.json'
import axios from 'axios'

export default {
  name: 'Registro',
  components: {
    Vue3Lottie
  },
  data() {
    return {
      CCOA,
      letra: [],
      activos: null,
      pasivos: '',
      patrimonio: '',
      empleados: '',
      years_list: [],
      registro: {},
      email: '',
      ingresosoperacionales: '',
      tamano_empresa: '',
      desc_organizacion: '',
      LCIIU: '',
      direccion: '',
      ciudad: '',
      empresa_viva: 1,
      anio_creacion: '',
      name: '',
      nit: '',
      result: '-1',
      sectores: {
        'A': 'Manufactura',
        'B': 'Manufactura',
        'C': 'Manufactura',
        'D': 'Servicios',
        'E': 'Servicios',
        'F': 'Manufactura',
        'G': 'Comercio',
        'H': 'Servicios',
        'I': 'Servicios',
        'J': 'Servicios',
        'K': 'Servicios',
        'L': 'Servicios',
        'M': 'Servicios',
        'N': 'Servicios',
        'O': 'Servicios',
        'P': 'Servicios',
        'Q': 'Servicios',
        'R': 'Servicios',
        'S': 'Servicios',
        'T': 'Servicios',
        'U': 'Servicios'
      }
    }
  },
  mounted() {
    this.letra_ciuu()
    this.years()
  },
  methods: {
    //ccreate async method to call data from https://docs.google.com/spreadsheets/d/e/2PACX-1vS3DVmLKgsaIsEpdy2__ZonlM61q3J0OjNn-GTQJeg37EpBnNFHZKnZu87Uw4Y27k4g2vp0zKTtoqhH/pub?output=csv
    async letra_ciuu() {
      let url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS3DVmLKgsaIsEpdy2__ZonlM61q3J0OjNn-GTQJeg37EpBnNFHZKnZu87Uw4Y27k4g2vp0zKTtoqhH/pub?output=csv'
      //fetch data from google sheet using axios
      await axios.get(url).then((res) => {
        //res is a csv string so we need to parse it
        let csv = res.data
        let lines = csv.split('\n')
        let result = []
        let headers = lines[0].split(',')
        headers = headers.map(header => header.replace(/\r/g, ''))
        for (let i = 1; i < lines.length; i++) {
          let obj = {}
          let currentline = lines[i].split(',')
          for (let j = 0; j < headers.length; j++) {
            obj[headers[j]] = currentline[j]
          }
          result.push(obj)
        }
        this.letra = result
        console.log(this.letra)
      })

    },
    years() {
      let years = []
      let currentYear = new Date().getFullYear()
      for (let i = 1980; i <= currentYear; i++) {
        years.push(i)
      }
      years = years.reverse()
      this.years_list = years
    },
    async postModel() {
      this.registro = this.form
      const config = {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      }
      //this.sectores is a dictionary, compare the key with LCIIU
      //and set the value to the sector
      let sector = this.sectores[this.LCIIU]

      await axios.get('http://35.202.169.29/model', null,
          {
            headers: {
              "Access-Control-Allow-Origin": "*"
            },
            params: {
              LCIIU: this.LCIIU,
              activos: this.activos,
              pasivos: this.pasivos,
              ingresosoperacionales: this.ingresosoperacionales,
              Tamano_empresa: this.tamano_empresa,
              desc_organizacion: this.desc_organizacion,
              direccion: this.direccion,
              ciudad: this.ciudad,
              empresa_viva: this.empresa_viva,
              anio_creacion: this.anio_creacion,
              empleados: this.empleados,
              name: this.name,
              nit: this.nit,
              email: this.email,
              import_export: "Ni importa ni exporta",
              Sector: sector
            }
          }).then((res) => {
        if (res.data) {
          this.result = res.data.message[0]
          console.log(this.result)
        }

      })

      await this.$router.push('/resultados/' + this.result)
      //change route to /resultados and pass result as a parameter
      // await $router.push({path: '/resultados', params: {result: this.result} })

    },
  }
}
</script>