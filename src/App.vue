<template>
  <div class="public-calendar">
    <h1>Planning & disponibilités</h1>
    <monthes-carousel />
  </div>
</template>

<script>

import MonthesCarousel from './components/MonthesCarousel'

export default {
  name: 'PublicCalendar',

  components: {
    MonthesCarousel
  }
}
</script>
