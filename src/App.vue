<script setup>
import { ref } from "vue"
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"

</script>

<template>
  <div>
    <Navbar></Navbar>
    <main>
      <router-view />
    </main>
    <Footer></Footer>
  </div>
</template>
