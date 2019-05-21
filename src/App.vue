<template>
  <div id="calendars">
    <carousel :stagePadding="100">
        <calendar
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
        <calendar
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
        <calendar
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
        <calendar
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
        <calendar
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
    </carousel>
  </div>
</template>

<script>
// Importing Component and style
import Carousel from 'vue-owl-carousel'
import { Calendar } from 'vue-sweet-calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default {
  name: 'PublicCalendar',
  data() {
    return {
      eventCategories: [
        {
          id: 1,
          title: 'Personal',
          textColor: 'white',
          backgroundColor: 'Blue'
        },
        {
          id: 2,
          title: 'Company-wide',
          textColor: 'white',
          backgroundColor: 'red'
        }
      ],
      events: [
        {
          title: 'Event 1',
          start: '2019-04-02',
          end: '2019-04-04',
          repeat: 'monthly',
          categoryId: 1
        },
        {
          title: 'Event 2',
          start: '2019-04-08',
          end: '2019-04-09',
          repeat: 'yearly',
          categoryId: 1
        },
        {
          title: 'Event 3',
          start: '2019-04-10',
          end: '2019-04-11',
          repeat: 'never',
          categoryId: 2
        },
        {
          title: 'Event 4',
          start: '2019-04-23',
          end: '2019-04-23',
          repeat: 'monthly',
          categoryId: 2
        }
      ]
    }
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday()
    }
  },
  components: {
    Calendar, Carousel // Registering Component
  }
}
</script>
