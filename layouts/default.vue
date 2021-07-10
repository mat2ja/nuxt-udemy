<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <Nuxt />
  </div>
</template>

<script>
import TheHeader from '@/components/navigation/TheHeader.vue'
import TheSidenav from '@/components/navigation/TheSidenav.vue'

export default {
  components: {
    TheHeader,
    TheSidenav
  },
  // middleware: 'log',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>
