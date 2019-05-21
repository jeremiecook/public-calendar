<template>
    <div class="month">
        <calendar
          :firstDayOfWeek="2"
          :eventCategories="eventCategories"
          :events="events"
          ref="calendar"
        />
        <div class="legend">
            <ul>
                <li>Project 1</li>
                <li>Project 2</li>
                <li>Project 3</li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
#sweetCalendar {

    margin: 1em;

    .body {
    background: #FFF;
    border-radius: 10px;
    }

    .left-arrow, .right-arrow {
        display: none;
    }
}

.day {
    &.off-day {

    }
}
</style>


<script>
import Calendar from './Calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default {
  name: 'Month',
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
    Calendar
  }
}
</script>
