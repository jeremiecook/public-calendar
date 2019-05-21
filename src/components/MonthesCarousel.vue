<template>
    <div id="monthes-carousel">
        <carousel
          :dots="false"
          :stagePadding="100"
          :rewind="false"
          :responsive="{0:{items:1,nav:false},600:{items:3,nav:true}}">
            <month
              :eventCategories="eventCategories"
              :events="events"
              ref="calendar"
            />
            <month
              :eventCategories="eventCategories"
              :events="events"
              ref="calendar"
            />
            <month
              :eventCategories="eventCategories"
              :events="events"
              ref="calendar"
            />
            <month
              :eventCategories="eventCategories"
              :events="events"
              ref="calendar"
            />
            <month
              :eventCategories="eventCategories"
              :events="events"
              ref="calendar"
            />
        </carousel>
    </div>
</template>

<script>
import Month from './Month'
import Carousel from 'vue-owl-carousel'

export default {
  name: 'MonthesCarousel',

  components: {
    Carousel, Month
  }
}
</script>
