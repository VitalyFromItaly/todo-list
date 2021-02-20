<template>
  <div id="wrapper" class="text-gray-600 dark:text-gray-300 subpixel-antialiased flex flex-col min-h-screen ">
      <VHeader />
      <Todos class="flex-grow px-12 sm:px-24 md:px-40 lg:px-64"/>
      <VFooter class="px-12 sm:px-24 md:px-40 lg:px-64"/>
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