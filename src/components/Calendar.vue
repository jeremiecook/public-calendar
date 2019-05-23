<template>
  <div id="sweetCalendar">
    <div class="container">
      <div class="header">
        <div class="month">{{ selectedMonthName }}</div>
      </div>
      <div class="body">
        <div
          v-for="(day, index) in weekdays"
          :key="`day-name-${index + 1}`"
          class="day-name"
          :title="day"
        >
          {{ day.substring(0, 3) }}
        </div>
        <div
          v-for="(day,index) in days"
          :key="index"
          class="day-container"
        >
          <div
            class="before"
            v-if="day"
            :style="generateBeforeStyle(day)"
          >&nbsp;</div>
          <div
            v-if="day"
            :class="[
            'day',
            `day-${day.getDate()},
            weekday-${day.getDay()}`,
            offDays.includes(day.getDay()) ? 'off-day' : null,
            day.toDateString() === today.toDateString() ? 'today' : null
            ]"
            :style="generateDayStyle(day)"
          >
            <span>{{ day.getDate() }}</span>
          </div>
          <div
            class="after"
            v-if="day"
            :style="generateAfterStyle(day)"
          >&nbsp;</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import DateTime from '../DateTime.js'

export default {
  name: 'Calendar',
  data () {
    return {
      today: new DateTime(),
      date: null,
      weekdays: null
    }
  },
  computed: {
    days () {
      let emptyDays = Array((this.startWeekDayOfMonth - this.firstDayOfWeek + 7) % 7).fill(null)
      let days = Array(this.numberOfDays).fill().map((item, index) => new DateTime(this.selectedYear, this.selectedMonth, index + 1))
      return emptyDays.concat(days)
    },
    startWeekDayOfMonth () {
      return this.date.getFirstWeekdayOfMonth()
    },
    numberOfDays () {
      return this.date.getNumberOfDaysInMonth()
    },
    selectedMonth () {
      return this.date.getMonth()
    },
    selectedMonthName () {
      return this.date.getMonthName()
    },
    selectedYear () {
      return this.date.getFullYear()
    }
  },
  methods: {
    prevMonth () {
      this.date = new DateTime(this.selectedYear, this.selectedMonth - 1, 1)
    },
    nextMonth () {
      this.date = new DateTime(this.selectedYear, this.selectedMonth + 1, 1)
    },
    generateWeekdayNames (firstDayOfWeek = 1) {
      let weekdays = [
        'Dimanche',
        'Lundi',
        'Mardi',
        'Mercredi',
        'Jeudi',
        'Vendredi',
        'Samedi'
      ]
      for (let i = 2; i <= firstDayOfWeek; i++) {
        let first = weekdays.shift()
        weekdays.push(first)
      }
      return weekdays
    },
    generateDayStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            color: category.id ? category.textColor : null,
            backgroundColor: category.id ? category.backgroundColor : null,
            fontWeight: category.id ? 'bold' : 'normal'
          })
        }
      }
      return style
    },
    generateBeforeStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat) && date.getPrevDay().isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            backgroundColor: category.backgroundColor
          })
        }
      }
      return style
    },
    generateAfterStyle (date) {
      let style = {}
      for (let event of this.events) {
        if (date.isInRange(event.start, event.end, event.repeat) && date.getNextDay().isInRange(event.start, event.end, event.repeat)) {
          let category = this.eventCategories.find(item => item.id === event.categoryId) || {}
          Object.assign(style, {
            backgroundColor: category.backgroundColor
          })
        }
      }
      return style
    },
    goToday () {
      this.date = this.today
    }
  },
  props: {
    initialDate: {
      type: String,
      default: null
    },
    firstDayOfWeek: {
      type: Number,
      default: 1 // 1: Sunday, 2: Monday, etc
    },
    eventCategories: {
      type: Array,
      default () {
        return []
      }
    },
    events: {
      type: Array,
      default () {
        return []
      }
    },
    offDays: {
      type: Array,
      default () {
        return [1, 7]
      }
    }
  },
  beforeMount () {
    this.date = Date.parse(this.initialDate) ? new DateTime(this.initialDate) : new DateTime()
    this.weekdays = this.generateWeekdayNames(this.firstDayOfWeek)
  }
}
</script>

<style lang="sass" scoped>

$off-day-background-color: transparent
$today-color: #008290
$day-color: #595959
$week-day-name-color: #595959
$light-color: #FFF

#sweetCalendar

  .container
    display: grid
    grid-template-rows: 40px 1fr

    .header
      align-items: center

      .month
        justify-self: center

      .left-arrow
        justify-self: end

        span
          cursor: pointer

      .right-arrow
        justify-self: start

        span
          cursor: pointer

    .body
      align-items: center
      display: grid
      grid-row-gap: 8px
      grid-template-columns: repeat(7, 1fr)
      grid-template-rows: repeat(7, 1fr)
      justify-items: center
      padding: 1.5em .8em .8em
      position: relative

      &:before
        content: "";
        display: block;
        width: 31%;
        height: 100%;
        position: absolute;
        background: #D8D8D8;
        right: 0;
        opacity: .15
        border-radius: 0 10px 10px 0;

      .day-name
        color: $week-day-name-color
        font-size: .7em
        font-weight: 600

      .day-container
        display: grid
        grid-auto-columns: 1fr 1fr
        grid-auto-flow: column
        position: relative
        width: 100%

        .before
          height: 28px

        .after
          height: 28px

        .day
          align-content: center
          background-color: $light-color
          border-radius: 50%
          box-sizing: content-box
          color: $day-color
          display: grid
          height: 8px
          justify-content: center
          left: 50%
          padding: 10px
          position: absolute
          top: 50%
          font-weight: 500
          transform: translate(-50%, -50%)
          width: 8px

          &.today
            border: 2px solid $today-color
            color: $today-color

          &.off-day
            background-color: $off-day-background-color
            font-weight: normal
            color: #A6A6A6;

          span
            font-size: .7em
            margin: 0
            padding: 0
            width: fit-content
</style>
