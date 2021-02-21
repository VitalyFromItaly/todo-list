<template>
  <div id="app">
    <Wrapper />
  </div>
</template>

<script>
import Wrapper from './components/Wrapper'
export default {
  name: 'App',
  metaInfo: {
    link: [
      {
        rel:"manifest", href: '/site.webmanifest'
      },
    ],
    meta: [
      {
        name: 'mobile-web-app-capable', content:'yes'
      },
      {
        name: 'apple-mobile-web-app-capable', content:'yes'
      },
      {
        name: 'apple-mobile-web-app-title', content:'Beta'
      }
    ]
  },
  components: { 
    Wrapper
  }
}
</script>




