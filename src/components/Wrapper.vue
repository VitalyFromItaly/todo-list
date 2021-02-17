<template>
  <div id="wrapper" class="text-gray-600 dark:text-gray-300 subpixel-antialiased flex flex-col min-h-screen ">
      <VHeader />
      <Todos class="flex-grow md:px-56 lg:px-80"/>
      <VFooter />
  </div>
</template>

<script>
import VHeader from './VHeader'
import Todos from './Todos'
import VFooter from './VFooter'
export default {
components: {
    VFooter, Todos, VHeader
}
}
</script>

<style>

</style>