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
    }
  },
  props: {
    initialDate: {
      type: String,
      default: null
    },
    events: {
        type: Array,
        default: null
    }
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

    margin-left: 3em;

    li {
        margin: 0;
        list-style: none;
        font-weight: 600;
        font-size: .8em;
        color: #404040;
        line-height: 1.8em;
        position: relative;
    }


    .color {
        display: inline-block;
        position: absolute;
        left: -25px;
        width: 15px;
        height: 15px;
        background: Red;
        border-radius: 50%;
        line-height: 1.8em;
        margin-right: 10px;
        margin-top: 4px;
    }
}

.day {
    &.off-day {

    }
}
</style>
