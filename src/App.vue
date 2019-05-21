<template>
  <div class="public-calendar">
    <h1>Planning & disponibilités</h1>
    <monthes-carousel />
  </div>
</template>

<style lang="scss">
html {
    background: #F5F3F0;
    font-family: "Source Sans Pro";
}
</style>

<script>
import MonthesCarousel from './components/MonthesCarousel'

export default {
  name: 'PublicCalendar',

  components: {
    MonthesCarousel
  }
}
</script>
