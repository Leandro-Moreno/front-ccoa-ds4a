<template>
  <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
    <div class="sm:flex sm:items-center sm:justify-between">
      <router-link to="/eda" class="flex items-center">
        <img src="./ccoa.svg" class="mr-3 h-8" alt="DS4A" />
        <img src="./ccoa-logo.png" class="mr-3 h-8" alt="CCOA" />
      </router-link>
<!--      <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">-->
<!--        <li>-->
<!--          <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <a href="#" class="hover:underline">Contact</a>-->
<!--        </li>-->
<!--      </ul>-->
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
  </footer>
</template>
<script>
export default {
  name: 'Footer',
}
</script>