<template>
    <div class="month">
        <calendar
          :firstDayOfWeek="2"
          :eventCategories="eventCategories"
          :events="events"
          :initialDate="initialDate"
          ref="calendar"
        />
        <div class="legend">
            <ul >
                <li v-for="(event,index) in events"
              :key="index"><span class="color" :style="getColor(event)"></span>{{ event.title }}</li>
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

    .header .month {
    font-weight: 400;
    font-size: 1.2em;
    color: #404040;
    text-align: center;
    margin-bottom: 1em;
    }
}

.legend {
    li {
        margin: 0;
        list-style: none;
        font-weight: 600;
        font-size: .8em;
        color: #404040;
    }


    .color {
        display: inline-block;
        width: 20px;
        height: 20px;
        background: Red;
        border-radius: 50%;
        line-height: 20px;
        margin-right: 10px;
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
          title: 'Purple',
          textColor: 'white',
          backgroundColor: '#7C6AF2'
        },
        {
          id: 2,
          title: 'Yellow',
          textColor: 'white',
          backgroundColor: '#F2CF6A'
        },
        {
          id: 3,
          title: 'Pink',
          textColor: 'white',
          backgroundColor: '#E86AAB'
        },
        {
          id: 4,
          title: 'Blue',
          textColor: 'white',
          backgroundColor: '#6ACBF2'
        },
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
  props: {
    initialDate: {
      type: String,
      default: null
    },
  },
  methods: {
    goToday() {
      this.$refs.calendar.goToday()
    },

    getColor(event) {
        let style = {}
        Object.assign(style, {
            backgroundColor: this.eventCategories[event.categoryId].backgroundColor,
          });

        return style;
    },
  },
  components: {
    Calendar
  }
}
</script>
