<template>
    <div class="month">
        <calendar
          :firstDayOfWeek="2"
          :eventCategories="colors"
          :events="events"
          :initialDate="initialDate"
          ref="calendar"
        />
        <div class="legend">
            <ul >
                <li v-for="(event,index) in legend"
              :key="index"><span class="color" :style="getColor(event)"></span>{{ event.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>

import DateTime from '../DateTime.js'
import Calendar from './Calendar'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default {
  name: 'Month',

  data() {
    return {
      colors: [
        {
          id: 1,
          title: 'Grey',
          textColor: 'white',
          backgroundColor: '#DEDEDE'
        },
        {
          id: 2,
          title: 'Purple',
          textColor: 'white',
          backgroundColor: '#7C6AF2'
        },
        {
          id: 3,
          title: 'Yellow',
          textColor: 'white',
          backgroundColor: '#F2CF6A'
        },
        {
          id: 4,
          title: 'Pink',
          textColor: 'white',
          backgroundColor: '#E86AAB'
        },
        {
          id: 5,
          title: 'Blue',
          textColor: 'white',
          backgroundColor: '#6ACBF2'
        },
      ],
    }
  },

  computed: {
    legend () {
        //var events = [];
        var legend = [];
        var thisMonth = new DateTime (this.initialDate);

        for (let i = 0; i < this.events.length; i++) {

            event = this.events[i];

            // Seulement pour les évènements du mois
            if (! thisMonth.happenThisMonth(event)) continue;

            var found = 0;
            for (let j = 0; j < legend.length; j++) {
                //console.log(legend);
                if (legend[j].title.indexOf(event.title) != -1) {
                    this.events[i].categoryId = legend[j].categoryId;
                    found = 1;
                }
            }

            if (found === 0) {
                event.categoryId = legend.length + 2;
                legend.push(event);
            }

            //events.push(event);
        }

        // Les vacances en gris
        for (let i = 0; i < legend.length; i++) {
            if (legend[i].title.search('Vacances') > -1)
                legend[i].categoryId = 1;
        }

        return legend;
    },

    // legend () {
    //     var legend = [];
    //     for (let item of this.eventsThisMonth) {
    //         if (-1 === this.legend.indexOf(item.summary)) {
    //             legend.push(item.summary);
    //         }
    //     }
    // }
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
            backgroundColor: this.colors[event.categoryId - 1].backgroundColor,
          });

        return style;
    },
  },
  components: {
    Calendar
  }
};
</script>

<style lang="sass">

#sweetCalendar

    margin: 1em

    .body
        background: #FFF
        border-radius: 10px

    .left-arrow, .right-arrow
        display: none

    .header .month
        font-weight: 400
        font-size: 1.2em
        color: #404040
        text-align: center
        margin-bottom: 1em

.legend

    margin-left: 3em

    li
        margin: 0
        list-style: none
        font-weight: 600
        font-size: .8em
        color: #404040
        line-height: 1.8em
        position: relative

    .color
        display: inline-block
        position: absolute
        left: -25px
        width: 15px
        height: 15px
        background: Red
        border-radius: 50%
        line-height: 1.8em
        margin-right: 10px
        margin-top: 4px

</style>
